class Text {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.fontSize = 35;
    this.letters = "don't worry, be happy";
    this.letter = this.letters[Math.floor(this.letters.length)];
  }

  draw() {
    this.ctx.font = `${this.fontSize}px Arial`;
    this.ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`

      ;
    this.ctx.fillText(`${this.letter}`, this.x, this.y);
  }
}
