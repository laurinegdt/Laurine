export default class Lissajou {
    constructor(ctx) {
        this.ctx = ctx;
        this.a1 = 0;
        this.a2 = 0;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.rayon = 400;
        // this.strokeWeight = 1;
        this.color = 0;
        this.bigRadius = 950;
        this.smallRadius = 700;
        this.posx = 0;
        this.posy = 0;
        this.r = 0;
    }

    update(finger) {
        this.a1 += 1.4;
        this.a2 += 1.23;
        this.color += 1;

        this.width = finger.x * window.innerWidth;
        this.height = finger.y * window.innerHeight;

        this.posx = this.centerX + Math.cos(this.a1 * (Math.PI / 2)) * 700;
        this.posy = this.centerY + Math.sin(this.a2 * (Math.PI / 180)) * 300;
        this.r = Math.abs(50 * Math.cos(this.a2 * (Math.PI / 180)));

        if (this.posx >= this.width) { this.posx = this.width - this.r / 2; }

    }
    draw() {
        this.ctx.fillStyle = "rgba(255,255,255, 0.01)";
        // this.ctx.strokeWeight = this.strokWeight;
        this.circle(this.posx, this.posy, this.r);
    }
    circle(x, y, rayon) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, rayon, 0, 2 * Math.PI, true);
        this.ctx.strokeStyle = "hsl(" + this.color + ", 90%,50%)";
        this.ctx.stroke();
        this.ctx.closePath();
    }
}