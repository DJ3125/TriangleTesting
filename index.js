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
    addVector({ x, y }) {
        return new Point(this.x + x, this.y + y);
    }
    subtractVector({ x, y }) {
        return new Point(this.x - x, this.y - y);
    }
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
    isInside(vector) {
        const newVector = vector.subtractVector(this.points[0]);
        const vector1 = this.points[1].subtractVector(this.points[0]);
        const vector2 = this.points[2].subtractVector(this.points[0]);
        return false;
    }
}
