import {
  animate,
  createSpring,
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";
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

// Stop scroll propagation for lottie players
document.addEventListener("DOMContentLoaded", () => {
  const lottiePlayer = document.querySelectorAll("lottie-player");
  lottiePlayer.forEach((player) => {
    player.addEventListener("wheel", (e) => {
      e.stopPropagation();
    });
  });
});
