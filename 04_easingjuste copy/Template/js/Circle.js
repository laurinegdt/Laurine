// la définition de la classe Circle c'est comme définir une function mais sans les parenthèses
// la fonction par défaul est le constructor
// on peut passer des paramètres au constructor
// dans une class on n'écrit pas "function" pour TOUTES les fonctions
// une variable globale de class s'écrit avec "this."
class Circle {
  constructor(x, y, rayon, context) {
    this.x = x;
    this.y = y;
    this.origin = { x: x, y: y };
    this.target = { x: x, y: y };

    this.speed = 1;
    this.uniteDeTemps = 0;
    this.uniteDeTemps1 = 0;

    this.rayon = rayon;
    this.rayonOrigin = { rayon: rayon };
    this.rayonFinal = { rayon: rayon };

    this.context = context;
    // on initialise une couleur au bol
    this.color = "yellow";

    this.rotation = 0;
  }
  drawVerticalOval() {
    // Calcule la position du centre de l'ovale vertical
    const verticalOvalCenterX = 0;
    const verticalOvalCenterY = 0;

    const verticalOvalWidth = this.rayon * 1;
    const verticalOvalHeight = this.rayon * 2;

    // Dessine l'ovale vertical en ajustant le centre
    this.context.fillStyle = "lightgreen"; // Couleur verte
    this.context.beginPath();
    this.context.ellipse(
      verticalOvalCenterX + this.x, // Ajout de this.x pour centrer par rapport au cercle
      verticalOvalCenterY + this.y, // Ajout de this.y pour centrer par rapport au cercle
      verticalOvalWidth / 4,
      verticalOvalHeight / 4,
      0,
      0,
      2 * Math.PI
    );
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
  }

  changeColor() {
    // on affect une couleur aléatoire
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255
      })`;
    //on change la taille du rayon
    this.rayon = Math.random() * 100;
  }

  isInMe(mouseX, mouseY) {
    // on calcule la distance entre la souris et le centre
    let d = this.dist(mouseX, mouseY, this.x, this.y);
    // on compare cette distance au rayon
    if (d < this.rayon) {
      return true;
    } else {
      return false;
    }
  }

  draw() {
    //pour préparer la rotation
    this.context.save();
    //on translate le contexte au centre du cercle
    this.context.translate(this.x, this.y);
    //on fait la rotation
    this.context.rotate(this.rotation);


    //on dessine le cercle
    this.context.strokeStyle = "black"; // Couleur du contour
    this.context.strokeWeight = 2; // Épaisseur du contour8
    this.context.fillStyle = "rgba(255, 255, 150, 0.8)";

    this.context.beginPath();
    this.context.arc(0, 0, this.rayon, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.stroke(); //!
    this.context.closePath();

    this.context.restore();

    this.move();
    this.rapetisser();
    this.drawVerticalOval();
  }

  dist(x1, y1, x2, y2) {
    // calcule la distance entre deux points
    // pythagore power
    let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return d;
  }

  definirDestination(x, y) {
    this.target = { x: x, y: y };
    this.uniteDeTemps = 0;
  }

  definirRayonAleatoire() {
    this.rayonFinal.rayon = Math.random() * 200 + 50;
    this.uniteDeTemps1 = 0;
  }

  move() {
    //calcul la distance entre le point de départ et la destination
    const d = this.dist(this.x, this.y, this.target.x, this.target.y);
    if (d < 0.01) {
      this.origin = { x: this.target.x, y: this.target.y };
      return;
    }

    //calcul de easing simple
    // equivalent à un pourcentage
    const easing = Easing.circInOut(this.uniteDeTemps); //Math.pow(this.uniteDeTemps, 5); //this.uniteDeTemps * this.speed;
    //on incrémente le compteur de temps
    this.uniteDeTemps += 0.01;

    //on la distance entre le point de départ et la destination
    let distX = this.target.x - this.origin.x;
    let distY = this.target.y - this.origin.y;
    this.x = this.origin.x + distX * easing;
    this.y = this.origin.y + distY * easing;
  }

  rapetisser() {
    let differenceRayon2 = this.rayonFinal.rayon - this.rayon;
    // console.log(differenceRayon2);
    if (Math.abs(differenceRayon2) < 0.01) {
      this.rayonOrigin = { rayon: this.rayonFinal.rayon };
      return;
    }

    const easing = Easing.elasticOut(this.uniteDeTemps1);
    this.uniteDeTemps1 += 0.01;
    let differenceRayon = this.rayonFinal.rayon - this.rayonOrigin.rayon;
    this.rayon = this.rayonOrigin.rayon + differenceRayon * easing;
  }
}
