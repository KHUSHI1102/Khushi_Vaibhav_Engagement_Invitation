const video = document.getElementById("introVideo");
const FADE_CLASS = "page-fade-out";
const NAV_TARGET = "invite.html";

function navigateAfterFade() {
  setTimeout(() => {
    window.location.href = NAV_TARGET;
  }, 1000); 
}

if (video) {

  video.muted = true;
  video.play().catch(() => {
    console.log("Autoplay blocked");
  });

  video.addEventListener("ended", () => {
    document.body.classList.add(FADE_CLASS);
    navigateAfterFade();
  });

  const skipBtn = document.querySelector(".skip-btn");
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      document.body.classList.add(FADE_CLASS);
      navigateAfterFade();
    });
  }
}

(function setupScrollReveal() {
  const items = document.querySelectorAll(".fade-in");

  if (!items.length || typeof IntersectionObserver === "undefined") return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        el.style.transitionDelay = `${index * 120}ms`;

        el.classList.add("in-view");
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.15
  });

  items.forEach((item) => observer.observe(item));
})();


document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("dragstart", (e) => e.preventDefault());

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && ["s", "u", "c"].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});