// CRETA — minor enhancements: active nav + footer year
document.addEventListener("DOMContentLoaded", () => {
  // Mark active nav link
  const path = location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = a.getAttribute("href").replace(/\/$/, "") || "/";
    const norm = href === "index.html" || href === "./index.html" || href === "/" ? "/" : "/" + href.replace(/^\.?\//, "").replace(/\.html$/, "");
    const cur = path === "/" ? "/" : path.replace(/\.html$/, "");
    if (norm === cur) a.classList.add("active");
  });
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
