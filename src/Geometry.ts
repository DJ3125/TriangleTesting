export class Point {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number, y:number){
    this.x = x;
    this.y = y;
  }  

  public getX(): number{return this.x;}
  public getY(): number{return this.y;}

  public addVector({x, y}: Point): Point{
    return new Point(this.x + x, this.y+y);
  }

  public subtractVector({x, y}: Point): Point{
    return new Point(this.x - x, this.y - y);
  }
}

export class Triangle {
  private points: Point[];

  constructor(p1: Point, p2: Point, p3: Point){
    this.points = [p1, p2, p3];
  }

  public getPoints(): Point[] {
    const newPoints = [...this.points];
    return newPoints;
  }
  
  public isInside(vector: Point): boolean{
    const newVector: Point = vector.subtractVector(this.points[0]);
    const vector1: Point = this.points[1].subtractVector(this.points[0]);
    const vector2: Point = this.points[2].subtractVector(this.points[0]);
    return false;
  }
}