import { SpriteAnimation } from "../dist/app.bundle.js";

window.onload = function() {
  let animationOne = new SpriteAnimation({
    element: "image",
    frames: 8,
    duration: 600,
    columns: 4,
    rows: 2,
    iterations: 10
  });
  let animationTwo = new SpriteAnimation({
    element: "image.image-two",
    frames: 24,
    duration: 600,
    columns: 8,
    rows: 3,
    iterations: 10
  });
  animationOne.animateSprite();
  animationTwo.animateSprite();
};
