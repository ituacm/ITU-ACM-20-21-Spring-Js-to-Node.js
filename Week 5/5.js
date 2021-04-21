// class

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(this.x ** 2, this.y ** 2);
  }

  Add(p) {
    return new Point(this.x + p.x, this.y + p.y);
  }

  static Unit() {
    return new Point(1, 0);
  }
}

const p1 = new Point(1, 1);
const p2 = Point.Unit();
const p3 = p1.Add(p2);
console.log(p1, p2, p3, p1.length);
