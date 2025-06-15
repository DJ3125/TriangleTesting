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
    const newVec: Point = vector.subtractVector(this.points[0]);
    const vec1: Point = this.points[1].subtractVector(this.points[0]);
    const vec2: Point = this.points[2].subtractVector(this.points[0]);
    const det = vec1.getX() * vec2.getY() - vec2.getX() * vec1.getY();
    if(det === 0){return false;}
    const detInverse = det**-1;
    const a = detInverse * (vec2.getY() * newVec.getX() - vec2.getX() * newVec.getY());
    if(a <= 0 || a >= 1){return false;}
    const b = detInverse * (vec1.getX() * newVec.getY() - vec1.getY() * newVec.getX());
    if(b <= 0 || b >= (1 - a)){return false;}
    return true;
  }
}