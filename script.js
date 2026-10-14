// CRETA — minor enhancements: active nav + footer year
document.addEventListener("DOMContentLoaded", () => {
  // Mark active nav link ("/", "/index" y "/index.html" cuentan como Inicio)
  const norm = (p) => p.replace(/\.html$/, "").replace(/\/index$/, "/").replace(/\/$/, "") || "/";
  const cur = norm(location.pathname);
  document.querySelectorAll(".nav a").forEach((a) => {
    if (norm(a.pathname) === cur) a.classList.add("active");
  });
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
