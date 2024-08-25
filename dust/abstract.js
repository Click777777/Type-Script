"use strict";
class Shape {
    describe() {
        return "This is a shape.";
    }
}
class Circle extends Shape {
    render() {
        return "Rendering a circle";
    }
}
class Square extends Shape {
    render() {
        return "Rendering a square";
    }
}
const circle = new Circle();
console.log(circle.render());
console.log(circle.describe());
const square = new Square();
console.log(square.render());
console.log(square.describe());
//# sourceMappingURL=abstract.js.map