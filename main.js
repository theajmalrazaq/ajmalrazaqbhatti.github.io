import Lenis from "https://cdn.jsdelivr.net/npm/lenis@1.1.14/+esm";

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
});

// Request animation frame for smooth scrolling
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Initialize AOS animations
AOS.init({
  duration: 800,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  const parallaxElements = document.querySelectorAll(".parallax");
  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.2;
    const yPos = -scroll * speed;
    element.style.transform = `translateY(${yPos}px)`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  AOS.refresh();
});
