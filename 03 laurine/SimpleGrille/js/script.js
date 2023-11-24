var width = 1600;
var height = 800;
var context;
var lineX = 5;
var colY = 5;
var circles = [];
let image;


function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

function draw() {
  context.clearRect(0, 0, width, height);
  for (let i = 0; i < circles.length; i++) {
    var circle = circles[i];
    circle.draw(context);
  }
  requestAnimationFrame(draw);
}

function setup() {
  console.log("setup");
  createCanvas(width, height);

  document.addEventListener("click", mousePressed);
  image = new Image();
  image.src = "js/singeslimyy.png"
  image.onload = function () {
    // INITIALISATION DES CERCLES
    for (let j = 1; j < lineX; j++) {
      for (let i = 1; i < colY; i++) {
        var gridX = width / lineX;
        var gridY = height / colY;
        var r = gridX / 2;
        var circle = new Circle(i * gridX, j * gridY, r, image, 250);
        circles.push(circle);
        //circles.loadImg("img/singeslimy.png");  // Charge l'image
      }
    }
  }
  draw();
}

function mousePressed(informations) {
  console.log("mousePressed");
  console.log("x: ", informations.x, "y: ", informations.y);

  // il faut utiliser la fonction isInMe() dans CHAQUE circle
  for (let i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var bool = circle.isInMe(informations.x, informations.y);
    console.log(i, bool);
    if (bool == true) {
      circle.rotate();
    }
  }
}

window.onload = function () {
  console.log("on est pret");
  setup();
};
