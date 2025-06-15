import {Triangle, Point} from "./Geometry.js";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let currentTriangle: Triangle;
let x = -100, y = -100;

window.onload = initialize;

function initialize():void{  
  canvas = window.document.getElementById("canvas") as HTMLCanvasElement;
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const button = document.getElementById("creator") as Element;
  createNewTriangle();
  canvas.addEventListener("mousemove", ({clientX, clientY} : MouseEvent)=>{
    const rect = canvas.getBoundingClientRect();
    x = (clientX - rect.x)/rect.width * canvas.width;
    y = (clientY - rect.y)/rect.height * canvas.height;
    //console.log("x=", x, ", y=", y);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTriangle();
  });
  button.addEventListener("click", createNewTriangle);
}

function drawTriangle(){
  const points: Point[] = currentTriangle.getPoints();
  ctx.save();
  ctx.fillStyle = currentTriangle.isInside(new Point(x, y)) ? "blue" : "black";
  ctx.beginPath();
  ctx.moveTo(points[0].getX(), points[0].getY());
  ctx.lineTo(points[1].getX(), points[1].getY());
  ctx.lineTo(points[2].getX(), points[2].getY());
  ctx.fill();
  ctx.restore();
}

function createNewTriangle(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  currentTriangle = new Triangle(new Point(Math.random() * canvas.width, Math.random() * canvas.height), new Point(Math.random() * canvas.width, Math.random() * canvas.height), new Point(Math.random() * canvas.width, Math.random() * canvas.height));
  drawTriangle();
}