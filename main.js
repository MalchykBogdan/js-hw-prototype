function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.calculateArea = function() {
  return this.width * this.height;
}

function Square(sideLength) {
  Rectangle.call(this, sideLength, sideLength);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

const rectangle = new Rectangle(3, 6);
console.log(rectangle.calculateArea());

const square = new Square(10);
console.log(square.calculateArea());
