AOS.init();
// Smooth scroll function with momentum effect
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition =
    targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeProgress = easeInOutCubic(progress);
    const scrollValue = startPosition + distance * easeProgress;

    window.scrollTo(0, scrollValue);

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

// Easing function
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Event listener for clicks on links or elements that trigger smooth scrolling
document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.tagName === "A" && target.getAttribute("href").startsWith("#")) {
    event.preventDefault();
    const targetElementId = target.getAttribute("href");
    const duration = 1000; // Adjust the duration to control the speed of scrolling
    smoothScroll(targetElementId, duration);
  }
});
