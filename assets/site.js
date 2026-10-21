// Page counter + previous/next navigation for the portfolio viewer.
const pages = [...document.querySelectorAll(".viewer .page")];
const pageNum = document.getElementById("page-num");
let current = 0;

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      current = pages.indexOf(entry.target);
      pageNum.textContent = current + 1;
    }
  },
  // A page counts as "current" when it crosses the upper-middle of the viewport.
  { rootMargin: "-40% 0px -55% 0px" }
);
pages.forEach((page) => observer.observe(page));

function goTo(index) {
  const target = pages[Math.max(0, Math.min(pages.length - 1, index))];
  target.scrollIntoView({ block: "start" });
}

document.querySelectorAll("[data-step]").forEach((button) => {
  button.addEventListener("click", () => goTo(current + Number(button.dataset.step)));
});

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
