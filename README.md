# Novicell Sprite Animation

**Used to animate spritesheets**

## Usage

Written in pure Vanilla JS, it has _no dependencies_.

### Prerequisites:

-   Currently, the sprite must have more than one row and column. So no single-row or single-column sprites.
-   Your sprite must be square (all sides equal, such as 320x320).
-   For the best results, your sprite should not contain empty sprites.

### Install with npm

```bash
npm install novicell-sprite-animation
```

## Setup

In your HTML
Create a div wrapper place the sprite path as a data-attribute:

```html
<div class="wrapper">
    <div class="image" data-animation-src="./sprites/bird_sprite.png"></div>
</div>
```

In your javascript, import the module

```javascript
import {SpriteAnimation} from 'novicell-sprite-animation';
```

## Example

```javascript
let animationOne = new SpriteAnimation({
    element: 'image', // The class name of the div with the sprite you wish to animate
    frames: 8, // The total amount of frames in your spritesheet
    duration: 600, // *OPTIONAL The amount of time in ms it should take to finish one iteration of your sprite animation. defaults to 600
    columns: 4, // The amount of columns in your spritesheet
    rows: 2, // The amount of rows in your spritesheet
    iterations: 10, // *OPTIONAL How many iterations it should run.
    startingPosition: 'bottom-right' // OPTIONAL* If omitted, the spritesheet will animate from top left to bottom right by default.
});
```

Once created, you can call the sprite's function when you wish:

```javascript
animationOne.animateSprite();
```

To be done
[accordionAnimate Codepen](https://codepen.io/ankeris/pen/RvBoqK)

## Contribution

Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License

The Novicell Frontend is licensed under the MIT license. (http://opensource.org/licenses/MIT)
