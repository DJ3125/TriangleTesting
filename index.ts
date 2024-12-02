let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

let currentTriangle: Triangle;

interface point {
  x: number,
  y: number,
}

class Point {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number, y:number){
    this.x = x;
    this.y = y;
  }  

  getX(){return this.x;}
  getY(){return this.y;}
}

function initialize():void{
  console.log("Hello World!!!");
  canvas = window.document.getElementById("canvas") as HTMLCanvasElement;
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.fillRect(0, 0, 100, 100);
}

class Triangle {
  private points: point[];

  constructor(p1: point, p2: point, p3: point){
    this.points = [p1, p2, p3];
  }
  
  public isInside({x, y}: point): boolean{
    const newX = x - this.points[0].x;
    const newY = y - this.points[0].y;
    const vector1 = {x: this.points[1].x - this.points[0].x, y: this.points[1].y - this.points[0].y};
    const vector2 = {x: this.points[2].x - this.points[0].x, y: this.points[2].y - this.points[0].y};
    return false;
  }
}