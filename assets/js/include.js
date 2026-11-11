/* Loads shared page parts (header/footer) from /partials.
   Works on any web server (GitHub Pages). When a page is opened straight from disk,
   browsers block this – the small fallback inside each placeholder is shown instead. */
document.querySelectorAll("[data-include]").forEach(function (el) {
  fetch(el.getAttribute("data-include"))
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then(function (html) { el.outerHTML = html; })
    .catch(function () { /* keep fallback */ });
});
var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
