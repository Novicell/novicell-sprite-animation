# sprite-animation

Animates spritesheets.

## Usage

Prerequisites:

- Currently, the sprite must have more than one row and column. So no single-row or single-column sprites.
- Your sprite must be square (all sides equal, such as 320x320).
- For the best results, your sprite should not contain empty sprites.

Using the module:

In your HTML
Create a div wrapper place the sprite path as a data-attribute:

```html
<div class="wrapper">
  <div class="image" data-animation-src="./sprites/bird_sprite.png"></div>
</div>
```

In your javascript, import the module

```javascript
import { SpriteAnimation } from "./dist/spriteAnimation";
```

The constructor exposed by the module accepts the following args, passed as an object: \
element\
-This is the class name of the div with the animation attribute\
frames\
-The total amount of frames in your spritesheet\
duration*\
-The duration in ms it should take your spritesheet to complete one full iteration. Defaults to 600\
columns\
-The total amount of columns in your spritesheet\
rows\
-The total amount of rows in your spritesheet\
startingPosition*\
-Can be specified to 'bottom-right'. If omitted, your sprite will animate from top-left to bottom-right\
iterations*\
-The amount of iterations the sprite animation should do. If omitted it will default to loop.\

Here is an example of usage:

```javascript
let animationOne = new SpriteAnimation({
  element: "image",
  frames: 8,
  duration: 600,
  columns: 4,
  rows: 2,
  iterations: 10
});
```
Once created, you can call the sprite's function when you wish:

```javascript
animationOne.animateSprite();
```
