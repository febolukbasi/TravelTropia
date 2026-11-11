/* TravelTropia – app */
const _uid=()=>Math.random().toString(36).slice(2,10);
/* ---------- Icons ---------- */
const IC={
home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
suitcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
passport:'<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 16h6"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18"/>',
plus:'<path d="M12 5v14M5 12h14"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
trash:'<path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13"/><path d="M9 7V4h6v3"/>',
edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',check:'<path d="m5 12 5 5 9-10"/>',x:'<path d="M6 6l12 12M18 6 6 18"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
wallet:'<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18"/><circle cx="16.5" cy="15" r="1.2"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
pin:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
heart:'<path d="M12 20s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.3-8 11-8 11z"/>',
sparkles:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
download:'<path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/>',upload:'<path d="M12 20V9"/><path d="m7 14 5-5 5 5"/><path d="M5 4h14"/>',
settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',up:'<path d="m6 15 6-6 6 6"/>',down:'<path d="m6 9 6 6 6-6"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',plane:'<path d="M3 12.5 21 4l-5 17-4-6.5z"/><path d="m12 14.5 4-4"/>',
flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',list:'<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
printer:'<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
note:'<path d="M5 3h10l4 4v14H5z"/><path d="M14 3v5h5M8 13h8M8 17h5"/>',
lug:'<rect x="6" y="6" width="12" height="15" rx="2"/><path d="M9 6V3h6v3M10 10v7M14 10v7"/>',
undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
shield:'<path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
coffee:'<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3"/>',
bed:'<path d="M3 18V6M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10" r="1.6"/>',
target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/>',
userplus:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6"/>',
dice:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01M15 15h.01M15 9h.01M9 15h.01M12 12h.01"/>'
};
const ic=(n,c)=>`<svg class="ico ${c||""}" viewBox="0 0 24 24">${IC[n]||""}</svg>`;

/* ---------- Illustrated scenes ---------- */
const SC={city:["#BFE3F5","#E6F4EC"],outdoors:["#BFE3F5","#DDF1E5"],beach:["#BCE2F7","#FDF0D8"],ski:["#CFE6F7","#F4FAFD"],culture:["#F9E3CC","#E8F2EA"],food:["#F7DCD4","#F3EFE2"],roadtrip:["#C8E5F5","#E9F5E3"],family:["#D9ECFA","#FCEFD9"],romantic:["#F8D9DF","#FCE9D4"],backpacker:["#CDE7DF","#EDF5E6"],wellness:["#DCEFE6","#EEF6F9"],custom:["#C9E8D7","#C9E1F4"],bare:["#E8EEF1","#F5F8F7"]};
function scene(id,h){
  const [a,b]=SC[id]||SC.custom, g="g"+_uid();
  let art="";
  const sun=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c||"#FFE3A3"}"/>`;
  switch(id){
  case "city": art=sun(250,40,18)+[[20,60,28],[52,40,22],[78,70,26],[108,30,24],[136,55,30],[170,45,20],[194,25,26],[224,62,24],[252,50,28],[284,72,30]].map(([x,y,w],i)=>`<rect x="${x}" y="${y}" width="${w}" height="${140-y}" rx="3" fill="${i%2?"#8FC3E0":"#7FBFA0"}" opacity="${.75+.05*(i%3)}"/>`+Array.from({length:Math.floor((140-y)/16)},(_,k)=>`<rect x="${x+6}" y="${y+8+k*16}" width="${w-12}" height="5" rx="1" fill="#fff" opacity=".45"/>`).join("")).join(""); break;
  case "outdoors": art=sun(70,38,16)+`<path d="M0 140 L70 60 L120 110 L180 40 L250 115 L290 75 L320 100 L320 140Z" fill="#8CC9A6"/><path d="M180 40 L166 56 L174 54 L180 60 L188 53 L194 56Z" fill="#fff"/><path d="M70 60 L60 72 L70 70 L78 74Z" fill="#fff"/><path d="M0 140 L0 118 Q80 100 160 120 T320 112 L320 140Z" fill="#6DB48D"/>`+[30,52,250,272,296].map((x,i)=>`<path d="M${x} ${128-i%2*4} l9 -26 l9 26z" fill="#4F9C76"/>`).join(""); break;
  case "beach": art=sun(240,46,22,"#FFD58A")+`<path d="M0 88 Q40 82 80 88 T160 88 T240 88 T320 88 V140 H0Z" fill="#8CCBEA"/><path d="M0 100 Q40 94 80 100 T160 100 T240 100 T320 100" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/><path d="M0 140 Q120 104 320 120 V140Z" fill="#F6DDAF"/><path d="M70 126 Q76 90 92 64" stroke="#B98B5E" stroke-width="5" fill="none" stroke-linecap="round"/><g fill="#6DB48D"><path d="M92 64 q-26 -6 -36 10 q20 -10 36 -10"/><path d="M92 64 q22 -14 38 -2 q-22 -6 -38 2"/><path d="M92 64 q-6 -22 -24 -24 q16 10 24 24"/><path d="M92 64 q18 4 24 22 q-10 -14 -24 -22"/></g>`; break;
  case "ski": art=sun(60,36,14,"#FFE9B8")+`<path d="M0 140 L90 50 L150 100 L220 30 L320 120 V140Z" fill="#E9F3FA"/><path d="M90 50 L150 100 L220 30" stroke="#B5D3EA" stroke-width="2" fill="none"/><path d="M0 140 Q120 90 320 130 V140Z" fill="#fff"/><path d="M160 112 q30 -14 60 -6" stroke="#79B8E3" stroke-width="3" fill="none" stroke-linecap="round"/>`+[[40,20],[130,30],[260,60],[300,20],[200,80]].map(([x,y])=>`<text x="${x}" y="${y}" font-size="12" fill="#8FC0E2">❄</text>`).join("")+[250,276].map(x=>`<path d="M${x} 126 l8 -22 l8 22z" fill="#5EA683"/>`).join(""); break;
  case "culture": art=sun(260,40,16,"#FFD8A8")+`<path d="M90 56 L160 30 L230 56Z" fill="#E8C9A6"/><rect x="92" y="56" width="136" height="8" fill="#DDB892"/>`+[100,124,148,172,196,214].map(x=>`<rect x="${x}" y="66" width="10" height="56" fill="#F2DFC8"/>`).join("")+`<rect x="84" y="122" width="152" height="8" fill="#DDB892"/><path d="M0 140 V130 H320 V140Z" fill="#9CCFAF"/>`; break;
  case "food": art=`<circle cx="110" cy="92" r="40" fill="#fff" opacity=".9"/><circle cx="110" cy="92" r="28" fill="#F3E3D0"/><circle cx="100" cy="86" r="7" fill="#E07A5F"/><circle cx="118" cy="98" r="6" fill="#7FBFA0"/><circle cx="116" cy="82" r="4" fill="#F2C14E"/><path d="M210 40 h30 q0 32 -15 36 q-15 -4 -15 -36z" fill="#C25B6E" opacity=".85"/><path d="M225 76 v36 M212 114 h26" stroke="#9AA9B2" stroke-width="3"/>`+[[260,60],[268,70],[276,60],[268,50],[284,70]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="#8E6BB5" opacity=".8"/>`).join(""); break;
  case "roadtrip": art=sun(260,38,16)+`<path d="M0 100 Q80 70 160 92 T320 80 V140 H0Z" fill="#9DD2B3"/><path d="M120 140 Q150 110 180 100 T240 84" stroke="#7D8C93" stroke-width="16" fill="none"/><path d="M120 140 Q150 110 180 100 T240 84" stroke="#fff" stroke-width="2" stroke-dasharray="7 7" fill="none"/><rect x="150" y="96" width="34" height="14" rx="4" fill="#E78F6A" transform="rotate(-18 167 103)"/><circle cx="156" cy="112" r="4" fill="#33454F"/><circle cx="178" cy="104" r="4" fill="#33454F"/>`; break;
  case "family": art=`<circle cx="210" cy="70" r="46" fill="none" stroke="#E7A27B" stroke-width="4"/>`+Array.from({length:8},(_,i)=>{const t=i*Math.PI/4;return `<line x1="210" y1="70" x2="${210+46*Math.cos(t)}" y2="${70+46*Math.sin(t)}" stroke="#E7A27B" stroke-width="2"/><circle cx="${210+46*Math.cos(t)}" cy="${70+46*Math.sin(t)}" r="7" fill="${["#7FBFA0","#79B8E3","#F2C14E","#E07A5F"][i%4]}"/>`;}).join("")+`<path d="M190 140 L210 70 L230 140" stroke="#C98763" stroke-width="4" fill="none"/><circle cx="70" cy="60" r="16" fill="#F7B98B"/><path d="M70 76 v30" stroke="#9AA9B2"/><circle cx="100" cy="50" r="14" fill="#94C8EC"/><path d="M100 64 v40" stroke="#9AA9B2"/><path d="M0 140 V128 H320 V140Z" fill="#9CCFAF"/>`; break;
  case "romantic": art=sun(160,90,30,"#F9C6A0")+`<path d="M0 92 H320 V140 H0Z" fill="#C9B6DE" opacity=".7"/><path d="M40 104 h60 M200 112 h70 M120 122 h80" stroke="#fff" stroke-width="2" opacity=".6"/>`+[[60,40,1],[250,34,1.3],[220,64,.8]].map(([x,y,s])=>`<path transform="translate(${x} ${y}) scale(${s})" d="M0 6 C-8 -4 -16 4 0 16 C16 4 8 -4 0 6Z" fill="#E86A86" opacity=".85"/>`).join(""); break;
  case "backpacker": art=sun(250,36,14)+`<path d="M0 140 L60 80 L110 120 L170 60 L240 120 L320 70 V140Z" fill="#9DD2B3"/><path d="M130 140 L170 92 L210 140Z" fill="#E78F6A"/><path d="M170 92 L170 140" stroke="#fff" stroke-width="2"/><rect x="60" y="96" width="28" height="36" rx="8" fill="#5E8FB0"/><rect x="66" y="106" width="16" height="10" rx="3" fill="#79B8E3"/>`; break;
  case "wellness": art=sun(250,40,16,"#FFE7BA")+`<ellipse cx="160" cy="124" rx="40" ry="10" fill="#9AB8A9"/><ellipse cx="160" cy="108" rx="30" ry="9" fill="#B6CFC2"/><ellipse cx="160" cy="94" rx="20" ry="7" fill="#CFE2D8"/><ellipse cx="160" cy="83" rx="12" ry="5" fill="#E2EEE8"/>`+[-1,1].map(s=>`<path d="M${160+s*60} 128 q${s*10} -36 ${s*36} -40 q${-s*6} 26 ${-s*36} 40" fill="#7FBFA0"/>`).join(""); break;
  case "bare": art=`<path d="M30 112 C90 60 150 70 200 50 S270 40 290 36" stroke="#9FB7C4" stroke-width="1.5" stroke-dasharray="4 5" fill="none"/><path d="M276 30l16-6-6 15-4-5z" fill="#5E8FB0"/><rect x="40" y="96" width="90" height="26" rx="6" fill="#B9DCF2"/><rect x="40" y="84" width="30" height="16" rx="5" fill="#fff"/><rect x="36" y="120" width="98" height="6" rx="3" fill="#8FB3C7"/><rect x="150" y="92" width="34" height="30" rx="6" fill="#A8DCC0"/><rect x="160" y="84" width="14" height="10" rx="3" fill="none" stroke="#7FBFA0" stroke-width="3"/><path d="M0 140 V128 H320 V140Z" fill="#DCE7E4"/>`;break;
  default: art=`<path d="M40 110 C90 40 150 120 200 60 S280 50 290 40" stroke="#2F7F79" stroke-width="3" stroke-dasharray="6 6" fill="none"/>`+[[40,110],[200,60],[290,40]].map(([x,y])=>`<g transform="translate(${x} ${y})"><path d="M0 0 c-10 -12 -10 -22 0 -26 c10 4 10 14 0 26z" fill="#E07A5F"/><circle cy="-16" r="4" fill="#fff"/></g>`).join("")+`<circle cx="120" cy="34" r="12" fill="#fff" opacity=".7"/>`;
  }
  return `<svg class="scene" viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" style="${h?`height:${h}px`:""}"><defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="320" height="140" fill="url(#${g})"/>${art}</svg>`;
}
const LOGO=(s=36)=>`<svg width="${s}" height="${s}" viewBox="0 0 48 48"><defs><linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9ED8B8"/><stop offset="1" stop-color="#8CC6EC"/></linearGradient></defs><circle cx="24" cy="24" r="20" fill="url(#lg1)"/><path d="M12 18c4-2 7 1 9 4s0 6 3 7 4 4 2 7M30 9c-1 3 1 5 4 5s4 3 3 6" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".9"/><ellipse cx="24" cy="24" rx="23" ry="9" transform="rotate(-25 24 24)" stroke="#2F7F79" stroke-width="1.6" fill="none" stroke-dasharray="3 3"/><path d="M40 12l5-1-2 5-1.4-1.6z" fill="#2F7F79"/></svg>`;



/* ================= TravelTropia v2 ================= */
(function(){
"use strict";

/* ---------- Countries ---------- */
const CTRY={},BY_NUM={};
COUNTRIES.push(["AQ","010","Antarctica","Antarctic","","",-78,0,"","","🇦🇶",0,"Antarctica"]);
COUNTRIES.forEach(c=>{const o={cc:c[0],num:c[1],name:c[2],region:c[3],sub:c[4],capital:c[5],lat:c[6],lng:c[7],cur:c[8],lang:c[9],flag:c[10],sov:!!c[11],short:c[12]||c[2],capLat:c[13],capLng:c[14]};CTRY[o.cc]=o;BY_NUM[o.num]=o;});
const ALL_CC=Object.keys(CTRY).sort((a,b)=>CTRY[a].name.localeCompare(CTRY[b].name));
const WORLD_TOTAL=195;
const MQ_DARK=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;
const sysDark=()=>!!(MQ_DARK&&MQ_DARK.matches);
const curTheme=()=>{const t=(typeof DB!=="undefined"&&DB&&DB.settings&&DB.settings.theme)||"auto";return t==="auto"?(sysDark()?"dark":"light"):t;};
function applyTheme(){document.documentElement.dataset.theme=curTheme();document.querySelectorAll('meta[name="theme-color"]').forEach(mc=>mc.content=curTheme()==="dark"?"#14201F":"#F6F4EE");}
if(MQ_DARK){const fn=()=>{try{if(!ACCOUNT){render();return;}if(DB.settings.theme==="auto")render();}catch(e){}};MQ_DARK.addEventListener?MQ_DARK.addEventListener("change",fn):MQ_DARK.addListener(fn);}
const norm=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const sovCount=()=>DB.visited.filter(cc=>CTRY[cc]&&CTRY[cc].sov).length;
const terrCount=()=>DB.visited.length-sovCount();
const cname=cc=>CTRY[cc]?CTRY[cc].name:cc;
const flag=cc=>CTRY[cc]?CTRY[cc].flag:"🏳️";
const continentOf=cc=>{const c=CTRY[cc];if(!c)return "Other";if(c.region==="Antarctic")return "Antarctica";if(c.region==="Americas")return /South/.test(c.sub)?"South America":"North America";return c.region;};
const CONTINENTS=["Europe","Asia","Africa","North America","South America","Oceania","Antarctica"];
const CONT_TOTAL={};ALL_CC.forEach(cc=>{const k=continentOf(cc);CONT_TOTAL[k]=(CONT_TOTAL[k]||0)+1;});
const CONT_EMOJI={"Europe":"🏰","Asia":"🏯","Africa":"🦁","North America":"🗽","South America":"🦙","Oceania":"🐨","Antarctica":"🐧"};

/* ---------- Storage ---------- */
/* Google sign-in: paste an OAuth Client ID here (see README.txt) and host the folder on a website. */
const GOOGLE_CLIENT_ID="";
const ACC_KEY="traveltropia.accounts",SES_KEY="traveltropia.session";
let KEY="traveltropia.v1",ACCOUNT=null;
const mkStore=st=>({get(k){try{return st().getItem(k);}catch(e){return null;}},set(k,v){try{st().setItem(k,v);return true;}catch(e){return false;}},del(k){try{st().removeItem(k);}catch(e){}}});
const LS=mkStore(()=>localStorage),SS=mkStore(()=>sessionStorage);
const DEFAULT_DB=()=>({profile:{name:"Traveler",home:"NL",homeCity:"Amsterdam",passport:"NL",passports:["NL"],age:30,avatar:"🧭",photo:""},friends:[],visited:[],wishlist:[],trips:[],meetups:[],joined:[],trivia:{},settings:{theme:"auto",themeV:2,currency:"€",units:"km",autoWish:true,pp:false},seen:false});
let DB=DEFAULT_DB();
function normalize(){const d=DEFAULT_DB();DB=Object.assign(d,DB);const hadV=DB.settings&&DB.settings.themeV;DB.settings=Object.assign(d.settings,DB.settings||{});if(!hadV){if(DB.settings.theme!=="dark")DB.settings.theme="auto";DB.settings.themeV=2;}DB.profile=Object.assign(d.profile,DB.profile||{});["friends","visited","wishlist","trips","meetups","joined"].forEach(k=>{if(!Array.isArray(DB[k]))DB[k]=[];});if(!DB.trivia||typeof DB.trivia!=="object")DB.trivia={};
  const pr=DB.profile;if(!Array.isArray(pr.passports)||!pr.passports.length)pr.passports=[pr.passport||pr.home||"NL"];pr.passport=pr.passports[0];
  DB.friends.forEach(f=>{if(!Array.isArray(f.passports)||!f.passports.length)f.passports=[f.passport||pr.passport];f.passport=f.passports[0];});
  DB.trips.forEach(migrateTrip);}
let saveT,storageOK=true;
function save(){clearTimeout(saveT);saveT=setTimeout(()=>{saveT=null;storageOK=LS.set(KEY,JSON.stringify(DB));if(isCloud())cloudFlush();},isCloud()?600:150);}
function accounts(){try{return JSON.parse(LS.get(ACC_KEY))||[];}catch(e){return [];}}
function saveAccounts(a){LS.set(ACC_KEY,JSON.stringify(a));}
const keyFor=id=>id==="guest"?"traveltropia.v1":"traveltropia.acct."+id;
const GUEST={id:"guest",name:"Guest",provider:"guest"};
function openAccount(acc,remember){
  ACCOUNT=acc;KEY=keyFor(acc.id);
  try{DB=JSON.parse(LS.get(KEY))||DEFAULT_DB();}catch(e){DB=DEFAULT_DB();}
  if(!DB.seen&&acc.name&&acc.id!=="guest"){DB.profile=Object.assign(DEFAULT_DB().profile,DB.profile||{});DB.profile.name=acc.name;}
  if(acc.photo&&DB.profile&&!DB.profile.photo)DB.profile.photo=acc.photo;
  normalize();const ses=JSON.stringify({id:acc.id});SS.set(SES_KEY,ses);if(remember)LS.set(SES_KEY,ses);else LS.del(SES_KEY);
  S.plan=newPlan();S.view="home";save();
}
function logout(){if(isCloud()){clearTimeout(saveT);saveT=null;cloudFlush();closeModal();CL.api.signOut();return;}clearTimeout(saveT);LS.set(KEY,JSON.stringify(DB));LS.del(SES_KEY);SS.del(SES_KEY);ACCOUNT=null;S.auth="login";closeModal();render();}
async function hashPw(pw,salt,method){
  if((method||"p2")==="p2"&&window.crypto&&crypto.subtle){try{const te=new TextEncoder();const k=await crypto.subtle.importKey("raw",te.encode(pw),"PBKDF2",false,["deriveBits"]);const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt:te.encode(salt),iterations:150000,hash:"SHA-256"},k,256);return "p2:"+[...new Uint8Array(bits)].map(b=>b.toString(16).padStart(2,"0")).join("");}catch(e){}}
  let h=2166136261>>>0;const x=salt+"|"+pw;for(let r=0;r<5000;r++)for(let i=0;i<x.length;i++){h^=x.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}return "f1:"+h.toString(16);
}

/* ---------- Utils ---------- */
const $=s=>document.querySelector(s);
const uid=()=>Math.random().toString(36).slice(2,10);
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const money=v=>fmtCur(toCur(v));
const dist=(a,b)=>{const R=6371,t=Math.PI/180,dLa=(b.lat-a.lat)*t,dLo=(b.lng-a.lng)*t;const x=Math.sin(dLa/2)**2+Math.cos(a.lat*t)*Math.cos(b.lat*t)*Math.sin(dLo/2)**2;return 2*R*Math.asin(Math.sqrt(x));};
const fmtDist=km=>DB.settings.units==="mi"?Math.round(km*0.621).toLocaleString()+" mi":Math.round(km).toLocaleString()+" km";
const parseD=s=>{if(!s)return null;const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d);};
const isoD=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const addDays=(s,n)=>{const d=parseD(s);if(!d)return null;d.setDate(d.getDate()+n);return isoD(d);};
const diffDays=(a,b)=>Math.round((parseD(b)-parseD(a))/864e5);
const fmtD=(s,o)=>{const d=parseD(s);return d?d.toLocaleDateString("en-GB",o||{day:"numeric",month:"short",year:"numeric"}):"";};
const today=()=>isoD(new Date());
const daysUntil=s=>{const d=parseD(s);if(!d)return null;return Math.round((d-parseD(today()))/864e5);};
const plural=(n,w,p)=>n+" "+(n===1?w:(p||w+"s"));
const dn=n=>`${plural(n,"day")} · ${plural(Math.max(0,n-1),"night")}`;
const enc=encodeURIComponent;
const cityQ=n=>String(n||"").replace(/\s*\(.*?\)/g,"");
const pick=(arr,n)=>arr.slice().sort(()=>Math.random()-.5).slice(0,n);

/* ---------- People ---------- */
const meP=()=>({id:"me",me:true,uid:isCloud()?CL.uid:undefined,name:DB.profile.name||"You",age:+DB.profile.age||30,passport:DB.profile.passports[0],passports:DB.profile.passports.slice()});
const friendP=f=>({id:f.id,friendId:f.id,name:f.name,age:+f.age||30,passport:(f.passports||[f.passport])[0],passports:(f.passports||[f.passport]).slice()});
const ppOf=p=>p.passports&&p.passports.length?p.passports:[p.passport||DB.profile.passport];
const ppFlags=p=>ppOf(p).map(flag).join(" ");
const isMe=p=>!!p&&(isCloud()?(p.uid?p.uid===CL.uid:!!p.me):!!p.me);
function personLook(p){ if(p.uid&&!isMe(p)){const pr=CL.profiles[p.uid]||{};return {photo:pr.photo||"",avatar:pr.avatar||"",name:pr.name||p.name||"Traveller"};} if(isMe(p)) return {photo:DB.profile.photo,avatar:DB.profile.avatar,name:DB.profile.name}; if(p.friendId){const f=DB.friends.find(x=>x.id===p.friendId); if(f) return {photo:f.photo,avatar:f.avatar,name:f.name};} return {photo:"",avatar:"",name:p.name||"Guest"}; }
function avatar(p,size){ size=size||32; const l=personLook(p); const st=`width:${size}px;height:${size}px;font-size:${Math.round(size*.52)}px`;
  if(l.photo) return `<span class="av" style="${st}"><img src="${l.photo}" alt=""></span>`;
  return `<span class="av" style="${st}">${esc(l.avatar||(l.name||"?").trim().charAt(0).toUpperCase()||"?")}</span>`; }
function migrateTrip(t){
  if(!t.group){const n=Math.max(1,+t.travelers||1);t.group=[meP()];for(let i=1;i<n;i++)t.group.push({id:uid(),name:"Guest "+i,age:30,passport:DB.profile.passport});}
  t.group.forEach(p=>{if(isMe(p))Object.assign(p,meP());else if(!p.passports)p.passports=[p.passport||DB.profile.passport];});
  t.travelers=t.group.length; if(!t.tier)t.tier="comfort"; if(!t.luggage)t.luggage="carry"; if(t.flights==null)t.flights=true;
  if(!t.from)t.from=homeCity(); if(!t.challenges)t.challenges=pick(CHALLENGES.filter(c=>c[0]<=2),6).map(c=>({id:uid(),lvl:c[0],em:c[1],t:c[2],done:false}));
  if(!t.expenses)t.expenses=[]; if(!t.packing)t.packing=[]; if(t.end) delete t.end;
}
function homeCity(){
  const p=DB.profile; const m=findCity(p.homeCity,[p.home]);
  if(!m&&p.homeGeo&&norm(p.homeGeo.q)===norm(p.homeCity))return {name:p.homeGeo.name,cc:p.homeGeo.cc||p.home,lat:p.homeGeo.lat,lng:p.homeGeo.lng};
  if(m) return {name:m.name,cc:m.cc,lat:m.lat,lng:m.lng};
  const c=CTRY[p.home]||CTRY.NL; return {name:p.homeCity||c.capital||c.name,cc:c.cc,lat:c.lat,lng:c.lng};
}

/* ---------- Geo / Maps ---------- */
let FEATURES=null;
function geo(){if(!FEATURES){try{FEATURES=topojson.feature(WORLD,WORLD.objects.countries).features;}catch(e){FEATURES=[];}}return FEATURES;}
const ccOfFeature=f=>{const o=BY_NUM[String(f.id).padStart(3,"0")];return o?o.cc:null;};
let WORLD_CACHE=null;
function worldPaths(){
  if(!WORLD_CACHE){const proj=d3.geoNaturalEarth1().fitExtent([[6,6],[954,494]],{type:"Sphere"});const path=d3.geoPath(proj).digits(1);
    WORLD_CACHE={proj,path,sphere:path({type:"Sphere"}),list:geo().map(f=>({cc:ccOfFeature(f),d:path(f)})).filter(x=>x.cc&&x.d)};}
  return WORLD_CACHE;
}
function worldMap(){
  const W=960,H=500;const WC=worldPaths();const path=o=>o.d;
  const V=new Set(DB.visited),Wl=new Set(DB.wishlist);
  const paths=WC.list.map(f=>{const cc=f.cc;const cls=V.has(cc)?"v":Wl.has(cc)?"w":cc===DB.profile.home?"h":"";return `<path class="ctry ${cls}" data-cc="${cc}" d="${path(f)}"/>`;}).join("");
  return `<div class="mapbox world" id="wmap"><svg id="wsvg" viewBox="0 0 ${W} ${H}" data-vb="0 0 ${W} ${H}"><path d="${WC.sphere}" fill="var(--map-sea)"/><g>${paths}</g></svg>
  <div class="mapctl no-print"><button data-a="zoom" data-z="0.7" title="Zoom in">+</button><button data-a="zoom" data-z="1.4" title="Zoom out">−</button><button data-a="zoom" data-z="0" title="Reset">⟲</button></div>
  <div class="legend"><span><i style="background:#7FCBA2"></i>Visited</span><span><i style="background:#94C8EC"></i>Want to visit</span><span><i style="background:#F3C9A4"></i>Home</span></div>
  <div class="mtip hide" id="mtip"></div><div id="mpop"></div></div>`;
}
function tripStops(t){const out=[];(t.days||[]).forEach(d=>{if(d.lat==null)return;const l=out[out.length-1];if(l&&l.name===d.city)l.nights++;else out.push({name:d.city,cc:d.cc,lat:d.lat,lng:d.lng,nights:1,approx:d.approx});});return out;}
const TRIPMAP_CACHE=new Map();
function tripMap(t,h,inline){
  const stops=tripStops(t);const key=JSON.stringify([stops.map(s=>[s.name,s.lat,s.lng,s.approx]),t.countries,h,!!inline]);
  if(TRIPMAP_CACHE.has(key))return TRIPMAP_CACHE.get(key);
  const out=tripMapBuild(t,h,inline,stops);if(TRIPMAP_CACHE.size>30)TRIPMAP_CACHE.clear();TRIPMAP_CACHE.set(key,out);return out;
}
function tripMapBuild(t,h,inline,stops){
  const W=900,H=h||460;
  if(!stops.length) return inline?"":`<div class="mapbox"><div class="empty"><div class="big">🗺️</div>Add cities to your days to see the route on the map.</div></div>`;
  const lats=stops.map(s=>s.lat),lngs=stops.map(s=>s.lng);
  const pad=Math.max(1.5,(Math.max(...lats)-Math.min(...lats))*.25,(Math.max(...lngs)-Math.min(...lngs))*.18);
  const box={type:"MultiPoint",coordinates:[[Math.min(...lngs)-pad,Math.max(-84,Math.min(...lats)-pad)],[Math.max(...lngs)+pad,Math.min(84,Math.max(...lats)+pad)]]};
  const proj=d3.geoMercator().fitExtent([[40,40],[W-40,H-40]],box);proj.clipExtent([[-10,-10],[W+10,H+10]]);const path=d3.geoPath(proj).digits(1);
  const tc=new Set(t.countries||[]);
  const C=inline?{sea:"#EAF5FB",land:"#E4EEEC",trip:"#CDEEDB",stroke:"#fff",pri:"#2F7F79",ink:"#1D3441"}:null;
  const paths=geo().map(f=>{const cc=ccOfFeature(f);const d=path(f);if(!d)return "";return inline?`<path d="${d}" fill="${tc.has(cc)?C.trip:C.land}" stroke="#fff" stroke-width="0.6"/>`:`<path class="ctry ${tc.has(cc)?"trip":""}" d="${d}"/>`;}).join("");
  const pts=stops.map(s=>proj([s.lng,s.lat]));
  const lineD=`M${pts.map(p=>p.map(v=>v.toFixed(1)).join(",")).join("L")}`;
  const line=pts.length>1?(inline?`<path d="${lineD}" fill="none" stroke="${C.pri}" stroke-width="3" stroke-dasharray="7 6"/>`:`<path class="route-line" d="${lineD}"/>`):"";
  const mk=stops.map((s,i)=>{const [x,y]=pts[i];return inline?`<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})"><circle r="14" fill="${C.pri}" stroke="#fff" stroke-width="3"/><text fill="#fff" font-family="Arial" font-weight="800" font-size="14" text-anchor="middle" dy="5">${i+1}</text><text x="20" y="5" font-family="Arial" font-weight="700" font-size="16" fill="${C.ink}" stroke="${C.sea}" stroke-width="4" paint-order="stroke">${esc(cityQ(s.name))}</text></g>`
    :`<g class="mk" transform="translate(${x.toFixed(1)},${y.toFixed(1)})"><circle r="14"/><text>${i+1}</text><text class="lab" x="20" y="1">${esc(s.name)}${s.approx?" ≈":""}</text></g>`;}).join("");
  const svg=`<svg ${inline?'xmlns="http://www.w3.org/2000/svg" width="'+W+'" height="'+H+'"':""} viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="${inline?C.sea:"var(--map-sea)"}"/>${paths}${line}${mk}</svg>`;
  return inline?svg:`<div class="mapbox">${svg}</div>`;
}

/* ---------- Cities ---------- */
function citiesOf(cc){
  const d=CITY_DATA[cc];
  if(d) return d.map(r=>({name:r[0],cc,lat:r[1],lng:r[2],tags:r[3],hl:r[4].split("|")}));
  const c=CTRY[cc];if(!c)return [];const n=c.capital||c.name;
  return [{name:n,cc,lat:c.capLat!=null?c.capLat:c.lat,lng:c.capLng!=null?c.capLng:c.lng,tags:"ch",hl:[`${n} old town walk`,`National museum of ${c.name}`,`Main market of ${n}`,`Local food tasting`,`Viewpoint over ${n}`],approx:true}];
}
function addPlanPlace(c){const P=S.plan;const cc=c.cc;
  if(isCurated(c.name,cc)){const l=P.cities[cc]=P.cities[cc]||[];if(!l.includes(c.name))l.push(c.name);return;}
  if(P.custom.some(x=>x.cc===cc&&x.name===c.name))return;const g=genPlace(c);g.tags="chf";delete g.world;P.custom.push(g);}
let WCI=null;
function wci(){if(WCI)return WCI;WCI=[];if(typeof WORLD_CITIES==="string")WORLD_CITIES.split("\n").forEach(l=>{const p=l.split(";");if(CTRY[p[1]])WCI.push({name:p[0],cc:p[1],lat:+p[2],lng:+p[3],pop:+p[4],n:norm(p[0])});});return WCI;}
function genPlace(c){const n=c.name;return {name:n,cc:c.cc,lat:c.lat,lng:c.lng,tags:"ch",hl:[`${n} old town walk`,`Main museum of ${n}`,`Local market in ${n}`,`Local food tasting`,`Best viewpoint over ${n}`],world:true,pop:c.pop};}
const isCurated=(n,cc)=>!!(CITY_DATA[cc]&&CITY_DATA[cc].some(r=>r[0]===n));
function placeSearch(q,lim){
  const nq=norm(String(q||"").trim());if(!nq)return [];const out=[],seen=new Set();lim=lim||8;
  const push=c=>{const k=norm(cityQ(c.name))+"|"+c.cc;if(seen.has(k)||out.length>=lim*3)return;seen.add(k);out.push(c);};
  const cur=allPlaces();
  cur.filter(c=>norm(c.name).startsWith(nq)||norm(cityQ(c.name)).startsWith(nq)).forEach(push);
  wci().filter(c=>c.n.startsWith(nq)).slice(0,lim*2).forEach(c=>push(genPlace(c)));
  cur.filter(c=>norm(c.name).includes(nq)).forEach(push);
  if(nq.length>=3)wci().filter(c=>c.n.includes(nq)).slice(0,lim).forEach(c=>push(genPlace(c)));
  return out.slice(0,lim);
}
function findCity(name,ccs){
  const q=String(name||"").trim().toLowerCase();if(!q)return null;const nq=norm(q);
  const pools=(ccs||[]).filter(Boolean).concat(Object.keys(CITY_DATA));
  for(const cc of pools){const m=citiesOf(cc).find(c=>norm(c.name)===nq||norm(cityQ(c.name))===nq);if(m)return m;}
  const ex=wci().filter(c=>c.n===nq);if(ex.length){const pref=ex.find(c=>(ccs||[]).includes(c.cc))||ex[0];return genPlace(pref);}
  for(const cc of pools){const m=citiesOf(cc).find(c=>norm(c.name).startsWith(nq));if(m)return m;}
  const sw=wci().find(c=>c.n.startsWith(nq)&&(!ccs||!ccs.length||ccs.includes(c.cc)))||wci().find(c=>c.n.startsWith(nq));if(sw)return genPlace(sw);
  return null;
}
const HL_TAG=[[/ski|powder|slopes/i,"s"],[/hike|trail|trek|lake|glacier|national park|falls|waterfall|gorge|volcano|safari|fjord|peak|mount|valley|forest|canyon|geyser|wildlife|kayak|rainforest|reef|penguin|zodiac|iceberg/i,"o"],[/beach|cove|lagoon|island|snorkel|surf|boat|sea|bay/i,"b"],[/museum|palace|castle|cathedral|temple|ruins|old town|basilica|fort|monaster|mosque|shrine|church|pyramid|citadel|wall|tomb|medina|history|memorial/i,"h"],[/market|food|wine|tapas|dinner|pintxos|cellar|cooking|street food|tasting|cake|chocolate|lunch|beer|whisky|cafés?|coffee|ceviche|hotpot|mezcal|bagel/i,"f"],[/sunset|gondola|cruise|sunrise|stars|balloon|garden/i,"r"],[/spa|bath|onsen|thermal|yoga|hot spring|massage|float/i,"w"],[/zoo|aquarium|universal|disney|tivoli|siam|theme park|panda|liseberg|giraffe|ferrari/i,"k"],[/bar|night|show|club|jazz|salsa|tango|après/i,"n"]];
const tagOfHl=s=>{for(const [re,t] of HL_TAG)if(re.test(s))return t;return "c";};
const CAT_OF_TAG={s:"snow",o:"nature",b:"beach",h:"culture",f:"food",r:"sight",w:"relax",k:"fun",n:"night",c:"sight"};
const STYLE_CAT={city:"sight",outdoors:"nature",beach:"beach",ski:"snow",culture:"culture",food:"food",roadtrip:"sight",family:"fun",romantic:"sight",backpacker:"sight",wellness:"relax"};
CATS.dare={label:"Dare",emoji:"🎯"};

/* ---------- Costs ---------- */
const TIER_M={budget:.6,comfort:1,luxury:2.1};
const costLvl=cc=>{if(COST_LEVEL[cc])return COST_LEVEL[cc];const p=typeof PRICES!=="undefined"&&PRICES[cc];if(p){const h=p[7];return h<62?1:h<92?2:h<135?3:h<185?4:5;}return COST_BY_REGION[CTRY[cc]&&CTRY[cc].region]||3;};
const dailyBase=cc=>cc==="AQ"?950:DAILY_BASE[costLvl(cc)];
const costSigns=cc=>"€".repeat(cc==="AQ"?5:costLvl(cc));
const ISLAND_RE=/Jeju|Bali|Gili|Mallorca|Tenerife|Madeira|Santorini|Mykonos|Crete|Hvar|Zanzibar|Okinawa|Langkawi|Cebu|Palawan|Samui|Malé|Lofoten|Honolulu|Komodo|Labuan|Phi Phi|Capri|Sicily|Sardinia|Corsica|Ibiza|Rhodes|Corfu/i;
function legInfo(a,b,style){
  const km=dist(a,b);let mode,hrs,em;
  const isl=x=>ISLAND_RE.test(x.name)||(CTRY[x.cc]&&!CTRY[x.cc].sov&&CTRY[x.cc].cc!=="HK");
  if(a.cc==="AQ"||b.cc==="AQ"){mode="Expedition ship";em="🚢";hrs=48;}
  else if((isl(a)||isl(b))&&!(isl(a)&&isl(b)&&cityQ(a.name)===cityQ(b.name))&&style!=="roadtrip"||((isl(a)||isl(b))&&km>150)){if(km<=150){mode="Ferry";em="⛴️";hrs=km/30+.5;}else{mode="Flight";em="✈️";hrs=km/750+2.5;}}
  else if(style==="roadtrip"&&km<900){mode="Drive";em="🚗";hrs=km/75+.3;}
  else if(km<70){mode="Local bus / taxi";em="🚌";hrs=km/45+.3;}
  else if(km<(HSR.includes(a.cc)&&HSR.includes(b.cc)?900:650)&&!(CTRY[a.cc]&&CTRY[b.cc]&&CTRY[a.cc].region!==CTRY[b.cc].region)){mode="Train";em="🚆";hrs=(HSR.includes(a.cc)&&HSR.includes(b.cc)&&km>150?km/190:km/95)+.4;}
  else{mode="Flight";em="✈️";hrs=km/750+2.5;}
  return {from:a.name,to:b.name,fcc:a.cc,tcc:b.cc,km:Math.round(km),mode,em,hrs:Math.round(hrs*2)/2};
}
const legCost=(l,tier)=>({"Drive":l.km*.16,"Local bus / taxi":10+l.km*.2,"Train":15+l.km*.11}[l.mode]||0)*({budget:.75,comfort:1,luxury:1.8}[tier]||1);
function flightPrice(km,tier){ let r=km<800?[35,100]:km<1500?[45,130]:km<3000?[80,200]:km<6000?[180,380]:km<10000?[280,480]:[420,750]; const m=tier==="luxury"?3:tier==="budget"?.85:1; return [r[0]*m,r[1]*m]; }
function bagFee(km,lug){ if(lug==="checked") return km<3000?[30,65]:[0,80]; return km<3000?[0,35]:[0,0]; }
const USHUAIA={name:"Ushuaia",cc:"AR",lat:-54.8,lng:-68.3};
function flightPlan(t){
  const stops=tripStops(t);if(!stops.length)return [];
  const out=[];const from=t.from||homeCity();
  const air=s=>s.cc==="AQ"?USHUAIA:s;
  const first=air(stops[0]),last=air(stops[stops.length-1]);
  const mk=(lbl,a,b,date)=>{const km=dist(a,b);const fly=km>450;return {lbl,from:a.name,to:b.name,fcc:a.cc,tcc:b.cc,date,km:Math.round(km),fly,hrs:fly?Math.round((km/750+2.5)*2)/2:Math.round((km/100+.5)*2)/2,price:fly?flightPrice(km,t.tier):[15+km*.08,30+km*.15],bag:fly?bagFee(km,t.luggage):[0,0]};};
  if(t.flights!==false) out.push(mk("Outbound",from,first,t.start||""));
  for(let i=1;i<stops.length;i++){const l=legInfo(stops[i-1],stops[i],t.style);if(l.mode==="Flight"){const dIdx=t.days.findIndex(d=>d.city===stops[i].name);out.push(mk("Between stops",stops[i-1],stops[i],t.start&&dIdx>=0?addDays(t.start,dIdx):""));}}
  if(t.flights!==false) out.push(mk("Return",last,from,t.start?addDays(t.start,t.days.length-1):""));
  return out;
}
const basicsPP=cc=>{if(cc==="AQ")return 0;const p=PR(cc);return p?p.meal*.55+p.water*2+p.coffee*.3:dailyBase(cc)*.14;};
function basicsTotal(t){const ages=(t.group||[{age:30}]).map(p=>+p.age||30);const eq=ages.reduce((s,a)=>s+(a<2?0:a<12?.55:1),0)||1;return t.days.reduce((s,d)=>s+basicsPP(d.cc||(t.countries||[])[0])*eq,0);}
function setBasics(t,on){t.basics=on;t.days.forEach(d=>{d.items=d.items.filter(i=>i.auto!=="basics");if(on&&d.city){const pp=basicsPP(d.cc);if(pp>0)d.items.push({id:uid(),time:"",title:"🥖 Groceries & water",cat:"food",note:`Supermarket basics ≈ ${money(pp)} pp/day – breakfast, simple meals & drinking water`,done:false,auto:"basics"});}});}
function basicsBox(t,preview){const n=(t.group||[1]).length;const tot=basicsTotal(t);return `<div class="card pad basics-box"><div class="row" style="gap:14px;flex-wrap:wrap"><span style="font-size:34px">🧱</span><div style="flex:1;min-width:220px"><b>Barebones itinerary</b><div class="muted">Just flights and a place to sleep – every day is free to fill in. Use it as a template, or as the cheapest base price.</div></div>
  <label class="toggle"><input type="checkbox" data-basics ${t.basics?"checked":""}><span></span> 🥖 Include basic food & water</label></div>
  <div class="muted" style="margin-top:8px">${t.basics?`✓ Added supermarket basics to every day: ≈ ${money(tot/Math.max(1,t.days.length)/Math.max(1,n))} pp/day · ${money(DB.settings.pp&&n>1?tot/n:tot)}${DB.settings.pp&&n>1?" pp":" total"} for the trip.`:`Tick to add the basic cost of groceries & drinking water (≈ ${money(tot/Math.max(1,t.days.length)/Math.max(1,n))} pp/day) to the price.`}${!preview?` Want activities? Use <b>Edit</b> or <b>Change days & stops</b>.`:""}</div></div>`;}
function computeBudget(t){
  const st=t.style;const ages=(t.group&&t.group.length?t.group:[{age:30}]).map(p=>+p.age||30);
  const payers=ages.filter(a=>a>=2).length||1;
  const eq=ages.reduce((s,a)=>s+(a<2?0:a<12?.55:1),0)||1;
  const rooms=Math.max(1,Math.ceil(ages.filter(a=>a>=12).length/2));
  const tier=t.tier||"comfort";let lodging=0,food=0,acts=0,local=0;const n=t.days.length;
  t.days.forEach((d,i)=>{const cc=d.cc||(t.countries||[])[0];const night=i<n-1||n===1;
    if(cc==="AQ"){if(night)lodging+=dailyBase("AQ")*(TIER_M[tier]||1)*payers;return;}
    if(night)lodging+=st==="backpacker"?roomNight(cc,tier,st)/2*payers:roomNight(cc,tier,st)*rooms;
    if(t.bare){if(t.basics)food+=basicsPP(cc)*eq;return;}
    food+=foodPP(cc,tier,st)*eq;acts+=actsPP(cc,tier,st)*eq;local+=localPP(cc,tier)*payers;});
  const stops=tripStops(t);let transport=0;
  for(let i=1;i<stops.length;i++){const l=legInfo(stops[i-1],stops[i],t.style);if(l.mode!=="Flight")transport+=legCost(l,tier)*payers;}
  const fl=flightPlan(t);let flights=0,bags=0;
  fl.forEach(f=>{const mid=(f.price[0]+f.price[1])/2;if(f.fly){flights+=mid*payers+mid*.1*(ages.length-payers);bags+=(f.bag[0]+f.bag[1])/2*payers;}else transport+=mid*payers;});
  const total=lodging+food+acts+local+transport+flights+bags;
  return {lodging,food,acts,local,transport,flights,bags,total,people:ages.length,payers,rooms};
}
function priceLabel(total,n,short){ if(DB.settings.pp&&n>1) return money(total/n)+(short?" pp":" per person"); return money(total)+(short&&n>1?" total":""); }

/* ---------- Generator ---------- */
function seasonNote(st,cities,start){
  if(!start)return null;const m=parseD(start).getMonth()+1;
  const north=cities.some(c=>c.lat>23),south=cities.some(c=>c.lat<-23);
  if(cities.some(c=>c.cc==="AQ")&&(m>=4&&m<=10)) return {bad:true,t:"Antarctic season is Nov–Mar"};
  if(st.id==="ski"){if(north&&m>=5&&m<=10&&!south)return {bad:true,t:"Off-season for skiing"};if(south&&(m<6||m>9)&&!north)return {bad:true,t:"Off-season for skiing"};return {t:"Snow season ✓"};}
  if(st.id==="beach"){if(cities.every(c=>Math.abs(c.lat)<24))return {t:"Warm all year ✓"};if(north&&(m<=4||m>=11))return {bad:true,t:"Chilly beach season"};if(south&&m>=5&&m<=9)return {bad:true,t:"Chilly beach season"};return {t:"Perfect beach weather ✓"};}
  if(st.id==="outdoors"&&north&&(m===12||m<=2))return {t:"Winter conditions – pack warm"};
  return null;
}
function groupFlags(group){const ages=group.map(p=>+p.age||30);return {kids:ages.some(a=>a<12),teens:ages.some(a=>a>=12&&a<18),seniors:ages.some(a=>a>=65),allAdults:ages.every(a=>a>=18)};}
function selDays(sel){ if(sel.start&&sel.end&&sel.end>=sel.start) return clamp(diffDays(sel.start,sel.end)+1,1,60); return sel.days; }
function generatePlans(sel){
  const days=selDays(sel);const gf=groupFlags(sel.group);
  const pool=[];
  sel.countries.forEach(cc=>{const all=citiesOf(cc);const picked=sel.cities[cc]||[];let list=picked.length?all.filter(c=>picked.includes(c.name)):all.slice();sel.custom.filter(c=>c.cc===cc).forEach(c=>list.push(c));if(!list.length)list=all;list.forEach(c=>pool.push(c));});
  if(pool.some(c=>c.cc==="AQ")&&!pool.some(c=>c.name==="Ushuaia"))pool.unshift(citiesOf("AR").find(c=>c.name==="Ushuaia"));
  const plans=[];
  STYLES.forEach(base=>{
    if(base.bare)return;
    const st=Object.assign({},base,{w:Object.assign({},base.w)});
    if(gf.kids){st.w.k=(st.w.k||0)+2;delete st.w.n;}
    if(gf.kids&&(st.id==="romantic"||st.id==="backpacker"))return;
    if(pool.some(c=>c.cc==="AQ")&&!["outdoors","romantic","wellness"].includes(st.id))return;
    const scored=pool.map(c=>({c,s:[...c.tags].reduce((s,t)=>s+(st.w[t]||0),0)}));
    const relevant=scored.filter(x=>x.s>0);
    const need={ski:"s",beach:"b",outdoors:"o",wellness:"w",family:"k"}[st.id];
    if(need&&!pool.some(c=>c.tags.includes(need)))return;
    const top=scored.slice().sort((a,b)=>b.s-a.s);const half=Math.max(1,Math.ceil(top.length/2));
    const topAvg=top.slice(0,half).reduce((s,x)=>s+x.s,0)/half;
    const sumW=Object.values(st.w).reduce((a,b)=>a+b,0);
    let match=Math.round(clamp(30+topAvg/(sumW*.85)*70,25,98));
    if(gf.kids&&st.id==="family")match=Math.min(99,match+10);
    if(gf.seniors&&(st.id==="backpacker"||st.id==="ski"))match=Math.max(20,match-12);
    const season=seasonNote(st,relevant.length?relevant.map(x=>x.c):pool,sel.start);
    if(season&&season.bad)match=Math.max(15,match-30);else if(season)match=Math.min(98,match+4);
    let paceF={relaxed:.75,balanced:1,packed:1.35}[sel.pace]||1;if(gf.kids||gf.seniors)paceF*=.85;
    const nStops=clamp(Math.round(days/st.pace*paceF),1,Math.min(pool.length,days));
    const chosen=[];
    if(sel.countries.length<=nStops)sel.countries.forEach(cc=>{const b=top.find(x=>x.c.cc===cc);if(b&&!chosen.includes(b))chosen.push(b);});
    for(const x of top){if(chosen.length>=nStops)break;if(!chosen.includes(x)&&(x.s>0||relevant.length<nStops))chosen.push(x);}
    if(!chosen.length)chosen.push(top[0]);
    const ush=top.find(x=>x.c.name==="Ushuaia");if(ush&&pool.some(c=>c.cc==="AQ")){if(!chosen.includes(ush))chosen.push(ush);const aq=top.find(x=>x.c.cc==="AQ");if(aq&&!chosen.includes(aq))chosen.push(aq);}
    const rest=chosen.slice();let cur=rest.find(x=>x.c.cc===sel.countries[0])||rest[0];const route=[cur];rest.splice(rest.indexOf(cur),1);
    while(rest.length){rest.sort((a,b)=>dist(cur.c,a.c)-dist(cur.c,b.c));cur=rest.shift();route.push(cur);}
    const ui=route.findIndex(x=>x.c.name==="Ushuaia");if(ui>0&&route.some(x=>x.c.cc==="AQ")){const u=route.splice(ui,1)[0];const ai=route.findIndex(x=>x.c.cc==="AQ");route.splice(ai,0,u);}
    const wts=route.map(x=>x.s+4),tw=wts.reduce((a,b)=>a+b,0);
    const alloc=wts.map(w=>Math.max(1,Math.floor(w/tw*days)));
    while(alloc.reduce((a,b)=>a+b,0)>days){const i=alloc.indexOf(Math.max(...alloc));alloc[i]--;}
    let k=0;while(alloc.reduce((a,b)=>a+b,0)<days){alloc[k%alloc.length]++;k++;}
    let trip=buildTrip(st,route.map(x=>x.c),alloc,sel,match,season,days,gf);
    plans.push(trip);
  });
  plans.sort((a,b)=>b.match-a.match);
  {const bs=STYLES.find(x=>x.bare);const rt=(plans[0]?plans[0].days:[]).reduce((o,d)=>{const l=o[o.length-1];if(l&&l.c.name===d.city)l.n++;else o.push({c:findCity(d.city,[d.cc])||{name:d.city,cc:d.cc,lat:d.lat,lng:d.lng,hl:[],tags:"c"},n:1});return o;},[]);
   const route=rt.length?rt.map(x=>x.c):[pool[0]];const alloc=rt.length?rt.map(x=>x.n):[days];
   const bt=buildTrip(bs,route,alloc,sel,0,null,days,gf);bt.bare=true;bt.basics=false;bt.title=`Barebones: ${[...new Set(route.map(c=>cname(c.cc)))].join(" & ")}`;
   plans.splice(Math.min(5,plans.length),0,bt);}
  // budget filter
  const hidden=[];let shown=plans;
  const cap=+sel.maxBudget||0;
  if(cap>0){
    const n=sel.group.length;const over=t=>{const b=toCur(computeBudget(t).total);return sel.budgetMode==="pp"?b/n>cap:b>cap;};
    shown=[];
    plans.forEach(t=>{ if(!over(t)){t.fits=true;shown.push(t);return;}
      if(t.tier!=="budget"){const c=JSON.parse(JSON.stringify(t));c.tier="budget";c.id=uid();if(!over(c)){c.fits=true;c.adjusted=true;shown.push(c);return;}}
      hidden.push(t);});
  }
  return {plans:shown,hidden};
}
function buildTrip(st,cities,alloc,sel,match,season,totalDays,gf){
  const slots={relaxed:["10:00","15:00"],balanced:["09:30","12:30","15:30"],packed:["08:30","11:00","14:00","16:30"]}[sel.pace]||["09:30","12:30","15:30"];
  const eve=gf.kids?["Early family dinner","Ice-cream walk","Playground before bedtime","Pizza night"]:st.eve;
  const acts=gf.kids?st.acts.filter(a=>!/bar|cocktail|hostel bar/i.test(a)):st.acts;
  const dares=pick(CHALLENGES.filter(c=>c[0]<=Math.max(1,sel.dare)),40);let di=0;
  const days=[];let gi=Math.floor(Math.random()*acts.length),ei=0,dayN=0;
  cities.forEach((c,ci)=>{
    const late=h=>/dinner|sunset|night|stars|après/i.test(h.t)?1:0;const hls=c.hl.map(h=>({t:h,tag:tagOfHl(h)})).filter(h=>!(gf.kids&&h.tag==="n")).sort((a,b)=>late(a)-late(b)||(st.w[b.tag]||0)-(st.w[a.tag]||0));let hi=0;
    for(let j=0;j<alloc[ci];j++){
      if(st.bare){const items=[];
        if(ci>0&&j===0){const l=legInfo(cities[ci-1],c,st.id);items.push({id:uid(),time:"10:00",title:`${l.em} ${l.mode} ${l.from} → ${l.to}`,cat:"travel",note:`≈ ${fmtDist(l.km)} · about ${l.hrs} h`,done:false});items.push({id:uid(),time:"15:00",title:`Check in – ${cityQ(c.name)}`,cat:"stay",note:st.stay,done:false});}
        if(dayN===0)items.push({id:uid(),time:"11:00",title:`Arrive in ${c.name} & check in`,cat:"stay",note:st.stay,done:false});
        if(dayN===totalDays-1&&totalDays>1)items.push({id:uid(),time:"11:00",title:"Check out & fly home ✈️",cat:"travel",note:"",done:false});
        days.push({id:uid(),title:dayN===0?`Arrival – ${cityQ(c.name)}`:(ci>0&&j===0?`Travel to ${cityQ(c.name)}`:dayN===totalDays-1?"Departure":"Free day"),city:c.name,cc:c.cc,lat:c.lat,lng:c.lng,approx:!!c.approx,items});dayN++;continue;}
      const items=[];let sl=slots.slice();
      if(ci>0&&j===0){const l=legInfo(cities[ci-1],c,st.id);items.push({id:uid(),time:"08:30",title:`${l.em} ${l.mode} ${l.from} → ${l.to}`,cat:"travel",note:`≈ ${fmtDist(l.km)} · about ${l.hrs} h`,done:false});sl=sl.slice(1);}
      if(dayN===0){items.push({id:uid(),time:"11:00",title:`Arrive in ${c.name} & check in`,cat:"stay",note:st.stay,done:false});sl=sl.slice(1);}
      sl.forEach(time=>{let t,cat,note="";const hl=hls[hi];
        if(hl&&((st.w[hl.tag]||0)>0||hi<2||Math.random()<.45)){t=hl.t;cat=CAT_OF_TAG[hl.tag];hi++;note=hl.tag==="h"?"Book tickets in advance to skip the queue":"";}
        else{t=acts[gi%acts.length].replace("{city}",c.name);gi++;cat=STYLE_CAT[st.id];}
        items.push({id:uid(),time,title:t,cat,note,done:false});});
      if(sel.dare>0&&(sel.dare>=2||dayN%2===1)&&dares[di]){const d=dares[di++];items.push({id:uid(),time:"",title:d[2],cat:"dare",note:`${d[1]} Comfort-zone dare · +${XP_OF[d[0]]} XP`,done:false});}
      const last=dayN===totalDays-1;
      items.push(last&&totalDays>1?{id:uid(),time:"18:00",title:"Pack up & head home ✈️",cat:"travel",note:"Leave time for the airport transfer",done:false}:{id:uid(),time:gf.kids?"18:30":"19:30",title:eve[ei++%eve.length],cat:"food",note:"",done:false});
      days.push({id:uid(),title:j===0?`Hello, ${cityQ(c.name)}!`:(items.find(i=>!["travel","stay","dare"].includes(i.cat))||{}).title||`Exploring ${c.name}`,city:c.name,cc:c.cc,lat:c.lat,lng:c.lng,approx:!!c.approx,items});
      dayN++;
    }
  });
  const essentials=["Passport / ID","Travel insurance","Phone charger & adapter","Medication","Bank card + some cash","Booking confirmations"];
  if(gf.kids)essentials.push("Kids' snacks & entertainment","Children's passports / ID");
  if(sel.luggage==="carry")essentials.push("Liquids ≤100 ml in a clear bag");
  if(sel.countries.includes("AQ"))essentials.push("Waterproof outer layers","Seasickness tablets");
  return {id:uid(),title:`${st.name}: ${[...new Set(cities.map(c=>cname(c.cc)))].join(" & ")}`,style:st.id,countries:[...new Set(days.map(d=>d.cc))],start:sel.start||"",
    group:JSON.parse(JSON.stringify(sel.group)),travelers:sel.group.length,tier:sel.tier,pace:sel.pace,luggage:sel.luggage,flights:sel.flights!==false,from:sel.from||homeCity(),
    dare:sel.dare||0,match,season,days,packing:[...essentials,...st.pack].map(t=>({id:uid(),text:t,done:false})),
    challenges:pick(CHALLENGES.filter(c=>c[0]<=Math.max(1,sel.dare||1)+1),8).map(c=>({id:uid(),lvl:c[0],em:c[1],t:c[2],done:false})),
    expenses:[],notes:"",status:"planning",fav:false,source:"generated",created:Date.now()};
}
function cheapIdeas(sel){
  const days=selDays(sel),n=sel.group.length,cap=+sel.maxBudget||0;if(!cap)return [];
  const from=sel.from||homeCity();
  return Object.keys(CITY_DATA).filter(cc=>!sel.countries.includes(cc)&&cc!=="AQ").map(cc=>{const c=citiesOf(cc)[0];const km=dist(from,c);
    const per=dailyPP(cc,"budget")*days+(km>450?flightPrice(km,"budget")[0]*2:km*.2);
    const tot=per*n;return {cc,tot,ok:sel.budgetMode==="pp"?toCur(per)<=cap:toCur(tot)<=cap};}).filter(x=>x.ok).sort((a,b)=>a.tot-b.tot).slice(0,8);
}

/* ---------- State ---------- */
const newPlan=()=>({step:1,countries:[],cities:{},custom:[],start:"",end:"",days:7,group:[meP()],tier:"comfort",pace:"balanced",luggage:"carry",flights:true,maxBudget:"",budgetMode:"total",dare:1,from:null,results:null,hidden:[],showAll:false,preview:null,popN:4});
const S={view:"home",tripId:null,tab:"itin",edit:false,plan:null,tripsFilter:"all",tripsQ:"",tripsSort:"date",meetQ:"",meetType:"",meetNear:false};

/* ---------- Status ---------- */
const tripEnd=t=>t.start?addDays(t.start,Math.max(0,t.days.length-1)):null;
function tripStatus(t){if(t.status==="completed")return "completed";const n=daysUntil(t.start);if(t.start&&n>=0)return "upcoming";if(t.start&&n<0&&daysUntil(tripEnd(t))>=0)return "ongoing";return "planning";}
const STATUS_PILL={completed:'<span class="pill g">✓ Completed</span>',upcoming:'<span class="pill b">⏳ Upcoming</span>',ongoing:'<span class="pill a">🧳 On the road</span>',planning:'<span class="pill y">✏️ Planning</span>'};
const getTrip=id=>DB.trips.find(t=>t.id===id);
function setVisited(cc,on){DB.visited=DB.visited.filter(x=>x!==cc);if(on){DB.visited.push(cc);DB.wishlist=DB.wishlist.filter(x=>x!==cc);}save();}
function setWish(cc,on){DB.wishlist=DB.wishlist.filter(x=>x!==cc);if(on&&!DB.visited.includes(cc))DB.wishlist.push(cc);save();}

/* ---------- XP ---------- */
function xpInfo(){
  let xp=DB.visited.length*25+DB.trips.filter(t=>t.status==="completed").length*100+DB.joined.length*30;
  DB.trips.forEach(t=>{(t.challenges||[]).forEach(c=>{if(c.done)xp+=XP_OF[c.lvl];});t.days.forEach(d=>d.items.forEach(i=>{if(i.cat==="dare"&&i.done)xp+=25;}));});
  Object.values(DB.trivia||{}).forEach(r=>{xp+=Math.round((r.score||0)/10);});
  let li=0;LEVELS.forEach((l,i)=>{if(xp>=l[0])li=i;});const cur=LEVELS[li],nxt=LEVELS[li+1];
  return {xp,level:li+1,title:cur[1],em:cur[2],next:nxt?nxt[0]:null,prev:cur[0]};
}

/* ---------- Toasts / modals ---------- */
function toast(msg,action,fn){const el=document.createElement("div");el.className="toast";el.innerHTML=`<span>${msg}</span>${action?`<button>${action}</button>`:""}`;$("#toasts").appendChild(el);if(action)el.querySelector("button").onclick=()=>{fn();el.remove();};setTimeout(()=>el.remove(),action?6000:3200);}
function modal(html,cls){closeModal();const s=document.createElement("div");s.className="scrim";s.id="scrim";s.innerHTML=`<div class="modal ${cls||""}" role="dialog">${html}</div>`;s.addEventListener("mousedown",e=>{if(e.target===s)closeModal();});document.body.appendChild(s);const f=s.querySelector("[autofocus]");if(f)setTimeout(()=>f.focus(),30);return s;}
function closeModal(){const s=$("#scrim");if(s)s.remove();}
let confirmFn=null;
function ask(title,msg,yes,fn,danger){confirmFn=fn;modal(`<div class="mh"><h2>${title}</h2></div><p class="sub">${msg}</p><div class="row" style="justify-content:flex-end;margin-top:18px"><button class="btn" data-a="close">Cancel</button><button class="btn ${danger?"danger":"pri"}" data-a="confirm-yes">${yes}</button></div>`);}
const X=`<button class="btn icon ghost" data-a="close" title="Close">${ic("x")}</button>`;

/* ---------- Files: save / download ---------- */
let DL=null;
async function saveFile(name,data){
  try{ if(!DL&&window.claude&&claude.use) DL=await claude.use("downloads"); }catch(e){DL=null;}
  if(DL){ try{const r=await DL.save({filename:name,data});if(r&&r.status)toast("✓ "+name+" saved");return true;}catch(e){ if(e&&e.code==="declined")return false; if(e&&e.code!=="unavailable"&&e.code!=="not_granted"){toast("Couldn't save the file ("+(e.code||"error")+")");return false;} } }
  try{const blob=data instanceof Blob?data:new Blob([data]);const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},2000);toast("✓ "+name+" downloaded");return true;}catch(e){toast("Download isn't available here");return false;}
}
function readImage(file,size){return new Promise((res,rej)=>{if(!file||!/^image\//.test(file.type)){rej();return;}const r=new FileReader();r.onload=()=>{const img=new Image();img.onload=()=>{const c=document.createElement("canvas");c.width=c.height=size;const x=c.getContext("2d");const s=Math.min(img.width,img.height);x.drawImage(img,(img.width-s)/2,(img.height-s)/2,s,s,0,0,size,size);res(c.toDataURL("image/jpeg",.85));};img.onerror=rej;img.src=r.result;};r.onerror=rej;r.readAsDataURL(file);});}

/* ---------- Router ---------- */
const VIEWS=["home","plan","trips","explore","compare","trivia","meet","passport","trip"];
function go(v,opts){if(opts&&opts.trip){S.tripId=opts.trip;S.tab=opts.tab||"itin";S.edit=!!opts.edit;DB.lastTrip=opts.trip;save();}S.view=v;if(location.hash!=="#"+v){try{history.replaceState(null,"","#"+v);}catch(e){location.hash=v;}}render();window.scrollTo(0,0);}
function fromHash(){if(!ACCOUNT||/^#view-/.test(location.hash)){render();return;}const h=(location.hash||"").slice(1);let v=VIEWS.includes(h)?h:"home";if(v==="trip"){S.tripId=S.tripId||DB.lastTrip;if(!getTrip(S.tripId))v="trips";}S.view=v;render();}
window.addEventListener("hashchange",fromHash);

/* ---------- Shell ---------- */
function shell(){
  const nav=[["home","home","Home"],["plan","compass","Plan a trip"],["trips","suitcase","My trips"],["explore","map","Explore"],["compare","list","Compare"],["trivia","target","Trivia"],["meet","coffee","Meet-ups"],["passport","passport","Passport"]];
  const cur=S.view==="trip"?"trips":S.view;const xp=xpInfo();
  return `<aside class="side">
    <div class="brand">${LOGO(36)}<b>Travel<span>Tropia</span></b></div>
    <button class="side-search" data-a="palette" title="Search places and pages">${ic("search","sm")}<span>Search…</span><kbd>${/Mac|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl"} K</kbd></button>
    ${nav.map(([v,i,l])=>`<button class="nav ${cur===v?"on":""}" data-a="go" data-v="${v}">${ic(i)}<span>${l}</span></button>`).join("")}
    <button class="nav nav-x" data-a="new-custom">${ic("edit")}<span>Build my own</span></button>
    <div class="grow"></div>
    <button class="side-card" data-a="go" data-v="passport"><div class="row" style="gap:10px;flex-wrap:nowrap">${avatar(meP(),40)}<div style="text-align:left"><b style="font-size:15px">${esc(DB.profile.name)}</b><div>${xp.em} Lv ${xp.level} · ${xp.title}</div></div></div><div style="margin-top:8px"><b>${sovCount()} / ${WORLD_TOTAL}</b> countries · ${Math.round(sovCount()/WORLD_TOTAL*100)}% 🌍</div></button>
    <button class="nav nav-x" data-a="theme">${ic(curTheme()==="dark"?"sun":"moon")}<span>${curTheme()==="dark"?"Light mode":"Dark mode"}</span></button>
    <button class="nav nav-x" data-a="settings">${ic("settings")}<span>Settings</span></button>
    <button class="nav nav-x" data-a="logout" title="Log out">${ic("undo")}<span>Log out${ACCOUNT&&ACCOUNT.id!=="guest"?"":" (guest)"}</span></button>
  </aside><main class="main" id="main"></main>`;
}
let lastView="";
function render(){
  const hv=(location.hash||"").match(/^#view-([\w-]+)/);if(hv){vPublic(null,hv[1]);return;}
  if(!ACCOUNT&&CLOUD_ON&&!CL.authKnown){$("#app").innerHTML=`<div class="boot">${LOGO(48)}<div>Loading TravelTropia…</div></div>`;return;}
  if(!ACCOUNT){lastView="";vSplash();return;}
  const same=lastView===S.view+"|"+S.tab;lastView=S.view+"|"+S.tab;const y=window.scrollY;
  applyTheme();
  $("#app").innerHTML=shell();
  dropMaps();
  ({home:vHome,plan:vPlan,trips:vTrips,explore:vExplore,compare:vCompare,trivia:vTrivia,meet:vMeet,passport:vPassport,trip:vTrip}[S.view]||vHome)($("#main"));
  if(S.view==="explore")initExploreLeaflet();
  if((S.view==="trip"||(S.view==="plan"&&S.plan.preview))&&S.tab==="map"&&S.mapMode!=="simple"){const tt=S.view==="trip"?getTrip(S.tripId):S.plan.preview;if(tt)initTripLeaflet(tt);}
  if(S.view==="passport")initWorldMap();
  if(S.view==="trivia")initTriviaMap();
  if(same)window.scrollTo({top:y,behavior:"instant"});else $("#main").classList.add("enter");
}

/* ---------- Home ---------- */
function vHome(m){
  const h=new Date().getHours();const greet=h<12?"Good morning":h<18?"Good afternoon":"Good evening";
  const upcoming=DB.trips.filter(t=>t.status!=="completed"&&t.start&&daysUntil(t.start)>=0).sort((a,b)=>a.start.localeCompare(b.start))[0];
  const recent=DB.trips.slice().sort((a,b)=>b.created-a.created).slice(0,3);
  const xp=xpInfo();const dare=CHALLENGES[(new Date().getDate()*7)%CHALLENGES.length];
  m.innerHTML=`
  <div class="hero">
    <svg class="hero-map" viewBox="0 0 960 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g>${worldPaths().list.map(f=>`<path d="${f.d}"${DB.visited.includes(f.cc)?' class="v"':DB.wishlist.includes(f.cc)?' class="w"':""}/>`).join("")}</g></svg>
    <div class="hero-in"><div class="eyebrow">${greet}, ${esc(DB.profile.name)}</div>
    <h1>Plan trips you'll actually take.</h1>
    <p>Pick a country or a few cities. TravelTropia drafts the days, the route and the budget – you change whatever you like.</p>
    <div class="row"><button class="btn pri" data-a="go" data-v="plan">Plan a trip ${ic("arrow","sm")}</button><button class="btn" data-a="new-custom">${ic("edit","sm")} Start from scratch</button><button class="btn ghost" data-a="surprise" title="Random destination">${ic("dice","sm")} Spin the globe</button></div></div>
  </div>
  <div class="grid g4 section">
    <button class="card stat" data-a="clist" data-k="visited"><div class="bub bg-g">${ic("check")}</div><div><div class="n">${sovCount()}</div><div class="l">Countries visited${terrCount()?` +${terrCount()} terr.`:""} ›</div></div></button>
    <button class="card stat" data-a="clist" data-k="wishlist"><div class="bub bg-b">${ic("star")}</div><div><div class="n">${DB.wishlist.length}</div><div class="l">Want to visit ›</div></div></button>
    <button class="card stat" data-a="go" data-v="trips"><div class="bub bg-a">${ic("suitcase")}</div><div><div class="n">${DB.trips.length}</div><div class="l">Saved itineraries ›</div></div></button>
    <button class="card stat" data-a="go" data-v="passport"><div class="bub bg-y">${ic("flag")}</div><div><div class="n">Lv ${xp.level}</div><div class="l">${xp.title} · ${xp.xp} XP</div></div></button>
  </div>
  <div class="grid g3 section">
    <div class="card pad" style="grid-column:span 2">${upcoming?`<div class="spread"><h3>Next adventure</h3>${STATUS_PILL.upcoming}</div>
      <div class="countdown" style="margin-top:14px"><div class="big">${daysUntil(upcoming.start)}</div><div><b>${daysUntil(upcoming.start)===0?"Today!":"days to go"}</b><div class="sub">${esc(upcoming.title)}</div><div class="muted">${fmtD(upcoming.start)} · ${dn(upcoming.days.length)} <span class="flags">${upcoming.countries.map(flag).join("")}</span></div><div class="row" style="margin-top:6px;gap:4px">${upcoming.group.map(p=>avatar(p,26)).join("")}</div></div></div>
      <div class="row" style="margin-top:16px"><button class="btn sm pri" data-a="open-trip" data-id="${upcoming.id}">Open itinerary ${ic("arrow","sm")}</button><button class="btn sm" data-a="open-trip" data-id="${upcoming.id}" data-tab="docs">${ic("shield","sm")} Visa & safety</button><button class="btn sm" data-a="open-trip" data-id="${upcoming.id}" data-tab="pack">${ic("lug","sm")} Packing</button></div>`
      :`<h3>Next adventure</h3><div class="empty" style="padding:24px 10px"><div class="big">🗓️</div>No dated trips yet. Give a trip a start date and a countdown appears here.</div>`}</div>
    ${triviaCard()}
  </div>
  <div class="grid g3 section" style="margin-top:16px">
    <div class="card pad dare-card" style="grid-column:span 3;display:flex;align-items:center;gap:18px;flex-wrap:wrap"><div style="font-size:40px">${dare[1]}</div><div style="flex:1;min-width:220px"><div class="lbl">TODAY'S COMFORT-ZONE DARE</div><h3 style="margin:2px 0">${esc(dare[2])}</h3><div class="muted">Add dares to any trip with the comfort-zone dial in the planner – and level up your traveller rank.</div></div><button class="btn sm" data-a="go" data-v="meet">${ic("coffee","sm")} Find a meet-up</button></div>
  </div>
  <div class="section"><div class="spread"><h2>Trip inspiration</h2><span class="muted">Click to pre-fill the planner</span></div>
    <div class="grid g4">${INSPIRATION.map((x,i)=>`<button class="card insp" data-a="insp" data-i="${i}">${scene(x.style,96)}<div class="body"><b>${x.cc.map(flag).join(" ")} ${x.t}</b><div class="muted">${x.sub}</div></div></button>`).join("")}</div></div>
  <div class="section"><div class="spread"><h2>Recently saved</h2><button class="btn sm ghost" data-a="go" data-v="trips">See all ${ic("arrow","sm")}</button></div>
    ${recent.length?`<div class="grid g3">${recent.map(tripCard).join("")}</div>`:`<div class="card empty"><div class="big">🧳</div><p>Your collection is empty. Plan your first trip – or load a few examples to look around.</p><div class="row" style="justify-content:center"><button class="btn pri" data-a="go" data-v="plan">${ic("compass")} Plan a trip</button><button class="btn" data-a="samples">Load example trips</button></div></div>`}
  </div>`;
}

/* ---------- Group editor (planner & trip) ---------- */
function groupEditor(group,ctx){
  const free=DB.friends.filter(f=>!group.some(p=>p.friendId===f.id));
  return `<div class="glist">${group.map((p,i)=>`<div class="gp">${avatar(p,34)}<div class="grow"><b>${esc(isMe(p)?DB.profile.name+" (you)":p.name)}</b><div class="muted">${ppFlags(p)} ${ppOf(p).length>1?plural(ppOf(p).length,"passport"):esc(cname(ppOf(p)[0]))+" passport"}</div></div>
    ${isMe(p)||p.friendId?`<span class="pill">${p.age} yrs</span>`:`<input class="inp" style="width:120px;padding:6px 8px" value="${esc(p.name)}" data-g="name" data-ctx="${ctx}" data-i="${i}" placeholder="Name"><input class="inp" type="number" min="0" max="110" style="width:70px;padding:6px 8px" value="${p.age}" data-g="age" data-ctx="${ctx}" data-i="${i}" title="Age"><select class="inp" style="width:90px;padding:6px 8px" data-g="passport" data-ctx="${ctx}" data-i="${i}" title="Passport">${ALL_CC.map(c=>`<option value="${c}" ${p.passport===c?"selected":""}>${CTRY[c].flag} ${c}</option>`).join("")}</select>`}
    ${isMe(p)?"":`<button class="btn icon ghost" data-a="g-rm" data-ctx="${ctx}" data-i="${i}" title="Remove">${ic("x","sm")}</button>`}</div>`).join("")}</div>
  ${(()=>{const real=isCloud()?friendsAccepted().filter(f=>!group.some(p=>p.uid===f.uid)):[];return `<div class="row" style="margin-top:8px">${free.length||real.length?`<select class="inp" style="width:auto" data-gadd="${ctx}"><option value="">+ Add a friend…</option>${real.length?`<optgroup label="TravelTropia friends">${real.map(f=>`<option value="u:${f.uid}">${esc(f.name)} (@${esc(f.handle||"")})</option>`).join("")}</optgroup>`:""}${free.length?`<optgroup label="Travel companions">${free.map(f=>`<option value="${f.id}">${esc(f.name)}</option>`).join("")}</optgroup>`:""}</select>`:""}`;})()}<button class="btn sm" data-a="g-guest" data-ctx="${ctx}">${ic("plus","sm")} Add person</button><button class="btn sm ghost" data-a="friend-new">${ic("userplus","sm")} New friend</button></div>
  ${groupFlags(group).kids?`<div class="muted" style="margin-top:6px">👶 Kids in the group → family-friendly activities, earlier dinners, child prices.</div>`:groupFlags(group).seniors?`<div class="muted" style="margin-top:6px">🧓 Plans get a slightly gentler pace.</div>`:""}`;
}
const getGroup=ctx=>ctx==="plan"?S.plan.group:(getTrip(S.tripId)||{}).group;

/* ---------- Planner ---------- */
function vPlan(m){
  const P=S.plan;P.group.forEach(p=>{if(isMe(p))Object.assign(p,meP());});if(P.preview)return vPreview(m);
  const stepper=`<div class="steps">${["Destinations","Dates, people & budget","Pick your plan"].map((l,i)=>`<div class="${P.step===i+1?"on":P.step>i+1?"done":""}"><i>${P.step>i+1?"✓":i+1}</i>${l}</div>${i<2?'<span class="sep"></span>':""}`).join("")}</div>`;
  let body="";
  if(P.step===1){
    const popular=Object.keys(CITY_DATA);
    body=`<div class="grid two" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);align-items:start">
      <div>
        <div class="search" style="margin-bottom:16px">${ic("search")}<input class="inp" id="csearch" placeholder="Search any country or city… (press / )" autocomplete="off"><div class="dd hide" id="cdd"></div></div>
        ${P.countries.length?P.countries.map(cc=>{const cs=citiesOf(cc);const picked=P.cities[cc]||[];const cust=P.custom.filter(c=>c.cc===cc);const sf=SAFETY[cc];return `<div class="card dest" style="margin-bottom:12px">
          <div class="dest-h"><span class="fl">${flag(cc)}</span><div style="flex:1"><h3>${esc(cname(cc))}</h3><div class="muted">${picked.length||cust.length?`${picked.length+cust.length} selected`:"All highlights – or pick specific cities"} · ${costSigns(cc)}${BEST[cc]?" · best: "+BEST[cc]:""}</div></div>${sf?safetyPill(cc):""}<button class="btn sm" data-a="docs-modal" data-cc="${cc}" title="Visa & safety">${ic("shield","sm")} Visa & safety</button><button class="btn icon ghost" data-a="rm-country" data-cc="${cc}" title="Remove">${ic("x")}</button></div>
          <div class="row">${cs.map(c=>`<button class="chip ${picked.includes(c.name)?"on":""}" data-a="tog-city" data-cc="${cc}" data-n="${esc(c.name)}">${picked.includes(c.name)?"✓ ":""}${esc(c.name)}</button>`).join("")}
          ${cust.map(c=>`<span class="chip on">📍 ${esc(c.name)} <span class="x" data-a="rm-custom" data-cc="${cc}" data-n="${esc(c.name)}">✕</span></span>`).join("")}
          <input class="inp" style="width:150px;padding:6px 10px;border-radius:999px;font-size:13px" placeholder="+ Add a city ↵" data-addcity="${cc}"></div></div>`;}).join("")
        :`<div class="card empty"><div class="big">🌍</div><h3>Where do you want to go?</h3><p class="sub">Search above or pick from popular destinations. Add as many countries as you like – even Antarctica.</p></div>`}
      </div>
      <div class="card pad"><div class="spread" style="margin-bottom:12px"><h3>Popular destinations</h3><span class="muted">${popular.length} curated</span></div><div class="grid g2" style="gap:8px">${popular.slice(0,P.popN).map(cc=>`<button class="pop ${P.countries.includes(cc)?"on":""}" data-a="tog-country" data-cc="${cc}"><span class="fl">${flag(cc)}</span><b>${esc(cname(cc))}</b><span class="muted">${CITY_DATA[cc].length} places · ${costSigns(cc)}</span>${SAFETY[cc]?`<span class="dot ${SAFE_LVL[SAFETY[cc][0]][1]}" title="${SAFE_LVL[SAFETY[cc][0]][0]}"></span>`:""}</button>`).join("")}</div>
      ${P.popN<popular.length?`<button class="btn" style="width:100%;margin-top:10px" data-a="pop-more">${ic("down","sm")} Load more (${popular.length-P.popN} left)</button>`:`<button class="btn ghost" style="width:100%;margin-top:10px" data-a="pop-less">Show less</button>`}</div>
    </div>
    <div class="row no-print" style="justify-content:flex-end;margin-top:20px"><button class="btn pri" data-a="pstep" data-s="2" ${P.countries.length?"":"disabled"}>Next: dates, people & budget ${ic("arrow","sm")}</button></div>`;
  } else if(P.step===2){
    const seg=(k,opts)=>`<div class="seg">${opts.map(([v,l])=>`<button class="${String(P[k])===String(v)?"on":""}" data-a="pset" data-k="${k}" data-v="${v}">${l}</button>`).join("")}</div>`;
    const both=P.start&&P.end&&P.end>=P.start;const days=selDays(P);const hc=P.from||homeCity();
    body=`<div class="grid two" style="grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);align-items:start"><div class="card pad">
      <div class="row" style="margin-bottom:18px"><span class="flags">${P.countries.map(flag).join(" ")}</span><b>${P.countries.map(cname).join(", ")}</b><button class="btn sm ghost" data-a="pstep" data-s="1">Change</button><button class="btn sm" data-a="docs-modal">${ic("shield","sm")} Visa & safety check</button></div>
      <h3 style="margin-bottom:10px">When</h3>
      <div class="grid g2"><div class="field"><label>Start date <span class="muted">(optional)</span></label><input type="date" class="inp" data-p="start" value="${P.start}" min="${today()}"></div>
      <div class="field"><label>End date <span class="muted">(optional)</span></label><input type="date" class="inp" data-p="end" value="${P.end}" min="${P.start||today()}"></div></div>
      <div class="field" style="margin-top:14px"><label>Trip length: <b style="color:var(--ink)" id="dlab">${dn(days)}</b> <span class="muted" id="dend">${both?"· set by your dates":P.start?"· until "+fmtD(addDays(P.start,days-1)):""}</span></label><input type="range" min="1" max="30" value="${Math.min(days,30)}" data-p="days" ${both?"disabled":""}>${both?`<span class="muted">Clear the end date to use the slider again. <button class="btn sm ghost" data-a="clear-end">Clear end date</button></span>`:""}</div>
      <h3 style="margin:22px 0 10px">Who's going</h3>${groupEditor(P.group,"plan")}
      <h3 style="margin:22px 0 10px">Budget & style</h3>
      <div class="grid g2"><div class="field"><label>Comfort level</label>${seg("tier",[["budget","💸 Budget"],["comfort","🙂 Comfort"],["luxury","💎 Luxury"]])}</div>
      <div class="field"><label>Pace</label>${seg("pace",[["relaxed","🐢 Relaxed"],["balanced","🚶 Balanced"],["packed","⚡ Packed"]])}</div></div>
      <div class="field" style="margin-top:14px"><label>Maximum budget <span class="muted">(optional – plans above it are hidden)</span></label><div class="row"><input class="inp" type="number" min="0" step="50" style="max-width:160px" placeholder="e.g. 400" data-p="maxBudget" value="${P.maxBudget}">${seg("budgetMode",[["total","Total"],["pp","Per person"]])}</div></div>
      <h3 style="margin:22px 0 10px">Getting there</h3>
      <div class="grid g2"><div class="field"><label>Flying from</label><input class="inp" list="allcities" data-p="from" value="${esc(hc.name)}"><datalist id="allcities">${Object.keys(CITY_DATA).flatMap(cc=>CITY_DATA[cc].map(r=>`<option value="${esc(r[0])}">`)).join("")}</datalist></div>
      <div class="field"><label>Luggage</label>${seg("luggage",[["carry","🎒 Carry-on only"],["checked","🧳 + Checked bag"]])}</div></div>
      <label class="row" style="margin-top:10px"><input type="checkbox" data-p="flights" ${P.flights?"checked":""}> Include flights from home in the budget</label>
      <h3 style="margin:22px 0 6px">Comfort-zone dial</h3><div class="muted" style="margin-bottom:8px">Adds little dares to your days – from tasting something new to a sunrise swim.</div>
      ${seg("dare",[[0,"😌 Off"],[1,"😊 Mild"],[2,"😬 Spicy"],[3,"🤯 Wild"]])}
      <div class="row" style="justify-content:space-between;margin-top:24px"><button class="btn" data-a="pstep" data-s="1">${ic("left","sm")} Back</button><button class="btn earth" data-a="generate">${ic("compass")} Create itineraries</button></div>
    </div>
    <div class="card pad">${docsHTML(P.countries,P.group,true)}</div></div>`;
  } else {
    const R=P.results||[];const shown=P.showAll?R:R.slice(0,6);const n=P.group.length;const days=selDays(P);
    const ideas=P.maxBudget&&(P.hidden.length||!R.length)?cheapIdeas(P):[];
    body=`<div class="spread" style="margin-bottom:14px"><div><h2>${R.length} itineraries for ${P.countries.map(cname).join(" & ")}</h2><div class="sub">${dn(days)} · ${plural(n,"traveller")} · ${P.tier} · ${P.pace} pace${P.start?" · from "+fmtD(P.start):""}${P.maxBudget?` · max ${fmtCur(P.maxBudget)}${P.budgetMode==="pp"?" pp":""}`:""}</div></div>
    <div class="row">${n>1?`<div class="seg"><button class="${DB.settings.pp?"":"on"}" data-a="pp" data-v="0">Total</button><button class="${DB.settings.pp?"on":""}" data-a="pp" data-v="1">Per person</button></div>`:""}<button class="btn" data-a="pstep" data-s="2">${ic("left","sm")} Adjust</button><button class="btn" data-a="generate">${ic("dice","sm")} Reshuffle</button></div></div>
    ${P.hidden.length?`<div class="card pad notice" style="margin-bottom:16px"><b>💸 ${plural(P.hidden.length,"plan")} hidden – over your ${fmtCur(P.maxBudget)}${P.budgetMode==="pp"?" per person":""} budget</b> (cheapest was ${money(Math.min(...P.hidden.map(t=>computeBudget(t).total))/(P.budgetMode==="pp"?n:1))}${P.budgetMode==="pp"?" pp":""}). Try fewer days, carry-on only, the budget comfort level – or a cheaper destination:
      ${!ideas.length?`<div style="margin-top:6px">No curated destination fits that budget for ${plural(days,"day")} – try a shorter trip.</div>`:""}${ideas.length?`<div class="row" style="margin-top:10px">${ideas.map(x=>`<button class="chip" data-a="try-cc" data-cc="${x.cc}">${flag(x.cc)} ${esc(cname(x.cc))} <span class="muted">~${money(P.budgetMode==="pp"?x.tot/n:x.tot)}</span></button>`).join("")}</div>`:""}</div>`:""}
    <div class="grid auto">${shown.map(t=>{const st=STYLES.find(s=>s.id===t.style);const stops=tripStops(t);const b=computeBudget(t);const i=R.indexOf(t);return `<div class="card plan">${scene(t.style)}<div class="body">
      <div class="spread"><h3>${st.emoji} ${st.name}</h3>${t.bare?`<span class="pill">📄 Template</span>`:`<span class="pill ${t.match>=75?"g":t.match>=55?"b":"y"}">${t.match}% match</span>`}</div>
      ${t.bare?"":`<div class="match"><i style="width:${t.match}%"></i></div>`}<div class="muted">${st.desc}</div>
      ${t.bare?`<label class="row basics-chk"><input type="checkbox" data-bbasic="${i}" ${t.basics?"checked":""}> 🥖 Include basic food & water <span class="muted">(+${money(basicsTotal(t)/n)} pp)</span></label>`:""}
      <div class="row" style="gap:6px">${t.season?`<span class="pill ${t.season.bad?"a":"g"}">${t.season.t}</span>`:""}${t.fits?`<span class="pill g">💶 Fits budget${t.adjusted?" (budget stays)":""}</span>`:""}</div>
      <div class="route">📍 ${stops.map(s=>esc(cityQ(s.name))+` <span class="muted">${s.nights}d</span>`).join(" → ")}</div>
      <div class="kpis"><span><b>${stops.length}</b> stops</span>${t.bare?`<span><b>${Math.max(1,t.days.length-1)}</b> nights</span>`:`<span><b>${t.days.reduce((s,d)=>s+d.items.filter(x=>!["travel","stay"].includes(x.cat)).length,0)}</b> activities</span>`}<span><b>${priceLabel(b.total,n,true)}</b></span></div>
      <div class="muted" style="margin-top:-4px">${t.bare?`${t.flights?"flights + ":""}hotel${t.stops>1?"s":""}${t.basics?" + basic food & water":" only"}`:`incl. ${t.flights?"flights, ":""}stays, food & activities`}</div>
      <div class="foot"><button class="btn sm" data-a="preview" data-i="${i}">${ic("map","sm")} Preview</button><button class="btn sm pri" data-a="save-plan" data-i="${i}">${ic("check","sm")} Save</button></div>
    </div></div>`;}).join("")}
    <button class="card plan custom-card" data-a="custom-from-plan"><div style="font-size:40px">✍️</div><h3>Build it yourself</h3><p class="sub">Start with an empty ${days}-day canvas for ${P.countries.map(cname).join(" & ")} and add your own stops.</p><span class="btn sm pri">${ic("plus","sm")} Start from scratch</span></button></div>
    ${R.length>6?`<div class="row" style="justify-content:center;margin-top:16px"><button class="btn" data-a="showall">${P.showAll?"Show fewer":`Show all ${R.length} trip styles`}</button></div>`:""}`;
  }
  m.innerHTML=`<div class="topbar"><div><h1>Plan a trip</h1><div class="sub">Tell us where – we'll suggest how.</div></div>${P.countries.length?`<button class="btn ghost" data-a="preset">${ic("undo","sm")} Start over</button>`:""}</div>${stepper}${body}`;
}
function vPreview(m){const t=S.plan.preview;m.innerHTML=`<div class="topbar no-print"><button class="btn" data-a="close-preview">${ic("left","sm")} Back to options</button><div class="row"><span class="muted">Preview – not saved yet</span><button class="btn pri" data-a="save-preview">${ic("check","sm")} Save to my trips</button></div></div>${tripBody(t,true)}`;}

/* ---------- Visa / safety ---------- */
const VRANK={home:0,free:1,permit:2,auth:3,voa:4,evisa:5,visa:6,unknown:7};
function bestVisa(pps,d){const all=pps.map(pp=>({pp,r:visaRule(pp,d)}));all.sort((a,b)=>VRANK[a.r[0]]-VRANK[b.r[0]]);return {best:all[0],all};}
function safetyPill(cc){const s=SAFETY[cc];if(!s)return `<span class="pill">❔ No safety summary</span>`;const L=SAFE_LVL[s[0]];return `<span class="pill ${L[1]==="r"?"r":L[1]}">🛡️ ${L[0]}</span>`;}
function docsHTML(countries,group,compact){
  const pass=[];(group||[meP()]).forEach(p=>{const pps=ppOf(p);const k=pps.join("+");let e=pass.find(x=>x.k===k);if(!e){e={k,pps,names:[]};pass.push(e);}e.names.push(isMe(p)?"You":p.name);});
  const adv=DB.profile.passports.map(p=>ADVICE_LINK[p]).find(Boolean)||ADVICE_LINK[DB.profile.home]||ADVICE_LINK.GB;
  const euTrip=countries.some(cc=>EU_EFTA.includes(cc));
  const html=countries.map(cc=>{const s=SAFETY[cc];const L=s?SAFE_LVL[s[0]]:null;const c=CTRY[cc]||{};
    return `<div class="docbox"><div class="spread"><h3>${flag(cc)} ${esc(cname(cc))}</h3>${safetyPill(cc)}</div>
    <div class="vrows">${pass.map(p=>{const bv=bestVisa(p.pps,cc);const r=bv.best.r;const look=VISA_LOOK[r[0]];const link=r[2]?VISA_LINK[r[2]]:null;const others=bv.all.slice(1).filter(o=>o.r[0]!==r[0]);return `<div class="vrow"><span class="vic ${look[1]}">${look[0]}</span><div><b>${p.pps.map(flag).join(" ")} ${esc(p.names.join(", "))}</b> – <span class="${look[1]?"t-"+look[1]:""}">${look[2]}</span>${p.pps.length>1?` <span class="pill">best with ${flag(bv.best.pp)} ${esc(cname(bv.best.pp))} passport</span>`:""}<div class="muted">${esc(r[1])}${link?` <a href="${link}" target="_blank" rel="noopener">Official site ↗</a>`:""}</div>${others.map(o=>`<div class="muted">↳ with ${flag(o.pp)}: ${VISA_LOOK[o.r[0]][2]}</div>`).join("")}</div></div>`;}).join("")}</div>
    ${s?`<div class="muted" style="margin:8px 0 6px">${esc(s[2])}</div>${s[1].length?`<div class="row" style="gap:6px">${s[1].map(k=>`<span class="pill">${RISK[k][0]} ${RISK[k][1]}</span>`).join("")}</div>`:""}`:`<div class="muted" style="margin:8px 0">No safety summary for this country yet – check official travel advice.</div>`}
    ${!compact?`<div class="facts">${s&&s[3]?`<span>🚑 Emergency: <b>${esc(s[3])}</b></span>`:""}${s&&s[4]?`<span>🔌 Plug: <b>${esc(s[4])}</b></span>`:""}${c.cur?`<span>💱 ${esc(c.cur)}</span>`:""}${c.lang?`<span>🗣️ ${esc(c.lang)}</span>`:""}${BEST[cc]?`<span>📅 Best: ${esc(BEST[cc])}</span>`:""}</div>`:""}</div>`;}).join("");
  return `<div class="spread" style="margin-bottom:8px"><h3>Visa, entry & safety</h3><span class="muted">Passports: ${[...new Set(pass.flatMap(p=>p.pps))].map(flag).join(" ")}</span></div>
  ${html}
  <div class="muted" style="margin-top:10px">📌 Most countries want your passport valid 6 months beyond your trip. ${euTrip&&DB.profile.passports.some(p=>EU_EFTA.includes(p))?"Bring your EHIC health card for EU trips. ":""}Get travel insurance & keep digital copies of documents.</div>
  <div class="muted" style="margin-top:6px">ℹ️ Indicative info (checked 11 Nov 2026) – rules change. Always confirm on official sites before booking: <a href="${adv[1]}" target="_blank" rel="noopener">${esc(adv[0])} ↗</a></div>`;
}

/* ---------- Trips list ---------- */
function tripCard(t){
  const st=tripStatus(t);const stl=STYLES.find(s=>s.id===t.style);
  return `<div class="card tcard" data-a="open-trip" data-id="${t.id}">${scene(t.style||"custom",120)}
   ${st==="completed"?'<span class="stamp">VISITED</span>':""}
   <button class="fav ${t.fav?"on":""}" data-a="fav" data-id="${t.id}" title="Favourite">${ic("star","sm")}</button>
   <div class="body"><div class="spread"><span class="flags">${t.countries.map(flag).join("")}</span>${STATUS_PILL[st]}</div>
   <h3>${esc(t.title)}</h3>
   <div class="muted">${t.start?fmtD(t.start,{day:"numeric",month:"short"})+" – "+fmtD(tripEnd(t)):"No dates yet"} · ${dn(t.days.length)}${isCloud()&&t.owner&&t.owner!==CL.uid?` · shared by ${esc((CL.profiles[t.owner]||{}).name||"a friend")}`:""}</div>
   <div class="spread"><div class="row" style="gap:3px">${t.group.slice(0,5).map(p=>avatar(p,24)).join("")}${t.group.length>5?`<span class="muted">+${t.group.length-5}</span>`:""}</div><span class="muted">${stl?stl.emoji+" "+stl.name:"✍️ Custom"}</span></div></div></div>`;
}
function vTrips(m){
  const q=S.tripsQ.toLowerCase();
  let list=DB.trips.filter(t=>{const s=tripStatus(t);if(S.tripsFilter==="fav"&&!t.fav)return false;if(S.tripsFilter!=="all"&&S.tripsFilter!=="fav"&&s!==S.tripsFilter&&!(S.tripsFilter==="upcoming"&&s==="ongoing"))return false;if(q&&!(t.title+" "+t.countries.map(cname).join(" ")+" "+t.days.map(d=>d.city).join(" ")+" "+t.group.map(p=>p.name).join(" ")).toLowerCase().includes(q))return false;return true;});
  list.sort((a,b)=>S.tripsSort==="name"?a.title.localeCompare(b.title):S.tripsSort==="created"?b.created-a.created:(a.start||"9999").localeCompare(b.start||"9999"));
  const cnt=k=>DB.trips.filter(t=>k==="all"||(k==="fav"?t.fav:tripStatus(t)===k||(k==="upcoming"&&tripStatus(t)==="ongoing"))).length;
  m.innerHTML=`<div class="topbar"><div><h1>My trips</h1><div class="sub">Your collection of itineraries – mark a trip completed to cross its countries off.</div></div><div class="row"><button class="btn" data-a="new-custom">${ic("edit","sm")} Build my own</button><button class="btn pri" data-a="go" data-v="plan">${ic("compass","sm")} Plan a trip</button></div></div>
  <div class="spread" style="margin-bottom:16px"><div class="seg">${[["all","All"],["planning","Planning"],["upcoming","Upcoming"],["completed","Completed"],["fav","★ Favourites"]].map(([k,l])=>`<button class="${S.tripsFilter===k?"on":""}" data-a="tfilter" data-k="${k}">${l} <span class="muted">${cnt(k)}</span></button>`).join("")}</div>
  <div class="row"><div class="search" style="width:240px">${ic("search")}<input class="inp" id="tsearch" placeholder="Search trips or friends…" value="${esc(S.tripsQ)}"></div><select class="inp" style="width:auto" data-tsort>${[["date","By date"],["created","Recently added"],["name","A–Z"]].map(([v,l])=>`<option value="${v}" ${S.tripsSort===v?"selected":""}>${l}</option>`).join("")}</select></div></div>
  ${list.length?`<div class="grid auto">${list.map(tripCard).join("")}</div>`:`<div class="card empty"><div class="big">${DB.trips.length?"🔍":"🧳"}</div><p>${DB.trips.length?"No trips match this filter.":"No saved trips yet."}</p>${DB.trips.length?"":`<div class="row" style="justify-content:center"><button class="btn pri" data-a="go" data-v="plan">Plan a trip</button><button class="btn" data-a="samples">Load example trips</button></div>`}</div>`}`;
}

/* ---------- Trip view ---------- */
function vTrip(m){
  const t=getTrip(S.tripId);if(!t){go("trips");return;}
  m.innerHTML=`<div class="topbar no-print"><button class="btn ghost" data-a="go" data-v="trips">${ic("left","sm")} My trips</button>
   <div class="row">
    ${S.edit?`<button class="btn pri" data-a="edit-off">${ic("check","sm")} Done editing</button>`:`<button class="btn" data-a="edit-on">${ic("edit","sm")} Edit</button>`}
    ${t.status==="completed"?`<button class="btn" data-a="uncomplete">${ic("undo","sm")} Not completed</button>`:`<button class="btn earth" data-a="complete">${ic("flag","sm")} Mark completed</button>`}
    <button class="btn" data-a="tab" data-k="docs">${ic("shield","sm")} Visa & safety</button>
    <button class="btn" data-a="share-open">${ic("share","sm")} Share${isCloud()&&(t.members||[]).length>1?` · ${t.members.length}`:""}</button>
    <button class="btn" data-a="export">${ic("image","sm")} Image / PDF</button>
    <button class="btn icon" data-a="fav" data-id="${t.id}" title="Favourite" style="${t.fav?"color:#E2A400":""}">${ic("star")}</button>
    <button class="btn icon" data-a="share" title="Copy as text">${ic("copy")}</button>
    <button class="btn icon" data-a="dup" data-id="${t.id}" title="Duplicate">${ic("plus")}</button>
    <button class="btn icon danger" data-a="del" data-id="${t.id}" title="Delete">${ic("trash")}</button>
   </div></div>${tripBody(t,false)}`;
}
function tripBody(t,preview){
  if(t.start)ensureTripWeather(t);
  const st=STYLES.find(s=>s.id===t.style);const stops=tripStops(t);const ed=S.edit&&!preview;const b=computeBudget(t);const n=t.group.length;
  const tabs=[["itin","list","Itinerary"],["map","map","Map & route"],["book","bed","Flights & stays"],["budget","wallet","Budget"],["docs","shield","Visa & safety"],["pack","lug","Packing"],["dares","target","Challenges"],["notes","note","Notes"]].concat(isCloud()&&!preview?[["chat","coffee","Chat"]]:[]);
  const tab=S.tab;
  const head=`<div class="thead">${scene(t.style||"custom",190)}<div class="over">
    ${ed?`<input class="inp" data-f="title" value="${esc(t.title)}">`:`<h1>${esc(t.title)}</h1>`}
    <div class="meta"><span>${t.countries.map(flag).join(" ")||"🌍"} ${t.countries.map(cname).join(", ")||"Add a country"}</span><span>${ic("calendar","sm")} ${t.start?fmtD(t.start,{day:"numeric",month:"short"})+" – "+fmtD(tripEnd(t)):"Flexible dates"}</span><span>${ic("clock","sm")} ${dn(t.days.length)}</span><span class="avs">${t.group.map(p=>avatar(p,22)).join("")} ${n}</span>${st?`<span>${st.emoji} ${st.name}</span>`:`<span>✍️ Custom</span>`}<button class="mbtn" data-a="pp" data-v="${DB.settings.pp?0:1}" title="Toggle total / per person">${ic("wallet","sm")} ≈ ${priceLabel(b.total,n,true)}${n>1?" ⇄":""}</button></div></div></div>`;
  let body="";
  if(tab==="itin"){
    body=ed?editDays(t):`${t.bare?basicsBox(t,preview):""}<div class="spread" style="margin:-6px 0 14px"><div class="row" style="gap:6px">${segmentsOf(t).filter(g=>g.name).map(g=>`<span class="pill b">${flag(g.cc)} ${esc(cityQ(g.name))} · ${plural(g.days.length,"day")}</span>`).join("")}</div><button class="btn sm pri" data-a="adj-open" data-pv="${preview?1:0}">${ic("edit","sm")} Change days & stops</button></div>
    ${!preview&&tripStatus(t)!=="completed"?`<div class="muted" style="margin:-6px 0 14px">Tip: tick off activities as you do them on the road ✓</div>`:""}
    ${t.days.length?t.days.map((d,i)=>{const date=t.start?addDays(t.start,i):null;return `<div class="day"><div class="num"><b>${i+1}</b><small>${date?fmtD(date,{weekday:"short"})+"<br>"+fmtD(date,{day:"numeric",month:"short"}):"Day"}</small></div>
      <div class="card"><div class="dh"><h3>${esc(d.title||"Day "+(i+1))}</h3><span class="row" style="gap:6px">${wxChip(dayWx(t,i),true)}${d.city?`<span class="pill b">${flag(d.cc)} ${esc(d.city)}</span>`:""}</span></div>
      ${d.items.length?d.items.map(it=>`<div class="item ${it.done?"done":""} ${it.cat==="travel"?"travel":""} ${it.cat==="dare"?"dare":""}"><span class="t">${esc(it.time)}</span><span class="e">${(CATS[it.cat]||CATS.other).emoji}</span><div><div class="ti">${it.cat==="dare"?"Dare: ":""}${esc(it.title)}</div>${it.note?`<div class="no">${esc(it.note)}</div>`:""}</div>${preview?"<span></span>":`<span class="row" style="gap:4px;flex-wrap:nowrap"><button class="like ${(it.likes||[]).includes(myId())?"on":""}" data-a="like" data-d="${d.id}" data-i="${it.id}" title="${(it.likes||[]).length?((it.likes||[]).map(u=>u===myId()?"You":(CL.profiles[u]||{}).name||"Someone").join(", ")+" liked this"):"Like"}">♥${(it.likes||[]).length?" "+it.likes.length:""}</button><input type="checkbox" ${it.done?"checked":""} data-done="${d.id}|${it.id}" title="Done"></span>`}</div>`).join(""):`<div class="muted">Free day – nothing planned yet.</div>`}
      </div></div>`;}).join(""):`<div class="card empty"><div class="big">🗒️</div><p>No days yet.</p><button class="btn pri" data-a="edit-on">Start editing</button></div>`}`;
  } else if(tab==="map"){
    const legs=[];for(let i=1;i<stops.length;i++)legs.push(legInfo(stops[i-1],stops[i],t.style));
    const street=leafletOK()&&S.mapMode!=="simple";
    body=`<div class="spread" style="margin:-6px 0 12px"><div class="seg">${[["street","Street map"],["simple","Simple map"]].map(([k,l])=>`<button class="${(street?"street":"simple")===k?"on":""}" data-a="map-mode" data-v="${k}" ${k==="street"&&!leafletOK()?"disabled":""}>${l}</button>`).join("")}</div>${t.start?`<span class="muted">${(()=>{const w=stopWx(t,0);return w?(w.kind==="forecast"?"Weather: live forecast":"Weather: typical for these dates (last year)"):"Loading weather…";})()}</span>`:`<span class="muted">Add a start date to see the weather</span>`}</div>
    <div class="grid two" style="grid-template-columns:minmax(0,2fr) minmax(260px,1fr);align-items:start">${street?`<div class="lmap" id="lmap" style="height:470px"></div>`:tripMap(t)}
      <div class="card pad"><h3 style="margin-bottom:12px">Route</h3><div class="legs">${stops.map((s,i)=>`<div class="leg"><b class="nb">${i+1}</b><span class="fl">${flag(s.cc)}</span><div style="flex:1"><b>${esc(s.name)}</b><div class="muted">${plural(s.nights,"day")}${(()=>{const w=stopWx(t,i);return w?` · ${WX_ICON(w.code)} ${w.max}°/${w.min}°${w.rainDays?` · ${plural(w.rainDays,"rainy day")}`:""}`:"";})()}</div>${PR(s.cc)?`<div class="muted">≈ ${money(dailyPP(s.cc,t.tier||"comfort",t.style))} pp/day · <a href="#" data-a="prices" data-cc="${s.cc}">prices</a></div>`:""}</div><button class="btn icon ghost" data-a="meet-city" data-n="${esc(cityQ(s.name))}" title="Meet-ups here">${ic("coffee","sm")}</button></div>${legs[i]?`<div class="muted" style="padding-left:14px">${legs[i].em} ${legs[i].mode} · ${fmtDist(legs[i].km)} · ~${legs[i].hrs} h</div>`:""}`).join("")}</div>
      ${stops.length>1?`<div class="muted" style="margin-top:12px">Total distance ≈ ${fmtDist(legs.reduce((s,l)=>s+l.km,0))}</div>`:""}${stops.some(s=>s.approx)?`<div class="muted" style="margin-top:6px">≈ = approximate location</div>`:""}</div></div>`;
  } else if(tab==="book"){
    body=bookHTML(t,preview);
  } else if(tab==="budget"){
    const parts=[["✈️ Flights",b.flights,"#79B8E3"],["🧳 Luggage fees",b.bags,"#9FB7C4"],["🛏️ Accommodation",b.lodging,"#7FC8A3"],[t.bare?"🥖 Basic food & water":"🍽️ Food & drink",b.food,"#F2C14E"],["🎟️ Activities",b.acts,"#E7A27B"],["🚌 Local transport",b.local,"#C9A6E0"],["🚆 Trains & transfers",b.transport,"#A792D0"]].filter(p=>p[1]>1);
    const spent=(t.expenses||[]).reduce((s,e)=>s+(+e.amount||0),0);const tot=b.total;
    body=`${t.bare?basicsBox(t,preview):""}<div class="grid g2" style="align-items:start;${t.bare?"margin-top:16px":""}"><div class="card pad"><div class="spread"><h3>Estimated cost</h3>${n>1?`<div class="seg"><button class="${DB.settings.pp?"":"on"}" data-a="pp" data-v="0">Total</button><button class="${DB.settings.pp?"on":""}" data-a="pp" data-v="1">Per person</button></div>`:""}</div>
      <div class="row" style="margin:12px 0 18px;gap:26px"><div><div class="display" style="font-size:34px;font-weight:800">${money(DB.settings.pp&&n>1?tot/n:tot)}</div><div class="muted">${DB.settings.pp&&n>1?"per person":"total for "+plural(n,"traveller")}</div></div><div><div class="display" style="font-size:22px;font-weight:700">${money(tot/Math.max(1,t.days.length)/(DB.settings.pp&&n>1?n:1))}</div><div class="muted">per day${DB.settings.pp&&n>1?" pp":""}</div></div></div>
      ${parts.map(p=>`<div style="margin-bottom:12px"><div class="spread"><span>${p[0]}</span><b>${money(DB.settings.pp&&n>1?p[1]/n:p[1])}</b></div><div class="bar"><i style="width:${p[1]/tot*100}%;background:${p[2]}"></i></div></div>`).join("")}
      <div class="muted">${t.bare?`Barebones: flights${t.basics?", hotel and basic food & water":" and hotel only"}. `:""}Estimate for ${t.tier} level, ${t.luggage==="checked"?"with a checked bag":"carry-on only"}${t.flights?", flights from "+esc(cityQ((t.from||homeCity()).name)):", without flights from home"}. ${b.rooms} room${b.rooms>1?"s":""}; kids under 12 get child prices.</div>
      ${n>1?`<h3 style="margin:18px 0 8px">Split between everyone</h3>${t.group.map(p=>`<div class="pack">${avatar(p,26)}<span>${esc(isMe(p)?"You":p.name)}</span><b style="margin-left:auto">${money(tot/n)}</b></div>`).join("")}`:""}
      ${!preview?`<div class="field" style="margin-top:16px"><label>My budget (${curCode()})</label><input class="inp" type="number" min="0" data-f="myBudget" value="${t.myBudget||""}" placeholder="e.g. 2500">${t.myBudget?`<span class="muted">${toCur(tot)>t.myBudget?`⚠️ Estimate is ${fmtCur(toCur(tot)-t.myBudget)} over your budget`:`✓ ${fmtCur(t.myBudget-toCur(tot))} buffer`}</span>`:""}</div>`:""}
      </div>
      ${preview?"":`<div class="card pad"><div class="spread"><h3>Expense tracker</h3><b>${fmtCur(spent)}${t.myBudget?` <span class="muted">/ ${fmtCur(t.myBudget)}</span>`:""}</b></div>
      ${t.myBudget?`<div class="bar" style="margin:10px 0"><i style="width:${Math.min(100,spent/t.myBudget*100)}%;background:${spent>t.myBudget?"var(--danger)":"var(--earth-strong)"}"></i></div>`:""}
      <div style="margin-top:10px">${(t.expenses||[]).map(e=>`<div class="pack"><span>${esc(e.label)}</span>${e.by?`<span class="muted">· ${esc(e.by)}</span>`:""}<b style="margin-left:auto">${fmtCur(+e.amount||0)}</b><button class="btn icon ghost del" style="margin-left:4px" data-a="rm-exp" data-id="${e.id}">${ic("x","sm")}</button></div>`).join("")||`<div class="muted">Log what you spend on the road.</div>`}</div>
      <form class="row" style="margin-top:12px" data-form="exp"><input class="inp" name="l" placeholder="What? e.g. Museum tickets" style="flex:2;min-width:140px" required><input class="inp" name="a" type="number" step="0.01" placeholder="Amount" style="flex:1;min-width:90px" required>${n>1?`<select class="inp" name="by" style="width:auto">${t.group.map(p=>`<option>${esc(isMe(p)?"You":p.name)}</option>`).join("")}</select>`:""}<button class="btn pri">${ic("plus","sm")}</button></form>
      ${n>1&&spent?settleHTML(t):""}</div>`}</div>`;
  } else if(tab==="docs"){
    body=`<div class="card pad" style="max-width:900px">${docsHTML(t.countries,t.group)}</div>`;
  } else if(tab==="pack"){
    const P=t.packing||[];const done=P.filter(p=>p.done).length;
    body=`<div class="card pad" style="max-width:720px"><div class="spread"><h3>Packing list</h3><span class="pill g">${done}/${P.length} packed</span></div>
    <div class="muted">${t.luggage==="checked"?"🧳 Checked bag – usually max 20–23 kg.":"🎒 Carry-on only – usually max 7–10 kg and liquids ≤100 ml."}</div>
    <div class="bar" style="margin:12px 0 14px"><i style="width:${P.length?done/P.length*100:0}%;background:var(--earth-strong)"></i></div>
    ${(()=>{const ws=tripStops(t).map((s,i)=>stopWx(t,i)).filter(Boolean);if(!ws.length||preview)return "";const mn=Math.min(...ws.map(w=>w.min)),mx=Math.max(...ws.map(w=>w.max)),rain=ws.reduce((s,w)=>s+w.rainDays,0);const have=new Set(P.map(p=>norm(p.text)));
      const sug=[];if(mn<=8)sug.push("Warm coat, hat & gloves");if(mn<=14&&mn>8)sug.push("Warm layer for the evenings");if(mx>=27)sug.push("Sunscreen & sun hat","Light, breathable clothes");if(rain>=2)sug.push("Umbrella or rain jacket","Waterproof shoes");const s2=sug.filter(x=>!have.has(norm(x)));
      return s2.length?`<div class="wxsug"><span class="muted">For ${mn}° – ${mx}°${rain?` and ${plural(rain,"rainy day")}`:""}:</span> ${s2.map(x=>`<button class="chip" data-a="pack-sug" data-v="${esc(x)}">+ ${esc(x)}</button>`).join("")}</div>`:"";})()}
    ${P.map(p=>`<label class="pack ${p.done?"done":""}"><input type="checkbox" ${p.done?"checked":""} ${preview?"disabled":""} data-pack="${p.id}"><span>${esc(p.text)}</span>${preview?"":`<button class="btn icon ghost del" data-a="rm-pack" data-id="${p.id}">${ic("x","sm")}</button>`}</label>`).join("")}
    ${preview?"":`<form class="row" style="margin-top:12px" data-form="pack"><input class="inp" name="t" placeholder="Add an item…" style="flex:1" required><button class="btn pri">${ic("plus","sm")} Add</button></form>`}</div>`;
  } else if(tab==="dares"){
    const C=t.challenges||[];const done=C.filter(c=>c.done);const xp=done.reduce((s,c)=>s+XP_OF[c.lvl],0);
    body=`<div class="card pad" style="max-width:780px"><div class="spread"><div><h3>Comfort-zone challenges</h3><div class="muted">Small dares that turn a good trip into a great story.</div></div><span class="pill g">${done.length}/${C.length} done · ${xp} XP</span></div>
    <div style="margin-top:12px">${C.map(c=>`<label class="pack ${c.done?"done":""}"><input type="checkbox" ${c.done?"checked":""} ${preview?"disabled":""} data-chal="${c.id}"><span style="font-size:20px">${c.em}</span><span>${esc(c.t)}</span><span class="pill ${c.lvl===3?"a":c.lvl===2?"y":"g"}" style="margin-left:auto">${["","😊 Easy","😬 Brave","🤯 Wild"][c.lvl]} · ${XP_OF[c.lvl]} XP</span></label>`).join("")}</div>
    ${preview?"":`<div class="row" style="margin-top:12px"><button class="btn sm" data-a="chal-more" data-l="1">+ Easy dare</button><button class="btn sm" data-a="chal-more" data-l="2">+ Brave dare</button><button class="btn sm" data-a="chal-more" data-l="3">+ Wild dare</button></div>`}</div>`;
  } else if(tab==="chat"&&!preview){
    body=chatHTML(t);
  } else {
    body=`<div class="card pad" style="max-width:820px"><h3 style="margin-bottom:10px">Notes & bookings</h3>${preview?`<p class="sub">Save this itinerary to add notes, booking codes and ideas.</p>`:`<textarea class="inp" data-f="notes" style="min-height:260px" placeholder="Flight numbers, hotel confirmations, restaurant ideas, phrases to learn…">${esc(t.notes||"")}</textarea><div class="muted" style="margin-top:6px">Saved automatically.</div>`}
    ${st?`<div class="section"><h3>About this trip style</h3><p class="sub">${st.emoji} <b>${st.name}</b> – ${st.desc}<br>Recommended stay: ${st.stay}.</p></div>`:""}</div>`;
  }
  return `${head}<div class="tabs no-print">${tabs.map(([k,i,l])=>`<button class="${tab===k?"on":""}" data-a="tab" data-k="${k}">${ic(i,"sm")} ${l}</button>`).join("")}</div>${body}`;
}
function settleHTML(t){
  const n=t.group.length;const names=t.group.map(p=>isMe(p)?"You":p.name);const paid={};names.forEach(x=>paid[x]=0);
  t.expenses.forEach(e=>{const k=e.by&&paid[e.by]!=null?e.by:"You";paid[k]+=+e.amount||0;});
  const tot=Object.values(paid).reduce((a,b)=>a+b,0),share=tot/n;
  const bal=names.map(x=>({x,v:paid[x]-share}));const debt=bal.filter(b=>b.v<-.5).map(b=>({...b})),cred=bal.filter(b=>b.v>.5).map(b=>({...b}));const out=[];
  debt.forEach(d=>{cred.forEach(c=>{if(d.v>=-.5||c.v<=.5)return;const a=Math.min(-d.v,c.v);out.push(`${esc(d.x)} → ${esc(c.x)}: <b>${fmtCur(a)}</b>`);d.v+=a;c.v-=a;});});
  return `<h3 style="margin:16px 0 6px">Settle up</h3><div class="muted">Each share: ${fmtCur(share)}</div>${out.length?out.map(o=>`<div class="pack">${o}</div>`).join(""):`<div class="muted">All square ✓</div>`}`;
}
function bookHTML(t,preview){
  const fl=flightPlan(t);const stops=tripStops(t);const st=STYLES.find(s=>s.id===t.style);const g=t.group;const ages=g.map(p=>+p.age||30);
  const adults=ages.filter(a=>a>=18).length||1,kids=ages.length-adults,rooms=Math.max(1,Math.ceil(ages.filter(a=>a>=12).length/2));
  const tm=TIER_M[t.tier]||1;
  const stayType={budget:"Hostel, guesthouse or 2★",comfort:"3–4★ hotel or boutique B&B",luxury:"5★ hotel or design boutique"}[t.tier];
  const styleType={beach:"beachfront hotel",ski:"ski-in/ski-out chalet",outdoors:"lodge or cabin",wellness:"spa resort",backpacker:"social hostel",romantic:"boutique with a view",family:"family apartment or suite",roadtrip:"B&B or small inn"}[t.style];
  let dayIdx=0;
  const stays=stops.map((s,i)=>{const startIdx=dayIdx;dayIdx+=s.nights;const nights=i===stops.length-1?Math.max(1,s.nights-1):s.nights;const ci=t.start?addDays(t.start,startIdx):"",co=t.start?addDays(t.start,startIdx+nights):"";
    const per=dailyBase(s.cc)*.9*tm*(st?st.mult:1);const q=cityQ(s.name)+", "+cname(s.cc);
    if(s.cc==="AQ") return `<div class="bk"><div class="spread"><div><b>${flag(s.cc)} ${esc(s.name)}</b> <span class="muted">· ${plural(nights,"night")} on board</span></div><span class="pill b">≈ ${money(dailyBase("AQ")*tm)} pp / night all-in</span></div><div class="muted">🚢 Expedition ship cruise from Ushuaia (meals, landings & guides included). Book only with IAATO member operators.</div><div class="row" style="margin-top:8px"><a class="btn sm" href="https://iaato.org" target="_blank" rel="noopener">IAATO operators ↗</a></div></div>`;
    return `<div class="bk"><div class="spread"><div><b>${flag(s.cc)} ${esc(s.name)}</b> <span class="muted">· ${plural(nights,"night")}${ci?" · "+fmtD(ci,{day:"numeric",month:"short"})+" → "+fmtD(co,{day:"numeric",month:"short"}):""}</span></div><span class="pill g">${money(per*.75)}–${money(per*1.3)} / room / night</span></div>
      <div class="muted">📍 Where to stay: <b>${esc(NEIGH[s.name]||"Central, close to the old town or main station")}</b> · 🛏️ ${stayType}${styleType?" – or a "+styleType:""} · ${plural(rooms,"room")} for ${plural(g.length,"guest")}</div>
      <div class="row" style="margin-top:8px"><a class="btn sm" target="_blank" rel="noopener" href="https://www.booking.com/searchresults.html?ss=${enc(q)}${ci?`&checkin=${ci}&checkout=${co}`:""}&group_adults=${adults}&group_children=${kids}&no_rooms=${rooms}">Booking.com ↗</a><a class="btn sm" target="_blank" rel="noopener" href="https://www.airbnb.com/s/${enc(q)}/homes?${ci?`checkin=${ci}&checkout=${co}&`:""}adults=${adults}&children=${kids}">Airbnb ↗</a><a class="btn sm" target="_blank" rel="noopener" href="https://www.google.com/travel/search?q=${enc("hotels in "+q)}">Google Hotels ↗</a></div></div>`;}).join("");
  const flights=fl.map(f=>{const n=g.length;return `<div class="bk"><div class="spread"><div><span class="pill ${f.lbl==="Outbound"?"b":f.lbl==="Return"?"y":""}">${f.lbl}</span> <b>${esc(cityQ(f.from))} → ${esc(cityQ(f.to))}</b> <span class="muted">${f.date?"· "+fmtD(f.date,{weekday:"short",day:"numeric",month:"short"}):""}</span></div><span class="pill g">${money(f.price[0])}–${money(f.price[1])} pp</span></div>
    <div class="muted">${f.fly?`✈️ ≈ ${fmtDist(f.km)} · ~${f.hrs} h incl. airport time${f.km>5000?" (likely 1 stop)":""} · ${t.luggage==="checked"?`🧳 checked bag ≈ ${money(f.bag[0])}–${money(f.bag[1])} pp`:`🎒 carry-on${f.bag[1]?` (budget airlines may charge ${money(f.bag[0])}–${money(f.bag[1])} for a cabin trolley)`:" – usually included"}`}`:`🚆 Only ${fmtDist(f.km)} – train, bus or car is easier than flying (~${f.hrs} h)`}</div>
    <div class="row" style="margin-top:8px">${f.fly?`<a class="btn sm" target="_blank" rel="noopener" href="https://www.google.com/travel/flights?q=${enc(`Flights from ${cityQ(f.from)} to ${cityQ(f.to)}${f.date?" on "+f.date:""} ${n} passengers`)}">Google Flights ↗</a><a class="btn sm" target="_blank" rel="noopener" href="https://www.skyscanner.net/">Skyscanner ↗</a>`:`<a class="btn sm" target="_blank" rel="noopener" href="https://www.rome2rio.com/map/${enc(cityQ(f.from))}/${enc(cityQ(f.to))}">Rome2Rio ↗</a>`}</div></div>`;}).join("");
  return `<div class="grid g2" style="align-items:start"><div><div class="spread" style="margin-bottom:10px"><h3>Flight suggestions</h3>${!preview?`<div class="seg"><button class="${t.luggage==="carry"?"on":""}" data-a="trip-lug" data-v="carry">🎒 Carry-on</button><button class="${t.luggage==="checked"?"on":""}" data-a="trip-lug" data-v="checked">🧳 + Checked</button></div>`:""}</div>
    ${t.flights===false?`<div class="muted" style="margin-bottom:8px">Flights from home are excluded from this trip. ${!preview?`<button class="btn sm ghost" data-a="trip-flights" data-v="1">Include them</button>`:""}</div>`:`<div class="muted" style="margin-bottom:8px">From ${flag((t.from||homeCity()).cc)} ${esc((t.from||homeCity()).name)} · economy${t.tier==="luxury"?"/business":""} estimates per person.</div>`}
    ${flights||`<div class="muted">No flights needed.</div>`}</div>
    <div><h3 style="margin-bottom:10px">Where to stay</h3>${stays||`<div class="muted">Add cities to see stay suggestions.</div>`}</div></div>
    <div class="muted" style="margin-top:12px">Prices are typical ranges, not live quotes – the links open real-time search with your dates and group filled in.</div>`;
}
function editDays(t){
  const cityOpts=[...new Set(t.countries.flatMap(cc=>citiesOf(cc).map(c=>c.name)))];
  const seg=(k,opts)=>`<div class="seg">${opts.map(([v,l])=>`<button class="${t[k]===v?"on":""}" data-a="trip-set" data-k="${k}" data-v="${v}">${l}</button>`).join("")}</div>`;
  return `<div class="card pad" style="margin-bottom:16px"><div class="grid g3">
    <div class="field"><label>Start date</label><input type="date" class="inp" data-f="start" value="${t.start||""}"></div>
    <div class="field"><label>End date</label><input type="date" class="inp" data-f="end" value="${t.start?tripEnd(t):""}" ${t.start?"":"disabled"} title="Changing the end date adds or removes days"></div>
    <div class="field"><label>Flying from</label><input class="inp" list="citylist2" data-f="from" value="${esc((t.from||homeCity()).name)}"><datalist id="citylist2">${Object.keys(CITY_DATA).flatMap(cc=>CITY_DATA[cc].map(r=>`<option value="${esc(r[0])}">`)).join("")}</datalist></div>
    <div class="field"><label>Comfort level</label>${seg("tier",[["budget","💸"],["comfort","🙂"],["luxury","💎"]])}</div>
    <div class="field"><label>Luggage</label>${seg("luggage",[["carry","🎒 Carry-on"],["checked","🧳 Checked"]])}</div>
    <div class="field"><label>Countries</label><div class="row">${t.countries.map(cc=>`<span class="chip on">${flag(cc)} ${esc(cname(cc))} <span class="x" data-a="trip-rm-cc" data-cc="${cc}">✕</span></span>`).join("")}<select class="inp" style="width:auto" data-addcc><option value="">+ Add</option>${ALL_CC.filter(c=>!t.countries.includes(c)).map(c=>`<option value="${c}">${CTRY[c].flag} ${esc(CTRY[c].name)}</option>`).join("")}</select></div></div>
  </div><h3 style="margin:16px 0 8px">Co-travellers</h3>${groupEditor(t.group,"trip")}</div>
  <datalist id="citylist">${cityOpts.map(c=>`<option value="${esc(c)}">`).join("")}</datalist>
  ${t.days.map((d,i)=>`<div class="day ed-day"><div class="num"><b>${i+1}</b><small>${t.start?fmtD(addDays(t.start,i),{day:"numeric",month:"short"}):""}</small></div><div class="card">
    <div class="dh"><div class="row" style="flex:1"><input class="inp" placeholder="Day title" data-f="day.title" data-d="${i}" value="${esc(d.title||"")}"><input class="inp" style="max-width:220px" list="citylist" placeholder="📍 City" data-f="day.city" data-d="${i}" value="${esc(d.city||"")}"></div>
    <div class="row"><button class="btn icon ghost" data-a="day-mv" data-d="${i}" data-x="-1" title="Move up">${ic("up","sm")}</button><button class="btn icon ghost" data-a="day-mv" data-d="${i}" data-x="1" title="Move down">${ic("down","sm")}</button><button class="btn icon ghost" data-a="day-dup" data-d="${i}" title="Duplicate day">${ic("copy","sm")}</button><button class="btn icon ghost danger" data-a="day-rm" data-d="${i}" title="Delete day">${ic("trash","sm")}</button></div></div>
    ${d.items.map((it,j)=>`<div class="ed-item"><input type="time" class="inp" data-f="item.time" data-d="${i}" data-i="${j}" value="${esc(it.time)}"><select class="inp" data-f="item.cat" data-d="${i}" data-i="${j}">${Object.entries(CATS).map(([k,c])=>`<option value="${k}" ${it.cat===k?"selected":""}>${c.emoji} ${c.label}</option>`).join("")}</select><input class="inp wide" placeholder="Activity" data-f="item.title" data-d="${i}" data-i="${j}" value="${esc(it.title)}"><input class="inp wide" placeholder="Note (optional)" data-f="item.note" data-d="${i}" data-i="${j}" value="${esc(it.note||"")}">
      <div class="row" style="gap:2px;flex-wrap:nowrap"><button class="btn icon ghost" data-a="it-mv" data-d="${i}" data-i="${j}" data-x="-1">${ic("up","sm")}</button><button class="btn icon ghost" data-a="it-mv" data-d="${i}" data-i="${j}" data-x="1">${ic("down","sm")}</button><button class="btn icon ghost danger" data-a="it-rm" data-d="${i}" data-i="${j}">${ic("x","sm")}</button></div></div>`).join("")}
    <div class="row"><button class="btn sm" data-a="it-add" data-d="${i}">${ic("plus","sm")} Add activity</button>${d.city?`<button class="btn sm ghost" data-a="it-idea" data-d="${i}">${ic("compass","sm")} Suggest something</button><button class="btn sm ghost" data-a="it-dare" data-d="${i}">🎯 Add a dare</button>`:""}</div></div></div>`).join("")}
  <div class="row" style="padding-left:78px"><button class="btn pri" data-a="day-add">${ic("plus","sm")} Add day</button><span class="muted">Changes save automatically.</span></div>`;
}

/* ---------- Meet-ups ---------- */
const MEET={mode:"local",db:null,user:null,myId:"me",list:[],loading:false,canWrite:true,unsub:null,err:""};
async function initShared(){
  if(!(window.claude&&claude.use))return;
  try{
    const [db,user]=await Promise.all([claude.use("db"),claude.use("user")]);
    if(!db)return;
    MEET.db=db;MEET.user=user;MEET.mode="shared";MEET.loading=true;
    try{const id=user?await user.id():null;if(id)MEET.myId=id;}catch(e){}
    try{const cw=user&&user.can?await user.can("data.write"):null;if(cw===false)MEET.canWrite=false;}catch(e){}
    const timer=setTimeout(()=>{if(MEET.loading){MEET.loading=false;MEET.err="Meet-ups can't be reached right now – showing what we have.";if(S.view==="meet")render();}},10000);
    MEET.unsub=db.collection("meetups").onSnapshot(snap=>{if(!snap.metadata.fromCache){clearTimeout(timer);MEET.loading=false;MEET.err="";}MEET.list=snap.docs.map(d=>Object.assign({id:d.id},d.data()));if(S.view==="meet")render();},
      e=>{clearTimeout(timer);MEET.loading=false;MEET.err="Meet-ups are unavailable here ("+(e&&e.code||"error")+").";if(S.view==="meet")render();});
    if(S.view==="meet")render();
  }catch(e){}
}
const meetList=()=>MEET.mode==="shared"||MEET.mode==="cloud"?MEET.list:DB.meetups;
async function meetWrite(id,data,del){
  if(MEET.mode==="cloud"){try{if(del)await CL.api.deleteMeetup(id);else await CL.api.saveMeetup(id,data);return true;}catch(e){netErr(e);return false;}}
  if(MEET.mode==="shared"){try{const ref=MEET.db.collection("meetups").doc(id);if(del)await ref.delete();else await ref.set(data);return true;}catch(e){toast(e&&e.code==="invalid_argument"?"You can view meet-ups but not post here – ask the owner for Contributor access.":"Couldn't save ("+(e&&e.code||"error")+")");return false;}}
  if(del)DB.meetups=DB.meetups.filter(x=>x.id!==id);else{const i=DB.meetups.findIndex(x=>x.id===id);const doc=Object.assign({id},data);if(i>=0)DB.meetups[i]=doc;else DB.meetups.push(doc);}save();render();return true;
}
function myTripPlaces(){const out=[];DB.trips.filter(t=>t.status!=="completed"&&t.start).forEach(t=>t.days.forEach((d,i)=>{if(d.city)out.push({city:cityQ(d.city),cc:d.cc,date:addDays(t.start,i),trip:t.title});}));return out;}
function vMeet(m){
  const places=myTripPlaces();const q=S.meetQ.toLowerCase();
  const list=meetList().filter(x=>x.date>=today()).filter(x=>!S.meetType||x.type===S.meetType).filter(x=>!q||(x.city+" "+cname(x.cc)+" "+x.title).toLowerCase().includes(q))
    .map(x=>Object.assign({},x,{match:places.find(p=>p.city.toLowerCase()===String(x.city).toLowerCase()&&Math.abs(diffDays(p.date,x.date))<=0)}))
    .filter(x=>!S.meetNear||x.match).sort((a,b)=>(b.match?1:0)-(a.match?1:0)||(a.date+a.time).localeCompare(b.date+b.time));
  const cities=[...new Set(places.map(p=>p.city))];
  m.innerHTML=`<div class="topbar"><div><h1>Meet-ups</h1><div class="sub">Meet fellow travellers in the same place at the same time – for a coffee, a hike or a food crawl.</div></div><button class="btn pri" data-a="meet-new" ${MEET.mode==="shared"&&!MEET.canWrite?"disabled":""}>${ic("plus","sm")} Host a meet-up</button></div>
  <div class="card pad notice" style="margin-bottom:16px">${MEET.mode==="cloud"?`<b>Live board.</b> Every TravelTropia member sees these meet-ups.`:MEET.mode==="shared"?`🌐 <b>Shared board.</b> Everyone you share this TravelTropia page with sees these meet-ups live${MEET.canWrite?" and can join":" (you can view only)"}.`:`💻 <b>This device only.</b> In this offline copy, meet-ups are saved in your browser. Open the shared TravelTropia link to post on the live board everyone sees.`} ${MEET.err?`<span class="t-a">${esc(MEET.err)}</span>`:""}</div>
  <div class="spread" style="margin-bottom:14px"><div class="row"><div class="search" style="width:240px">${ic("search")}<input class="inp" id="msq" placeholder="Search a city…" value="${esc(S.meetQ)}"></div>
    <div class="row" style="gap:6px"><button class="chip ${!S.meetType?"on":""}" data-a="meet-type" data-v="">All</button>${Object.entries(MEET_TYPES).map(([k,v])=>`<button class="chip ${S.meetType===k?"on":""}" data-a="meet-type" data-v="${k}">${v[0]} ${v[1]}</button>`).join("")}</div></div>
    <label class="row"><input type="checkbox" data-meetnear ${S.meetNear?"checked":""}> Only where my trips are</label></div>
  ${cities.length?`<div class="row" style="margin-bottom:14px;gap:6px"><span class="muted">Your trip cities:</span>${cities.slice(0,8).map(c=>`<button class="chip" data-a="meet-city" data-n="${esc(c)}">📍 ${esc(c)}</button>`).join("")}</div>`:""}
  ${MEET.loading?`<div class="card empty"><div class="big">⏳</div>Loading meet-ups…</div>`:list.length?`<div class="grid auto">${list.map(meetCard).join("")}</div>`:`<div class="card empty"><div class="big">☕</div><h3>No meet-ups ${q?"in "+esc(S.meetQ):"yet"}</h3><p class="sub">Be the first! Host a coffee or a walk where you're travelling – other TravelTropia travellers can join.</p><button class="btn pri" data-a="meet-new">${ic("plus","sm")} Host a meet-up</button></div>`}
  <div class="card pad section"><h3>Meeting people safely</h3><div class="grid g3" style="margin-top:10px"><div class="leg">☀️ Meet in busy public places during the day</div><div class="leg">📍 Tell a friend where you're going</div><div class="leg">🏨 Don't share your room number or travel documents</div><div class="leg">🍹 Watch your drink, pay your own way</div><div class="leg">🚕 Arrange your own transport home</div><div class="leg">🙅 Leave whenever you feel uncomfortable</div></div></div>`;
}
function meetCard(x){
  const T=MEET_TYPES[x.type]||MEET_TYPES.other;const att=x.attendees||[];const joined=att.some(a=>a.id===MEET.myId);const host=x.hostId===MEET.myId;const full=x.max&&att.length>=x.max;
  return `<div class="card meet">${`<div class="mban t-${x.type||"other"}"><span>${T[0]}</span></div>`}<div class="body">
    <div class="spread"><span class="pill">${T[0]} ${T[1]}</span>${x.match?`<span class="pill g">✨ You're there that day!</span>`:""}</div>
    <h3>${esc(x.title)}</h3>
    <div class="muted">📍 ${flag(x.cc)} ${esc(x.city)} · ${esc(x.place||"")}</div>
    <div class="muted">🗓️ ${fmtD(x.date,{weekday:"short",day:"numeric",month:"short"})}${x.time?" · "+esc(x.time):""}</div>
    ${x.desc?`<p class="sub" style="margin:4px 0">${esc(x.desc)}</p>`:""}
    <div class="spread"><span class="muted">Hosted by <b>${esc(x.hostName||"a traveller")}</b>${host?" (you)":""}</span><span class="muted">${att.length}${x.max?"/"+x.max:""} going</span></div>
    ${att.length?`<div class="muted">👋 ${att.slice(0,6).map(a=>esc(a.name)).join(", ")}${att.length>6?"…":""}</div>`:""}
    ${joined&&x.contact?`<div class="muted">💬 Contact: <b>${esc(x.contact)}</b></div>`:""}
    <div class="row" style="margin-top:6px">${host?`<button class="btn sm danger" data-a="meet-del" data-id="${x.id}">${ic("trash","sm")} Cancel meet-up</button>`:joined?`<button class="btn sm" data-a="meet-leave" data-id="${x.id}">Leave</button>`:`<button class="btn sm pri" data-a="meet-join" data-id="${x.id}" ${full?"disabled":""}>${full?"Full":"👋 Join"}</button>`}<button class="btn sm ghost" data-a="meet-copy" data-id="${x.id}">${ic("copy","sm")} Invite</button></div>
  </div></div>`;
}
function meetModal(pre){
  pre=pre||{};const places=myTripPlaces();
  modal(`<div class="mh"><h2>Host a meet-up</h2>${X}</div>
  <form data-form="meet" class="grid" style="gap:12px">
   ${places.length?`<div class="field"><label>Pick from my trips</label><select class="inp" data-meetfill><option value="">— choose a day of a trip —</option>${places.map((p,i)=>`<option value="${i}">${fmtD(p.date,{day:"numeric",month:"short"})} · ${esc(p.city)} (${esc(p.trip)})</option>`).join("")}</select></div>`:""}
   <div class="field"><label>Title</label><input class="inp" name="title" required placeholder="e.g. Morning coffee & market stroll" value="${esc(pre.title||"")}" autofocus></div>
   <div class="field"><label>Type</label><div class="row" style="gap:6px">${Object.entries(MEET_TYPES).map(([k,v],i)=>`<label class="chip"><input type="radio" name="type" value="${k}" ${i===0?"checked":""} style="width:auto;height:auto"> ${v[0]} ${v[1]}</label>`).join("")}</div></div>
   <div class="grid g2"><div class="field"><label>Country</label><select class="inp" name="cc">${ALL_CC.map(c=>`<option value="${c}" ${(pre.cc||DB.profile.home)===c?"selected":""}>${CTRY[c].flag} ${esc(CTRY[c].name)}</option>`).join("")}</select></div><div class="field"><label>City</label><input class="inp" name="city" required value="${esc(pre.city||"")}"></div></div>
   <div class="grid g3"><div class="field"><label>Date</label><input class="inp" type="date" name="date" min="${today()}" required value="${pre.date||""}"></div><div class="field"><label>Time</label><input class="inp" type="time" name="time" value="10:00"></div><div class="field"><label>Max people</label><input class="inp" type="number" name="max" min="2" max="50" value="6"></div></div>
   <div class="field"><label>Meeting point <span class="muted">(a public place)</span></label><input class="inp" name="place" required placeholder="e.g. Café at the main square"></div>
   <div class="field"><label>Description</label><textarea class="inp" name="desc" style="min-height:70px" placeholder="What's the plan? Who's it for?"></textarea></div>
   <div class="field"><label>Contact <span class="muted">(optional – only shown to people who join, e.g. Instagram handle)</span></label><input class="inp" name="contact" placeholder="@yourhandle"></div>
   <div class="muted">You'll appear as <b>${esc(DB.profile.name)}</b>. Avoid sharing your hotel or room number.</div>
   <div class="row" style="justify-content:flex-end"><button type="button" class="btn" data-a="close">Cancel</button><button class="btn pri">${ic("check","sm")} Post meet-up</button></div></form>`);
}

/* ---------- Passport ---------- */
const BADGES=[
 {em:"🛫",name:"First trip",desc:"Complete your first trip.",p:()=>[DB.trips.filter(t=>t.status==="completed").length,1]},
 {em:"🧭",name:"5 countries",desc:"Visit 5 sovereign countries.",p:()=>[sovCount(),5]},
 {em:"🗺️",name:"10 countries",desc:"Visit 10 sovereign countries.",p:()=>[sovCount(),10]},
 {em:"🌐",name:"25 countries",desc:"Visit 25 sovereign countries.",p:()=>[sovCount(),25]},
 {em:"🏝️",name:"Island hopper",desc:"Visit 3 overseas territories or island regions (like Aruba or Réunion).",p:()=>[terrCount(),3]},
 {em:"🌏",name:"3 continents",desc:"Set foot on 3 different continents.",p:()=>[new Set(DB.visited.map(continentOf)).size,3]},
 {em:"🏆",name:"All 7 continents",desc:"Visit every continent – Antarctica included.",p:()=>[CONTINENTS.filter(c=>DB.visited.some(v=>continentOf(v)===c)).length,7]},
 {em:"🐧",name:"Antarctica!",desc:"Mark Antarctica as visited.",p:()=>[DB.visited.includes("AQ")?1:0,1]},
 {em:"⭐",name:"Dreamer",desc:"Put 10 places on your wishlist.",p:()=>[DB.wishlist.length,10]},
 {em:"🎯",name:"Brave soul",desc:"Complete 5 comfort-zone challenges.",p:()=>[DB.trips.reduce((s,t)=>s+(t.challenges||[]).filter(c=>c.done).length,0),5]},
 {em:"👯",name:"Squad trip",desc:"Plan a trip with 3 or more people.",p:()=>[Math.max(0,...DB.trips.map(t=>t.group.length)),3]},
 {em:"☕",name:"Social butterfly",desc:"Join or host a meet-up.",p:()=>[DB.joined.length,1]},
 {em:"📚",name:"Collector",desc:"Save 5 itineraries.",p:()=>[DB.trips.length,5]},
 {em:"🧠",name:"Trivia streak",desc:"Play the daily trivia 3 days in a row.",p:()=>[triviaStats().streak,3]},
 {em:"🔥",name:"On fire",desc:"Play the daily trivia 7 days in a row.",p:()=>[triviaStats().streak,7]},
 {em:"📐",name:"Bullseye",desc:"Score a perfect 1000 in the daily trivia.",p:()=>[Object.values(DB.trivia).some(r=>r.score>=1000)?1:0,1]},
 {em:"🛂",name:"Multi-passport",desc:"Add a second passport to your profile.",p:()=>[DB.profile.passports.length,2]}];
const bDone=b=>{const [c,g]=b.p();return c>=g;};
function vPassport(m){
  const V=DB.visited,W=DB.wishlist,xp=xpInfo();const pr=DB.profile;
  const pct=xp.next?Math.round((xp.xp-xp.prev)/(xp.next-xp.prev)*100):100;
  m.innerHTML=`<div class="card pad prof-card"><div class="prof">
    <label class="avatar-up" title="Upload a profile picture">${avatar(meP(),88)}<span class="cam">${ic("camera","sm")}</span><input type="file" accept="image/*" data-photo="me" hidden></label>
    <div style="flex:1;min-width:220px"><h1>${esc(pr.name)}'s passport</h1><div class="sub">${pr.passports.map(flag).join(" ")} ${pr.passports.length>1?plural(pr.passports.length,"passport"):esc(cname(pr.passports[0]))+" passport"} · Home: ${esc(pr.homeCity||"")} ${flag(pr.home)} ${pr.age?"· "+pr.age+" yrs":""}</div>
      <div class="row" style="margin-top:8px"><button class="pill g" style="border:0;cursor:pointer" data-a="levels">${xp.em} Level ${xp.level}/${LEVELS.length} · ${xp.title}</button><span class="muted">${xp.xp} XP${xp.next?` · ${xp.next-xp.xp} to next level`:""}</span></div><div class="bar" style="margin-top:6px;max-width:360px"><i style="width:${pct}%;background:var(--earth-strong)"></i></div></div>
    <div class="row">${pr.photo?`<button class="btn sm ghost" data-a="photo-rm">Remove photo</button>`:""}<button class="btn" data-a="settings">${ic("edit","sm")} Edit profile</button></div></div></div>
  <div class="grid g4 section">
    <button class="card stat" data-a="clist" data-k="visited"><div class="bub bg-g">${ic("check")}</div><div><div class="n">${sovCount()}</div><div class="l">Countries visited${terrCount()?` +${terrCount()} terr.`:""} ›</div></div></button>
    <button class="card stat" data-a="clist" data-k="wishlist"><div class="bub bg-b">${ic("star")}</div><div><div class="n">${W.length}</div><div class="l">Want to visit ›</div></div></button>
    <div class="card stat"><div class="bub bg-a">${ic("globe")}</div><div><div class="n">${new Set(V.map(continentOf)).size}<span class="muted" style="font-size:15px">/7</span></div><div class="l">Continents</div></div></div>
    <div class="card stat"><div class="bub bg-y">${ic("flag")}</div><div><div class="n">${DB.trips.filter(t=>t.status==="completed").length}</div><div class="l">Trips completed</div></div></div>
  </div>
  <div class="section"><div class="spread"><h2>Your world map</h2><span class="muted">Click a country to mark it · scroll or use +/− to zoom</span></div>${worldMap()}</div>
  <div class="grid g2 section" style="align-items:start">
    <div class="card pad"><h3 style="margin-bottom:10px">Continents</h3>${CONTINENTS.map(c=>{const n=V.filter(x=>continentOf(x)===c).length,t=CONT_TOTAL[c]||1;return `<div class="cont"><span>${CONT_EMOJI[c]} ${c}</span><div class="bar"><i style="width:${Math.max(n?3:0,n/t*100)}%;background:var(--earth-strong)"></i></div><span class="muted">${n}/${t}</span></div>`;}).join("")}</div>
    <div class="card pad"><div class="spread" style="margin-bottom:10px"><h3>Achievements <span class="muted">${BADGES.filter(b=>bDone(b)).length}/${BADGES.length}</span></h3><button class="btn sm ghost" data-a="badges-all">View details ${ic("arrow","sm")}</button></div><div class="grid g4" style="gap:8px">${BADGES.map((b,i)=>`<button class="badge ${bDone(b)?"":"off"}" data-a="badge" data-i="${i}" title="${esc(b.desc)}"><span class="em">${b.em}</span>${esc(b.name)}</button>`).join("")}</div></div>
  </div>
  ${levelsCard(xp)}
  ${friendsSection()}
  <div class="card pad section"><div class="spread"><div><div class="eyebrow">Travel companions</div><h3>People without an account</h3><div class="muted">Kids, family or friends who aren't on TravelTropia – add them to any itinerary for visa checks and cost splitting.</div></div><button class="btn" data-a="friend-new">${ic("userplus","sm")} Add companion</button></div>
    ${DB.friends.length?`<div class="grid g3" style="margin-top:12px">${DB.friends.map(f=>{const n=DB.trips.filter(t=>t.group.some(p=>p.friendId===f.id)).length;return `<div class="leg">${avatar({friendId:f.id},44)}<div style="flex:1"><b>${esc(f.name)}</b><div class="muted">${(f.passports||[f.passport]).map(flag).join(" ")} ${f.age?f.age+" yrs · ":""}${plural(n,"trip")} together</div></div><button class="btn icon ghost" data-a="friend-edit" data-id="${f.id}">${ic("edit","sm")}</button></div>`;}).join("")}</div>`:`<div class="muted" style="padding:14px 0">No companions added yet.</div>`}</div>
  <div class="card pad section"><div class="spread"><h3>Manage countries</h3><div class="search" style="width:280px">${ic("search")}<input class="inp" id="msearch" placeholder="Find a country…"></div></div><div class="clist" id="mlist" style="margin-top:10px"></div><div class="muted" id="mhint">Type to search all ${ALL_CC.length} countries, territories and Antarctica.</div></div>`;
}
function countryRows(list){return list.map(cc=>{const v=DB.visited.includes(cc),w=DB.wishlist.includes(cc);return `<div class="crow"><span class="fl">${flag(cc)}</span><div class="grow"><b>${esc(cname(cc))}</b><div class="muted">${continentOf(cc)}${CTRY[cc].sov?"":" · territory / region"}</div></div>${SAFETY[cc]?safetyPill(cc):""}
   <button class="btn sm ${v?"pri":""}" data-a="cv" data-cc="${cc}">${v?"✓ Visited":"Visited?"}</button><button class="btn sm ${w?"pri":""}" data-a="cw" data-cc="${cc}" ${v?"disabled":""}>${w?"★ Wishlist":"☆ Wishlist"}</button><button class="btn sm ghost" data-a="plan-cc" data-cc="${cc}" title="Plan a trip here">${ic("compass","sm")}</button></div>`;}).join("");}
function countryListModal(kind){
  const list=(kind==="visited"?DB.visited:DB.wishlist).slice().sort((a,b)=>cname(a).localeCompare(cname(b)));
  const byC={};list.forEach(cc=>{(byC[continentOf(cc)]=byC[continentOf(cc)]||[]).push(cc);});
  modal(`<div class="mh"><h2>${kind==="visited"?"✅ Countries visited":"⭐ Countries I want to visit"} <span class="muted">(${list.length})</span></h2>${X}</div>
  ${list.length?`<div class="clist">${Object.keys(byC).sort().map(c=>`<div class="lbl" style="padding:10px 10px 4px">${CONT_EMOJI[c]||"🌐"} ${c}</div>`+byC[c].map(cc=>`<div class="crow"><span class="fl">${flag(cc)}</span><div class="grow"><b>${esc(cname(cc))}</b></div>
   ${kind==="wishlist"?`<button class="btn sm ghost" data-a="docs-modal" data-cc="${cc}" title="Visa & safety">${ic("shield","sm")}</button><button class="btn sm" data-a="m-plan" data-cc="${cc}">${ic("compass","sm")} Plan</button><button class="btn sm pri" data-a="m-visit" data-cc="${cc}">✓ Been there</button>`:`<button class="btn sm ghost danger" data-a="m-unvisit" data-cc="${cc}">Remove</button>`}</div>`).join("")).join("")}</div>`
  :`<div class="empty"><div class="big">${kind==="visited"?"🧳":"✨"}</div><p>${kind==="visited"?"No countries crossed off yet. Complete a trip or mark countries on your passport map.":"Your wishlist is empty. Save a planned trip or star countries on the passport page."}</p></div>`}
  <div class="row" style="justify-content:space-between;margin-top:16px"><button class="btn" data-a="go-passport">${ic("passport","sm")} Open passport</button><button class="btn pri" data-a="close">Done</button></div>`,"wide");
  S._clist=kind;
}
function friendModal(f){
  f=f||{id:"",name:"",age:"",passport:DB.profile.passport,avatar:"🙂",photo:""};S._fphoto=f.photo||"";
  const av=["🙂","😎","🤠","🧑‍🚀","🦊","🐼","🐯","🦄","🌻","🍀","⚡","🎈"];
  modal(`<div class="mh"><h2>${f.id?"Edit friend":"Add a friend"}</h2>${X}</div>
  <form data-form="friend" data-id="${f.id}" class="grid" style="gap:12px">
   <div class="row"><label class="avatar-up" title="Upload photo"><span class="av" id="fprev" style="width:64px;height:64px;font-size:32px">${f.photo?`<img src="${f.photo}">`:esc(f.avatar||"🙂")}</span><span class="cam">${ic("camera","sm")}</span><input type="file" accept="image/*" data-photo="friend" hidden></label>
   <div class="row" style="gap:4px;flex:1">${av.map(a=>`<label class="chip"><input type="radio" name="avatar" value="${a}" ${f.avatar===a?"checked":""} style="width:auto;height:auto">${a}</label>`).join("")}</div></div>
   <div class="grid g3"><div class="field" style="grid-column:span 2"><label>Name</label><input class="inp" name="name" required value="${esc(f.name)}" autofocus></div><div class="field"><label>Age</label><input class="inp" type="number" name="age" min="0" max="110" value="${f.age||""}"></div></div>
   <div class="grid g2"><div class="field"><label>Passport <span class="muted">(for visa checks)</span></label><select class="inp" name="passport">${ALL_CC.filter(c=>CTRY[c].sov).map(c=>`<option value="${c}" ${(f.passports||[f.passport])[0]===c?"selected":""}>${CTRY[c].flag} ${esc(CTRY[c].name)}</option>`).join("")}</select></div>
   <div class="field"><label>Second passport <span class="muted">(optional)</span></label><select class="inp" name="passport2"><option value="">— none —</option>${ALL_CC.filter(c=>CTRY[c].sov).map(c=>`<option value="${c}" ${(f.passports||[])[1]===c?"selected":""}>${CTRY[c].flag} ${esc(CTRY[c].name)}</option>`).join("")}</select></div></div>
   <div class="row" style="justify-content:space-between">${f.id?`<button type="button" class="btn danger ghost" data-a="friend-del" data-id="${f.id}">${ic("trash","sm")} Remove</button>`:"<span></span>"}<div class="row"><button type="button" class="btn" data-a="close">Cancel</button><button class="btn pri">${ic("check","sm")} Save</button></div></div></form>`);
}

/* ---------- World map interaction ---------- */
function initWorldMap(){
  const box=$("#wmap"),svg=$("#wsvg");if(!box||!svg)return;const tip=$("#mtip");
  let vb=svg.dataset.vb.split(" ").map(Number);const base=vb.slice();const setVB=()=>svg.setAttribute("viewBox",vb.join(" "));
  const zoomAt=(f,cx,cy)=>{const nw=clamp(vb[2]*f,base[2]/14,base[2]),nh=nw*base[3]/base[2];vb=[cx-(cx-vb[0])*nw/vb[2],cy-(cy-vb[1])*nh/vb[3],nw,nh];vb[0]=clamp(vb[0],0,base[2]-nw);vb[1]=clamp(vb[1],0,base[3]-nh);setVB();};
  const pt=e=>{const r=svg.getBoundingClientRect();return [vb[0]+(e.clientX-r.left)/r.width*vb[2],vb[1]+(e.clientY-r.top)/r.height*vb[3]];};
  svg.addEventListener("wheel",e=>{e.preventDefault();const [x,y]=pt(e);zoomAt(e.deltaY<0?.8:1.25,x,y);},{passive:false});
  let drag=null,moved=false;
  svg.addEventListener("pointerdown",e=>{drag=[e.clientX,e.clientY,vb[0],vb[1]];moved=false;});
  window.onpointermove=e=>{if(!drag)return;const r=svg.getBoundingClientRect();const dx=(e.clientX-drag[0])/r.width*vb[2],dy=(e.clientY-drag[1])/r.height*vb[3];if(Math.abs(e.clientX-drag[0])+Math.abs(e.clientY-drag[1])>4)moved=true;vb[0]=clamp(drag[2]-dx,0,base[2]-vb[2]);vb[1]=clamp(drag[3]-dy,0,base[3]-vb[3]);setVB();};
  window.onpointerup=()=>{drag=null;};
  svg.addEventListener("mousemove",e=>{const p=e.target.closest(".ctry");if(!p){tip.classList.add("hide");return;}const r=box.getBoundingClientRect();tip.classList.remove("hide");tip.style.left=(e.clientX-r.left)+"px";tip.style.top=(e.clientY-r.top)+"px";const cc=p.dataset.cc;tip.textContent=flag(cc)+" "+cname(cc)+(DB.visited.includes(cc)?" · visited":DB.wishlist.includes(cc)?" · wishlist":"");});
  svg.addEventListener("mouseleave",()=>tip.classList.add("hide"));
  svg.addEventListener("click",e=>{if(moved)return;const p=e.target.closest(".ctry");const pop=$("#mpop");if(!p){pop.innerHTML="";return;}const cc=p.dataset.cc;const r=box.getBoundingClientRect();
    const x=clamp(e.clientX-r.left,130,r.width-130),y=Math.min(e.clientY-r.top,r.height-210);const v=DB.visited.includes(cc),w=DB.wishlist.includes(cc);
    pop.innerHTML=`<div class="card mpop" style="left:${x}px;top:${y}px"><div class="spread"><b style="font-size:16px">${flag(cc)} ${esc(cname(cc))}</b><button class="btn icon ghost" data-a="pop-close">${ic("x","sm")}</button></div><div class="muted" style="margin-bottom:6px">${continentOf(cc)}${CTRY[cc].capital?" · "+esc(CTRY[cc].capital):""}</div>${SAFETY[cc]?`<div style="margin-bottom:8px">${safetyPill(cc)}</div>`:""}
    <div style="display:flex;flex-direction:column;gap:6px"><button class="btn sm ${v?"pri":""}" data-a="cv" data-cc="${cc}">${v?"✓ Visited":"Mark as visited"}</button><button class="btn sm ${w?"pri":""}" data-a="cw" data-cc="${cc}" ${v?"disabled":""}>${w?"★ On wishlist":"☆ Add to wishlist"}</button><button class="btn sm ghost" data-a="docs-modal" data-cc="${cc}">${ic("shield","sm")} Visa & safety</button><button class="btn sm ghost" data-a="plan-cc" data-cc="${cc}">${ic("compass","sm")} Plan a trip here</button></div></div>`;});
  box._zoom=f=>{if(!f){vb=base.slice();setVB();return;}zoomAt(f,vb[0]+vb[2]/2,vb[1]+vb[3]/2);};
}
function refreshPassport(cc){
  if(S.view!=="passport"){render();return;}
  document.querySelectorAll("#wsvg .ctry").forEach(p=>{const c=p.dataset.cc;p.classList.toggle("v",DB.visited.includes(c));p.classList.toggle("w",DB.wishlist.includes(c));});
  const pop=$("#mpop .mpop");if(pop){const v=DB.visited.includes(cc),w=DB.wishlist.includes(cc);const b=pop.querySelectorAll("button.btn.sm");b[0].className="btn sm "+(v?"pri":"");b[0].textContent=v?"✓ Visited":"Mark as visited";b[1].className="btn sm "+(w?"pri":"");b[1].textContent=w?"★ On wishlist":"☆ Add to wishlist";b[1].disabled=v;}
  const stats=document.querySelectorAll(".main .stat .n");if(stats[0])stats[0].textContent=DB.visited.length;if(stats[1])stats[1].textContent=DB.wishlist.length;
  const ms=$("#msearch");if(ms)ms.dispatchEvent(new Event("input"));
}

/* ---------- Export: image / PDF ---------- */
function wrap(ctx,text,maxW){const words=String(text).split(" ");const lines=[];let l="";words.forEach(w=>{const tt=l?l+" "+w:w;if(ctx.measureText(tt).width>maxW&&l){lines.push(l);l=w;}else l=tt;});if(l)lines.push(l);return lines;}
async function renderTripCanvas(t,withMap){
  const W=1080,P=56,FF="'Twemoji Country Flags','Nunito Sans','Segoe UI',system-ui,'Segoe UI Emoji','Apple Color Emoji',sans-serif",FH="'Twemoji Country Flags',Outfit,'Segoe UI',system-ui,'Segoe UI Emoji',sans-serif";
  try{await document.fonts.load("20px 'Twemoji Country Flags'","🇳🇱");await document.fonts.ready;}catch(e){}
  let mapImg=null;
  if(withMap&&tripStops(t).length){try{const svg=tripMap(t,520,true);const url=URL.createObjectURL(new Blob([svg],{type:"image/svg+xml"}));mapImg=await new Promise((res)=>{const im=new Image();im.onload=()=>res(im);im.onerror=()=>res(null);im.src=url;});}catch(e){mapImg=null;}}
  const draw=(ctx,measure)=>{
    let y=0;const b=computeBudget(t);const n=t.group.length;
    if(!measure){const g=ctx.createLinearGradient(0,0,W,260);g.addColorStop(0,"#BFE8D1");g.addColorStop(1,"#B5DAF3");ctx.fillStyle=g;ctx.fillRect(0,0,W,280);}
    ctx.fillStyle="#2F7F79";ctx.font=`800 22px ${FH}`;if(!measure)ctx.fillText("🌍 TravelTropia",P,58);
    ctx.fillStyle="#1D3441";ctx.font=`800 44px ${FH}`;const tl=wrap(ctx,t.title,W-2*P);tl.forEach((l,i)=>{if(!measure)ctx.fillText(l,P,120+i*50);});y=120+(tl.length-1)*50;
    ctx.font=`600 22px ${FF}`;ctx.fillStyle="#2F5A5E";
    const sub=`${t.countries.map(cc=>flag(cc)+" "+cname(cc)).join("  ")}`;if(!measure)ctx.fillText(sub,P,y+46);
    const sub2=`${t.start?fmtD(t.start)+" – "+fmtD(tripEnd(t))+" · ":""}${dn(t.days.length)} · ${plural(n,"traveller")} · ≈ ${money(b.total)}${n>1?" ("+money(b.total/n)+" pp)":""}`;if(!measure)ctx.fillText(sub2,P,y+82);
    const names=t.group.map(p=>isMe(p)?DB.profile.name:p.name).join(", ");if(!measure&&n>1){ctx.font=`600 19px ${FF}`;ctx.fillText("👥 "+names,P,y+114);}
    y=Math.max(280,y+140)+30;
    const stops=tripStops(t);
    if(stops.length){ctx.font=`700 22px ${FF}`;ctx.fillStyle="#1D3441";const rl=wrap(ctx,"📍 "+stops.map(s=>cityQ(s.name)+" ("+s.nights+"d)").join(" → "),W-2*P);rl.forEach((l,i)=>{if(!measure)ctx.fillText(l,P,y+i*30);});y+=rl.length*30+16;}
    if(mapImg){const mh=(W-2*P)*520/900;if(!measure){ctx.save();ctx.beginPath();if(ctx.roundRect)ctx.roundRect(P,y,W-2*P,mh,18);else ctx.rect(P,y,W-2*P,mh);ctx.clip();ctx.drawImage(mapImg,P,y,W-2*P,mh);ctx.restore();}y+=mh+30;}
    t.days.forEach((d,i)=>{
      const date=t.start?fmtD(addDays(t.start,i),{weekday:"short",day:"numeric",month:"short"}):"";
      const top=y;ctx.font=`800 26px ${FH}`;const head=`Day ${i+1}${date?" · "+date:""}`;
      let yy=y+44;ctx.font=`700 20px ${FF}`;
      const lines=[];d.items.forEach(it=>{ctx.font=`600 20px ${FF}`;const w=wrap(ctx,(CATS[it.cat]||CATS.other).emoji+"  "+(it.cat==="dare"?"Dare: ":"")+it.title,W-2*P-150);w.forEach((l,k)=>lines.push({time:k===0?it.time:"",l,note:false}));if(it.note){ctx.font=`500 16px ${FF}`;wrap(ctx,it.note,W-2*P-150).forEach(l=>lines.push({time:"",l,note:true}));}});
      const h=44+28+lines.reduce((s,x)=>s+(x.note?24:30),0)+18;
      if(!measure){ctx.fillStyle="#F3F9F7";ctx.strokeStyle="#E1ECEA";ctx.lineWidth=2;ctx.beginPath();if(ctx.roundRect)ctx.roundRect(P,top,W-2*P,h,16);else ctx.rect(P,top,W-2*P,h);ctx.fill();ctx.stroke();
        ctx.fillStyle="#2F7F79";ctx.font=`800 24px ${FH}`;ctx.fillText(head,P+24,top+38);
        ctx.fillStyle="#4C6573";ctx.font=`700 19px ${FF}`;const sub=`${d.title||""}${d.city?"  ·  "+flag(d.cc)+" "+d.city:""}`;ctx.fillText(sub.slice(0,90),P+24,top+68);
        let ly=top+104;lines.forEach(x=>{if(x.time){ctx.fillStyle="#8299A6";ctx.font=`800 18px ${FF}`;ctx.fillText(x.time,P+24,ly);}ctx.fillStyle=x.note?"#8299A6":"#1D3441";ctx.font=x.note?`500 16px ${FF}`:`600 20px ${FF}`;ctx.fillText(x.l,P+110,ly);ly+=x.note?24:30;});}
      y+=h+16;});
    y+=10;if(!measure){ctx.fillStyle="#8299A6";ctx.font=`600 16px ${FF}`;ctx.fillText(`Planned with TravelTropia · estimates only – check prices & entry rules before booking`,P,y+10);}
    return y+40;
  };
  const mc=document.createElement("canvas").getContext("2d");const H=Math.ceil(draw(mc,true));
  const c=document.createElement("canvas");c.width=W;c.height=H;const ctx=c.getContext("2d");ctx.fillStyle="#FFFFFF";ctx.fillRect(0,0,W,H);draw(ctx,false);
  return c;
}
function b64ToBytes(b64){const s=atob(b64);const u=new Uint8Array(s.length);for(let i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u;}
function canvasToPDF(c){
  const pw=595.28,ph=841.89,W=c.width,pageH=Math.round(W*ph/pw);const pages=[];
  for(let y=0;y<c.height;y+=pageH){const h=Math.min(pageH,c.height-y);const pc=document.createElement("canvas");pc.width=W;pc.height=pageH;const x=pc.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,W,pageH);x.drawImage(c,0,y,W,h,0,0,W,h);pages.push({bytes:b64ToBytes(pc.toDataURL("image/jpeg",.9).split(",")[1]),w:W,h:pageH});}
  const chunks=[];let len=0;const offs=[];const enc8=s=>{const u=new Uint8Array(s.length);for(let i=0;i<s.length;i++)u[i]=s.charCodeAt(i)&255;return u;};
  const put=x=>{const u=typeof x==="string"?enc8(x):x;chunks.push(u);len+=u.length;};
  const obj=(n,body)=>{offs[n]=len;put(`${n} 0 obj\n`);body();put("\nendobj\n");};
  put("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n");
  const N=pages.length;const kids=pages.map((p,i)=>`${3+i*3} 0 R`).join(" ");
  obj(1,()=>put("<< /Type /Catalog /Pages 2 0 R >>"));obj(2,()=>put(`<< /Type /Pages /Kids [${kids}] /Count ${N} >>`));
  pages.forEach((p,i)=>{const pn=3+i*3,cn=pn+1,im=pn+2;const cs=`q ${pw} 0 0 ${ph} 0 0 cm /Im${i} Do Q`;
    obj(pn,()=>put(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pw} ${ph}] /Resources << /XObject << /Im${i} ${im} 0 R >> >> /Contents ${cn} 0 R >>`));
    obj(cn,()=>put(`<< /Length ${cs.length} >>\nstream\n${cs}\nendstream`));
    obj(im,()=>{put(`<< /Type /XObject /Subtype /Image /Width ${p.w} /Height ${p.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${p.bytes.length} >>\nstream\n`);put(p.bytes);put("\nendstream");});});
  const total=3+N*3;const xref=len;let x=`xref\n0 ${total}\n0000000000 65535 f \n`;for(let i=1;i<total;i++)x+=String(offs[i]).padStart(10,"0")+" 00000 n \n";
  put(x+`trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);
  return new Blob(chunks,{type:"application/pdf"});
}
let EXP={fmt:"png",map:true,canvas:null};
async function exportModal(){
  const t=getTrip(S.tripId);if(!t)return;
  modal(`<div class="mh"><h2>Save & share itinerary</h2>${X}</div>
  <p class="sub" style="margin-top:-8px">Make a simple image or PDF to send to everyone on the trip.</p>
  <div class="row" style="margin:10px 0"><div class="seg">${[["png","🖼️ PNG"],["jpg","📷 JPG"],["pdf","📄 PDF"]].map(([k,l])=>`<button class="${EXP.fmt===k?"on":""}" data-a="exp-fmt" data-v="${k}">${l}</button>`).join("")}</div><label class="row"><input type="checkbox" data-expmap ${EXP.map?"checked":""}> Include route map</label></div>
  <div class="exprev" id="exprev"><div class="muted">Rendering preview…</div></div>
  <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn" data-a="exp-share" id="expshare" style="display:none">${ic("share","sm")} Share…</button><button class="btn" data-a="ics" ${getTrip(S.tripId)&&getTrip(S.tripId).start?"":"disabled title=\"Add a start date first\""}>${ic("calendar","sm")} Calendar (.ics)</button><button class="btn" data-a="print">${ic("printer","sm")} Print</button><button class="btn pri" data-a="exp-save">${ic("download","sm")} Save file</button></div>`,"wide");
  EXP.canvas=await renderTripCanvas(t,EXP.map);
  const pv=$("#exprev");if(pv){pv.innerHTML="";const img=new Image();img.src=EXP.canvas.toDataURL("image/jpeg",.7);pv.appendChild(img);}
  try{if(navigator.canShare&&navigator.canShare({files:[new File([new Blob(["x"])],"a.png",{type:"image/png"})]})){const b=$("#expshare");if(b)b.style.display="";}}catch(e){}
}
async function exportBlob(){
  const t=getTrip(S.tripId);const c=EXP.canvas||await renderTripCanvas(t,EXP.map);
  const base=(t.title||"itinerary").replace(/[^\w\- ]+/g,"").trim().replace(/\s+/g,"-").slice(0,50)||"itinerary";
  if(EXP.fmt==="pdf")return {blob:canvasToPDF(c),name:base+".pdf"};
  const type=EXP.fmt==="jpg"?"image/jpeg":"image/png";
  const blob=await new Promise(r=>c.toBlob(r,type,.92));return {blob,name:base+"."+EXP.fmt};
}

/* ---------- Misc actions ---------- */
function blankTrip(o){
  const n=o.days||5;const cc=o.countries||[];const c0=cc.length?citiesOf(cc[0])[0]:null;
  const t={id:uid(),title:o.title||(cc.length?`My ${cc.map(cname).join(" & ")} trip`:"My new trip"),style:"custom",countries:cc,start:o.start||"",group:o.group?JSON.parse(JSON.stringify(o.group)):[meP()],tier:o.tier||"comfort",luggage:o.luggage||"carry",flights:o.flights!==false,from:o.from||homeCity(),
    days:Array.from({length:n},(_,i)=>({id:uid(),title:i===0?"Arrival":"",city:c0?c0.name:"",cc:c0?c0.cc:(cc[0]||""),lat:c0?c0.lat:null,lng:c0?c0.lng:null,approx:c0?!!c0.approx:false,items:i===0?[{id:uid(),time:"14:00",title:"Check in",cat:"stay",note:"",done:false}]:[]})),
    packing:["Passport / ID","Travel insurance","Phone charger & adapter","Medication","Bank card + some cash"].map(t=>({id:uid(),text:t,done:false})),expenses:[],notes:"",status:"planning",fav:false,source:"custom",created:Date.now()};
  migrateTrip(t);return t;
}
function addTrip(t){
  if(isCloud()){t.owner=CL.uid;t.members=[...new Set([CL.uid,...(t.group||[]).map(p=>p.uid).filter(Boolean)])];}
  DB.trips.push(t);
  if(DB.settings.autoWish){const add=t.countries.filter(cc=>!DB.visited.includes(cc)&&!DB.wishlist.includes(cc));add.forEach(cc=>DB.wishlist.push(cc));if(add.length)setTimeout(()=>toast(`⭐ Added ${add.map(cname).join(", ")} to your wishlist`),400);}
  save();
}
function customModal(pre){
  pre=pre||{};
  modal(`<div class="mh"><h2>Build your own itinerary</h2>${X}</div>
  <form data-form="custom" class="grid" style="gap:14px">
   <div class="field"><label>Trip name</label><input class="inp" name="title" placeholder="e.g. Summer in Scandinavia" value="${esc(pre.title||"")}" autofocus></div>
   <div class="field"><label>Country</label><select class="inp" name="cc">${ALL_CC.map(c=>`<option value="${c}" ${(pre.countries||[])[0]===c?"selected":""}>${CTRY[c].flag} ${esc(CTRY[c].name)}</option>`).join("")}</select><span class="muted">You can add more countries and co-travellers afterwards.</span></div>
   <div class="grid g3"><div class="field"><label>Start date</label><input class="inp" type="date" name="start"></div><div class="field"><label>End date</label><input class="inp" type="date" name="end"></div><div class="field"><label>…or number of days</label><input class="inp" type="number" name="days" min="1" max="60" value="5"></div></div>
   <div class="row" style="justify-content:flex-end"><button type="button" class="btn" data-a="close">Cancel</button><button class="btn pri">${ic("arrow","sm")} Create & start editing</button></div></form>`);
}
function settingsModal(){
  const av=["🧭","🌍","✈️","🏝️","🏔️","🎒","🐢","🦜","🌸","🚲","🧳","🐳"];const pr=DB.profile;
  modal(`<div class="mh"><h2>Settings & profile</h2>${X}</div>
  <div class="grid" style="gap:14px">
    <div class="row"><label class="avatar-up" title="Upload a profile picture">${avatar(meP(),64)}<span class="cam">${ic("camera","sm")}</span><input type="file" accept="image/*" data-photo="me" hidden></label><div class="row" style="gap:4px;flex:1">${av.map(a=>`<button class="chip ${pr.avatar===a&&!pr.photo?"on":""}" data-a="set-av" data-v="${a}" style="font-size:18px">${a}</button>`).join("")}</div></div>
    <div class="grid g3"><div class="field" style="grid-column:span 2"><label>Your name</label><input class="inp" data-s="name" value="${esc(pr.name)}"></div><div class="field"><label>Age</label><input class="inp" type="number" min="0" max="110" data-s="age" value="${pr.age||""}"></div></div>
    <div class="grid g3"><div class="field"><label>Home country</label><select class="inp" data-s="home">${ALL_CC.map(c=>`<option value="${c}" ${pr.home===c?"selected":""}>${CTRY[c].flag} ${esc(CTRY[c].name)}</option>`).join("")}</select></div>
    <div class="field"><label>Home city / airport</label><input class="inp" data-s="homeCity" list="allc" value="${esc(pr.homeCity||"")}"><datalist id="allc">${Object.keys(CITY_DATA).flatMap(cc=>CITY_DATA[cc].map(r=>`<option value="${esc(r[0])}">`)).join("")}</datalist></div>
    <div class="field"><label>Passports</label><div class="row" style="gap:6px">${pr.passports.map((c,i)=>`<span class="chip on">${flag(c)} ${esc(cname(c))}${i===0?" <span class=\"muted\">main</span>":""}${pr.passports.length>1?` <span class="x" data-a="pp-rm" data-cc="${c}">✕</span>`:""}</span>`).join("")}<select class="inp" style="width:auto" data-ppadd><option value="">+ Add passport</option>${ALL_CC.filter(c=>CTRY[c].sov&&!pr.passports.includes(c)).map(c=>`<option value="${c}">${CTRY[c].flag} ${esc(CTRY[c].name)}</option>`).join("")}</select></div></div></div>
    <div class="grid g3"><div class="field"><label>Currency</label><select class="inp" data-s="currency">${["€","$","£","¥","CHF ","kr "].map(c=>`<option ${DB.settings.currency===c?"selected":""}>${c}</option>`).join("")}</select></div>
    <div class="field"><label>Distance</label><select class="inp" data-s="units"><option value="km" ${DB.settings.units==="km"?"selected":""}>Kilometres</option><option value="mi" ${DB.settings.units==="mi"?"selected":""}>Miles</option></select></div>
    <div class="field"><label>Theme</label><select class="inp" data-s="theme"><option value="auto" ${DB.settings.theme==="auto"?"selected":""}>🖥️ Match my device</option><option value="light" ${DB.settings.theme==="light"?"selected":""}>☀️ Light</option><option value="dark" ${DB.settings.theme==="dark"?"selected":""}>🌙 Dark</option></select></div></div>
    <label class="row"><input type="checkbox" data-s="autoWish" ${DB.settings.autoWish?"checked":""}> Add countries of saved trips to my wishlist automatically</label>
    ${isCloud()?`<div class="field"><label>Your handle <span class="muted">(friends find you with this)</span></label><div class="row"><span class="muted" style="font-weight:800">@</span><input class="inp" id="handle-in" style="flex:1" value="${esc(DB.profile.handle||"")}"><button class="btn" data-a="handle-save">Save</button></div></div>`:""}
    <div class="card pad" style="background:var(--soft);box-shadow:none"><div class="spread"><div><h3>Account</h3><div class="muted">${ACCOUNT.id==="guest"?"You're using TravelTropia as a guest – data stays in this browser.":isCloud()?`Signed in as <b>${esc(ACCOUNT.email||ACCOUNT.name)}</b>${ACCOUNT.provider==="google"?" with Google":""} · synced online`:`Signed in as <b>${esc(ACCOUNT.name)}</b> (${esc(ACCOUNT.username||"")}) · saved in this browser`}</div></div><div class="row">${ACCOUNT.provider==="local"?`<button class="btn sm" data-a="chpw">Change password</button>`:""}${isCloud()&&ACCOUNT.provider==="email"?`<button class="btn sm" data-a="forgot">Reset password</button>`:""}<button class="btn sm" data-a="logout">${ACCOUNT.id==="guest"?"Create account / log in":"Log out"}</button>${ACCOUNT.id!=="guest"?`<button class="btn sm ghost danger" data-a="${isCloud()?"cloud-del":"acct-del"}">Delete account</button>`:""}</div></div></div>
    <div class="card pad" style="background:var(--soft);box-shadow:none"><h3>Backup</h3><p class="muted" style="margin:4px 0 10px">Your data is stored in this browser${storageOK?"":" (storage unavailable – data lasts until you close the page)"}. Export a backup to move it to another computer.</p>
    <div class="row"><button class="btn sm" data-a="export-backup">${ic("download","sm")} Export backup</button><button class="btn sm" data-a="copy-backup">${ic("copy","sm")} Copy backup</button><label class="btn sm">${ic("upload","sm")} Import backup<input type="file" accept=".json,application/json" data-import hidden></label><button class="btn sm ghost danger" data-a="reset">${ic("trash","sm")} Reset everything</button></div></div>
    <div class="row" style="justify-content:space-between"><span class="muted">Shortcuts: <span class="kbd">/</span> search · <span class="kbd">N</span> new trip · <span class="kbd">Esc</span> close<br>Flag icons: Twemoji (CC-BY 4.0) · Weather: <a href="https://open-meteo.com" target="_blank" rel="noopener">Open-Meteo</a> · <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener">Rates by Exchange Rate API</a> · Map © OpenStreetMap contributors · Cities: <a href="https://www.geonames.org" target="_blank" rel="noopener">GeoNames</a> (CC-BY 4.0)</span><button class="btn pri" data-a="close-settings">Done</button></div>
  </div>`);
}
function tripText(t){
  const b=computeBudget(t);let s=`${t.title}\n${t.countries.map(cname).join(", ")}${t.start?" · "+fmtD(t.start)+" – "+fmtD(tripEnd(t)):""} · ${dn(t.days.length)}\n👥 ${t.group.map(p=>isMe(p)?DB.profile.name:p.name).join(", ")}\n💶 ≈ ${money(b.total)}${t.group.length>1?" ("+money(b.total/t.group.length)+" per person)":""}\n\n`;
  t.days.forEach((d,i)=>{s+=`Day ${i+1}${t.start?" ("+fmtD(addDays(t.start,i),{weekday:"short",day:"numeric",month:"short"})+")":""} – ${d.title||""}${d.city?" · "+d.city:""}\n`;d.items.forEach(it=>s+=`  ${it.time?it.time+"  ":""}${it.title}${it.note?" – "+it.note:""}\n`);s+="\n";});
  return s+"Planned with TravelTropia 🌍";
}
async function copyText(txt,msg){try{await navigator.clipboard.writeText(txt);toast(msg||"Copied to clipboard");}catch(e){modal(`<div class="mh"><h2>Copy</h2>${X}</div><textarea class="inp" style="min-height:300px" readonly>${esc(txt)}</textarea><p class="muted">Select all and copy (Ctrl+C).</p>`);}}
function moveArr(a,i,d){const j=i+d;if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];}
function samples(){
  if(!DB.friends.length){DB.friends.push({id:uid(),name:"Sam",age:29,passport:"NL",passports:["NL"],avatar:"😎",photo:""},{id:uid(),name:"Lina",age:31,passport:"DE",passports:["DE","US"],avatar:"🌻",photo:""});}
  const fr=DB.friends.slice(0,2).map(friendP);
  const mk=(cc,days,start,group,style,title)=>{const P=Object.assign(newPlan(),{countries:[cc],start,days,group});const r=generatePlans(P).plans;const t=r.find(p=>p.style===style)||r[0];t.title=title;return t;};
  const a=mk("IT",8,addDays(today(),40),[meP(),...fr],"food","Italian food tour 🍝");
  const b=mk("JP",10,"2025-04-02",[meP(),fr[0]],"city","Tokyo & Kyoto in spring 🌸");b.status="completed";b.fav=true;b.days.forEach(d=>d.items.forEach(i=>i.done=true));b.challenges.slice(0,3).forEach(c=>c.done=true);
  const c=mk("IS",7,"",[meP()],"roadtrip","Iceland ring-road dream");
  [a,b,c].forEach(t=>{t.created=Date.now()-Math.random()*1e6;DB.trips.push(t);});
  ["JP","FR","ES","DE","BE","GB"].forEach(cc=>setVisited(cc,true));["IT","IS","PE","NZ","CA","AQ"].forEach(cc=>setWish(cc,true));
  save();toast("Loaded 3 example trips & 2 friends ✨");render();
}
function syncGroup(t){t.travelers=t.group.length;}
function syncMe(){DB.profile.passport=DB.profile.passports[0];DB.trips.forEach(t=>t.group.forEach(p=>{if(isMe(p))Object.assign(p,meP());}));save();}
function regen(){const P=S.plan;const r=generatePlans(P);P.results=r.plans;P.hidden=r.hidden;}

/* ---------- Click handler ---------- */
document.addEventListener("click",async e=>{
  const el=e.target.closest("[data-a]");if(!el){const dd=$("#cdd");if(dd&&!e.target.closest(".search"))dd.classList.add("hide");return;}
  const a=el.dataset.a,P=S.plan,t=getTrip(S.tripId);const rer=()=>{save();render();};
  switch(a){
  case "auth-tab": S.auth=el.dataset.v; render(); return;
  case "acct-pick": {const u=$("#lg-u");if(u){u.value=el.dataset.u;const p=$(".auth input[name=p]");if(p)p.focus();}return;}
  case "pw-toggle": {const i=el.parentNode.querySelector("input");i.type=i.type==="password"?"text":"password";return;}
  case "forgot": if(CLOUD_ON&&CL.api){modal(`<div class="mh"><h2>Reset your password</h2>${X}</div><form data-form="reset" class="grid" style="gap:12px"><p class="sub">We'll e-mail you a link to choose a new password.</p><div class="field"><label>E-mail</label><input class="inp" type="email" name="e" required value="${esc(($(".auth input[name=u]")||{}).value||"")}"></div><div class="auth-err" id="autherr"></div><div class="row" style="justify-content:flex-end"><button type="button" class="btn" data-a="close">Cancel</button><button class="btn pri">Send reset link</button></div></form>`);return;}
    modal(`<div class="mh"><h2>Forgot your password?</h2>${X}</div><p class="sub">Accounts live only in this browser, so there's no e-mail reset. If you can't remember it you can continue as a guest – or ask whoever set up this device. Tip: export a backup in Settings from time to time.</p><div class="row" style="justify-content:flex-end"><button class="btn pri" data-a="close">OK</button></div>`); return;
  case "guest": openAccount(GUEST,true); enterApp(); return;
  case "google": if(CLOUD_ON&&CL.api){CL.api.google().catch(err=>{authErr(authMsg(err));if(!$("#autherr"))toast(authMsg(err));});}else googleSignIn(); return;
  case "pub-exit": e.preventDefault(); location.hash="#home"; fromHash(); return;
  case "logout": logout(); return;
  case "chpw": pwModal(); return;
  case "close": closeModal(); return;
  case "confirm-yes": closeModal(); if(confirmFn)confirmFn(); return;
  case "acct-del": ask("Delete this account?","All trips, friends and progress of this account will be erased from this device. This can't be undone.","Delete account",()=>{const id=ACCOUNT.id;LS.del(keyFor(id));saveAccounts(accounts().filter(a=>a.id!==id));ACCOUNT=null;LS.del(SES_KEY);SS.del(SES_KEY);render();},true); return;
  }
  if(!ACCOUNT)return;
  switch(a){
  case "badge": badgesModal(+el.dataset.i); break;
  case "map-mode": S.mapMode=el.dataset.v; render(); break;
  case "prices": e.preventDefault(); pricesModal(el.dataset.cc); break;
  case "pack-sug": t.packing.push({id:uid(),text:el.dataset.v,done:false}); rer(); break;
  case "ics": {const tr=getTrip(S.tripId);if(tr&&tr.start)saveFile((tr.title||"trip").replace(/[^\w\- ]+/g,"").trim().replace(/\s+/g,"-").slice(0,50)+".ics",new Blob([tripICS(tr)],{type:"text/calendar"}));break;}
  case "ex-set": {const k=el.dataset.k;exState()[k]=el.dataset.v;if(k==="mode")S.ex.max=0;render();break;}
  case "ex-n": {const E=exState();E.nights=clamp(E.nights+ +el.dataset.d,1,60);E.max=0;render();break;}
  case "ex-home": exState().from=null; exState().max=0; render(); break;
  case "ex-from": {const v=(($("#exfrom")||{}).value||"").trim();if(!v)break;const m=findCity(v);const E=exState();
    if(m){E.from={name:m.name,cc:m.cc,lat:m.lat,lng:m.lng};E.max=0;render();break;}
    toast("Looking up "+esc(v)+"…");const g=await geocode(v,"");if(g&&CTRY[g.cc]){E.from={name:g.name,cc:g.cc,lat:g.lat,lng:g.lng};E.max=0;render();}else toast("Couldn't find that place – try a nearby bigger city");break;}
  case "ex-pick": {const c=(S.exList||[])[+el.dataset.i];if(!c)break;if(S.exMap){try{S.exMap.setView([c.lat,c.lng],5,{animate:false});let hit=null;S.exMap.eachLayer(l=>{if(!hit&&l.getLatLng&&l.getPopup&&l.getPopup()){const ll=l.getLatLng();if(Math.abs(ll.lat-c.lat)<1e-6&&Math.abs(ll.lng-c.lng)<1e-6)hit=l;}});if(hit){hit.openPopup();break;}}catch(err){}}modal(`<div class="mh"><span></span>${X}</div>`+placePopup(c));break;}
  case "ex-plan": {closeModal();const E=S.ex;S.plan=Object.assign(newPlan(),{countries:[el.dataset.cc],step:2});addPlanPlace({name:el.dataset.n,cc:el.dataset.cc,lat:+el.dataset.lat,lng:+el.dataset.lng});if(S.view==="compare"){const O=cmpOpts();S.plan.days=cmpDays()+1;if(O.start&&O.end){S.plan.start=O.start;S.plan.end=O.end;}if(O.budget){S.plan.maxBudget=O.budget;S.plan.budgetMode="pp";}S.plan.tier=S.cmpTier||"comfort";}
    else if(S.view==="explore"&&E){S.plan.days=E.nights+1;if(E.from)S.plan.from=E.from;if(E.mode==="bare")S.plan.tier="budget";else S.plan.tier=E.tier;}go("plan");break;}
  case "cmp-add": {S.cmp=S.cmp||[];const id=el.dataset.id;if(S.cmp.includes(id)){toast("Already in your comparison");break;}if(S.cmp.length>=4){toast("You can compare up to 4 places");break;}S.cmp.push(id);el.textContent="✓ Comparing";toast(`Added ${esc(id.split("|")[0])} – <a href="#compare" data-a="go" data-v="compare">open comparison</a>`);break;}
  case "cmp-rm": S.cmp=S.cmp.filter(x=>x!==el.dataset.id); render(); break;
  case "cmp-clear": S.cmp=[]; render(); break;
  case "cmp-set": S.cmp=el.dataset.v.split(","); render(); break;
  case "cmp-tier": S.cmpTier=el.dataset.v; render(); break;
  case "cmp-days": {const O=cmpOpts();O.days=clamp(O.days+ +el.dataset.d,1,90);render();break;}
  case "cmp-nodates": {const O=cmpOpts();O.start="";O.end="";render();break;}
  case "palette": openPalette(); break;
  case "pal-plan": {closeModal();const cc=el.dataset.cc;S.plan=newPlan();S.plan.countries=[cc];if(el.dataset.n)addPlanPlace({name:el.dataset.n,cc,lat:+el.dataset.lat,lng:+el.dataset.lng});go("plan");break;}
  case "pal-cmp": {closeModal();S.cmp=S.cmp||[];if(S.cmp.length>=4){toast("You can compare up to 4 places – remove one first");go("compare");break;}if(!S.cmp.includes(el.dataset.id))S.cmp.push(el.dataset.id);go("compare");break;}
  case "pal-from": {closeModal();exState().from={name:el.dataset.n,cc:el.dataset.cc,lat:+el.dataset.lat,lng:+el.dataset.lng};exState().max=0;go("explore");break;}
  case "cmp-geo": {const q=el.dataset.q;const dd=$("#cmpdd");if(dd)dd.classList.add("hide");S.cmp=S.cmp||[];if(S.cmp.length>=4){toast("You can compare up to 4 places");break;}toast("Looking up "+esc(q)+"…");const g=await geocode(q,"");if(!g||!CTRY[g.cc]){toast(`Couldn't find “${esc(q)}”`);break;}S.cmp.push(placeId(g));render();break;}
  case "cmp-pick": {S.cmp=S.cmp||[];if(S.cmp.length>=4){toast("You can compare up to 4 places");break;}if(!S.cmp.includes(el.dataset.id))S.cmp.push(el.dataset.id);render();setTimeout(()=>{const q=$("#cmpq");if(q)q.focus();},10);break;}
  case "share-open": shareModal(); break;
  case "cloud-del": ask("Delete your account?","This permanently deletes your profile, your trips (shared trips you own too), friends and progress from our database. This can't be undone.","Delete everything",async()=>{try{const owned=DB.trips.filter(t=>t.owner===CL.uid).map(t=>t.id);stopWatchers();await CL.api.deleteAccount(CL.uid,DB.profile.handle,owned);LS.del(KEY);toast("Your account has been deleted");}catch(err){if((err.code||"")==="auth/requires-recent-login")toast("For safety, please log out, log in again, and then delete your account.");else netErr(err);}},true); break;
  case "copy-link": copyText(el.dataset.v,"Link copied 🔗"); break;
  case "mem-rm": {const u=el.dataset.uid;t.members=(t.members||[]).filter(x=>x!==u);t.group=t.group.filter(p=>p.uid!==u);syncGroup(t);save();shareModal();render();shareModal();break;}
  case "trip-leave": closeModal(); DB.trips=DB.trips.filter(x=>x!==t); save(); go("trips"); toast("You left the trip"); break;
  case "fr-accept": CL.api.acceptFriend(el.dataset.id).then(()=>toast("🤝 You're now travel friends!")).catch(netErr); break;
  case "fr-remove": closeModal(); CL.api.removeFriend(el.dataset.id).catch(netErr); break;
  case "fr-view": friendModal2(el.dataset.uid); break;
  case "fr-plan": {const u=el.dataset.uid;const pr=CL.profiles[u]||{};closeModal();S.plan=newPlan();S.plan.group.push({id:uid(),uid:u,name:pr.name||"Friend",age:30,passport:DB.profile.passports[0],passports:[DB.profile.passports[0]]});go("plan");toast(`${esc(pr.name||"Your friend")} is in your group – pick a destination!`);break;}
  case "board": S.boardFriends=el.dataset.v==="1"; render(); break;
  case "imp-go": doImport([...document.querySelectorAll("[data-imp]")].filter(x=>x.checked).map(x=>x.dataset.imp)); closeModal(); break;
  case "imp-skip": DB.imported=true; save(); closeModal(); break;
  case "like": {const d=t.days.find(x=>x.id===el.dataset.d);const it=d&&d.items.find(x=>x.id===el.dataset.i);if(!it)break;const me=myId();it.likes=it.likes||[];it.likes=it.likes.includes(me)?it.likes.filter(x=>x!==me):[...it.likes,me];rer();break;}
  case "handle-save": {const v=norm(($("#handle-in")||{}).value||"").replace(/[^a-z0-9_]/g,"");if(v.length<3){toast("Handles need 3+ letters or numbers");break;}const old=DB.profile.handle;try{await CL.api.claimHandle(CL.uid,v,old);DB.profile.handle=v;save();toast("✓ You're now @"+v);settingsModal();}catch(err){toast(String(err.message)==="taken"?"That handle is taken – try another":"Couldn't change handle");}break;}
  case "badges-all": badgesModal(); break;
  case "levels": levelsModal(); break;
  case "pp-rm": DB.profile.passports=DB.profile.passports.filter(x=>x!==el.dataset.cc);syncMe();settingsModal(); break;
  case "tr-hint": S.tq.hint=true; render(); break;
  case "tr-lock": {const T=S.tq;if(!T.guess)break;const q=TRIVIA[T.idx];const r=Object.assign(trScore(q,T.guess[0],T.guess[1],T.hint),{lat:T.guess[0],lng:T.guess[1],hint:!!T.hint,q:T.idx});T.result=r;if(T.mode==="daily"){DB.trivia[today()]=r;save();if(isCloud())CL.api.submitTrivia(today(),CL.uid,{name:DB.profile.name,score:r.score,km:r.km,at:Date.now()}).catch(e=>console.warn(e));}T.vb=null;render();toast(`${trTier(r.score)[2]} ${r.score} points${T.mode==="daily"?` · +${Math.round(r.score/10)} XP`:""}`);break;}
  case "tr-practice": {const di=triviaIdxFor(today());S.trSeen=S.trSeen||new Set([di]);if(S.trSeen.size>=TRIVIA.length)S.trSeen=new Set([di]);const pool=TRIVIA.map((_,k)=>k).filter(k=>!S.trSeen.has(k));const i=pool[Math.floor(Math.random()*pool.length)];S.trSeen.add(i);S.tq={mode:"practice",idx:i,guess:null,result:null};render();break;}
  case "tr-daily": S.tq={mode:"daily"}; render(); break;
  case "tr-share": {const r=S.tq.result;const q=TRIVIA[S.tq.idx];copyText(`🧠 TravelTropia geo-trivia ${S.tq.mode==="daily"?fmtD(today()):"(practice)"}\n"${q[0]}"\n${trTier(r.score)[2]} ${r.score}/1000 – ${fmtDist(r.km)} away${triviaStats().streak>1?`\n🔥 ${triviaStats().streak}-day streak`:""}`,"Result copied – challenge your friends! 📋");break;}
  case "tzoom": {const b=$("#tmap");if(b&&b._zoom)b._zoom(+el.dataset.z);break;}
  case "adj-open": adjOpen(el.dataset.pv==="1"); break;
  case "adj-n": {const x=S.adj.stops[+el.dataset.i];x.n=clamp(x.n+ +el.dataset.d,1,30);adjModal();break;}
  case "adj-mv": moveArr(S.adj.stops,+el.dataset.i,+el.dataset.d); adjModal(); break;
  case "adj-rm": S.adj.stops.splice(+el.dataset.i,1); adjModal(); break;
  case "adj-add": {const v=($("#adjnew")||{}).value;const t=adjTrip();const m=findCity(v,t.countries);if(!m){toast(v?"Couldn't find that city – pick one from the list":"Type a city first");break;}S.adj.stops.push({name:m.name,cc:m.cc,lat:m.lat,lng:m.lng,approx:!!m.approx,n:2,seg:-1});adjModal();break;}
  case "adj-apply": applyAdjust(); break;
  case "go": closeModal(); if(el.dataset.v==="plan")P.preview=null; go(el.dataset.v); break;
  case "go-passport": closeModal(); go("passport"); break;
  case "theme": DB.settings.theme=curTheme()==="dark"?"light":"dark"; rer(); toast(`${DB.settings.theme==="dark"?"🌙 Dark":"☀️ Light"} mode on – choose “Match my device” in Settings to follow your system again`); break;
  case "settings": settingsModal(); break;
  case "close": closeModal(); break;
  case "close-settings": closeModal(); render(); break;
  case "confirm-yes": closeModal(); if(confirmFn)confirmFn(); break;
  case "new-custom": customModal(); break;
  case "samples": samples(); break;
  case "pp": DB.settings.pp=el.dataset.v==="1"; rer(); break;
  case "surprise": {const pool=Object.keys(CITY_DATA).filter(cc=>!DB.visited.includes(cc));const cc=pool[Math.floor(Math.random()*pool.length)];Object.assign(P,newPlan(),{step:2,countries:[cc],days:5+Math.floor(Math.random()*6),dare:2});toast(`🎲 The globe landed on ${flag(cc)} ${cname(cc)} – dare to go?`);go("plan");break;}
  case "insp": {const x=INSPIRATION[+el.dataset.i];S.plan=Object.assign(newPlan(),{step:3,countries:x.cc.slice(),days:x.days});regen();go("plan");break;}
  case "clist": countryListModal(el.dataset.k); break;
  case "docs-modal": {const ccs=el.dataset.cc?[el.dataset.cc]:P.countries;const grp=S.view==="plan"?P.group:[meP()];modal(`<div class="mh"><span></span>${X}</div>${docsHTML(ccs,grp)}`,"wide");break;}
  case "m-visit": setVisited(el.dataset.cc,true); toast(`✅ ${cname(el.dataset.cc)} crossed off!`); render(); countryListModal(S._clist); break;
  case "m-unvisit": {const cc=el.dataset.cc;setVisited(cc,false);toast(`Removed ${cname(cc)}`,"Undo",()=>{setVisited(cc,true);render();});render();countryListModal(S._clist);break;}
  case "m-plan": case "plan-cc": case "try-cc": {const cc=el.dataset.cc;closeModal();if(a==="try-cc"){P.countries=[cc];P.cities={};P.custom=[];regen();render();window.scrollTo(0,0);break;}S.plan=Object.assign(newPlan(),{countries:[cc]});go("plan");break;}
  // planner
  case "tog-country": {const cc=el.dataset.cc;P.countries=P.countries.includes(cc)?P.countries.filter(x=>x!==cc):[...P.countries,cc];render();break;}
  case "pop-more": P.popN+=8; render(); break;
  case "pop-less": P.popN=4; render(); break;
  case "rm-country": P.countries=P.countries.filter(x=>x!==el.dataset.cc);delete P.cities[el.dataset.cc];P.custom=P.custom.filter(c=>c.cc!==el.dataset.cc);render();break;
  case "tog-city": {const cc=el.dataset.cc,n=el.dataset.n,l=P.cities[cc]||[];P.cities[cc]=l.includes(n)?l.filter(x=>x!==n):[...l,n];render();break;}
  case "rm-custom": P.custom=P.custom.filter(c=>!(c.cc===el.dataset.cc&&c.name===el.dataset.n));render();break;
  case "pick-country": {const cc=el.dataset.cc;if(!P.countries.includes(cc))P.countries.push(cc);render();setTimeout(()=>{const s=$("#csearch");if(s)s.focus();},10);break;}
  case "pick-city": {const cc=el.dataset.cc,n=el.dataset.n;if(!P.countries.includes(cc))P.countries.push(cc);addPlanPlace({name:n,cc,lat:+el.dataset.lat,lng:+el.dataset.lng});render();break;}
  case "geo-city": {const q=el.dataset.q;$("#cdd")&&$("#cdd").classList.add("hide");toast("Looking up "+esc(q)+"…");const g=await geocode(q,"");if(!g||!CTRY[g.cc]){toast(`Couldn't find “${esc(q)}” – check the spelling or try a nearby town`);break;}if(!P.countries.includes(g.cc))P.countries.push(g.cc);addPlanPlace(g);toast(`📍 Added ${esc(g.name)}, ${esc(cname(g.cc))}`);render();break;}
  case "pstep": P.step=+el.dataset.s; render(); break;
  case "pset": P[el.dataset.k]=el.dataset.k==="dare"?+el.dataset.v:el.dataset.v; render(); break;
  case "clear-end": P.end=""; render(); break;
  case "preset": S.plan=newPlan(); render(); break;
  case "generate": regen(); P.step=3; P.showAll=false; render(); window.scrollTo(0,0); break;
  case "showall": P.showAll=!P.showAll; render(); break;
  case "preview": P.preview=P.results[+el.dataset.i]; S.tab="itin"; S.edit=false; render(); window.scrollTo(0,0); break;
  case "close-preview": P.preview=null; render(); break;
  case "save-plan": case "save-preview": {const src=a==="save-preview"?P.preview:P.results[+el.dataset.i];const tr=JSON.parse(JSON.stringify(src));tr.id=uid();tr.created=Date.now();delete tr.fits;delete tr.adjusted;addTrip(tr);P.preview=null;toast("🧳 Saved to My trips");go("trip",{trip:tr.id});break;}
  case "custom-from-plan": {const tr=blankTrip({countries:P.countries.slice(),days:selDays(P),start:P.start,group:P.group,tier:P.tier,luggage:P.luggage,flights:P.flights,from:P.from});addTrip(tr);go("trip",{trip:tr.id,edit:true});break;}
  // group
  case "g-guest": {const g=getGroup(el.dataset.ctx);g.push({id:uid(),name:"Guest "+g.length,age:30,passport:DB.profile.passports[0],passports:[DB.profile.passports[0]]});if(t&&el.dataset.ctx==="trip")syncGroup(t);rer();break;}
  case "g-rm": {const g=getGroup(el.dataset.ctx);const gone=g.splice(+el.dataset.i,1)[0];if(gone&&gone.uid&&t&&el.dataset.ctx==="trip"&&t.owner===CL.uid)t.members=(t.members||[]).filter(x=>x!==gone.uid);if(t&&el.dataset.ctx==="trip")syncGroup(t);rer();break;}
  case "friend-new": friendModal(); break;
  case "friend-edit": friendModal(DB.friends.find(f=>f.id===el.dataset.id)); break;
  case "friend-del": {const id=el.dataset.id;ask("Remove friend?","They'll stay listed on trips they're already part of.","Remove",()=>{DB.friends=DB.friends.filter(f=>f.id!==id);DB.trips.forEach(t=>t.group.forEach(p=>{if(p.friendId===id)p.friendId=null;}));rer();},true);break;}
  case "photo-rm": DB.profile.photo=""; rer(); break;
  // trips
  case "tfilter": S.tripsFilter=el.dataset.k; render(); break;
  case "open-trip": if(e.target.closest("[data-a=fav]"))break; go("trip",{trip:el.dataset.id,tab:el.dataset.tab}); break;
  case "fav": {e.stopPropagation();const tr=getTrip(el.dataset.id);tr.fav=!tr.fav;rer();break;}
  case "dup": {const tr=JSON.parse(JSON.stringify(getTrip(el.dataset.id)));tr.id=uid();tr.title+=" (copy)";tr.status="planning";tr.created=Date.now();tr.days.forEach(d=>d.items.forEach(i=>i.done=false));DB.trips.push(tr);save();toast("Trip duplicated");go("trip",{trip:tr.id});break;}
  case "del": {const tr=getTrip(el.dataset.id);if(isCloud()&&tr.owner&&tr.owner!==CL.uid){ask("Leave this trip?","It will disappear from your trips. The owner keeps it.","Leave trip",()=>{DB.trips=DB.trips.filter(x=>x!==tr);save();go("trips");});break;}ask("Delete trip?",`“${esc(tr.title)}” will be removed from your collection.`,"Delete",()=>{const i=DB.trips.indexOf(tr);DB.trips.splice(i,1);save();go("trips");toast("Trip deleted","Undo",()=>{DB.trips.splice(i,0,tr);save();render();});},true);break;}
  case "complete": {const fresh=t.countries.filter(cc=>!DB.visited.includes(cc));t.status="completed";fresh.forEach(cc=>setVisited(cc,true));save();render();
    modal(`<div style="text-align:center"><div style="font-size:60px">🎉</div><h2>Trip completed!</h2><p class="sub">${fresh.length?`You crossed off <b>${fresh.map(c=>flag(c)+" "+esc(cname(c))).join(", ")}</b> – +${fresh.length*25+100} XP. That's ${plural(sovCount(),"country","countries")} so far!`:"Welcome back! +100 XP and another great memory in your collection."}</p><div class="row" style="justify-content:center;margin-top:14px"><button class="btn" data-a="close">Close</button><button class="btn" data-a="export">${ic("image","sm")} Save as image</button><button class="btn pri" data-a="go" data-v="passport">${ic("passport","sm")} See my passport</button></div></div>`);break;}
  case "uncomplete": t.status="planning"; rer(); toast("Trip set back to planning (countries stay crossed off)"); break;
  case "edit-on": S.edit=true; S.tab="itin"; render(); break;
  case "edit-off": S.edit=false; rer(); toast("Changes saved ✓"); break;
  case "tab": S.tab=el.dataset.k; render(); break;
  case "share": copyText(tripText(t),"Itinerary copied as text 📋"); break;
  case "print": try{closeModal();window.print();}catch(err){toast("Printing isn't available here");} break;
  case "export": closeModal(); exportModal(); break;
  case "exp-fmt": EXP.fmt=el.dataset.v; el.parentNode.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b===el)); break;
  case "exp-save": {const {blob,name}=await exportBlob();await saveFile(name,blob);break;}
  case "exp-share": {try{const {blob,name}=await exportBlob();await navigator.share({files:[new File([blob],name,{type:blob.type})],title:t.title});}catch(err){}break;}
  case "trip-set": t[el.dataset.k]=el.dataset.v; rer(); break;
  case "trip-lug": t.luggage=el.dataset.v; rer(); break;
  case "trip-flights": t.flights=true; rer(); break;
  case "day-add": {const last=t.days[t.days.length-1];t.days.push({id:uid(),title:"",city:last?last.city:"",cc:last?last.cc:t.countries[0]||"",lat:last?last.lat:null,lng:last?last.lng:null,approx:last?last.approx:false,items:[]});rer();break;}
  case "day-rm": {const i=+el.dataset.d;const d=t.days.splice(i,1)[0];rer();toast("Day removed","Undo",()=>{t.days.splice(i,0,d);rer();});break;}
  case "day-dup": {const i=+el.dataset.d;const d=JSON.parse(JSON.stringify(t.days[i]));d.id=uid();d.items.forEach(x=>x.id=uid());t.days.splice(i+1,0,d);rer();break;}
  case "day-mv": moveArr(t.days,+el.dataset.d,+el.dataset.x); rer(); break;
  case "it-add": t.days[+el.dataset.d].items.push({id:uid(),time:"",title:"",cat:"sight",note:"",done:false}); rer(); setTimeout(()=>{const ins=document.querySelectorAll(`[data-f="item.title"][data-d="${el.dataset.d}"]`);if(ins.length)ins[ins.length-1].focus();},20); break;
  case "it-idea": {const d=t.days[+el.dataset.d];const c=findCity(d.city,t.countries);const used=new Set(t.days.flatMap(x=>x.items.map(i=>i.title)));const st=STYLES.find(s=>s.id===t.style)||STYLES[0];
    const opts=(c?c.hl:[]).filter(h=>!used.has(h)).concat(st.acts.map(a=>a.replace("{city}",cityQ(d.city))).filter(h=>!used.has(h)));const h=opts[Math.floor(Math.random()*Math.min(opts.length,4))]||`Explore ${d.city}`;
    d.items.push({id:uid(),time:"",title:h,cat:CAT_OF_TAG[tagOfHl(h)],note:"",done:false});rer();toast("✨ Added: "+esc(h));break;}
  case "it-dare": {const c=CHALLENGES[Math.floor(Math.random()*CHALLENGES.length)];t.days[+el.dataset.d].items.push({id:uid(),time:"",title:c[2],cat:"dare",note:`${c[1]} Comfort-zone dare · +${XP_OF[c[0]]} XP`,done:false});rer();break;}
  case "it-rm": t.days[+el.dataset.d].items.splice(+el.dataset.i,1); rer(); break;
  case "it-mv": moveArr(t.days[+el.dataset.d].items,+el.dataset.i,+el.dataset.x); rer(); break;
  case "trip-rm-cc": t.countries=t.countries.filter(c=>c!==el.dataset.cc); rer(); break;
  case "rm-pack": t.packing=t.packing.filter(p=>p.id!==el.dataset.id); rer(); break;
  case "rm-exp": t.expenses=t.expenses.filter(p=>p.id!==el.dataset.id); rer(); break;
  case "chal-more": {const lvl=+el.dataset.l;const have=new Set(t.challenges.map(c=>c.t));const c=pick(CHALLENGES.filter(x=>x[0]===lvl&&!have.has(x[2])),1)[0];if(c){t.challenges.push({id:uid(),lvl:c[0],em:c[1],t:c[2],done:false});rer();}else toast("You've got them all at this level!");break;}
  // passport
  case "cv": {const cc=el.dataset.cc;const on=!DB.visited.includes(cc);setVisited(cc,on);if(on)toast(`✅ ${cname(cc)} crossed off! +25 XP`);refreshPassport(cc);break;}
  case "cw": {const cc=el.dataset.cc;setWish(cc,!DB.wishlist.includes(cc));refreshPassport(cc);break;}
  case "pop-close": $("#mpop").innerHTML=""; break;
  case "zoom": {const b=$("#wmap");if(b&&b._zoom)b._zoom(+el.dataset.z);break;}
  // meetups
  case "meet-new": meetModal(); break;
  case "meet-type": S.meetType=el.dataset.v; render(); break;
  case "meet-city": S.meetQ=el.dataset.n; go("meet"); break;
  case "meet-join": case "meet-leave": {const x=meetList().find(m=>m.id===el.dataset.id);if(!x)break;
    if(MEET.mode==="cloud"){try{if(a==="meet-join"){await CL.api.joinMeetup(x.id,{id:MEET.myId,name:DB.profile.name},true);if(!DB.joined.includes(x.id))DB.joined.push(x.id);}else{await CL.api.setAttendees(x.id,(x.attendees||[]).filter(p=>p.id!==MEET.myId));DB.joined=DB.joined.filter(i=>i!==x.id);}save();toast(a==="meet-join"?"👋 You're in! Have fun.":"You left the meet-up");}catch(e){netErr(e);}break;}const d=JSON.parse(JSON.stringify(x));delete d.id;delete d.match;d.attendees=(d.attendees||[]).filter(p=>p.id!==MEET.myId);if(a==="meet-join"){d.attendees.push({id:MEET.myId,name:DB.profile.name});if(!DB.joined.includes(x.id))DB.joined.push(x.id);}else DB.joined=DB.joined.filter(i=>i!==x.id);save();if(await meetWrite(x.id,d))toast(a==="meet-join"?"👋 You're in! Have fun.":"You left the meet-up");break;}
  case "meet-del": {const id=el.dataset.id;ask("Cancel meet-up?","It will be removed for everyone.","Cancel meet-up",()=>meetWrite(id,null,true),true);break;}
  case "meet-copy": {const x=meetList().find(m=>m.id===el.dataset.id);if(x)copyText(`☕ ${x.title}\n📍 ${x.city}, ${cname(x.cc)} – ${x.place}\n🗓️ ${fmtD(x.date,{weekday:"long",day:"numeric",month:"long"})} ${x.time||""}\nJoin me on TravelTropia!`,"Invite copied 📋");break;}
  // settings
  case "set-av": DB.profile.avatar=el.dataset.v; DB.profile.photo=""; save(); settingsModal(); break;
  case "export-backup": saveFile(`traveltropia-backup-${today()}.json`,JSON.stringify(DB,null,1)); break;
  case "copy-backup": copyText(JSON.stringify(DB),"Backup copied – paste it in a .json file to keep it"); break;
  case "reset": ask("Reset everything?","All trips, friends, visited countries and settings will be erased from this browser. This can't be undone.","Erase all data",()=>{DB=DEFAULT_DB();save();S.plan=newPlan();go("home");toast("All data erased");},true); break;
  }
});

/* ---------- Inputs ---------- */
let hlIndex=0,searchT;
document.addEventListener("input",e=>{
  const el=e.target,P=S.plan,t=getTrip(S.tripId);
  if(el.id==="csearch"){const q=el.value.trim().toLowerCase();const dd=$("#cdd");if(!q){dd.classList.add("hide");return;}
    const nq=norm(q);const rank=cc=>(CITY_DATA[cc]?0:2)+(norm(CTRY[cc].short).startsWith(nq)||norm(cname(cc)).startsWith(nq)?0:1)+(SAFETY[cc]&&SAFETY[cc][0]>=4?3:0);const res=ALL_CC.filter(cc=>norm(cname(cc)).includes(nq)||norm(CTRY[cc].short).includes(nq)||norm(CTRY[cc].capital).includes(nq)).sort((a,b)=>rank(a)-rank(b)).slice(0,10);
    const cityHits=placeSearch(q,6);hlIndex=0;
    dd.innerHTML=(res.map((cc,i)=>`<button class="${i===0?"hl":""}" data-a="pick-country" data-cc="${cc}"><span class="fl">${flag(cc)}</span><span><b>${esc(cname(cc))}</b><div class="muted">${continentOf(cc)}${CITY_DATA[cc]?" · "+CITY_DATA[cc].length+" curated places":""}</div></span>${P.countries.includes(cc)?'<span class="pill g" style="margin-left:auto">Added</span>':SAFETY[cc]&&SAFETY[cc][0]>=3?`<span style="margin-left:auto">${safetyPill(cc)}</span>`:""}</button>`).join("")+cityHits.map(c=>`<button data-a="pick-city" data-cc="${c.cc}" data-n="${esc(c.name)}" data-lat="${c.lat}" data-lng="${c.lng}"><span class="fl">📍</span><span><b>${esc(c.name)}</b><div class="muted">${c.world?"City":"Curated city"} in ${esc(cname(c.cc))}${c.pop?` · ${c.pop>=1000?(c.pop/1000).toFixed(1)+"M":c.pop+"k"} people`:""}</div></span></button>`).join(""))+`<button data-a="geo-city" data-q="${esc(el.value.trim())}"><span class="fl">🔎</span><span><b>Find “${esc(el.value.trim())}” on the map</b><div class="muted">Any town, village or island</div></span></button>`;
    dd.classList.remove("hide");return;}
  if(el.id==="exq"){exState().q=el.value;clearTimeout(searchT);searchT=setTimeout(()=>{const pos=el.selectionStart;render();const n=$("#exq");if(n){n.focus();n.setSelectionRange(pos,pos);}},180);return;}
  if(el.hasAttribute("data-exmax")){exState().max=+el.value;const l=$("#exmaxl");if(l)l.textContent=S.ex.max?fmtCur(S.ex.max):"any";clearTimeout(searchT);searchT=setTimeout(render,250);return;}
  if(el.id==="palq"){palRender(el.value);return;}
  if(el.id==="cmpq"){const q=norm(el.value.trim());const dd=$("#cmpdd");if(!q){dd.classList.add("hide");return;}
    const hits=placeSearch(q,7);const seen=new Set(hits.map(c=>c.name+c.cc));
    const ctr=ALL_CC.filter(cc=>norm(cname(cc)).includes(q)||norm(CTRY[cc].short).includes(q)).slice(0,4).flatMap(cc=>allPlaces().filter(c=>c.cc===cc).slice(0,CITY_DATA[cc]?3:1)).filter(c=>!seen.has(c.name+c.cc));
    dd.innerHTML=hits.concat(ctr).slice(0,10).map(c=>`<button data-a="cmp-pick" data-id="${esc(placeId(c))}"><span class="fl">${flag(c.cc)}</span><span><b>${esc(c.name)}</b><div class="muted">${esc(cname(c.cc))} · ${money(dailyPP(c.cc,"comfort"))}/day</div></span></button>`).join("")+`<button data-a="cmp-geo" data-q="${esc(el.value.trim())}"><span class="fl">🔎</span><span><b>Find “${esc(el.value.trim())}” on the map</b><div class="muted">Any town, village or island</div></span></button>`;dd.classList.remove("hide");return;}
  if(el.id==="tsearch"||el.id==="msq"){const id=el.id;if(id==="tsearch")S.tripsQ=el.value;else S.meetQ=el.value;clearTimeout(searchT);searchT=setTimeout(()=>{const pos=el.selectionStart;render();const n=document.getElementById(id);if(n){n.focus();n.setSelectionRange(pos,pos);}},140);return;}
  if(el.id==="msearch"){const q=el.value.trim().toLowerCase();const nq=norm(q);const list=q?ALL_CC.filter(cc=>norm(cname(cc)).includes(nq)||norm(CTRY[cc].short).includes(nq)):[];$("#mlist").innerHTML=countryRows(list.slice(0,40));$("#mhint").textContent=q?(list.length?"":"No matches"):`Type to search all ${ALL_CC.length} countries, territories and Antarctica.`;return;}
  if(el.dataset.p){const k=el.dataset.p;
    if(k==="days"){P.days=+el.value;$("#dlab").textContent=dn(P.days);const de=$("#dend");if(de)de.textContent=P.start?"· until "+fmtD(addDays(P.start,P.days-1)):"";}
    else if(k==="maxBudget"){P.maxBudget=el.value;}
    else if(k==="from"){const m=findCity(el.value);P.from=m?{name:m.name,cc:m.cc,lat:m.lat,lng:m.lng}:P.from;}
    else if(k==="flights"){P.flights=el.checked;}
    return;}
  if(el.dataset.g){const g=getGroup(el.dataset.ctx);const p=g[+el.dataset.i];if(p){if(el.dataset.g==="passport"){p.passport=el.value;p.passports=[el.value];}else p[el.dataset.g]=el.dataset.g==="age"?clamp(+el.value||0,0,110):el.value;save();}return;}
  if(el.dataset.s){const k=el.dataset.s;const v=el.type==="checkbox"?el.checked:el.value;if(["name","home","homeCity","passport","age"].includes(k)){if(k==="passport"){DB.profile.passports=[v,...DB.profile.passports.filter(x=>x!==v)];}else DB.profile[k]=k==="age"?+v:v;syncMe();}else DB.settings[k]=v;if(k==="theme"){applyTheme();save();rer();return;}save();return;}
  if(el.dataset.f&&t&&!["start","end","from"].includes(el.dataset.f)){setField(t,el);save();}
});
function setField(t,el){
  const f=el.dataset.f,v=el.value;
  if(f==="title"||f==="notes")t[f]=v;
  else if(f==="start")t.start=v;
  else if(f==="end"){if(t.start&&v&&v>=t.start){const n=diffDays(t.start,v)+1;while(t.days.length<n){const l=t.days[t.days.length-1]||{};t.days.push({id:uid(),title:"",city:l.city||"",cc:l.cc||t.countries[0]||"",lat:l.lat,lng:l.lng,approx:l.approx,items:[]});}if(t.days.length>n){t.days=t.days.slice(0,n);toast("Trip shortened to "+plural(n,"day"));}}}
  else if(f==="from"){const m=findCity(v);if(m)t.from={name:m.name,cc:m.cc,lat:m.lat,lng:m.lng};}
  else if(f==="myBudget")t.myBudget=+v||0;
  else if(f==="day.title")t.days[+el.dataset.d].title=v;
  else if(f==="day.city"){const d=t.days[+el.dataset.d];d.city=v;const m=findCity(v,t.countries);if(m){d.lat=m.lat;d.lng=m.lng;d.cc=m.cc;d.approx=!!m.approx;if(!t.countries.includes(m.cc))t.countries.push(m.cc);}else{const c=CTRY[t.countries[0]];if(c&&v){d.lat=c.capLat!=null?c.capLat:c.lat;d.lng=c.capLng!=null?c.capLng:c.lng;d.cc=c.cc;d.approx=true;const ref=d;setTimeout(()=>{if(ref.city!==v)return;geocode(v,t.countries.length===1?t.countries[0]:"").then(g=>{if(g&&ref.city===v){ref.lat=g.lat;ref.lng=g.lng;ref.approx=false;if(g.cc&&CTRY[g.cc]){ref.cc=g.cc;if(!t.countries.includes(g.cc))t.countries.push(g.cc);}save();}});},700);}}}
  else if(f.startsWith("item."))t.days[+el.dataset.d].items[+el.dataset.i][f.slice(5)]=v;
}
document.addEventListener("change",async e=>{
  const el=e.target,t=getTrip(S.tripId),P=S.plan;
  if(el.dataset.done&&t){const [d,i]=el.dataset.done.split("|");const it=t.days.find(x=>x.id===d).items.find(x=>x.id===i);it.done=el.checked;el.closest(".item").classList.toggle("done",el.checked);if(it.cat==="dare"&&el.checked)toast("🎯 Dare done! +25 XP");save();return;}
  if(el.dataset.pack&&t){t.packing.find(x=>x.id===el.dataset.pack).done=el.checked;save();render();return;}
  if(el.dataset.chal&&t){const c=t.challenges.find(x=>x.id===el.dataset.chal);c.done=el.checked;if(el.checked)toast(`${c.em} Challenge complete! +${XP_OF[c.lvl]} XP`);save();render();return;}
  if(el.hasAttribute("data-memadd")&&el.value&&t){const u=el.value;const pr=CL.profiles[u]||{};t.members=[...new Set([...(t.members||[]),u])];if(!t.group.some(p=>p.uid===u))t.group.push({id:uid(),uid:u,name:pr.name||"Friend",age:30,passport:DB.profile.passports[0],passports:[DB.profile.passports[0]]});syncGroup(t);save();render();shareModal();toast(`${esc(pr.name||"Friend")} added – they can now see and edit this trip`);return;}
  if(el.hasAttribute("data-public")&&t){t.public=el.checked;save();shareModal();return;}
  if(el.hasAttribute("data-ppadd")&&el.value){if(!DB.profile.passports.includes(el.value))DB.profile.passports.push(el.value);syncMe();toast(`🛂 ${cname(el.value)} passport added – visa checks now use the best of your passports`);settingsModal();return;}
  if(el.hasAttribute("data-basics")){const tr=S.view==="plan"&&S.plan.preview?S.plan.preview:t;if(tr){setBasics(tr,el.checked);if(S.view!=="plan")save();render();toast(el.checked?"🥖 Basic food & water added to the price":"Removed food & water – flights & hotel only");}return;}
  if(el.dataset.bbasic!=null){const tr=S.plan.results[+el.dataset.bbasic];if(tr){setBasics(tr,el.checked);render();}return;}
  if(el.hasAttribute("data-exmonth")){exState().month=+el.value;exState().max=0;render();return;}
  if(el.hasAttribute("data-exsort")){exState().sort=el.value;render();return;}
  if(el.hasAttribute("data-cmpmonth")){S.cmpMonth=+el.value;render();return;}
  if(el.dataset.cmpo){const O=cmpOpts();const k=el.dataset.cmpo;O[k]=k==="budget"?(el.value===""?"":Math.max(0,+el.value)):el.value;
    if(k==="start"&&O.start){if(!O.end||O.end<=O.start)O.end=addDays(O.start,O.days);}
    if(k==="end"&&O.end&&O.start&&O.end<O.start){O.end="";toast("The return date has to be after you leave");}
    if(O.start&&O.end)O.days=cmpDays();render();return;}
  if(el.hasAttribute("data-tsort")){S.tripsSort=el.value;render();return;}
  if(el.hasAttribute("data-meetnear")){S.meetNear=el.checked;render();return;}
  if(el.hasAttribute("data-expmap")){EXP.map=el.checked;EXP.canvas=null;exportModal();return;}
  if(el.hasAttribute("data-meetfill")){const p=myTripPlaces()[+el.value];if(!p)return;const f=el.form;f.city.value=p.city;f.cc.value=p.cc;f.date.value=p.date;return;}
  if(el.hasAttribute("data-addcc")&&t&&el.value){t.countries.push(el.value);save();render();return;}
  if(el.dataset.gadd&&el.value.startsWith("u:")){const u=el.value.slice(2);const pr=CL.profiles[u]||{};const g=getGroup(el.dataset.gadd);if(g){g.push({id:uid(),uid:u,name:pr.name||"Friend",age:30,passport:DB.profile.passports[0],passports:[DB.profile.passports[0]]});if(t&&el.dataset.gadd==="trip"){syncGroup(t);t.members=[...new Set([...(t.members||[]),u])];toast(`${esc(pr.name||"Friend")} can now see and edit this trip`);}save();render();}return;}
  if(el.dataset.gadd&&el.value){const f=DB.friends.find(x=>x.id===el.value);const g=getGroup(el.dataset.gadd);if(f&&g){g.push(friendP(f));if(t&&el.dataset.gadd==="trip")syncGroup(t);save();render();}return;}
  if(el.dataset.p==="start"||el.dataset.p==="end"){P[el.dataset.p]=el.value;if(P.end&&P.start&&P.end<P.start){if(el.dataset.p==="start")P.end="";else{toast("End date must be after the start date");P.end="";}}render();return;}
  if(el.dataset.p==="from"){render();return;}
  if(el.dataset.f&&t&&["start","end","from"].includes(el.dataset.f)){setField(t,el);save();render();return;}
  if(el.dataset.f&&t&&(el.tagName==="SELECT"||el.dataset.f==="day.city")){setField(t,el);save();return;}
  if(el.dataset.g==="passport"||el.dataset.g==="age"){render();return;}
  if(el.dataset.photo){const file=el.files[0];try{const url=await readImage(file,el.dataset.photo==="me"?256:192);if(el.dataset.photo==="me"){DB.profile.photo=url;save();render();const sm=$("#scrim");if(sm)settingsModal();toast("📸 Profile picture updated");}else{S._fphoto=url;const pv=$("#fprev");if(pv)pv.innerHTML=`<img src="${url}">`;}}catch(err){toast("Please choose a JPG, PNG or other image file");}return;}
  if(el.hasAttribute("data-import")){const f=el.files[0];if(!f)return;f.text().then(txt=>{try{const d=JSON.parse(txt);if(!d||!Array.isArray(d.trips))throw 0;DB=d;normalize();save();closeModal();render();toast(`Imported ${plural(DB.trips.length,"trip")} ✓`);}catch(err){toast("That file isn't a TravelTropia backup");}});}
  if(el.dataset.s==="homeCity"&&el.value&&!findCity(el.value,[DB.profile.home])){geocode(el.value,DB.profile.home).then(g=>{if(g){DB.profile.homeGeo=Object.assign({q:el.value},g);save();toast(`📍 Home set to ${esc(g.name)}${g.admin?", "+esc(g.admin):""}`);}});}
  if(el.dataset.s==="currency")loadRates();
  if(["currency","units","home","homeCity","passport"].includes(el.dataset.s)){render();settingsModal();}
});
document.addEventListener("submit",async e=>{
  const f=e.target;e.preventDefault();const t=getTrip(S.tripId);const fd=new FormData(f);
  if(CLOUD_ON&&CL.api&&["login","signup","reset"].includes(f.dataset.form)){
    const btn=f.querySelector("button.pri");if(btn)btn.disabled=true;
    try{if(f.dataset.form==="login")await CL.api.signIn(String(fd.get("u")).trim(),String(fd.get("p")),!!fd.get("rem"));
      else if(f.dataset.form==="signup"){const p=String(fd.get("p"));if(p!==String(fd.get("p2"))){authErr("The passwords don't match.");if(btn)btn.disabled=false;return;}await CL.api.signUp(String(fd.get("u")).trim(),p,String(fd.get("n")).trim(),!!fd.get("rem"));}
      else{await CL.api.resetPassword(String(fd.get("e")).trim());closeModal();toast("📧 Reset link sent – check your inbox");}}
    catch(err){authErr(authMsg(err));if(btn)btn.disabled=false;}return;}
  if(f.dataset.form==="login"){const u=String(fd.get("u")).trim().toLowerCase();const a=accounts().find(x=>x.provider==="local"&&(x.username||"").toLowerCase()===u);
    if(!a){authErr("No account with that name on this device – create one?");return;}
    const h=await hashPw(String(fd.get("p")),a.salt,a.hash.slice(0,2));if(h!==a.hash){authErr("Wrong password – try again.");return;}
    openAccount(a,!!fd.get("rem"));enterApp();return;}
  if(f.dataset.form==="signup"){const n=String(fd.get("n")).trim(),u=String(fd.get("u")).trim(),p=String(fd.get("p")),p2=String(fd.get("p2"));
    if(u.length<3){authErr("Username must be at least 3 characters.");return;}if(p.length<6){authErr("Password must be at least 6 characters.");return;}if(p!==p2){authErr("The passwords don't match.");return;}
    const accs=accounts();if(accs.some(x=>(x.username||"").toLowerCase()===u.toLowerCase())){authErr("That username is taken on this device.");return;}
    const salt=uid()+uid();const a={id:"u"+uid(),provider:"local",name:n,username:u,salt,hash:await hashPw(p,salt),created:Date.now()};accs.push(a);saveAccounts(accs);
    if(fd.get("bring")){const g=LS.get("traveltropia.v1");if(g){try{const d=JSON.parse(g);d.seen=false;d.profile=Object.assign(d.profile||{},{name:n});LS.set(keyFor(a.id),JSON.stringify(d));}catch(err){}}}
    openAccount(a,!!fd.get("rem"));enterApp();toast("🎉 Account created – welcome aboard!");return;}
  if(f.dataset.form==="chpw"){const a=accounts().find(x=>x.id===ACCOUNT.id);if(!a)return;const h=await hashPw(String(fd.get("o")),a.salt,a.hash.slice(0,2));if(h!==a.hash){authErr("Current password is wrong.");return;}
    const p=String(fd.get("p"));if(p.length<6||p!==fd.get("p2")){authErr("New passwords must match and be 6+ characters.");return;}
    const accs=accounts();const b=accs.find(x=>x.id===a.id);b.salt=uid()+uid();b.hash=await hashPw(p,b.salt);saveAccounts(accs);closeModal();toast("🔒 Password changed");return;}
  if(!ACCOUNT)return;
  if(f.dataset.form==="addfriend"){const h=norm(String(fd.get("h"))).replace(/^@/,"").replace(/[^a-z0-9_]/g,"");if(!h)return;if(!isCloud()){toast("Sign in online to add friends");return;}
    try{const u=await CL.api.findHandle(h);if(!u){toast("No traveller with @"+h);return;}if(u.uid===CL.uid){toast("That's you! 😄");return;}CL.profiles[u.uid]=u;if(CL.friendships.some(x=>x.members.includes(u.uid))){toast("You're already connected with @"+h);return;}await CL.api.requestFriend(CL.uid,u.uid);toast("Friend request sent to "+esc(u.name||"@"+h));f.reset();}catch(err){netErr(err);}return;}
  if(f.dataset.form==="chat"&&t){const m=String(fd.get("m")).trim();if(!m)return;f.reset();CL.api.sendMessage(t.id,{uid:CL.uid,name:DB.profile.name,text:m.slice(0,1000),at:Date.now()}).catch(netErr);return;}
  if(f.dataset.form==="pack"&&t){t.packing.push({id:uid(),text:fd.get("t"),done:false});save();render();const n=document.querySelector("[data-form=pack] input");if(n)n.focus();}
  if(f.dataset.form==="exp"&&t){t.expenses.push({id:uid(),label:fd.get("l"),amount:+fd.get("a"),by:fd.get("by")||"You"});save();render();}
  if(f.dataset.form==="custom"){const s=fd.get("start"),en=fd.get("end");const days=s&&en&&en>=s?diffDays(s,en)+1:clamp(+fd.get("days")||5,1,60);const tr=blankTrip({title:fd.get("title"),countries:[fd.get("cc")],start:s,days});addTrip(tr);closeModal();go("trip",{trip:tr.id,edit:true});}
  if(f.dataset.form==="friend"){const id=f.dataset.id;const pps=[fd.get("passport"),fd.get("passport2")].filter((x,i,a)=>x&&a.indexOf(x)===i);const o={name:fd.get("name"),age:+fd.get("age")||"",passport:pps[0],passports:pps,avatar:fd.get("avatar")||"🙂",photo:S._fphoto||""};
    if(id){Object.assign(DB.friends.find(x=>x.id===id),o);DB.trips.forEach(t=>t.group.forEach(p=>{if(p.friendId===id){p.name=o.name;p.age=+o.age||30;p.passport=o.passport;p.passports=pps.slice();}}));}else{const nf=Object.assign({id:uid()},o);DB.friends.push(nf);if(S.view==="plan")S.plan.group.push(friendP(nf));else if(S.view==="trip"&&S.edit&&t){t.group.push(friendP(nf));syncGroup(t);}}
    save();closeModal();render();toast(id?"Friend updated":"👯 Friend added");}
  if(f.dataset.form==="meet"){const id=uid();const d={title:fd.get("title"),type:fd.get("type")||"coffee",cc:fd.get("cc"),city:String(fd.get("city")).trim(),date:fd.get("date"),time:fd.get("time"),max:+fd.get("max")||0,place:fd.get("place"),desc:fd.get("desc"),contact:fd.get("contact"),hostId:MEET.myId,hostName:DB.profile.name,attendees:[{id:MEET.myId,name:DB.profile.name}],created:Date.now()};
    if(await meetWrite(id,d)){closeModal();if(!DB.joined.includes(id))DB.joined.push(id);save();toast("☕ Meet-up posted!");S.meetQ="";render();}}
});
document.addEventListener("keydown",e=>{
  const el=e.target;
  if(el.dataset&&el.dataset.addcity&&e.key==="Enter"){const v=el.value.trim();if(!v)return;const cc=el.dataset.addcity;const m=findCity(v,[cc]);
    if(m&&m.cc===cc&&m.world&&norm(m.name)===norm(v)){addPlanPlace(m);render();return;}
    if(m&&m.cc===cc&&!m.approx&&!m.world){const l=S.plan.cities[cc]=S.plan.cities[cc]||[];if(!l.includes(m.name))l.push(m.name);}
    else{const c=CTRY[cc];const obj={name:v,cc,lat:c.capLat!=null?c.capLat:c.lat,lng:c.capLng!=null?c.capLng:c.lng,tags:"chf",hl:[`Explore ${v}`,`${v} old town walk`,`Local food in ${v}`,`Best viewpoint in ${v}`],approx:true};S.plan.custom.push(obj);
      geocode(v,cc).then(g=>{if(g){obj.lat=g.lat;obj.lng=g.lng;obj.name=g.name;obj.approx=false;if(S.view==="plan")render();}else toast(`Couldn't find “${esc(v)}” on the map – it's placed approximately`);});}
    render();return;}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&ACCOUNT){e.preventDefault();openPalette();return;}
  if(el.id==="palq"){if(e.key==="Escape"){closeModal();return;}const btns=[...document.querySelectorAll("#palres .pal-row")];if(!btns.length)return;
    if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();palIdx=clamp(palIdx+(e.key==="ArrowDown"?1:-1),0,btns.length-1);btns.forEach((b,i)=>b.classList.toggle("hl",i===palIdx));btns[palIdx].scrollIntoView({block:"nearest"});}
    if(e.key==="Enter"){e.preventDefault();btns[palIdx].querySelector("[data-main]").click();}return;}
  if(el.id==="csearch"){const btns=[...document.querySelectorAll("#cdd button")];if(!btns.length)return;
    if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();hlIndex=clamp(hlIndex+(e.key==="ArrowDown"?1:-1),0,btns.length-1);btns.forEach((b,i)=>b.classList.toggle("hl",i===hlIndex));btns[hlIndex].scrollIntoView({block:"nearest"});}
    if(e.key==="Enter"){e.preventDefault();btns[hlIndex].click();}if(e.key==="Escape")$("#cdd").classList.add("hide");return;}
  if(e.key==="Escape"){closeModal();const p=$("#mpop");if(p)p.innerHTML="";return;}
  if(/INPUT|TEXTAREA|SELECT/.test(el.tagName)||!ACCOUNT)return;
  if(e.key==="/"){const s=$("#csearch")||$("#tsearch")||$("#msq")||$("#msearch");if(s){e.preventDefault();s.focus();}}
  if(e.key==="n"||e.key==="N"){e.preventDefault();customModal();}
});

/* ---------- Trivia ---------- */
const dayNo=d=>{const x=parseD(d);return Math.round(Date.UTC(x.getFullYear(),x.getMonth(),x.getDate())/864e5);};
const triviaIdxFor=d=>{const L=TRIVIA.length;return ((dayNo(d)*5)%L+L)%L;};
const trTier=sc=>{let t=TRIVIA_TIERS[0];TRIVIA_TIERS.forEach(x=>{if(sc>=x[0])t=x;});return t;};
function trScore(q,lat,lng,hint){const d=Math.min(...q[2].map(p=>dist({lat,lng},{lat:p[0],lng:p[1]})));const x=Math.max(0,d-q[3]);let sc=d<=q[3]?1000:Math.round(1000*Math.pow(Math.max(0,1-x/4000),1.6));if(hint)sc=Math.max(0,sc-100);return {km:Math.round(d),score:sc};}
function triviaStats(){
  const T=DB.trivia||{};const dates=Object.keys(T).sort();const scores=dates.map(d=>T[d].score||0);
  let streak=0;let d=T[today()]?today():addDays(today(),-1);while(T[d]){streak++;d=addDays(d,-1);}
  return {played:dates.length,streak,avg:scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):0,best:scores.length?Math.max(...scores):0,
    last:Array.from({length:14},(_,i)=>{const dd=addDays(today(),i-13);return {d:dd,r:T[dd]||null};})};
}
function triviaCard(){
  const r=DB.trivia[today()];const q=TRIVIA[triviaIdxFor(today())];const st=triviaStats();
  return `<div class="card pad trivia-card"><div class="spread"><div class="lbl">DAILY GEO-TRIVIA</div>${st.streak?`<span class="pill a">🔥 ${st.streak}-day streak</span>`:""}</div>
  ${r?`<div class="row" style="margin:10px 0 4px"><span style="font-size:34px">${trTier(r.score)[2]}</span><div><div class="display" style="font-size:30px;font-weight:800">${r.score}<span class="muted" style="font-size:14px"> / 1000</span></div><div class="muted">${trTier(r.score)[1]} · ${r.km<=1?"spot on":fmtDist(r.km)+" away"}</div></div></div>${scaleBar(r.score)}<button class="btn sm" style="margin-top:12px" data-a="go" data-v="trivia">See answer & stats ${ic("arrow","sm")}</button>`
  :`<h3 style="margin:10px 0 6px">${esc(q[0])}</h3><p class="muted">Click the spot on the world map – the closer you are, the more points (up to 1,000).</p><button class="btn pri" data-a="go" data-v="trivia">${ic("target","sm")} Play today's question</button>`}</div>`;
}
function scaleBar(sc){return `<div class="scale"><div class="scale-bar"><i style="left:${sc/10}%"></i></div><div class="scale-lbl">${TRIVIA_TIERS.map(t=>`<span style="left:${t[0]/10}%">${t[2]}</span>`).join("")}</div></div>`;}
function vTrivia(m){
  const T=S.tq||(S.tq={mode:"daily"});
  if(T.mode==="daily"){T.idx=triviaIdxFor(today());T.result=DB.trivia[today()]||null;}
  const q=TRIVIA[T.idx];const r=T.result;const st=triviaStats();
  const hrs=24-new Date().getHours();
  m.innerHTML=`<div class="topbar"><div><h1>${T.mode==="daily"?"Daily geo-trivia":"Practice round"}</h1><div class="sub">${T.mode==="daily"?fmtD(today(),{weekday:"long",day:"numeric",month:"long"})+" · one question a day – click the map to answer":"Just for fun – practice rounds don't count towards your score"}</div></div>
   <div class="row">${T.mode==="practice"?`<button class="btn" data-a="tr-daily">${ic("calendar","sm")} Back to today's question</button>`:""}${st.streak?`<span class="pill a">🔥 ${st.streak}-day streak</span>`:""}</div></div>
  <div class="grid two" style="grid-template-columns:minmax(0,2.2fr) minmax(260px,1fr);align-items:start">
   <div>
    <div class="card pad" style="margin-bottom:14px"><div class="spread"><span class="pill b">${esc(q[1])}</span>${!r?(T.hint?`<span class="muted">💡 ${esc(q[5])} <span class="pill y">−100</span></span>`:`<button class="btn sm ghost" data-a="tr-hint">💡 Hint (−100 pts)</button>`):""}</div><h2 style="margin-top:8px">${esc(q[0])}</h2></div>
    ${triviaMapSVG()}
    ${r?`<div class="card pad tr-result" style="margin-top:14px"><div class="row" style="gap:18px"><span style="font-size:48px">${trTier(r.score)[2]}</span><div><div class="display" style="font-size:40px;font-weight:800;line-height:1">${r.score} <span class="muted" style="font-size:16px">/ 1000</span></div><div class="sub"><b>${trTier(r.score)[1]}</b> · ${r.km<=1?"spot on!":"your guess was "+fmtDist(r.km)+" away"}${r.hint?" · hint used":""}</div></div></div>
      ${scaleBar(r.score)}
      <div class="leg" style="margin-top:14px">💡 <span>${esc(q[4])}</span></div>
      <div class="row" style="margin-top:14px">${T.mode==="daily"?`<span class="muted">New question in ~${plural(hrs,"hour")}.</span>`:`<button class="btn pri" data-a="tr-practice">Next practice question ${ic("arrow","sm")}</button>`}<button class="btn" data-a="tr-practice">${ic("dice","sm")} ${T.mode==="daily"?"Play a practice round":"Shuffle"}</button><button class="btn ghost" data-a="tr-share">${ic("copy","sm")} Share result</button></div></div>`
    :`<div class="row" style="margin-top:12px;justify-content:space-between"><span class="muted" id="trhint">${T.guess?`📍 Guess placed – you can still move it.`:"Click anywhere on the map to drop your pin. Scroll or use +/− to zoom."}</span><button class="btn earth" data-a="tr-lock" ${T.guess?"":"disabled"}>${ic("check","sm")} Lock in my guess</button></div>`}
   </div>
   <div class="card pad"><h3>Your trivia stats</h3>
    <div class="grid g2" style="gap:10px;margin-top:12px">${[["🔥",st.streak,"Day streak"],["🎯",st.best,"Best score"],["📊",st.avg,"Average"],["🗓️",st.played,"Days played"]].map(x=>`<div class="leg" style="flex-direction:column;align-items:flex-start;gap:0"><span>${x[0]}</span><b class="display" style="font-size:22px">${x[1]}</b><span class="muted">${x[2]}</span></div>`).join("")}</div>
    <h3 style="margin:18px 0 8px;font-size:15px">Last 14 days</h3>
    <div class="spark">${st.last.map(x=>`<div title="${fmtD(x.d,{day:"numeric",month:"short"})}: ${x.r?x.r.score:"not played"}"><i style="height:${x.r?Math.max(4,x.r.score/10):2}%;background:${x.r?"var(--earth-strong)":"var(--line)"}"></i></div>`).join("")}</div>
    <h3 style="margin:18px 0 8px;font-size:15px">Score scale</h3>
    ${TRIVIA_TIERS.slice().reverse().map(t=>`<div class="pack"><span style="font-size:18px">${t[2]}</span><span>${t[1]}</span><span class="muted" style="margin-left:auto">${t[0]===1000?"1000":t[0]+"+"}</span></div>`).join("")}
    ${boardHTML()}
    <div class="muted" style="margin-top:8px">Within the target area = 1000 points; it drops the further away you click (0 beyond ~4,000 km). Every 10 points = 1 XP.</div>
   </div></div>`;
}
function triviaMapSVG(){const WC=worldPaths();return `<div class="mapbox world trv" id="tmap"><svg id="tsvg" viewBox="0 0 960 500"><path d="${WC.sphere}" fill="var(--map-sea)"/><g>${WC.list.map(f=>`<path class="ctry" d="${f.d}"/>`).join("")}</g><g id="tlayer"></g></svg><div class="mapctl"><button data-a="tzoom" data-z="0.7">+</button><button data-a="tzoom" data-z="1.4">−</button><button data-a="tzoom" data-z="0">⟲</button></div></div>`;}
function initTriviaMap(){
  const svg=$("#tsvg");if(!svg)return;const T=S.tq;const q=TRIVIA[T.idx];const WC=worldPaths();
  const base=[0,0,960,500];let vb=(T.vb||base).slice();const setVB=()=>{svg.setAttribute("viewBox",vb.join(" "));T.vb=vb.slice();draw();};
  const zoomAt=(f,cx,cy)=>{const nw=clamp(vb[2]*f,960/14,960),nh=nw*500/960;vb=[clamp(cx-(cx-vb[0])*nw/vb[2],0,960-nw),clamp(cy-(cy-vb[1])*nh/vb[3],0,500-nh),nw,nh];setVB();};
  const pt=e=>{const r=svg.getBoundingClientRect();return [vb[0]+(e.clientX-r.left)/r.width*vb[2],vb[1]+(e.clientY-r.top)/r.height*vb[3]];};
  function draw(){
    const k=vb[2]/960,L=$("#tlayer");if(!L)return;let h="";
    const res=T.result;const g=res?[res.lat,res.lng]:T.guess;
    if(res){const near=q[2].slice().sort((a,b)=>dist({lat:g[0],lng:g[1]},{lat:a[0],lng:a[1]})-dist({lat:g[0],lng:g[1]},{lat:b[0],lng:b[1]}))[0];
      h+=`<path d="${WC.path({type:"LineString",coordinates:[[g[1],g[0]],[near[1],near[0]]]})}" fill="none" stroke="#2F7F79" stroke-width="${2*k}" stroke-dasharray="${6*k} ${5*k}"/>`;
      q[2].forEach(p=>{const [x,y]=WC.proj([p[1],p[0]]);const rr=Math.max(5*k,q[3]/40);h+=`<circle cx="${x}" cy="${y}" r="${rr}" fill="#7FCBA2" fill-opacity=".45" stroke="#3E8E6A" stroke-width="${1.5*k}"/><circle cx="${x}" cy="${y}" r="${3*k}" fill="#3E8E6A"/>`;});}
    if(g){const [x,y]=WC.proj([g[1],g[0]]);h+=`<g transform="translate(${x},${y}) scale(${k})"><path d="M0 0 c-7 -10 -10 -14 -10 -19 a10 10 0 0 1 20 0 c0 5 -3 9 -10 19z" fill="#E07A5F" stroke="#fff" stroke-width="2"/><circle cy="-19" r="3.5" fill="#fff"/></g>`;}
    L.innerHTML=h;
  }
  svg.addEventListener("wheel",e=>{e.preventDefault();const [x,y]=pt(e);zoomAt(e.deltaY<0?.8:1.25,x,y);},{passive:false});
  let drag=null,moved=false;
  svg.addEventListener("pointerdown",e=>{drag=[e.clientX,e.clientY,vb[0],vb[1]];moved=false;});
  svg.addEventListener("pointermove",e=>{if(!drag)return;const r=svg.getBoundingClientRect();if(Math.abs(e.clientX-drag[0])+Math.abs(e.clientY-drag[1])>5)moved=true;if(!moved)return;vb[0]=clamp(drag[2]-(e.clientX-drag[0])/r.width*vb[2],0,960-vb[2]);vb[1]=clamp(drag[3]-(e.clientY-drag[1])/r.height*vb[3],0,500-vb[3]);setVB();});
  svg.addEventListener("pointerup",e=>{const was=drag;drag=null;if(!was||moved||T.result)return;const ll=WC.proj.invert(pt(e));if(!ll||isNaN(ll[0]))return;T.guess=[ll[1],ll[0]];draw();const b=$("[data-a=tr-lock]");if(b)b.disabled=false;const hn=$("#trhint");if(hn)hn.textContent="📍 Guess placed – click again to move it, then lock it in.";});
  $("#tmap")._zoom=f=>{if(!f){vb=base.slice();setVB();return;}zoomAt(f,vb[0]+vb[2]/2,vb[1]+vb[3]/2);};
  svg.setAttribute("viewBox",vb.join(" "));draw();
}

/* ---------- Levels & achievements ---------- */
function levelsCard(xp){
  return `<div class="card pad section"><div class="spread"><div><h3>Traveller levels</h3><div class="muted">${LEVELS.length} levels to unlock – you're level ${xp.level}.</div></div><button class="btn sm ghost" data-a="levels">How to earn XP ${ic("arrow","sm")}</button></div>
  <div class="levels">${LEVELS.map((l,i)=>`<div class="lvl ${i+1<xp.level?"done":i+1===xp.level?"cur":""}"><span class="em">${l[2]}</span><b>${i+1}. ${l[1]}</b><span class="muted">${l[0].toLocaleString()} XP</span></div>`).join("")}</div></div>`;
}
function levelsModal(){
  const xp=xpInfo();
  modal(`<div class="mh"><h2>Levels & XP</h2>${X}</div><p class="sub">You have <b>${xp.xp.toLocaleString()} XP</b> – level ${xp.level} of ${LEVELS.length} (${xp.title}).${xp.next?` ${(xp.next-xp.xp).toLocaleString()} XP to the next level.`:" Max level reached!"}</p>
  <div class="levels" style="margin:12px 0">${LEVELS.map((l,i)=>`<div class="lvl ${i+1<xp.level?"done":i+1===xp.level?"cur":""}"><span class="em">${l[2]}</span><b>${i+1}. ${l[1]}</b><span class="muted">${l[0].toLocaleString()} XP</span></div>`).join("")}</div>
  <h3 style="margin:14px 0 8px">How to earn XP</h3>
  ${[["🌍","Visit a country or territory","+25"],["🏁","Complete a trip","+100"],["🎯","Comfort-zone challenge","+20 / 40 / 70"],["✅","Tick off a dare in your itinerary","+25"],["☕","Join or host a meet-up","+30"],["🧠","Daily trivia","+1 per 10 points"]].map(x=>`<div class="pack"><span style="font-size:18px">${x[0]}</span><span>${x[1]}</span><b style="margin-left:auto">${x[2]}</b></div>`).join("")}`,"wide");
}
function badgeRow(b){const [c,g]=b.p();const done=c>=g;return `<div class="bdet ${done?"":"off"}"><span class="em">${b.em}</span><div style="flex:1"><div class="spread"><b>${esc(b.name)}</b>${done?'<span class="pill g">✓ Unlocked</span>':`<span class="muted">${Math.min(c,g)} / ${g}</span>`}</div><div class="muted">${esc(b.desc)}</div><div class="bar" style="margin-top:6px"><i style="width:${Math.min(100,c/g*100)}%;background:${done?"var(--earth-strong)":"var(--blue)"}"></i></div></div></div>`;}
function badgesModal(i){
  if(i!=null){const b=BADGES[i];const [c,g]=b.p();const done=c>=g;
    modal(`<div class="mh"><span></span>${X}</div><div style="text-align:center"><div class="badge-big ${done?"":"off"}">${b.em}</div><h2 style="margin-top:10px">${esc(b.name)}</h2><p class="sub">${esc(b.desc)}</p>
    <div style="max-width:320px;margin:12px auto"><div class="bar"><i style="width:${Math.min(100,c/g*100)}%;background:var(--earth-strong)"></i></div><div class="muted" style="margin-top:6px">${done?"🎉 Unlocked!":`Progress: ${Math.min(c,g)} / ${g}`}</div></div>
    <button class="btn" data-a="badges-all">See all achievements</button></div>`);return;}
  const done=BADGES.filter(bDone).length;
  modal(`<div class="mh"><h2>Achievements <span class="muted">${done}/${BADGES.length}</span></h2>${X}</div><div class="bar" style="margin-bottom:14px"><i style="width:${done/BADGES.length*100}%;background:var(--earth-strong)"></i></div><div class="clist">${BADGES.slice().sort((a,b)=>bDone(b)-bDone(a)).map(badgeRow).join("")}</div>`,"wide");
}

/* ---------- Change days & stops ---------- */
function segmentsOf(t){const out=[];t.days.forEach(d=>{const l=out[out.length-1];if(l&&l.name===d.city&&d.city)l.days.push(d);else out.push({name:d.city,cc:d.cc,lat:d.lat,lng:d.lng,approx:d.approx,days:[d]});});return out;}
const adjTrip=()=>S.adj&&S.adj.pv?S.plan.preview:getTrip(S.tripId);
function adjOpen(pv){const t=pv?S.plan.preview:getTrip(S.tripId);S.adj={pv,stops:segmentsOf(t).map((g,i)=>({name:g.name||"Unplanned days",cc:g.cc,lat:g.lat,lng:g.lng,approx:g.approx,n:g.days.length,seg:i,blank:!g.name}))};adjModal();}
function adjModal(){
  const t=adjTrip();const A=S.adj;const total=A.stops.reduce((s,x)=>s+x.n,0);
  const opts=[...new Set([...t.countries,...A.stops.map(s=>s.cc)].filter(Boolean))].flatMap(cc=>citiesOf(cc).map(c=>c.name)).filter(n=>!A.stops.some(s=>s.name===n));
  modal(`<div class="mh"><h2>Change days & stops</h2>${X}</div><p class="sub" style="margin-top:-8px">Add or remove days per place – new days are filled with fresh activities automatically.</p>
  <div class="adj">${A.stops.map((x,i)=>`<div class="adj-row"><span class="nb">${i+1}</span><span style="font-size:20px">${flag(x.cc)}</span><div style="flex:1;min-width:120px"><b>${esc(x.name)}</b><div class="muted">${x.seg<0?"new stop":x.n>segmentsOf(t)[x.seg].days.length?`+${x.n-segmentsOf(t)[x.seg].days.length} new day(s)`:x.n<segmentsOf(t)[x.seg].days.length?`−${segmentsOf(t)[x.seg].days.length-x.n} day(s)`:"unchanged"}</div></div>
    <div class="stepper"><button data-a="adj-n" data-i="${i}" data-d="-1">−</button><span>${x.n}</span><button data-a="adj-n" data-i="${i}" data-d="1">+</button></div><span class="muted" style="width:44px">${x.n===1?"day":"days"}</span>
    <button class="btn icon ghost" data-a="adj-mv" data-i="${i}" data-d="-1" title="Earlier">${ic("up","sm")}</button><button class="btn icon ghost" data-a="adj-mv" data-i="${i}" data-d="1" title="Later">${ic("down","sm")}</button><button class="btn icon ghost danger" data-a="adj-rm" data-i="${i}" title="Remove" ${A.stops.length<2?"disabled":""}>${ic("trash","sm")}</button></div>`).join("")}</div>
  <div class="row" style="margin-top:12px"><input class="inp" id="adjnew" list="adjcities" placeholder="+ Add a stop (any city)" style="flex:1;min-width:200px"><datalist id="adjcities">${opts.concat(Object.keys(CITY_DATA).flatMap(cc=>CITY_DATA[cc].map(r=>r[0])).filter(n=>!opts.includes(n))).map(n=>`<option value="${esc(n)}">`).join("")}</datalist><button class="btn" data-a="adj-add">${ic("plus","sm")} Add stop</button></div>
  <div class="spread" style="margin-top:16px"><b>Total: ${dn(total)}${t.start?` · ${fmtD(t.start,{day:"numeric",month:"short"})} – ${fmtD(addDays(t.start,total-1),{day:"numeric",month:"short"})}`:""}</b><div class="row"><button class="btn" data-a="close">Cancel</button><button class="btn pri" data-a="adj-apply">${ic("check","sm")} Update itinerary</button></div></div>`,"wide");
}
function genDay(t,stop,used,first){
  if(t.bare){const d={id:uid(),title:first?`Travel to ${cityQ(stop.name)}`:"Free day",city:stop.name,cc:stop.cc,lat:stop.lat,lng:stop.lng,approx:!!stop.approx,items:[]};
    if(first)d.items.push({id:uid(),time:"15:00",title:`Check in – ${cityQ(stop.name)}`,cat:"stay",note:"Simple, well-located hotel",done:false});
    if(t.basics&&basicsPP(stop.cc)>0)d.items.push({id:uid(),time:"",title:"🥖 Groceries & water",cat:"food",note:`Supermarket basics ≈ ${money(basicsPP(stop.cc))} pp/day`,done:false,auto:"basics"});return d;}
  const st=STYLES.find(x=>x.id===t.style)||STYLES[0];const gf=groupFlags(t.group||[meP()]);
  const slots={relaxed:["10:00","15:00"],balanced:["09:30","12:30","15:30"],packed:["08:30","11:00","14:00","16:30"]}[t.pace]||["09:30","12:30","15:30"];
  const c=findCity(stop.name,[stop.cc])||{hl:[],tags:"c"};
  const late=h=>/dinner|sunset|night|stars|après/i.test(h)?1:0;
  const hls=c.hl.filter(h=>!used.has(h)).sort((a,b)=>late(a)-late(b)||(st.w[tagOfHl(b)]||0)-(st.w[tagOfHl(a)]||0));
  const cn=cityQ(stop.name);const extra=STYLES.filter(x=>x.id!==st.id&&[...(c.tags||"c")].some(tg=>x.w[tg])).flatMap(x=>x.acts);
  const generic=["Day trip from {city}","Explore a new neighbourhood of {city}","Brunch at a local favourite","Local museum or gallery","Sunset viewpoint in {city}","Craft or cooking workshop","Bike or e-scooter tour","Picnic in the park","Souvenir hunt at a local market","Slow morning & café hopping"];
  const acts=[...new Set(st.acts.concat(pick(extra,extra.length),pick(generic,generic.length)))].map(a=>a.replace("{city}",cn)).filter(a=>!used.has(a)&&!(gf.kids&&/bar|cocktail|hostel/i.test(a)));
  const items=[];(first&&!t.days.length?slots.slice(1):slots).forEach(time=>{const h=hls.shift();let title,cat;if(h){title=h;cat=CAT_OF_TAG[tagOfHl(h)];}else{title=acts.shift()||`Free time in ${cityQ(stop.name)}`;cat=STYLE_CAT[st.id]||"sight";}used.add(title);items.push({id:uid(),time,title,cat,note:"",done:false});});
  if(t.dare>0&&Math.random()<(t.dare>=2?1:.5)){const d=pick(CHALLENGES.filter(x=>x[0]<=t.dare&&!used.has(x[2])),1)[0];if(d){used.add(d[2]);items.push({id:uid(),time:"",title:d[2],cat:"dare",note:`${d[1]} Comfort-zone dare · +${XP_OF[d[0]]} XP`,done:false});}}
  const eve=gf.kids?["Early family dinner","Ice-cream walk","Pizza night"]:st.eve;items.push({id:uid(),time:gf.kids?"18:30":"19:30",title:pick(eve,1)[0],cat:"food",note:"",done:false});
  return {id:uid(),title:first?`Hello, ${cityQ(stop.name)}!`:(items[0]||{}).title||`Exploring ${cityQ(stop.name)}`,city:stop.name,cc:stop.cc,lat:stop.lat,lng:stop.lng,approx:!!stop.approx,items};
}
function applyAdjust(){
  const t=adjTrip();const A=S.adj;const segs=segmentsOf(t);const st=STYLES.find(x=>x.id===t.style)||STYLES[0];
  const used=new Set(t.days.flatMap(d=>d.items.map(i=>i.title)));let added=0,removed=0;const days=[];const starts=[];
  A.stops.forEach(x=>{starts.push(days.length);let src=x.seg>=0?segs[x.seg].days.map(d=>JSON.parse(JSON.stringify(d))):[];if(src.length>x.n)removed+=src.length-x.n;src=src.slice(0,x.n);
    while(src.length<x.n){src.push(x.blank?{id:uid(),title:"",city:"",cc:x.cc,lat:null,lng:null,items:[]}:genDay(t,x,used,src.length===0));added++;}
    days.push(...src);});
  const auto=i=>(i.cat==="stay"&&/^Check in – /.test(i.title))||/^Check out & fly home/.test(i.title)||(i.cat==="travel"&&/→/.test(i.title))||/^Pack up & head home/.test(i.title)||(i.cat==="stay"&&/^Arrive in /.test(i.title));
  days.forEach(d=>d.items=d.items.filter(i=>!auto(i)));
  A.stops.forEach((x,k)=>{const d=days[starts[k]];if(!d||x.blank)return;
    if(k===0)d.items.unshift({id:uid(),time:"11:00",title:`Arrive in ${x.name} & check in`,cat:"stay",note:st.stay,done:false});
    else if(!A.stops[k-1].blank&&A.stops[k-1].name!==x.name){const l=legInfo(A.stops[k-1],x,t.style);if(t.bare)d.items.unshift({id:uid(),time:"15:00",title:`Check in – ${cityQ(x.name)}`,cat:"stay",note:st.stay,done:false});d.items.unshift({id:uid(),time:t.bare?"10:00":"08:30",title:`${l.em} ${l.mode} ${l.from} → ${l.to}`,cat:"travel",note:`≈ ${fmtDist(l.km)} · about ${l.hrs} h`,done:false});}});
  days.forEach((d,i)=>{const last=i===days.length-1;
    if(last&&days.length>1){d.items=d.items.filter(x=>!(x.cat==="food"&&x.time>="18:00")&&!/^Check out & fly home/.test(x.title));d.items.push(t.bare?{id:uid(),time:"11:00",title:"Check out & fly home ✈️",cat:"travel",note:"",done:false}:{id:uid(),time:"18:00",title:"Pack up & head home ✈️",cat:"travel",note:"Leave time for the airport transfer",done:false});}
    else if(!t.bare&&d.city&&!d.items.some(x=>x.time>="18:00")){d.items.push({id:uid(),time:"19:30",title:pick(st.eve,1)[0],cat:"food",note:"",done:false});}});
  t.days=days;t.countries=[...new Set(days.map(d=>d.cc).filter(Boolean))];
  closeModal();save();render();toast(`✓ Itinerary updated${added?` – ${plural(added,"new day")}${t.bare?"":" with activities"}`:""}${removed?`${added?",":" –"} ${plural(removed,"day")} removed`:""}`);
}

/* ---------- Splash / accounts ---------- */
const GOOGLE_G=`<svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>`;
function vSplash(){
  document.documentElement.dataset.theme=sysDark()?"dark":"light";
  const hm=(location.hash||"").slice(1);if(!S.auth&&(hm==="signup"||hm==="login"))S.auth=hm;
  const C=CLOUD_ON&&!!CL.api;const accs=C?[]:accounts().filter(a=>a.provider!=="guest");const mode=S.auth||(accs.length||C?"login":"signup");const hasGuest=!!LS.get("traveltropia.v1");
  const float=["✈️","🏝️","🗺️","🏔️","🧳","🌋","🐧","🗼","🏯","🌴","⛵","🎒"];
  $("#app").innerHTML=`<div class="splash">
   <div class="sp-float">${float.map((e,i)=>`<span style="left:${(i*83)%100}%;top:${(i*47)%90}%;animation-delay:${i*.7}s">${e}</span>`).join("")}</div>
   <div class="sp-left">${LOGO(84)}<h1>Travel<span>Tropia</span></h1><p>Your world, beautifully planned.</p>
    <ul><li>✨ Smart itineraries for every kind of trip</li><li>🛂 Visa & safety checks for all your passports</li><li>👯 Travel with friends & split costs</li><li>🧠 Daily geo-trivia, levels & achievements</li><li>☕ Meet fellow travellers on the road</li></ul></div>
   <div class="sp-right"><div class="card auth">
    <div class="seg" style="width:100%;display:flex"><button style="flex:1" class="${mode==="login"?"on":""}" data-a="auth-tab" data-v="login">Log in</button><button style="flex:1" class="${mode==="signup"?"on":""}" data-a="auth-tab" data-v="signup">Create account</button></div>
    ${mode==="login"?`
     ${accs.length?`<div class="lbl" style="margin-top:16px">Accounts on this device</div><div class="row" style="gap:6px;margin-top:6px">${accs.map(a=>`<button class="chip" data-a="acct-pick" data-u="${esc(a.username||a.email||"")}">${a.photo?`<span class="av" style="width:22px;height:22px"><img src="${esc(a.photo)}" alt=""></span>`:"👤"} ${esc(a.name)}${a.provider==="google"?" "+GOOGLE_G:""}</button>`).join("")}</div>`:""}
     <form data-form="login" class="grid" style="gap:12px;margin-top:16px">
      <div class="field"><label>${C?"E-mail":"Username or e-mail"}</label><input class="inp" name="u" id="lg-u" ${C?'type="email"':""} autocomplete="${C?"email":"username"}" required></div>
      <div class="field"><label>Password</label><div class="pw"><input class="inp" type="password" name="p" autocomplete="current-password" required><button type="button" class="btn icon ghost" data-a="pw-toggle" title="Show password">👁️</button></div></div>
      <div class="spread"><label class="row"><input type="checkbox" name="rem" checked> Remember me</label><button type="button" class="btn sm ghost" data-a="forgot">Forgot password?</button></div>
      <div class="auth-err" id="autherr"></div><button class="btn pri" style="width:100%">Log in</button></form>`
    :`<form data-form="signup" class="grid" style="gap:12px;margin-top:16px">
      <div class="field"><label>Your name</label><input class="inp" name="n" autocomplete="name" required></div>
      <div class="field"><label>${C?"E-mail":"Username or e-mail"}</label><input class="inp" name="u" ${C?'type="email"':""} autocomplete="${C?"email":"username"}" required minlength="3"></div>
      <div class="grid g2" style="gap:10px"><div class="field"><label>Password</label><div class="pw"><input class="inp" type="password" name="p" autocomplete="new-password" required minlength="6"><button type="button" class="btn icon ghost" data-a="pw-toggle">👁️</button></div></div><div class="field"><label>Repeat password</label><input class="inp" type="password" name="p2" autocomplete="new-password" required></div></div>
      <label class="row"><input type="checkbox" name="rem" checked> Remember me on this device</label>
      ${hasGuest&&!C?`<label class="row"><input type="checkbox" name="bring" checked> Bring my guest trips & passport along</label>`:""}
      <div class="auth-err" id="autherr"></div><button class="btn pri" style="width:100%">Create account</button></form>`}
    <div class="or"><span>or</span></div>
    <button class="btn gbtn" data-a="google">${GOOGLE_G} Continue with Google</button><div id="gsi" style="margin-top:8px"></div>
    <button class="btn ghost" style="width:100%;margin-top:6px" data-a="guest">${C?"Try it without an account":"Continue as guest"} →</button>
    <p class="muted" style="font-size:12px;margin-top:12px">${C?`Your trips sync securely across your devices. By creating an account you agree to the <a href="privacy.html">privacy policy</a>.`:`Accounts are stored privately in this browser on this device – nothing is uploaded. Passwords are stored as a salted hash.`}${CL.err?`<br><span class="t-a">${esc(CL.err)}</span>`:""}</p>
   </div></div></div>`;
  const f=$(".auth input[name=u]");if(f&&mode==="login")setTimeout(()=>f.focus(),50);
}
function authErr(m){const e=$("#autherr");if(e)e.textContent=m;}
function enterApp(){S.view="home";try{history.replaceState(null,"","#home");}catch(e){}render();maybeWelcome();}
let gsiLoaded=false;
function googleSignIn(){
  const help=()=>modal(`<div class="mh"><h2>${GOOGLE_G} Sign in with Google</h2>${X}</div>
    <p class="sub">Google only allows sign-in from a real website address – not from a file opened on your computer or from this preview – and each website needs its own free Google key.</p>
    <ol class="sub" style="padding-left:20px;line-height:1.7"><li>Put the TravelTropia folder online (e.g. GitHub Pages, Netlify or your own hosting).</li><li>In <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener">Google Cloud Console ↗</a> create an <b>OAuth client ID</b> (type: Web application) and add your website address under <i>Authorised JavaScript origins</i>.</li><li>Paste the client ID into <code>GOOGLE_CLIENT_ID</code> at the top of the app code in <code>script.js</code>.</li></ol>
    <p class="sub">Until then, create a TravelTropia account with a password or continue as a guest – you can always switch later.</p><div class="row" style="justify-content:flex-end"><button class="btn pri" data-a="close">Got it</button></div>`);
  if(!GOOGLE_CLIENT_ID||!/^https?:$/.test(location.protocol)){help();return;}
  const start=()=>{try{google.accounts.id.initialize({client_id:GOOGLE_CLIENT_ID,callback:onGoogle});google.accounts.id.renderButton($("#gsi"),{theme:"outline",size:"large",width:300});google.accounts.id.prompt();}catch(e){help();}};
  if(gsiLoaded)return start();
  const sc=document.createElement("script");sc.src="https://accounts.google.com/gsi/client";sc.async=true;sc.onload=()=>{gsiLoaded=true;start();};sc.onerror=help;document.head.appendChild(sc);
}
function onGoogle(resp){
  try{const b=resp.credential.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");const p=JSON.parse(decodeURIComponent(atob(b).split("").map(c=>"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)).join("")));
    const accs=accounts();let a=accs.find(x=>x.provider==="google"&&x.sub===p.sub);
    if(!a){a={id:"g"+uid(),provider:"google",sub:p.sub,name:p.name||p.email,email:p.email,photo:p.picture||"",created:Date.now()};accs.push(a);saveAccounts(accs);}
    openAccount(a,true);enterApp();}catch(e){toast("Google sign-in failed – please try again");}
}
function maybeWelcome(){
  if(DB.seen)return;DB.seen=true;save();
  modal(`<div style="text-align:center">${LOGO(72)}<h2 style="margin-top:10px">Welcome to TravelTropia${ACCOUNT&&ACCOUNT.id!=="guest"?", "+esc(DB.profile.name):""}!</h2><p class="sub">Plan smarter trips, travel with friends, meet people on the road – and watch your world map fill up.</p>
  <div class="grid g2" style="text-align:left;margin:16px 0;gap:12px"><div class="field"><label>What should we call you?</label><input class="inp" data-s="name" placeholder="Your name" value="${esc(DB.profile.name==="Traveler"?"":DB.profile.name)}" autofocus></div><div class="field"><label>Age</label><input class="inp" type="number" data-s="age" placeholder="30"></div>
  <div class="field"><label>Home country</label><select class="inp" data-s="home">${ALL_CC.filter(c=>CTRY[c].sov).map(c=>`<option value="${c}" ${DB.profile.home===c?"selected":""}>${CTRY[c].flag} ${esc(CTRY[c].name)}</option>`).join("")}</select></div><div class="field"><label>Main passport</label><select class="inp" data-s="passport">${ALL_CC.filter(c=>CTRY[c].sov).map(c=>`<option value="${c}" ${DB.profile.passports[0]===c?"selected":""}>${CTRY[c].flag} ${esc(CTRY[c].name)}</option>`).join("")}</select><span class="muted">Got more passports? Add them in Settings.</span></div></div>
  <div class="row" style="justify-content:center"><button class="btn pri" data-a="close-settings">${ic("compass","sm")} Let's go</button></div></div>`);
}
function pwModal(){
  modal(`<div class="mh"><h2>Change password</h2>${X}</div><form data-form="chpw" class="grid" style="gap:12px"><div class="field"><label>Current password</label><input class="inp" type="password" name="o" required></div><div class="grid g2"><div class="field"><label>New password</label><input class="inp" type="password" name="p" minlength="6" required></div><div class="field"><label>Repeat new password</label><input class="inp" type="password" name="p2" required></div></div><div class="auth-err" id="autherr"></div><div class="row" style="justify-content:flex-end"><button type="button" class="btn" data-a="close">Cancel</button><button class="btn pri">Save password</button></div></form>`);
}


/* ---------- Live data: currency, geocoding, weather ---------- */
const NET={rates:null,geo:{},wx:{},clim:{},tz:{},pending:{}};
try{const r=JSON.parse(LS.get("tt.rates"));if(r&&r.rates)NET.rates=r;}catch(e){}
try{NET.geo=JSON.parse(LS.get("tt.geo"))||{};}catch(e){}
try{NET.clim=JSON.parse(LS.get("tt.clim"))||{};}catch(e){}
const curCode=()=>CUR_SYMBOL[DB.settings.currency]||"EUR";
const fxRate=code=>(NET.rates&&NET.rates.rates&&NET.rates.rates[code])||FALLBACK_RATES[code]||null;
const toCur=eur=>eur*(fxRate(curCode())||1);
const fmtCur=v=>{v=+v||0;const c=DB.settings.currency;if(Math.abs(v)<10&&Math.round(v*100)%100!==0)return c+v.toFixed(2);return c+Math.round(v).toLocaleString("en-US");};
function localMoney(eur,cc){const c=CTRY[cc]&&CTRY[cc].cur;if(!c||c===curCode()||!NET.rates)return "";const r=NET.rates.rates[c];if(!r)return "";const v=eur*r;return `${v>=100?Math.round(v).toLocaleString("en-US"):v.toFixed(v<10?2:1)} ${c}`;}
async function getJSON(url,ms){const ctl=window.AbortController?new AbortController():null;const tm=setTimeout(()=>ctl&&ctl.abort(),ms||9000);try{const r=await fetch(url,ctl?{signal:ctl.signal}:{});if(!r.ok)throw new Error(r.status);return await r.json();}finally{clearTimeout(tm);}}
async function loadRates(){
  if(NET.rates&&Date.now()-NET.rates.t<12*3600e3)return;
  if(NET.pending.rates)return;NET.pending.rates=1;
  try{const j=await getJSON("https://open.er-api.com/v6/latest/EUR");if(j&&j.result==="success"){NET.rates={t:Date.now(),rates:j.rates,date:j.time_last_update_utc};LS.set("tt.rates",JSON.stringify(NET.rates));if(ACCOUNT)softRender();}}catch(e){}
  NET.pending.rates=0;
}
async function geocode(name,cc){
  const key=norm(name)+"|"+(cc||"");if(NET.geo[key])return NET.geo[key];
  try{const j=await getJSON(`https://geocoding-api.open-meteo.com/v1/search?name=${enc(name)}&count=5&language=en&format=json${cc?"&countryCode="+cc:""}`);
    const r=(j.results||[]).sort((a,b)=>(b.population||0)-(a.population||0))[0];if(!r)return null;
    const g={name:r.name,lat:+r.latitude.toFixed(4),lng:+r.longitude.toFixed(4),cc:r.country_code,admin:r.admin1||""};NET.geo[key]=g;LS.set("tt.geo",JSON.stringify(NET.geo));return g;}catch(e){return null;}
}
const WX_ICON=c=>c==null?"":c===0?"☀️":c<=2?"🌤️":c===3?"☁️":c<=48?"🌫️":c<=67?"🌧️":c<=77?"🌨️":c<=82?"🌦️":"⛈️";
async function weatherRange(lat,lng,start,end){
  const key=[lat.toFixed(2),lng.toFixed(2),start,end].join("|");if(NET.wx[key])return NET.wx[key];
  const d0=daysUntil(start);let url,kind;
  if(d0!=null&&d0>=-1&&daysUntil(end)<=15){url=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto&start_date=${start}&end_date=${end}`;kind="forecast";}
  else{let yrs=1;while(parseD(addDays(end,-365*yrs))>=parseD(addDays(today(),-6)))yrs++;const s=addDays(start,-365*yrs),e=addDays(end,-365*yrs);url=`https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lng}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto&start_date=${s}&end_date=${e}`;kind="typical";}
  try{const j=await getJSON(url);const D=j.daily||{};const days=(D.time||[]).map((t,i)=>({max:D.temperature_2m_max[i],min:D.temperature_2m_min[i],rain:D.precipitation_sum[i],code:D.weather_code?D.weather_code[i]:null}));
    const v={kind,days,tz:j.utc_offset_seconds};NET.wx[key]=v;return v;}catch(e){return null;}
}
async function monthClimate(lat,lng,month){
  const key=[lat.toFixed(1),lng.toFixed(1),month].join("|");if(NET.clim[key])return NET.clim[key];
  if(NET.pending["c"+key])return null;NET.pending["c"+key]=1;
  const now=new Date();const y=month<now.getMonth()+1?now.getFullYear():now.getFullYear()-1;
  const s=`${y}-${String(month).padStart(2,"0")}-01`;const e=isoD(new Date(y,month,0));
  try{const j=await getJSON(`https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto&start_date=${s}&end_date=${e}`);
    const D=j.daily||{};const mx=D.temperature_2m_max||[],mn=D.temperature_2m_min||[],pr=D.precipitation_sum||[];const avg=a=>a.filter(x=>x!=null).reduce((s,x)=>s+x,0)/Math.max(1,a.filter(x=>x!=null).length);
    const v={max:Math.round(avg(mx)),min:Math.round(avg(mn)),rainDays:pr.filter(x=>x>=1).length,mm:Math.round(pr.reduce((s,x)=>s+(x||0),0)),tz:j.utc_offset_seconds,y};NET.clim[key]=v;LS.set("tt.clim",JSON.stringify(NET.clim));return v;}catch(e){return null;}finally{setTimeout(()=>{delete NET.pending["c"+key];},60000);}
}
/* trip weather, per stop */
const TRIPWX={};
function tripWxKey(t){return t.start?t.start+"|"+tripStops(t).map(s=>s.name+s.nights).join(","):null;}
async function ensureTripWeather(t){
  const key=tripWxKey(t);if(!key||TRIPWX[key])return;TRIPWX[key]={loading:true};
  let idx=0;const out=[];
  for(const s of tripStops(t)){const st=addDays(t.start,idx);const en=addDays(t.start,idx+s.nights-1);idx+=s.nights;
    if(s.cc==="AQ"){out.push(null);continue;}const w=await weatherRange(s.lat,s.lng,st,en);out.push(w);}
  TRIPWX[key]={stops:out};softRender();
}
function stopWx(t,i){const k=tripWxKey(t);const w=k&&TRIPWX[k]&&TRIPWX[k].stops&&TRIPWX[k].stops[i];if(!w||!w.days.length)return null;const a=w.days;
  const avg=f=>Math.round(a.reduce((s,d)=>s+(d[f]||0),0)/a.length);const codes=a.map(d=>d.code).filter(c=>c!=null).sort((x,y)=>x-y);
  return {kind:w.kind,max:avg("max"),min:avg("min"),rainDays:a.filter(d=>d.rain>=1).length,code:codes[Math.floor(codes.length/2)],days:a};}
function dayWx(t,i){const k=tripWxKey(t);if(!k||!TRIPWX[k]||!TRIPWX[k].stops)return null;let idx=0;const st=tripStops(t);for(let s=0;s<st.length;s++){if(i<idx+st[s].nights){const w=TRIPWX[k].stops[s];return w&&w.days[i-idx]?Object.assign({kind:w.kind},w.days[i-idx]):null;}idx+=st[s].nights;}return null;}
function wxChip(w,short){if(!w)return "";return `<span class="wx" title="${w.kind==="forecast"?"Forecast":"Typical weather – same dates last year"}">${WX_ICON(w.code)} ${Math.round(w.max)}°/${Math.round(w.min)}°${!short&&w.rain>=1?` · ${Math.round(w.rain)} mm`:""}${w.kind==="typical"?' <i>typ.</i>':""}</span>`;}

/* ---------- Price engine ---------- */
const PR=cc=>PRICES[cc]?Object.fromEntries(PRICE_KEYS.map((k,i)=>[k[0],PRICES[cc][i]])):null;
function roomNight(cc,tier,style){
  const p=PR(cc);if(cc==="AQ")return dailyBase("AQ")*(TIER_M[tier]||1)*2;
  if(!p)return dailyBase(cc)*.9*(TIER_M[tier]||1);
  if(style==="backpacker")return p.hostel*2;
  const base=tier==="budget"?Math.max(p.hostel*2,p.hotel*.55):tier==="luxury"?p.hotel*2.6:p.hotel;
  return base*({ski:1.5,romantic:1.3,wellness:1.35,beach:1.15,family:1.15,bare:.95}[style]||1);
}
function foodPP(cc,tier,style){
  const p=PR(cc);if(!p)return dailyBase(cc)*.27*(TIER_M[tier]||1);
  const t=style==="backpacker"?"budget":tier;
  const v=t==="budget"?p.meal*1.7+p.water:t==="luxury"?p.coffee*1.5+p.meal*1.6+p.dinner2*1.25+p.beer*2:p.coffee+p.meal+p.dinner2/2+p.beer+p.water*.5;
  return v*(style==="food"?1.35:style==="romantic"?1.2:1);
}
function actsPP(cc,tier,style){
  const p=PR(cc);if(!p)return dailyBase(cc)*.18*(TIER_M[tier]||1);
  let v=p.sight*({budget:.6,comfort:1.2,luxury:2.2}[style==="backpacker"?"budget":tier]||1.2);
  v*=({culture:1.4,family:1.25,outdoors:.8,beach:.7,wellness:1.6,city:1.1}[style]||1);
  if(style==="ski")v+=LIFT[cc]||60;
  return v;
}
function localPP(cc,tier){const p=PR(cc);if(!p)return dailyBase(cc)*.1*(TIER_M[tier]||1);return tier==="budget"?p.transit*2:tier==="luxury"?p.transit*2+p.taxi*1.5:p.transit*3+p.taxi*.3;}
function dailyPP(cc,tier,style){if(cc==="AQ")return dailyBase("AQ")*(TIER_M[tier]||1);return roomNight(cc,tier,style)/2+foodPP(cc,tier,style)+actsPP(cc,tier,style)+localPP(cc,tier);}
function costTone(eur){return eur<70?"c1":eur<110?"c2":eur<160?"c3":eur<220?"c4":"c5";}

/* ---------- Month helpers ---------- */
const MON=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function bestMonths(cc){const s=BEST[cc];if(!s)return null;const set=new Set();s.split("·").forEach(part=>{const m=part.match(/([A-Z][a-z]{2})(?:\s*[–-]\s*([A-Z][a-z]{2}))?/);if(!m)return;let a=MON.indexOf(m[1]),b=m[2]?MON.indexOf(m[2]):a;if(a<0)return;if(b<0)b=a;for(let i=a;;i=(i+1)%12){set.add(i+1);if(i===b)break;}});return set;}

/* ---------- Leaflet maps ---------- */
const LMAPS=[];
function dropMaps(){while(LMAPS.length){try{LMAPS.pop().remove();}catch(e){}}}
function leafletOK(){return !!window.L;}
function baseMap(el,opts){
  const map=L.map(el,Object.assign({preferCanvas:true,worldCopyJump:true,zoomSnap:.5,attributionControl:true,center:[25,10],zoom:2},opts||{}));LMAPS.push(map);
  const dark=curTheme()==="dark";
  const vec=L.geoJSON({type:"FeatureCollection",features:geo()},{style:()=>({color:dark?"#2B3536":"#fff",weight:.6,fillColor:dark?"#26302F":"#E3E8E2",fillOpacity:1}),interactive:false}).addTo(map);
  el.style.background=dark?"#161E1F":"#EEF4F6";
  const ck=window.TT_CARTO_KEY;
  const tiles=ck?L.tileLayer(`https://basemaps.cartocdn.com/rastertiles/${dark?"dark_all":"voyager"}/{z}/{x}/{y}.png?key=${enc(ck)}`,{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'})
    :L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,className:"osm-tiles",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
  let ok=false,errs=0;tiles.on("tileload",()=>{if(!ok){ok=true;map.removeLayer(vec);}});tiles.on("tileerror",()=>{if(++errs===4&&!ok){map.removeLayer(tiles);}});tiles.addTo(map);
  return map;
}
function initTripLeaflet(t){
  const el=$("#lmap");if(!el||!leafletOK())return;const stops=tripStops(t);if(!stops.length)return;
  const map=baseMap(el,{scrollWheelZoom:false});
  const pts=stops.map(s=>[s.lat,s.lng]);
  L.polyline(pts,{color:"#2D6A5C",weight:3,dashArray:"6 8",opacity:.9}).addTo(map);
  stops.forEach((s,i)=>{const w=stopWx(t,i);L.marker([s.lat,s.lng],{icon:L.divIcon({className:"lpin-wrap",html:`<span class="lpin">${i+1}</span>`,iconSize:[28,28],iconAnchor:[14,14]})}).addTo(map)
    .bindPopup(`<b>${flag(s.cc)} ${esc(s.name)}</b><br>${plural(s.nights,"day")}${w?`<br>${WX_ICON(w.code)} ${w.max}° / ${w.min}° · ${w.kind==="forecast"?"forecast":"typical"}`:""}${PR(s.cc)?`<br>≈ ${money(dailyPP(s.cc,t.tier||"comfort",t.style))} pp/day`:""}<br><a href="#" data-a="prices" data-cc="${s.cc}">Local prices</a> · <a href="#" data-a="meet-city" data-n="${esc(cityQ(s.name))}">Meet-ups</a>`);});
  if(pts.length>1)map.fitBounds(pts,{padding:[40,40],maxZoom:9});else map.setView(pts[0],10);
}

/* ---------- Explore: flights + cost of staying, from anywhere ---------- */
function allPlaces(){if(allPlaces.c)return allPlaces.c;const o=[];Object.keys(CITY_DATA).forEach(cc=>citiesOf(cc).forEach(c=>o.push(c)));
  ALL_CC.forEach(cc=>{if(CITY_DATA[cc]||cc==="AQ")return;const C=CTRY[cc];if(!C||!C.capital)return;const w=wci().find(x=>x.cc===cc&&x.n===norm(C.capital));o.push(w?genPlace(w):Object.assign(citiesOf(cc)[0],{world:true}));});
  return allPlaces.c=o;}
function exState(){return S.ex||(S.ex={q:"",mode:"bare",tier:"comfort",max:0,tag:"",month:0,sort:"total",nights:7,people:1,from:null});}
const exFrom=()=>exState().from||homeCity();
function exCalc(c){
  const E=exState();const o=exFrom();const tgt=c.cc==="AQ"?USHUAIA:c;const km=dist(o,tgt);const fly=km>450;
  const peak=E.month&&[7,8,12].includes(E.month),low=E.month&&[1,2,11].includes(E.month);const sf=peak?1.25:low?.9:1;
  const fp=flightPrice(km,E.mode==="bare"?"budget":E.tier);
  const flight=fly?(fp[0]*.65+fp[1]*.35)*2*sf:(10+km*.12)*2;
  const hrs=fly?Math.round((km/750+2.5)*2)/2:Math.round((km/95+.4)*2)/2;
  const p=PR(c.cc);let stay,food,local;
  if(E.mode==="bare"){stay=p?Math.min(p.hostel,p.hotel*.55):roomNight(c.cc,"budget")/2;food=basicsPP(c.cc);local=p?p.transit:localPP(c.cc,"budget")/2;}
  else{stay=roomNight(c.cc,E.tier)/2;food=foodPP(c.cc,E.tier);local=localPP(c.cc,E.tier)+actsPP(c.cc,E.tier);}
  if(peak)stay*=1.15;
  const n=E.nights;const total=flight+n*(stay+food+local);
  return {km,fly,hrs,flight,stay,food,local,total};
}
function vExplore(m){
  const E=exState();const o=exFrom();
  const tags=[["","All"],["c","City"],["b","Beach"],["o","Nature"],["s","Ski"],["h","Culture"],["f","Food"],["n","Nightlife"],["k","Family"],["r","Romantic"]];
  const q=norm(E.q);
  let list=allPlaces().filter(c=>!(E.mode==="bare"&&c.cc==="AQ")).filter(c=>dist(o,c)>25).map(c=>Object.assign({},c,{x:exCalc(c)}));
  if(q){list=list.filter(c=>norm(c.name+" "+cname(c.cc)).includes(q));
    if(q.length>=3){const have=new Set(list.map(c=>c.name+c.cc));placeSearch(q,8).forEach(c=>{if(!have.has(c.name+c.cc)&&dist(o,c)>25)list.push(Object.assign({},c,{x:exCalc(c)}));});}}
  if(E.tag)list=list.filter(c=>c.tags.includes(E.tag));
  if(E.month)list=list.filter(c=>{const b=bestMonths(c.cc);return !b||b.has(E.month);});
  const maxAll=list.length?Math.max(...list.map(c=>toCur(c.x.total))):1000;
  if(E.max)list=list.filter(c=>toCur(c.x.total)<=E.max);
  list.sort((a,b)=>E.sort==="name"?a.name.localeCompare(b.name):E.sort==="flight"?a.x.flight-b.x.flight:E.sort==="dist"?a.x.km-b.x.km:a.x.total-b.x.total);
  S.exList=list;const step=Math.max(10,Math.round(maxAll/60/10)*10);
  const cities=Object.keys(CITY_DATA).flatMap(cc=>CITY_DATA[cc].map(r=>r[0]));
  m.innerHTML=`<div class="topbar"><div><div class="eyebrow">Explore</div><h1>Where can you go from ${esc(cityQ(o.name))}?</h1><div class="sub">Return flight plus what it costs to stay – for every destination, on one map.</div></div><button class="btn" data-a="go" data-v="compare">${ic("list","sm")} Compare places${(S.cmp||[]).length?` · ${S.cmp.length}`:""}</button></div>
  <div class="card pad exfilters">
    <div class="field exfrom"><label>Flying from</label><div class="row" style="flex-wrap:nowrap;gap:6px"><input class="inp" id="exfrom" list="exfromlist" value="${esc(o.name)}" placeholder="Any city or airport town" autocomplete="off"><datalist id="exfromlist">${cities.map(n=>`<option value="${esc(n)}">`).join("")}</datalist><button class="btn" data-a="ex-from">Set</button>${E.from?`<button class="btn ghost" data-a="ex-home" title="Back to my home city">${ic("home","sm")}</button>`:""}</div></div>
    <div class="field"><label>Nights</label><div class="stepper"><button data-a="ex-n" data-k="nights" data-d="-1">−</button><span>${E.nights}</span><button data-a="ex-n" data-k="nights" data-d="1">+</button></div></div>
    <div class="field"><label>What to include</label><div class="seg"><button class="${E.mode==="bare"?"on":""}" data-a="ex-set" data-k="mode" data-v="bare" title="Flight, cheapest bed, groceries & water, local transport">Bare minimum</button><button class="${E.mode==="trip"?"on":""}" data-a="ex-set" data-k="mode" data-v="trip">Full trip</button></div></div>
    ${E.mode==="trip"?`<div class="field"><label>Comfort</label><div class="seg">${[["budget","Budget"],["comfort","Comfort"],["luxury","Luxury"]].map(([k,l])=>`<button class="${E.tier===k?"on":""}" data-a="ex-set" data-k="tier" data-v="${k}">${l}</button>`).join("")}</div></div>`:""}
    <div class="field"><label>When</label><select class="inp" data-exmonth><option value="0">Any time</option>${MON.map((mo,i)=>`<option value="${i+1}" ${E.month===i+1?"selected":""}>${mo}${[7,8,12].includes(i+1)?" (peak)":""}</option>`).join("")}</select></div>
    <label class="exslider">Max <b id="exmaxl">${E.max?fmtCur(E.max):"any"}</b> per person<input type="range" min="0" max="${Math.ceil(maxAll/step)*step}" step="${step}" value="${E.max||0}" data-exmax></label>
    <div class="row" style="gap:6px;width:100%"><div class="search" style="width:220px">${ic("search")}<input class="inp" id="exq" placeholder="Filter destinations…" value="${esc(E.q)}"></div>${tags.map(([k,l])=>`<button class="chip ${E.tag===k?"on":""}" data-a="ex-set" data-k="tag" data-v="${k}">${l}</button>`).join("")}</div>
  </div>
  <div class="exgrid">
    <div class="exmap">${leafletOK()?`<div id="exmap" class="lmap"></div>`:exploreSvg(list)}<div class="legend cost"><span><i class="c1"></i>cheapest</span><span><i class="c3"></i>mid</span><span><i class="c5"></i>priciest</span></div></div>
    <div class="card exlist"><div class="spread exlist-h"><div><b>${plural(list.length,"destination")}</b><div class="muted" style="font-size:12px">${E.nights} nights · ${E.mode==="bare"?"bare minimum":E.tier} · per person</div></div><select class="inp" style="width:auto;padding:6px 8px" data-exsort><option value="total" ${E.sort==="total"?"selected":""}>Cheapest total</option><option value="flight" ${E.sort==="flight"?"selected":""}>Cheapest flight</option><option value="dist" ${E.sort==="dist"?"selected":""}>Closest</option><option value="name" ${E.sort==="name"?"selected":""}>A–Z</option></select></div>
      <div class="exrows">${list.slice(0,150).map((c,i)=>`<button class="exrow" data-a="ex-pick" data-i="${i}"><span class="fl">${flag(c.cc)}</span><span class="grow"><b>${esc(c.name)}</b><span class="muted">${c.x.fly?"✈️ ":"🚆 "}${money(c.x.flight)} return · ~${c.x.hrs} h · stay ${money(c.x.stay+c.x.food+c.x.local)}/night</span></span><span class="cost ${exTone(c.x.total)}">${money(c.x.total)}</span></button>`).join("")||`<div class="muted" style="padding:20px">Nothing fits – raise the maximum or try fewer nights.</div>`}</div></div>
  </div>
  <p class="muted" style="margin-top:12px">${E.mode==="bare"?"Bare minimum = return flight (or train/bus when it's close) + the cheapest bed (hostel dorm or budget room) + supermarket food & drinking water + one local transport ticket a day.":"Full trip = return flight + hotel room shared by two + meals, drinks, sights and local transport at the chosen comfort level."} Flight prices are estimates based on distance${E.month?` and season (${MON[E.month-1]})`:""} – click a destination and use “Check real fares” for live prices. ${NET.rates?`<a href="https://www.exchangerate-api.com" target="_blank" rel="noopener">Rates by Exchange Rate API</a>.`:""}</p>`;
}
let EX_SCALE=[0,1];
function exTone(v){const [a,b]=EX_SCALE;const t=b>a?(v-a)/(b-a):0;return t<.2?"c1":t<.4?"c2":t<.6?"c3":t<.8?"c4":"c5";}
const _vEx=vExplore;vExplore=function(m){exScaleFrom();_vEx(m);};
function exScaleFrom(){const E=exState();const o=exFrom();const v=allPlaces().filter(c=>dist(o,c)>25).map(c=>exCalc(c).total).sort((a,b)=>a-b);EX_SCALE=v.length?[v[Math.floor(v.length*.05)],v[Math.floor(v.length*.95)]]:[0,1];}
function exploreSvg(list){
  const W=900,H=470;const proj=d3.geoNaturalEarth1().fitExtent([[4,4],[W-4,H-4]],{type:"Sphere"});const path=d3.geoPath(proj);const o=exFrom();const op=proj([o.lng,o.lat]);
  return `<div class="mapbox"><svg viewBox="0 0 ${W} ${H}"><path d="${path({type:"Sphere"})}" fill="var(--map-sea)"/>${worldPaths().list.map(f=>`<path class="ctry" d="${f.d}" transform="scale(${W/960})"/>`).join("")}${list.map((c,i)=>{const p=proj([c.lng,c.lat]);return p?`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4.5" class="dot-${exTone(c.x.total)}" data-a="ex-pick" data-i="${i}"><title>${esc(c.name)} · ${money(c.x.total)}</title></circle>`:"";}).join("")}${op?`<g transform="translate(${op[0]},${op[1]})"><circle r="7" fill="#1E2A2C" stroke="#fff" stroke-width="2"/></g>`:""}</svg></div>`;
}
function initExploreLeaflet(){
  const el=$("#exmap");if(!el||!leafletOK())return;const map=baseMap(el,{minZoom:2});const o=exFrom();
  const col={c1:"#3E9A6E",c2:"#7FAF4E",c3:"#D9A23A",c4:"#DD7B3F",c5:"#C4503A"};
  const list=S.exList||[];const labelled=new Set(list.slice(0,70).map(c=>c.name+c.cc));
  list.forEach((c,i)=>{const tone=exTone(c.x.total);
    const mk=labelled.has(c.name+c.cc)?L.marker([c.lat,c.lng],{icon:L.divIcon({className:"ppill-wrap",html:`<span class="ppill ${tone}">${money(c.x.total)}</span>`,iconSize:null,iconAnchor:[24,12]}),riseOnHover:true})
      :L.circleMarker([c.lat,c.lng],{radius:5,weight:1.5,color:"#fff",fillColor:col[tone],fillOpacity:.95});
    mk.addTo(map).bindPopup(()=>placePopup(c,i),{maxWidth:300});});
  L.marker([o.lat,o.lng],{icon:L.divIcon({className:"lpin-wrap",html:`<span class="lpin home">${ic("home","sm")}</span>`,iconSize:[28,28],iconAnchor:[14,14]}),zIndexOffset:1000}).addTo(map).bindTooltip("You fly from "+esc(cityQ(o.name)));
  if(S.exFocus){map.setView([S.exFocus.lat,S.exFocus.lng],6);S.exFocus=null;}else map.setView([o.lat,o.lng],3);
  S.exMap=map;
}
function placePopup(c){
  const x=c.x||exCalc(c);const E=exState();const o=exFrom();const p=PR(c.cc);const id=placeId(c);const inCmp=(S.cmp||[]).includes(id);const n=E.nights;
  const dep=E.month?isoD(new Date(new Date().getFullYear()+(E.month<new Date().getMonth()+1?1:0),E.month-1,15)):addDays(today(),30);
  return `<div class="pop-in"><b style="font-size:15px">${flag(c.cc)} ${esc(c.name)}</b><div class="muted">${esc(cname(c.cc))}${SAFETY[c.cc]?" · "+SAFE_LVL[SAFETY[c.cc][0]][0]:""}${BEST[c.cc]?" · best "+esc(BEST[c.cc]):""}</div>
   <table class="brk"><tr><td>${x.fly?"✈️ Return flight":"🚆 Return train/bus"} <span class="muted">${fmtDist(x.km)} · ~${x.hrs} h</span></td><td>${money(x.flight)}</td></tr>
   <tr><td>🛏️ ${E.mode==="bare"?"Cheapest bed":"Hotel (½ room)"} × ${n}</td><td>${money(x.stay*n)}</td></tr>
   <tr><td>${E.mode==="bare"?"🥖 Groceries & water":"🍽️ Food & drinks"} × ${n}</td><td>${money(x.food*n)}</td></tr>
   <tr><td>${E.mode==="bare"?"🚇 Local transport":"🎟️ Transport & sights"} × ${n}</td><td>${money(x.local*n)}</td></tr>
   <tr class="tot"><td>Total per person</td><td>${money(x.total)}</td></tr></table>
   ${p?`<div class="pp-mini">☕ ${money(p.coffee)} · 🍜 ${money(p.meal)} · 🍺 ${money(p.beer)} · 🛏️ hotel ${money(p.hotel)}</div>`:""}
   <div class="row" style="gap:6px;margin-top:8px"><button class="btn sm pri" data-a="ex-plan" data-cc="${c.cc}" data-n="${esc(c.name)}" data-lat="${c.lat}" data-lng="${c.lng}">Plan this trip</button><a class="btn sm" target="_blank" rel="noopener" href="https://www.google.com/travel/flights?q=${enc(`Flights from ${cityQ(o.name)} to ${cityQ(c.name)} on ${dep} through ${addDays(dep,n)}`)}">Check real fares ↗</a></div>
   <div class="row" style="gap:6px;margin-top:6px"><button class="btn sm ghost" data-a="cmp-add" data-id="${esc(id)}">${inCmp?"✓ Comparing":"+ Compare"}</button><button class="btn sm ghost" data-a="prices" data-cc="${c.cc}">All prices</button></div></div>`;
}
function pricesModal(cc){
  const p=PR(cc);const c=CTRY[cc]||{};
  modal(`<div class="mh"><h2>${flag(cc)} Prices in ${esc(cname(cc))}</h2>${X}</div>
  ${p?`<div class="grid g3" style="margin-bottom:14px">${["budget","comfort","luxury"].map(t=>`<div class="leg col"><span class="muted">${t}</span><b class="display" style="font-size:22px">${money(dailyPP(cc,t))}</b><span class="muted">pp / day</span></div>`).join("")}</div>
  <table class="ptable"><thead><tr><th></th><th>${curCode()}</th>${c.cur&&c.cur!==curCode()&&NET.rates?`<th>${esc(c.cur)}</th>`:""}</tr></thead><tbody>${PRICE_KEYS.map(k=>`<tr><td>${k[1]} ${k[2]}</td><td><b>${money(p[k[0]])}</b></td>${c.cur&&c.cur!==curCode()&&NET.rates?`<td class="muted">${localMoney(p[k[0]],cc)}</td>`:""}</tr>`).join("")}${LIFT[cc]?`<tr><td>⛷️ Ski lift pass / day</td><td><b>${money(LIFT[cc])}</b></td>${c.cur&&c.cur!==curCode()&&NET.rates?`<td class="muted">${localMoney(LIFT[cc],cc)}</td>`:""}</tr>`:""}</tbody></table>
  <p class="muted" style="margin-top:10px">Typical prices in tourist areas (2025–26 averages). Big cities and peak season are usually higher.${c.cur?` Local currency: ${esc(c.cur)}${NET.rates&&NET.rates.rates[c.cur]?` · €1 = ${NET.rates.rates[c.cur].toLocaleString("en-US",{maximumFractionDigits:2})} ${esc(c.cur)} (live)`:""}.`:""}</p>`
  :`<p class="sub">We don't have detailed prices for ${esc(cname(cc))} yet. Estimated daily cost (comfort): <b>${money(dailyPP(cc,"comfort"))}</b> pp.</p>`}
  <div class="row" style="justify-content:flex-end;margin-top:12px"><button class="btn" data-a="cmp-add" data-id="${esc((citiesOf(cc)[0]||{}).name+"|"+cc)}">+ Compare</button><button class="btn pri" data-a="plan-cc" data-cc="${cc}">Plan a trip here</button></div>`);
}

/* ---------- Search anywhere (Ctrl/⌘ K) ---------- */
let palIdx=0;
function openPalette(){modal(`<div class="pal"><div class="search">${ic("search")}<input class="inp" id="palq" placeholder="Search any city, country or page…" autocomplete="off"></div><div id="palres" class="pal-res"></div><div class="pal-foot muted"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>Enter</kbd> open</span><span><kbd>Esc</kbd> close</span></div></div>`,"palm");palRender("");setTimeout(()=>{const q=$("#palq");if(q)q.focus();},20);}
function palRender(v){
  const box=$("#palres");if(!box)return;const q=norm(v.trim());palIdx=0;
  const pages=[["home","home","Home"],["plan","compass","Plan a trip"],["trips","suitcase","My trips"],["explore","map","Explore – flights & costs"],["compare","list","Compare places"],["trivia","target","Daily trivia"],["meet","coffee","Meet-ups"],["passport","passport","Passport & profile"]];
  const pg=pages.filter(p=>!q||norm(p[2]).includes(q));
  const pl=q?placeSearch(q,6):[];const ct=q?ALL_CC.filter(cc=>norm(cname(cc)).includes(q)||norm(CTRY[cc].short).startsWith(q)).sort((a,b)=>(norm(cname(a)).startsWith(q)?0:1)-(norm(cname(b)).startsWith(q)?0:1)).slice(0,4):[];
  const row=(main,body,acts)=>`<div class="pal-row">${main.replace("<button ","<button data-main ")}${acts||""}</div>`;
  let h="";
  if(pl.length)h+=`<div class="pal-h">Places</div>`+pl.map(c=>row(`<button class="pal-main" data-a="pal-plan" data-cc="${c.cc}" data-n="${esc(c.name)}" data-lat="${c.lat}" data-lng="${c.lng}"><span class="fl">${flag(c.cc)}</span><span><b>${esc(c.name)}</b><span class="muted"> · ${esc(cname(c.cc))} · ~${money(dailyPP(c.cc,"comfort"))}/day</span></span></button>`,"",`<span class="pal-acts"><button class="btn sm ghost" data-a="pal-cmp" data-id="${esc(placeId(c))}">Compare</button><button class="btn sm ghost" data-a="pal-from" data-cc="${c.cc}" data-n="${esc(c.name)}" data-lat="${c.lat}" data-lng="${c.lng}" title="Explore everywhere you can go from here">Fly from here</button></span>`)).join("");
  if(ct.length)h+=`<div class="pal-h">Countries</div>`+ct.map(cc=>row(`<button class="pal-main" data-a="pal-plan" data-cc="${cc}"><span class="fl">${flag(cc)}</span><span><b>${esc(cname(cc))}</b><span class="muted"> · ${continentOf(cc)}${CITY_DATA[cc]?` · ${CITY_DATA[cc].length} curated places`:""}</span></span></button>`,"",`<span class="pal-acts"><button class="btn sm ghost" data-a="docs-modal" data-cc="${cc}">Visa & safety</button><button class="btn sm ghost" data-a="prices" data-cc="${cc}">Prices</button></span>`)).join("");
  if(pg.length)h+=`<div class="pal-h">Pages</div>`+pg.map(p=>row(`<button class="pal-main" data-a="go" data-v="${p[0]}"><span class="fl">${ic(p[1])}</span><span><b>${p[2]}</b></span></button>`)).join("");
  box.innerHTML=h||`<div class="muted" style="padding:18px">No matches for “${esc(v)}”. Try the English spelling, or a bigger city nearby.</div>`;
  const f=box.querySelector(".pal-row");if(f)f.classList.add("hl");
}

/* ---------- Compare ---------- */
function placeId(c){return isCurated(c.name,c.cc)||!(c.lat!=null)?c.name+"|"+c.cc:[c.name,c.cc,(+c.lat).toFixed(3),(+c.lng).toFixed(3)].join("|");}
function cmpPlace(id){const [n,cc,la,ln]=id.split("|");if(!CTRY[cc])return null;let c=citiesOf(cc).find(x=>x.name===n);
  if(!c&&la!=null)c=genPlace({name:n,cc,lat:+la,lng:+ln});if(!c)c=allPlaces().find(x=>x.cc===cc&&x.name===n)||citiesOf(cc)[0];return c?Object.assign({},c,{id}):null;}
const curSym=()=>String(DB.settings.currency||"€").trim();
function cmpOpts(){return S.cmpO||(S.cmpO={days:7,start:"",end:"",budget:""});}
function cmpDays(){const O=cmpOpts();return O.start&&O.end&&O.end>=O.start?clamp(diffDays(O.start,O.end),1,90):O.days;}
function vCompare(m){
  S.cmp=S.cmp||[];const O=cmpOpts();const nights=cmpDays();const dated=!!(O.start&&O.end&&O.end>=O.start);
  const mon=O.start?parseD(O.start).getMonth()+1:(S.cmpMonth||(new Date().getMonth()+2>12?1:new Date().getMonth()+2));S.cmpMonth=mon;const tier=S.cmpTier||"comfort";
  const budget=+O.budget||0;
  const P=S.cmp.map(cmpPlace).filter(Boolean);const home=homeCity();
  P.forEach(c=>{const k=[c.lat.toFixed(1),c.lng.toFixed(1),mon].join("|");if(c.cc!=="AQ"&&!NET.clim[k]&&!NET.pending["c"+k])monthClimate(c.lat,c.lng,mon).then(v=>{if(v)softRender();});});
  const rows=[];const val=(fn)=>P.map(fn);
  const best=(arr,lowIsGood)=>{const nums=arr.map(x=>typeof x==="number"?x:null);const ok=nums.filter(x=>x!=null);if(ok.length<2)return nums.map(()=>false);const t=lowIsGood?Math.min(...ok):Math.max(...ok);return nums.map(x=>x===t);};
  const sf=[7,8,12].includes(mon)?1.25:[1,2,11].includes(mon)?.9:1;
  const daily=val(c=>dailyPP(c.cc,tier));
  const fl=val(c=>{const km=dist(home,c.cc==="AQ"?USHUAIA:c);const pr=flightPrice(km,tier);const fly=km>450;const ret=fly?(pr[0]*.65+pr[1]*.35)*2*sf:(10+km*.12)*2;return {km,hrs:fly?Math.round((km/750+2.5)*2)/2:Math.round((km/95+.4)*2)/2,ret,fly};});
  const total=P.map((c,i)=>fl[i].ret+daily[i]*nights);
  const cl=val(c=>NET.clim[[c.lat.toFixed(1),c.lng.toFixed(1),mon].join("|")]||null);
  const add=(label,cells,win,cls)=>rows.push({label,cells,win:win||cells.map(()=>false),cls:cls||""});
  const dep=O.start||isoD(new Date(new Date().getFullYear()+(mon<new Date().getMonth()+1?1:0),mon-1,15));const back=O.end||addDays(dep,nights);
  add(`<b>Total for ${nights} night${nights>1?"s":""}</b><div class="muted">per person, incl. return trip</div>`,total.map(v=>`<b class="big">${money(v)}</b>`),best(total,true),"hl");
  if(budget)add(`Your budget <div class="muted">${fmtCur(budget)} per person</div>`,total.map((v,i)=>{const left=budget-toCur(v);const maxN=Math.floor((budget-toCur(fl[i].ret))/toCur(daily[i]));
    return left>=0?`<span class="pill g">✓ Fits</span> <b>${fmtCur(left)}</b> left<div class="muted">could stay ~${Math.min(maxN,365)} nights</div>`:`<span class="pill r">✗ ${fmtCur(-left)} over</span><div class="muted">${maxN>=1?`fits ~${maxN} night${maxN>1?"s":""}`:"the trip there alone is over budget"}</div>`;}),best(total.map(v=>budget-toCur(v)),false));
  add("Daily cost pp ("+tier+")",daily.map(v=>money(v)),best(daily,true));
  add(`Getting there from ${esc(cityQ(home.name))}`,fl.map((f,i)=>`${f.fly?"✈️":"🚆"} ~${f.hrs} h · <b>${money(f.ret)}</b> return${f.fly?`<div><a target="_blank" rel="noopener" href="https://www.google.com/travel/flights?q=${enc(`Flights from ${cityQ(home.name)} to ${cityQ(P[i].name)} on ${dep} through ${back}`)}">Check real fares ↗</a></div>`:`<div class="muted">${fmtDist(f.km)} by train / bus / car</div>`}`),best(fl.map(f=>f.ret),true));
  add(`Weather in ${MON[mon-1]}`,cl.map((w,i)=>P[i].cc==="AQ"?"❄️ −2° / −8° (summer)":w?`<b>${w.max}°</b> / ${w.min}° · ${w.rainDays} rain days`:`<span class="muted">${NET.pending["c"+[P[i].lat.toFixed(1),P[i].lng.toFixed(1),mon].join("|")]?"loading…":"—"}</span>`),best(cl.map(w=>w?-Math.abs(w.max-25):null),false));
  add("Best time to visit",val(c=>{const b=bestMonths(c.cc);return `${esc(BEST[c.cc]||"—")}${b?(b.has(mon)?' <span class="pill g">✓ '+MON[mon-1]+"</span>":' <span class="pill y">off-peak</span>'):""}`;}));
  add("Safety",val(c=>safetyPill(c.cc)));
  add("Visa (your passports)",val(c=>{const bv=bestVisa(DB.profile.passports,c.cc);const L2=VISA_LOOK[bv.best.r[0]];return `${L2[0]} ${L2[2]}`;}));
  PRICE_KEYS.forEach(k=>{const arr=val(c=>{const p=PR(c.cc);return p?p[k[0]]:null;});add(`${k[1]} ${k[2]}`,arr.map(v=>v==null?"—":money(v)),best(arr,true));});
  add("Currency",val(c=>{const cu=(CTRY[c.cc]||{}).cur;return cu?`${esc(cu)}${NET.rates&&NET.rates.rates[cu]&&cu!=="EUR"?` <span class="muted">€1 = ${NET.rates.rates[cu].toLocaleString("en-US",{maximumFractionDigits:2})}</span>`:""}`:"—";}));
  add("Time difference",cl.map(w=>{if(!w||w.tz==null)return "—";const d=Math.round((w.tz/60+new Date().getTimezoneOffset())/60*2)/2;return d===0?"same as you":(d>0?"+":"")+d+" h";}));
  add("Language · plug",val(c=>`${esc((CTRY[c.cc]||{}).lang||"—")} · ${esc((SAFETY[c.cc]||[])[4]||"—")}`));
  add("Good for",val(c=>[...c.tags].map(t=>({c:"🏙️",o:"🏞️",b:"🏖️",s:"⛷️",h:"🏛️",f:"🍷",r:"💞",w:"🧘",n:"🌙",k:"🎡"})[t]||"").join(" ")));
  add("Highlights",val(c=>c.world?`<span class="muted">Not in our curated list yet – the planner builds a general city plan.</span>`:c.hl.slice(0,3).map(esc).join("<br>")));
  const winner=P.length>1?total.indexOf(Math.min(...total)):-1;
  m.innerHTML=`<div class="topbar"><div><div class="eyebrow">Compare</div><h1>Which one should it be?</h1><div class="sub">Put up to four places side by side – total cost, weather, flights, visas and local prices.</div></div></div>
  <div class="card pad cmpctl">
    <div class="field"><label>How long</label>${dated?`<div class="cmp-days"><b>${nights} night${nights>1?"s":""}</b> <span class="muted">from your dates</span></div>`:`<div class="stepper"><button data-a="cmp-days" data-d="-1" aria-label="Fewer nights">−</button><span>${nights} night${nights>1?"s":""}</span><button data-a="cmp-days" data-d="1" aria-label="More nights">+</button></div>`}</div>
    <div class="field"><label>Leave <span class="muted">(optional)</span></label><input class="inp" type="date" data-cmpo="start" value="${O.start}" min="${today()}"></div>
    <div class="field"><label>Return <span class="muted">(optional)</span></label><div class="row" style="gap:4px;flex-wrap:nowrap"><input class="inp" type="date" data-cmpo="end" value="${O.end}" min="${O.start||today()}">${O.start||O.end?`<button class="btn icon ghost" data-a="cmp-nodates" title="Clear dates">${ic("x","sm")}</button>`:""}</div></div>
    ${O.start?"":`<div class="field"><label>Or pick a month</label><select class="inp" data-cmpmonth>${MON.map((mo,i)=>`<option value="${i+1}" ${mon===i+1?"selected":""}>${mo}</option>`).join("")}</select></div>`}
    <div class="field"><label>Budget per person <span class="muted">(optional)</span></label><div class="money-inp"><span>${esc(curSym())}</span><input class="inp" type="number" min="0" step="50" inputmode="numeric" placeholder="e.g. 800" data-cmpo="budget" value="${O.budget}"></div></div>
    <div class="field"><label>Comfort</label><div class="seg">${[["budget","Budget"],["comfort","Comfort"],["luxury","Luxury"]].map(([k,l])=>`<button class="${tier===k?"on":""}" data-a="cmp-tier" data-v="${k}">${l}</button>`).join("")}</div></div>
  </div>
  <div class="card pad" style="margin-bottom:14px"><div class="row"><div class="search" style="flex:1;min-width:220px">${ic("search")}<input class="inp" id="cmpq" placeholder="Add any city, town or country – e.g. Sarajevo, Kyoto, Peru…" autocomplete="off" ${P.length>=4?"disabled":""}><div class="dd hide" id="cmpdd"></div></div>
   <span class="muted">${P.length}/4 places</span>${P.length?`<button class="btn ghost" data-a="cmp-clear">Clear all</button>`:""}</div>
   ${P.length<2?`<div class="row" style="margin-top:12px;gap:6px"><span class="muted">Try:</span>${[["Lisbon|PT","Barcelona|ES"],["Bangkok|TH","Hanoi|VN","Ubud (Bali)|ID"],["Interlaken|CH","Innsbruck|AT","Banff|CA"]].map(g=>`<button class="chip" data-a="cmp-set" data-v="${esc(g.join(","))}">${g.map(x=>cityQ(x.split("|")[0])).join(" vs ")}</button>`).join("")}</div>`:""}</div>
  ${P.length?`${winner>=0?`<div class="cmp-verdict">🏆 <b>${esc(P[winner].name)}</b> is the cheapest for ${nights} night${nights>1?"s":""}${dated?` (${fmtD(O.start,{day:"numeric",month:"short"})} – ${fmtD(O.end,{day:"numeric",month:"short"})})`:""}: ${money(total[winner])} per person${budget?(toCur(total[winner])<=budget?" – within your budget 🎉":` – ${fmtCur(toCur(total[winner])-budget)} over your budget`):""}.</div>`:""}
   <div class="card cmpwrap"><table class="cmp"><thead><tr><th></th>${P.map(c=>`<th><div class="cmph"><span class="fl">${flag(c.cc)}</span><div><b>${esc(c.name)}</b><div class="muted">${esc(cname(c.cc))}</div></div><button class="btn icon ghost" data-a="cmp-rm" data-id="${esc(c.id)}" title="Remove ${esc(c.name)}" aria-label="Remove ${esc(c.name)}">${ic("x","sm")}</button></div></th>`).join("")}</tr></thead>
   <tbody>${rows.map(r=>`<tr class="${r.cls}"><td class="rl">${r.label}</td>${r.cells.map((x,i)=>`<td class="${r.win[i]?"win":""}">${x}</td>`).join("")}</tr>`).join("")}
   <tr><td></td>${P.map(c=>`<td><button class="btn sm pri" data-a="ex-plan" data-cc="${c.cc}" data-n="${esc(c.name)}" data-lat="${c.lat}" data-lng="${c.lng}">Plan this trip</button></td>`).join("")}</tr></tbody></table></div>
   <p class="muted" style="margin-top:10px">Green = best in the row. Totals = estimated return trip from ${esc(cityQ(home.name))} (change it in Settings) + ${nights} × the daily cost at ${tier} level. Weather: ${MON[mon-1]} averages from last year (<a href="https://open-meteo.com" target="_blank" rel="noopener">Open-Meteo</a>). Prices are typical, not live quotes.</p>`
  :`<div class="card empty"><div class="big">⚖️</div><h3>Nothing to compare yet</h3><p class="sub">Type any city above – even small ones – or tap a suggestion. You can also add places with “+ Compare” on the Explore map.</p></div>`}`;
}

/* ---------- Calendar (.ics) ---------- */
function tripICS(t){
  const esc2=s=>String(s||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\n/g,"\\n");
  const ymd=d=>d.replace(/-/g,"");const stamp=new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,"");
  let s="BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//TravelTropia//EN\r\nCALSCALE:GREGORIAN\r\n";
  t.days.forEach((d,i)=>{const date=addDays(t.start,i);d.items.forEach(it=>{if(!it.title)return;
    const uidv=it.id+"@traveltropia";s+="BEGIN:VEVENT\r\nUID:"+uidv+"\r\nDTSTAMP:"+stamp+"\r\n";
    if(it.time&&/^\d\d:\d\d$/.test(it.time)){const st=ymd(date)+"T"+it.time.replace(":","")+"00";const [h,mm]=it.time.split(":").map(Number);const end=new Date(2000,0,1,h,mm+90);s+="DTSTART:"+st+"\r\nDTEND:"+ymd(date)+"T"+String(end.getHours()).padStart(2,"0")+String(end.getMinutes()).padStart(2,"0")+"00\r\n";}
    else s+="DTSTART;VALUE=DATE:"+ymd(date)+"\r\nDTEND;VALUE=DATE:"+ymd(addDays(date,1))+"\r\n";
    s+="SUMMARY:"+esc2(it.title)+"\r\nLOCATION:"+esc2(d.city?d.city+", "+cname(d.cc):"")+"\r\nDESCRIPTION:"+esc2((it.note?it.note+"\n":"")+t.title)+"\r\nEND:VEVENT\r\n";});});
  return s+"END:VCALENDAR\r\n";
}

/* ---------- Cloud (Firebase) integration ---------- */
const CFG=window.TT_FIREBASE||{};
const CLOUD_ON=!!(CFG.apiKey&&CFG.projectId&&!/YOUR_/.test(CFG.apiKey));
const CL={api:null,uid:null,authKnown:!CLOUD_ON,profiles:{},friendships:[],tripHash:{},tripOwner:{},unsubs:[],msgs:[],msgUnsub:null,msgTrip:null,board:[],boardUnsub:null,userHash:"",pubHash:"",pendingRender:false,firstTrips:false,err:""};
const isCloud=()=>!!(ACCOUNT&&ACCOUNT.cloud);
const myId=()=>isCloud()?ACCOUNT.id:"me";
function loadCloud(){
  return new Promise((res,rej)=>{if(window.TTCloud)return res(window.TTCloud);const sc=document.createElement("script");sc.src=(window.TT_ASSET_BASE||"")+"assets/js/cloud.js";sc.onload=()=>res(window.TTCloud);sc.onerror=()=>rej(new Error("cloud.js failed to load"));document.head.appendChild(sc);});
}
async function startCloud(){
  try{CL.api=await loadCloud();CL.api.init(CFG);}catch(e){console.error(e);CL.authKnown=true;CL.err="Couldn't connect to the online service – running in offline mode.";render();return;}
  CL.api.onAuth(onCloudAuth);
  if(/^#view-/.test(location.hash))render();
}
function stopWatchers(){CL.unsubs.forEach(u=>{try{u();}catch(e){}});CL.unsubs=[];if(CL.msgUnsub){try{CL.msgUnsub();}catch(e){}CL.msgUnsub=null;CL.msgTrip=null;}if(CL.boardUnsub){try{CL.boardUnsub();}catch(e){}CL.boardUnsub=null;}}
const userDoc=()=>{const o={};["profile","settings","visited","wishlist","trivia","joined","friends","seen","lastTrip","imported"].forEach(k=>{if(DB[k]!==undefined)o[k]=DB[k];});return o;};
async function onCloudAuth(u){
  stopWatchers();
  if(!u){if(ACCOUNT&&ACCOUNT.cloud){ACCOUNT=null;DB=DEFAULT_DB();}CL.authKnown=true;CL.uid=null;if(!ACCOUNT)render();return;}
  CL.uid=u.uid;ACCOUNT={id:u.uid,cloud:true,name:u.name||(u.email||"").split("@")[0],email:u.email,provider:u.provider==="google.com"?"google":"email",photo:u.photo||""};
  KEY="traveltropia.cloud."+u.uid;CL.tripHash={};CL.tripOwner={};CL.firstTrips=false;
  let data=null;try{data=await CL.api.loadUser(u.uid);}catch(e){console.warn(e);try{data=JSON.parse(LS.get(KEY));}catch(err){}}
  DB=Object.assign(DEFAULT_DB(),data||{});DB.trips=[];DB.meetups=[];
  if(!data){DB.profile.name=ACCOUNT.name;if(u.photo)DB.profile.photo=u.photo;}
  normalize();CL.userHash=JSON.stringify(userDoc());
  if(!DB.profile.handle)await ensureHandle();
  CL.authKnown=true;S.plan=newPlan();
  CL.unsubs.push(CL.api.watchTrips(u.uid,onTrips,e=>{console.warn(e);toast("Couldn't sync trips – check your connection");}));
  CL.unsubs.push(CL.api.watchFriendships(u.uid,onFriends,e=>console.warn(e)));
  MEET.mode="cloud";MEET.myId=u.uid;MEET.loading=true;
  CL.unsubs.push(CL.api.watchMeetups(list=>{MEET.list=list;MEET.loading=false;if(S.view==="meet")softRender();},e=>{MEET.loading=false;MEET.err="Meet-ups unavailable ("+(e.code||"error")+")";}));
  watchBoard();
  const v=(location.hash||"").slice(1);S.view=VIEWS.includes(v)&&v!=="trip"?v:"home";
  render();save();maybeWelcome();offerImport();
}
async function ensureHandle(){
  const base=(norm(DB.profile.name||ACCOUNT.email||"traveler").replace(/[^a-z0-9]/g,"")||"traveler").slice(0,14);
  for(let i=0;i<6;i++){const h=i===0?base:base+Math.floor(100+Math.random()*9900);try{await CL.api.claimHandle(CL.uid,h);DB.profile.handle=h;return;}catch(e){if(String(e.message)!=="taken"){console.warn(e);return;}}}
}
function cloudFlush(){
  if(!isCloud()||!CL.api)return;const uid=CL.uid;
  const ud=userDoc();const j=JSON.stringify(ud);if(j!==CL.userHash){CL.userHash=j;CL.api.saveUser(uid,ud).catch(netErr);}
  const xp=xpInfo();const pub={name:DB.profile.name,handle:DB.profile.handle||"",avatar:DB.profile.avatar,photo:(DB.profile.photo||"").length<120000?DB.profile.photo||"":"",home:DB.profile.home,level:xp.level,levelTitle:xp.title,xp:xp.xp,visited:DB.visited,countries:sovCount(),badges:BADGES.filter(bDone).length,streak:triviaStats().streak};
  const pj=JSON.stringify(pub);if(pj!==CL.pubHash){CL.pubHash=pj;CL.api.saveProfile(uid,Object.assign(pub,{updated:Date.now()})).catch(netErr);CL.profiles[uid]=pub;}
  DB.trips.forEach(t=>{if(!t.owner)t.owner=uid;if(!Array.isArray(t.members))t.members=[uid];if(!t.members.includes(uid)&&t.owner===uid)t.members.push(uid);
    const tj=JSON.stringify(t);if(CL.tripHash[t.id]===tj)return;const d=Object.assign({},t,{updatedAt:Date.now()});t.updatedAt=d.updatedAt;CL.tripHash[t.id]=JSON.stringify(t);CL.tripOwner[t.id]=t.owner;CL.api.saveTrip(d).catch(netErr);});
  Object.keys(CL.tripHash).forEach(id=>{if(DB.trips.some(t=>t.id===id))return;delete CL.tripHash[id];(CL.tripOwner[id]===uid?CL.api.deleteTrip(id):CL.api.leaveTrip(id,uid)).catch(netErr);});
}
function netErr(e){console.warn(e);const c=e&&e.code||"";toast(c==="permission-denied"?"You don't have permission to change that.":"Couldn't save online – will retry when you're back online.");}
function onTrips(list){
  const ids=new Set(list.map(t=>t.id));let changed=false;
  list.forEach(r=>{const j=JSON.stringify(r);CL.tripOwner[r.id]=r.owner;if(CL.tripHash[r.id]===j)return;
    const i=DB.trips.findIndex(t=>t.id===r.id);
    if(i>=0&&saveT&&JSON.stringify(DB.trips[i])!==CL.tripHash[r.id]&&CL.tripHash[r.id])return; // local edit pending – ours wins
    CL.tripHash[r.id]=j;migrateTrip(r);if(i>=0)DB.trips[i]=r;else DB.trips.push(r);changed=true;});
  DB.trips=DB.trips.filter(t=>{if(!ids.has(t.id)&&CL.tripHash[t.id]){delete CL.tripHash[t.id];changed=true;return false;}return true;});
  const need=[...new Set(DB.trips.flatMap(t=>(t.members||[]).concat((t.group||[]).map(p=>p.uid))))].filter(x=>x&&!CL.profiles[x]);
  if(need.length)CL.api.getProfiles(need).then(p=>{Object.assign(CL.profiles,p);softRender();}).catch(()=>{});
  if(changed||!CL.firstTrips){CL.firstTrips=true;softRender();}
}
function onFriends(list){
  CL.friendships=list;const need=list.flatMap(f=>f.members).filter(x=>x!==CL.uid&&!CL.profiles[x]);
  if(need.length)CL.api.getProfiles(need).then(p=>{Object.assign(CL.profiles,p);softRender();}).catch(()=>{});
  softRender();
}
function watchBoard(){if(!isCloud())return;if(CL.boardUnsub)CL.boardUnsub();CL.boardDate=today();CL.boardUnsub=CL.api.watchTrivia(today(),l=>{CL.board=l;if(S.view==="trivia")softRender();},e=>console.warn(e));}
const friendsAccepted=()=>CL.friendships.filter(f=>f.status==="accepted").map(f=>({fid:f.id,uid:f.members.find(x=>x!==CL.uid)})).map(x=>Object.assign(x,CL.profiles[x.uid]||{name:"Traveller"}));
const friendsIncoming=()=>CL.friendships.filter(f=>f.status==="pending"&&f.requester!==CL.uid);
const friendsOutgoing=()=>CL.friendships.filter(f=>f.status==="pending"&&f.requester===CL.uid);
function softRender(){const a=document.activeElement;const typing=a&&/INPUT|TEXTAREA|SELECT/.test(a.tagName)&&a.closest("#main");if(typing||$("#scrim")){CL.pendingRender=true;return;}render();}
document.addEventListener("focusout",()=>{setTimeout(()=>{if(CL.pendingRender&&!$("#scrim")){const a=document.activeElement;if(!(a&&/INPUT|TEXTAREA|SELECT/.test(a.tagName))){CL.pendingRender=false;render();}}},150);});
function offerImport(){
  if(DB.imported)return;const sources=[];
  const g=LS.get("traveltropia.v1");if(g)sources.push(["traveltropia.v1","Guest data"]);
  accounts().forEach(a=>{if(LS.get(keyFor(a.id)))sources.push([keyFor(a.id),"Local account “"+a.name+"”"]);});
  const usable=sources.map(([k,l])=>{try{const d=JSON.parse(LS.get(k));return d&&((d.trips||[]).length||(d.visited||[]).length)?{k,l,n:(d.trips||[]).length,v:(d.visited||[]).length}:null;}catch(e){return null;}}).filter(Boolean);
  if(!usable.length){DB.imported=true;save();return;}
  setTimeout(()=>{if($("#scrim"))return;modal(`<div class="mh"><h2>Bring your trips online?</h2>${X}</div><p class="sub">We found TravelTropia data saved in this browser. Import it into your account so it's available on all your devices.</p>
   ${usable.map(u=>`<label class="pack"><input type="checkbox" data-imp="${esc(u.k)}" checked><span><b>${esc(u.l)}</b> <span class="muted">· ${plural(u.n,"trip")} · ${plural(u.v,"place")} visited</span></span></label>`).join("")}
   <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn" data-a="imp-skip">Not now</button><button class="btn pri" data-a="imp-go">Import</button></div>`);},600);
}
function doImport(keys){
  let n=0;keys.forEach(k=>{try{const d=JSON.parse(LS.get(k));(d.trips||[]).forEach(t=>{if(DB.trips.some(x=>x.id===t.id))return;t.owner=CL.uid;t.members=[CL.uid];migrateTrip(t);DB.trips.push(t);n++;});
    (d.visited||[]).forEach(cc=>{if(!DB.visited.includes(cc))DB.visited.push(cc);});(d.wishlist||[]).forEach(cc=>{if(!DB.wishlist.includes(cc)&&!DB.visited.includes(cc))DB.wishlist.push(cc);});
    (d.friends||[]).forEach(f=>{if(!DB.friends.some(x=>x.id===f.id))DB.friends.push(f);});Object.assign(DB.trivia,d.trivia||{});}catch(e){}});
  DB.imported=true;save();render();toast(`✓ Imported ${plural(n,"trip")}`);
}
function authMsg(e){const c=(e&&e.code)||"";return ({"auth/email-already-in-use":"There's already an account with that e-mail – try logging in.","auth/invalid-credential":"E-mail or password is incorrect.","auth/wrong-password":"E-mail or password is incorrect.","auth/user-not-found":"No account with that e-mail.","auth/weak-password":"Password must be at least 6 characters.","auth/invalid-email":"That e-mail address doesn't look right.","auth/popup-closed-by-user":"The Google window was closed – try again.","auth/popup-blocked":"Your browser blocked the pop-up – allow pop-ups and try again.","auth/operation-not-allowed":"This sign-in method isn't switched on yet in Firebase (see README).","auth/unauthorized-domain":"This website address isn't authorised in Firebase yet (see README).","auth/too-many-requests":"Too many attempts – wait a moment and try again.","auth/network-request-failed":"No connection – check your internet."})[c]||("Something went wrong ("+(c||e.message||"error")+").");}

/* ---------- Social UI ---------- */
function personAv(uid,size){const p=CL.profiles[uid]||{};return avatar({uid,name:p.name},size);}
function friendsSection(){
  if(!isCloud())return `<div class="card pad section"><div class="eyebrow">Friends</div><h3>Travel with friends online</h3><p class="sub">${CLOUD_ON?"Sign in with an account to add friends, share trips and chat.":"Real friends, shared trips and chat work once the site is connected to its online database (see README)."}</p></div>`;
  const fr=friendsAccepted(),inc=friendsIncoming(),out=friendsOutgoing();
  return `<div class="card pad section"><div class="spread"><div><div class="eyebrow">Friends</div><h3>Your travel crew</h3><div class="muted">Your handle is <b>@${esc(DB.profile.handle||"…")}</b> – share it so friends can add you.</div></div>
    <form class="row" data-form="addfriend"><div class="search" style="width:230px">${ic("search")}<input class="inp" name="h" placeholder="@handle" required></div><button class="btn pri">${ic("userplus","sm")} Add friend</button></form></div>
   ${inc.length?`<div class="sub-h">Requests</div>${inc.map(f=>{const o=f.members.find(x=>x!==CL.uid);const p=CL.profiles[o]||{};return `<div class="leg">${personAv(o,40)}<div style="flex:1"><b>${esc(p.name||"Someone")}</b> <span class="muted">@${esc(p.handle||"")}</span><div class="muted">wants to be your travel friend</div></div><button class="btn sm pri" data-a="fr-accept" data-id="${f.id}">Accept</button><button class="btn sm ghost" data-a="fr-remove" data-id="${f.id}">Decline</button></div>`;}).join("")}`:""}
   ${fr.length?`<div class="sub-h">Friends · ${fr.length}</div><div class="grid g3">${fr.sort((a,b)=>(b.xp||0)-(a.xp||0)).map((f,i)=>`<button class="leg friend" data-a="fr-view" data-uid="${f.uid}">${personAv(f.uid,44)}<div style="flex:1;text-align:left"><b>${esc(f.name)}</b><div class="muted">Lv ${f.level||1} · ${plural(f.countries||0,"country","countries")}</div></div>${i<3&&fr.length>1?`<span class="rank">#${i+1}</span>`:""}</button>`).join("")}</div>`:`<div class="empty" style="padding:22px">No friends yet – add someone by their @handle.</div>`}
   ${out.length?`<div class="muted" style="margin-top:10px">Waiting for: ${out.map(f=>{const o=f.members.find(x=>x!==CL.uid);return `<span class="chip">${esc((CL.profiles[o]||{}).name||"…")} <span class="x" data-a="fr-remove" data-id="${f.id}">✕</span></span>`;}).join(" ")}</div>`:""}
  </div>`;
}
function friendModal2(uid){
  const p=CL.profiles[uid]||{};const fs=CL.friendships.find(f=>f.members.includes(uid));const shared=DB.trips.filter(t=>(t.members||[]).includes(uid));
  modal(`<div class="mh"><span></span>${X}</div><div style="text-align:center">${personAv(uid,88)}<h2 style="margin-top:10px">${esc(p.name||"Traveller")}</h2><div class="muted">@${esc(p.handle||"")} · Level ${p.level||1} ${esc(p.levelTitle||"")}</div>
  <div class="grid g3" style="margin:16px 0"><div class="leg col"><b class="display">${p.countries||0}</b><span class="muted">countries</span></div><div class="leg col"><b class="display">${(p.xp||0).toLocaleString()}</b><span class="muted">XP</span></div><div class="leg col"><b class="display">${p.badges||0}</b><span class="muted">badges</span></div></div>
  ${(p.visited||[]).length?`<div class="flags" style="font-size:22px;line-height:1.6">${p.visited.slice(0,40).map(flag).join(" ")}</div>`:`<div class="muted">No countries marked yet.</div>`}
  ${(p.visited||[]).length?`<div class="muted" style="margin-top:6px">${(p.visited||[]).filter(cc=>DB.visited.includes(cc)).length} in common with you</div>`:""}
  ${shared.length?`<div class="muted" style="margin-top:10px">Trips together: ${shared.map(t=>esc(t.title)).join(", ")}</div>`:""}
  <div class="row" style="justify-content:center;margin-top:16px"><button class="btn pri" data-a="fr-plan" data-uid="${uid}">${ic("compass","sm")} Plan a trip together</button>${fs?`<button class="btn ghost danger" data-a="fr-remove" data-id="${fs.id}">Remove friend</button>`:""}</div></div>`);
}
function shareModal(){
  const t=getTrip(S.tripId);if(!t)return;
  if(!isCloud()){modal(`<div class="mh"><h2>Share this trip</h2>${X}</div><p class="sub">Send the itinerary as a picture, PDF or text.</p><div class="row"><button class="btn" data-a="export">${ic("image","sm")} Image / PDF</button><button class="btn" data-a="share">${ic("copy","sm")} Copy as text</button></div>
   <p class="muted" style="margin-top:14px">${CLOUD_ON?"Log in with an account to plan together with friends in real time.":"Once this site is connected to its online database, you can invite friends to edit together and share a public link."}</p>`);return;}
  const owner=t.owner===CL.uid;const mem=(t.members||[]);const fr=friendsAccepted().filter(f=>!mem.includes(f.uid));
  const link=location.origin+location.pathname+"#view-"+t.id;
  modal(`<div class="mh"><h2>Share & travel together</h2>${X}</div>
  <div class="eyebrow">People on this trip</div>
  ${mem.map(u=>{const p=u===CL.uid?{name:"You"}:(CL.profiles[u]||{name:"…"});return `<div class="pack">${personAv(u,30)}<span>${esc(u===CL.uid?"You":p.name)}${u===t.owner?' <span class="pill">owner</span>':""}</span>${owner&&u!==CL.uid?`<button class="btn sm ghost danger" style="margin-left:auto" data-a="mem-rm" data-uid="${u}">Remove</button>`:""}</div>`;}).join("")}
  ${fr.length?`<div class="row" style="margin-top:8px"><select class="inp" style="flex:1" data-memadd><option value="">+ Add a friend to this trip…</option>${fr.map(f=>`<option value="${f.uid}">${esc(f.name)} (@${esc(f.handle||"")})</option>`).join("")}</select></div>`:`<div class="muted" style="margin:8px 0">Add friends on your Passport page to invite them here.</div>`}
  <div class="muted" style="margin-top:6px">Everyone on the trip can edit it and chat – changes appear live for all.</div>
  <div class="eyebrow" style="margin-top:20px">Public link</div>
  <label class="toggle" style="margin:6px 0"><input type="checkbox" data-public ${t.public?"checked":""} ${owner?"":"disabled"}><span></span> Anyone with the link can view (read-only)</label>
  ${t.public?`<div class="row"><input class="inp" readonly value="${esc(link)}" style="flex:1"><button class="btn" data-a="copy-link" data-v="${esc(link)}">${ic("copy","sm")} Copy</button></div>`:""}
  <div class="row" style="justify-content:space-between;margin-top:18px">${owner?"<span></span>":`<button class="btn ghost danger" data-a="trip-leave">Leave this trip</button>`}<div class="row"><button class="btn" data-a="export">${ic("image","sm")} Image / PDF</button><button class="btn pri" data-a="close">Done</button></div></div>`,"wide");
}
function chatHTML(t){
  if(!isCloud())return `<div class="card pad empty"><div class="big">💬</div><p>Trip chat works when you're signed in online${CLOUD_ON?"":" (the site needs its online database – see README)"}.</p></div>`;
  if(CL.msgTrip!==t.id){if(CL.msgUnsub)CL.msgUnsub();CL.msgs=[];CL.msgTrip=t.id;CL.msgUnsub=CL.api.watchMessages(t.id,l=>{CL.msgs=l;const box=$("#chatlist");if(box){box.innerHTML=chatList();box.scrollTop=box.scrollHeight;}},e=>console.warn(e));}
  return `<div class="card chat" style="max-width:820px"><div class="chathead"><b>Trip chat</b><span class="muted">${(t.members||[]).length>1?plural(t.members.length,"person","people"):"Invite friends via Share to chat together"}</span></div><div class="chatlist" id="chatlist">${chatList()}</div>
   <form class="chatform" data-form="chat"><input class="inp" name="m" placeholder="Write a message…" autocomplete="off" required maxlength="1000"><button class="btn pri">${ic("arrow","sm")}</button></form></div>`;
}
function chatList(){
  if(!CL.msgs.length)return `<div class="muted" style="text-align:center;padding:30px">No messages yet – say hi 👋</div>`;
  return CL.msgs.map(m=>{const mine=m.uid===CL.uid;return `<div class="msg ${mine?"me":""}">${mine?"":personAv(m.uid,28)}<div><div class="bubble">${esc(m.text)}</div><div class="muted" style="font-size:11px">${mine?"":esc(m.name)+" · "}${new Date(m.at).toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</div></div></div>`;}).join("");
}
function boardHTML(){
  if(!isCloud())return "";
  const fr=new Set(friendsAccepted().map(f=>f.uid).concat([CL.uid]));const list=(S.boardFriends?CL.board.filter(r=>fr.has(r.uid)):CL.board).slice(0,20);
  return `<div class="card pad" style="margin-top:16px"><div class="spread"><h3>Today's leaderboard</h3><div class="seg sm"><button class="${S.boardFriends?"":"on"}" data-a="board" data-v="0">Everyone</button><button class="${S.boardFriends?"on":""}" data-a="board" data-v="1">Friends</button></div></div>
  ${list.length?list.map((r,i)=>`<div class="pack ${r.uid===CL.uid?"hl":""}"><b class="rank">${i+1}</b>${personAv(r.uid,26)}<span>${esc(r.name||"Traveller")}</span><b style="margin-left:auto">${r.score}</b></div>`).join(""):`<div class="muted" style="margin-top:8px">No scores yet today – be the first!</div>`}</div>`;
}
async function vPublic(m,id){
  let t=DB.trips.find(x=>x.id===id);
  if(!t&&CL.api){try{t=await CL.api.getTrip(id);if(t)migrateTrip(t);}catch(e){t=null;}}
  const app=$("#app");
  app.innerHTML=`<div class="public"><header class="pub-head"><a class="brand" href="./">${LOGO(30)}<b>TravelTropia</b></a><a class="btn pri" href="#home" data-a="pub-exit">Plan your own trip</a></header><main class="main" id="main"></main></div>`;
  const mm=$("#main");
  if(!t){mm.innerHTML=`<div class="card empty"><div class="big">🔒</div><h3>This trip isn't available</h3><p class="sub">It may be private, or the link is wrong.</p></div>`;return;}
  S.tab=S.tab&&["itin","map","book","docs","pack"].includes(S.tab)?S.tab:"itin";
  mm.innerHTML=`<div class="muted" style="margin-bottom:10px">Shared itinerary · read-only</div>`+tripBody(t,true).replace(/<button class="mbtn"[^>]*>/,'<span class="mbtn">').replace(/(<span class="mbtn">[\s\S]*?)<\/button>/,"$1</span>");
}

/* ---------- Boot ---------- */
S.plan=newPlan();
(function boot(){
  let ses=null;try{ses=JSON.parse(SS.get(SES_KEY)||LS.get(SES_KEY));}catch(e){}
  if(ses&&ses.id){const acc=ses.id==="guest"?GUEST:accounts().find(a=>a.id===ses.id);if(acc)openAccount(acc,!!LS.get(SES_KEY));}
  if(CLOUD_ON)startCloud();
  loadRates();
  fromHash();if(!CLOUD_ON)initShared();
  (window.requestIdleCallback||(f=>setTimeout(f,400)))(()=>{try{worldPaths();}catch(e){}});
  if(ACCOUNT)maybeWelcome();
})();
})();
