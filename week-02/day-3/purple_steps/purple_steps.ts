'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let j: number = 0;
let k: number = 10;
let numberOfRect: number = 15;
function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max))
}
for (let i: number = 0; i <= numberOfRect; i++) {

  ctx.fillStyle = 'purple'
  ctx.fillRect(j, j, 10,10)
  j += k
 // k *= 1.5;
}