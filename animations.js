import {
  animate,
  createSpring,
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

animate(".logobig", {
  scale: [
    { to: 1.25, ease: "inOut(3)", duration: 200 },
    { to: 1, ease: createSpring({ stiffness: 300 }) },
  ],
  loop: true,
  loopDelay: 250,
});
