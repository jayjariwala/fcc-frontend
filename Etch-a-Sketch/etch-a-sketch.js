//get the elements
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const {height, width} = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
const LINE_SPEED = 30;
let hue = 0;

// draw the canvas
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 40;
ctx.beginPath(); // start drawing
ctx.lineTo(x, y);
ctx.moveTo(x,y);
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.stroke();

function draw(event) {
  hue += 10;
  ctx.beginPath();
  ctx.moveTo(x,y);
  if(event.key.includes('Arrow')) {
    event.preventDefault();
    switch(event.key) {
      case 'ArrowUp':
        y -= LINE_SPEED;
        break;
      case 'ArrowDown':
        y += LINE_SPEED;
        break;
      case 'ArrowRight':
        x += LINE_SPEED;
        break;
      case 'ArrowLeft':
        x -= LINE_SPEED;
        break;
      default:
        break;
    }
    ctx.lineTo(x,y);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.stroke();
  }
}

function clearCanvas(params) {
  canvas.classList.add('shake');
  ctx.clearRect(0,0, width, height)
  canvas.addEventListener('animationend', function(){
    canvas.classList.remove('shake');
  }, {once: true})
}

shakeButton.addEventListener('click', clearCanvas);

document.addEventListener('keyup', draw);