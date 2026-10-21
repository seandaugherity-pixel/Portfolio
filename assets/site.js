// Left/right arrow keys step between pages; anchor jumps clear the sticky header.
const header = document.getElementById("site-header");
const pages = [...document.querySelectorAll(".viewer .page")];
let current = 0;

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) current = pages.indexOf(entry.target);
    }
  },
  // A page counts as "current" when it crosses the upper-middle of the viewport.
  { rootMargin: "-40% 0px -55% 0px" }
);
pages.forEach((page) => observer.observe(page));

const syncHeaderHeight = () =>
  document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
syncHeaderHeight();
window.addEventListener("resize", syncHeaderHeight);

// Show the name in the header once the cover's own name has scrolled up under it.
const coverBrand = document.getElementById("cover-brand");
if (coverBrand) {
  const brandObserver = new IntersectionObserver(
    ([entry]) => header.classList.toggle("brand-hidden", entry.isIntersecting),
    { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` }
  );
  brandObserver.observe(coverBrand);
}

function goTo(index) {
  const target = pages[Math.max(0, Math.min(pages.length - 1, index))];
  target.scrollIntoView({ block: "start" });
}

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "ArrowRight") {
    event.preventDefault();
    goTo(current + 1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    goTo(current - 1);
  }
});
