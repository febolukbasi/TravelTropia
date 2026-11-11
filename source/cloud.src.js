/* TravelTropia cloud layer – Firebase Auth + Cloud Firestore.
   Bundled to assets/js/cloud.js. Exposes window.TTCloud. */
import { initializeApp } from "firebase/app";
import {
  getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut, sendPasswordResetEmail, updateProfile,
  setPersistence, browserLocalPersistence, browserSessionPersistence, deleteUser
} from "firebase/auth";
import {
  initializeFirestore, doc, getDoc, setDoc, deleteDoc, updateDoc, collection, query, where,
  orderBy, limit, onSnapshot, addDoc, arrayUnion, arrayRemove, runTransaction, getDocs, documentId
} from "firebase/firestore";

let app, auth, db;
const strip = o => JSON.parse(JSON.stringify(o)); // drops undefined, functions

const TTCloud = {
  ready: false,
  init(cfg) {
    app = initializeApp(cfg);
    auth = getAuth(app);
    db = initializeFirestore(app, { ignoreUndefinedProperties: true });
    this.ready = true;
  },
  /* ----- auth ----- */
  onAuth(cb) { return onAuthStateChanged(auth, u => cb(u ? { uid: u.uid, email: u.email, name: u.displayName, photo: u.photoURL, provider: (u.providerData[0] || {}).providerId } : null)); },
  async signUp(email, pw, name, remember) {
    await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
    const c = await createUserWithEmailAndPassword(auth, email, pw);
    if (name) await updateProfile(c.user, { displayName: name });
    return c.user.uid;
  },
  async signIn(email, pw, remember) {
    await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
    return (await signInWithEmailAndPassword(auth, email, pw)).user.uid;
  },
  async google() { await setPersistence(auth, browserLocalPersistence); return (await signInWithPopup(auth, new GoogleAuthProvider())).user.uid; },
  signOut() { return signOut(auth); },
  resetPassword(email) { return sendPasswordResetEmail(auth, email); },

  async deleteAccount(uid, handle, ownedTripIds) {
    const user = auth.currentUser; if (!user || user.uid !== uid) throw new Error("not-signed-in");
    // Firebase only allows deleting a login shortly after signing in – check first so we never delete data but keep the login.
    if (Date.now() - new Date(user.metadata.lastSignInTime).getTime() > 4 * 60 * 1000) { const e = new Error("recent"); e.code = "auth/requires-recent-login"; throw e; }
    const jobs = [deleteDoc(doc(db, "users", uid)), deleteDoc(doc(db, "profiles", uid))];
    if (handle) jobs.push(deleteDoc(doc(db, "handles", handle)));
    (ownedTripIds || []).forEach(id => jobs.push(deleteDoc(doc(db, "trips", id))));
    const fs = await getDocs(query(collection(db, "friendships"), where("members", "array-contains", uid)));
    fs.forEach(d => jobs.push(deleteDoc(d.ref)));
    await Promise.all(jobs);
    await deleteUser(user);
  },
  /* ----- private user data ----- */
  async loadUser(uid) { const s = await getDoc(doc(db, "users", uid)); return s.exists() ? s.data() : null; },
  saveUser(uid, data) { return setDoc(doc(db, "users", uid), strip(data)); },

  /* ----- public profiles & handles ----- */
  saveProfile(uid, p) { return setDoc(doc(db, "profiles", uid), strip(p), { merge: true }); },
  async getProfiles(uids) {
    const out = {}; const ids = [...new Set(uids)].filter(Boolean);
    for (let i = 0; i < ids.length; i += 10) {
      const snap = await getDocs(query(collection(db, "profiles"), where(documentId(), "in", ids.slice(i, i + 10))));
      snap.forEach(d => { out[d.id] = d.data(); });
    }
    return out;
  },
  async claimHandle(uid, handle, old) {
    const ref = doc(db, "handles", handle);
    await runTransaction(db, async tx => {
      const s = await tx.get(ref);
      if (s.exists() && s.data().uid !== uid) throw new Error("taken");
      tx.set(ref, { uid });
      if (old && old !== handle) tx.delete(doc(db, "handles", old));
    });
  },
  async findHandle(handle) {
    const s = await getDoc(doc(db, "handles", handle)); if (!s.exists()) return null;
    const uid = s.data().uid; const p = await getDoc(doc(db, "profiles", uid));
    return p.exists() ? Object.assign({ uid }, p.data()) : { uid };
  },

  /* ----- trips (shared, real-time) ----- */
  watchTrips(uid, cb, err) {
    return onSnapshot(query(collection(db, "trips"), where("members", "array-contains", uid)),
      snap => cb(snap.docs.map(d => Object.assign({}, d.data(), { id: d.id })), snap.metadata.hasPendingWrites), err);
  },
  saveTrip(t) { return setDoc(doc(db, "trips", t.id), strip(t)); },
  deleteTrip(id) { return deleteDoc(doc(db, "trips", id)); },
  leaveTrip(id, uid) { return updateDoc(doc(db, "trips", id), { members: arrayRemove(uid) }); },
  async getTrip(id) { const s = await getDoc(doc(db, "trips", id)); return s.exists() ? Object.assign({}, s.data(), { id: s.id }) : null; },
  watchMessages(tripId, cb, err) {
    return onSnapshot(query(collection(db, "trips", tripId, "messages"), orderBy("at", "asc"), limit(300)),
      snap => cb(snap.docs.map(d => Object.assign({ id: d.id }, d.data()))), err);
  },
  sendMessage(tripId, m) { return addDoc(collection(db, "trips", tripId, "messages"), strip(m)); },

  /* ----- friends ----- */
  watchFriendships(uid, cb, err) {
    return onSnapshot(query(collection(db, "friendships"), where("members", "array-contains", uid)),
      snap => cb(snap.docs.map(d => Object.assign({ id: d.id }, d.data()))), err);
  },
  requestFriend(uid, other) {
    const id = [uid, other].sort().join("_");
    return setDoc(doc(db, "friendships", id), { members: [uid, other].sort(), requester: uid, status: "pending", at: Date.now() });
  },
  acceptFriend(id) { return updateDoc(doc(db, "friendships", id), { status: "accepted", at: Date.now() }); },
  removeFriend(id) { return deleteDoc(doc(db, "friendships", id)); },

  /* ----- meet-ups ----- */
  watchMeetups(cb, err) { return onSnapshot(query(collection(db, "meetups"), orderBy("date", "asc"), limit(300)), snap => cb(snap.docs.map(d => Object.assign({ id: d.id }, d.data()))), err); },
  saveMeetup(id, data) { return setDoc(doc(db, "meetups", id), strip(data)); },
  deleteMeetup(id) { return deleteDoc(doc(db, "meetups", id)); },
  setAttendees(id, list) { return updateDoc(doc(db, "meetups", id), { attendees: strip(list) }); },
  joinMeetup(id, att, join) { return updateDoc(doc(db, "meetups", id), { attendees: join ? arrayUnion(att) : arrayRemove(att) }); },

  /* ----- daily trivia leaderboard ----- */
  submitTrivia(date, uid, rec) { return setDoc(doc(db, "trivia", date, "scores", uid), strip(rec)); },
  watchTrivia(date, cb, err) { return onSnapshot(query(collection(db, "trivia", date, "scores"), orderBy("score", "desc"), limit(50)), snap => cb(snap.docs.map(d => Object.assign({ uid: d.id }, d.data()))), err); }
};
window.TTCloud = TTCloud;
window.dispatchEvent(new Event("ttcloud-loaded"));
