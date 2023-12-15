class App {
  constructor() {
    this.setup();
  }

  setup() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.circle = new Circle(100, 100, 700, this.ctx);
    this.allCircles = [];
    for (let i = 0; i < 1024; i++) {
      this.allCircles.push(
        /**
         * A CHOIX : utiliser un cercle ou un texte
         */
        new Circle(i * 10, window.innerHeight / 2, 10, this.ctx)
        //new circle(i * 2, window.innerHeight / 2, this.ctx)
      );
    }

    this.audioTool = new AudioTool();

    document.addEventListener("click", (e) => {
      this.audioTool.play(e);
    });

    this.draw();
  }

  draw() {
    this.ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    this.ctx.rect(0, 0, this.width, this.height);
    this.allCircles.forEach((circle) => {
      circle.draw();
    });

    /**
     *  A CHOIX : analyser un des 3 types de data
     */
    // this.audioTool.updateWaveForm();
    // this.audioTool.updateFrequency();
    this.audioTool.updatedFloatFrequency();

    /**
     *  A CHOIX : récupérer un des 3 types de tableau
     */
    // const data = this.audioTool.dataWave;
    // const data = this.audioTool.dataFrequency;
    const data = this.audioTool.dataFloatFrequency;

    if (this.audioTool.audioContext) {
      for (let i = 0; i < data.length; i++) {
        /**
         * A CHOIX : modifier la position ou autre parametre
         */
        // this.allCircles[i].y = data[i] + window.innerHeight / 2 - 125;
        this.allCircles[i].y = -data[i] * 6 + window.innerHeight * 0, 55;
        // console.log(Math.abs(data[i] / 10));
        // this.allCircles[i].fontSize = -data[i] / 5;
      }
    }

    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = function () {
  const app = new App();
  //   console.log(app);
};