// la définition de la classe Circle c'est comme définir une function mais sans les parenthèses
// la fonction par défaul est le constructor
// on peut passer des paramètres au constructor
// dans une class on n'écrit pas "function" pour TOUTES les fonctions
// une variable globale de class s'écrit avec "this."
class Circle {
  constructor(x, y, rayon, image,coteimg) {
    this.x = x;
    this.y = y;
    this.coteimg = coteimg;
    this.rayon = rayon;
    // on initialise une couleur au bol
    this.color = "pink";
    this.rotation = 0;
    this.image = image;
    
  }
  // rotation de 45° -> Math.PI / 4 = 45°
  rotate(){
    this.rotation += Math.PI / 2; 
  }
  // loadImg(src) {
  //   this.image.src = src;
  // }

  changeColor() {
    // on affect une couleur aléatoire
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
    //on change la taille du rayon
    this.rayon = Math.random() * 100;
  }

  isInMe(mouseX, mouseY) {
    // on calcule la distance entre la souris et le centre
    //let d = this.dist(mouseX, mouseY, this.x, this.y);
    // on compare cette distance au rayon
    if (
      mouseX > this.x - this.coteimg / 2 &&
      mouseX < this.x + this.coteimg / 2 &&
      mouseY > this.y - this.coteimg/ 2 &&
      mouseY < this.y + this.coteimg / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

    //if (d < this.rayon) {
    
  draw(context) {
  if (this.image.complete && this.image.naturalHeight !== 0) {
    context.save();
      context.translate(this.x, this.y);
      context.rotate(this.rotation);
      context.drawImage(this.image, -this.coteimg / 2, -this.coteimg / 2, this.coteimg, this.coteimg);
      context.restore();
    }
  }

//     //pour préparer la rotations
//     context.save();
//     //on translate le contexte au centre du cercle
//     context.translate(this.x, this.y);
//     //on fait la rotation
//     context.rotate(this.rotation);
//     //on dessine le cercle
//     context.fillStyle = this.color;
//     context.beginPath();
//     context.arc(0, 0, this.rayon, 0, 1 * Math.PI, true);
//     context.fill();
//     context.closePath();
//     context.drawImage(this.image, 0, 0, this.rayon*2, this.rayon*2);
//     context.restore();
      
//   }
// }

  dist(x1, y1, x2, y2) {
    // calcule la distance entre deux points
    // pythagore power
    let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return d;
  }
}

