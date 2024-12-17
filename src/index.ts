import {Triangle, Point} from "./Geometry.js";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let currentTriangle: Triangle = new Triangle(new Point(0, 0), new Point(0, 100), new Point(100, 0));

window.onload = initialize;

function initialize():void{  
  canvas = window.document.getElementById("canvas") as HTMLCanvasElement;
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  
  const points: Point[] = currentTriangle.getPoints();
  ctx.beginPath();
  ctx.moveTo(points[0].getX(), points[0].getY());
  ctx.lineTo(points[1].getX(), points[1].getY());
  ctx.lineTo(points[2].getX(), points[2].getY());
  ctx.fill();
}