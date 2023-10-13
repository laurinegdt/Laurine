var k;
var context;
var backgroundColor;
var canvas;

function circle(x, y, rayon, color) {
  context.beginPath();
  context.arc(x, y, rayon, 0, 2 * Math.PI, true);
  context.fillStyle = color;
  context.strokeStyle = "white";
  context.lineWidth = 5;
  context.fill();
  context.stroke();
  context.closePath();
}

function createCanvas() {
  canvas = document.createElement("canvas");
  context = canvas.getContext("2d");
  canvas.id = "canvas";
  document.body.appendChild(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function setup() {
  console.log("setup");
  createCanvas();
  backgroundColor = "white";
  stroke = "white";
  strokeWeight = 2;
  k = 0;
  window.addEventListener("click", mousePressed);
  draw();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var r = 50;
  k = 0;

  colors = ["black", "yellow", "orange", "black", "red", "orange", "white", "blue", "white", "black", "darkblue", "black", "lightblue", "darkblue", "white", "salmon"];

  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {
      circle(i * (3 * r) + r*5, r + j * (3 * r), r * 2, colors[k]);
      k++;
    }
  }

  requestAnimationFrame(draw);
}

function mousePressed(e) {
  console.log("mousePressed");
}

window.onload = function () {
  console.log("on est prêt");
  setup();
};
