// Redirect with fade-out after video ends
const video = document.getElementById("introVideo");
const FADE_CLASS = 'page-fade-out';
const NAV_TARGET = 'invite.html';

function navigateAfterFade() {
  const timeout = setTimeout(() => { window.location.href = NAV_TARGET; }, 1200);
  // try to listen for transitionend on body for a graceful handoff
  document.body.addEventListener('transitionend', function onEnd(e) {
    if (e.target === document.body) {
      clearTimeout(timeout);
      document.body.removeEventListener('transitionend', onEnd);
      window.location.href = NAV_TARGET;
    }
  });
}

if (video) {
  video.addEventListener('ended', () => {
    // add fade class to body to trigger CSS transition
    document.body.classList.add(FADE_CLASS);
    // ensure navigation after the fade
    navigateAfterFade();
  });
}


// Scroll reveal: add `.in-view` to elements with .fade-in when they enter the viewport
(function setupScrollReveal() {
  const items = Array.from(document.querySelectorAll('.fade-in'));
  if (!items.length || typeof IntersectionObserver === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
  const idx = items.indexOf(el);
  // slower base delay and wider stagger so first items are more noticeable
  const delay = Math.min(500 + (idx * 160), 1400);
        setTimeout(() => el.classList.add('in-view'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(i => observer.observe(i));
})();