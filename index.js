"use strict";
let canvas;
let ctx;
let currentTriangle;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() { return this.x; }
    getY() { return this.y; }
}
function initialize() {
    console.log("Hello World!!!");
    canvas = window.document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, 100, 100);
}
class Triangle {
    constructor(p1, p2, p3) {
        this.points = [p1, p2, p3];
    }
    isInside({ x, y }) {
        const newX = x - this.points[0].x;
        const newY = y - this.points[0].y;
        const vector1 = { x: this.points[1].x - this.points[0].x, y: this.points[1].y - this.points[0].y };
        const vector2 = { x: this.points[2].x - this.points[0].x, y: this.points[2].y - this.points[0].y };
        return false;
    }
}
