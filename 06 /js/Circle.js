class Circle {
  constructor(x, y, radius, ctx) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ctx = ctx;
    this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
  };


  draw() {

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 5 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}
