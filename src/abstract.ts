// abstract class and method
// It is used as a blueprint for other classes, defining a structure and enforcing a contract that derived classes must follow.
abstract class Shape {
  abstract render(): string;

  // Non-abstract method with shared behavior
  describe(): string {
    return "This is a shape.";
  }
}
// const shape = new Shape(); // can't create insteance when u use ABSTRACT in class
// console.log(shape.render());

// Derived class implementing the abstract method
class Circle extends Shape {
  render(): string {
    return "Rendering a circle";
  }
}

// Another derived class implementing the abstract method
class Square extends Shape {
  render(): string {
    return "Rendering a square";
  }
}

// You can create instances of derived classes
const circle = new Circle();
console.log(circle.render()); // Output: Rendering a circle
console.log(circle.describe()); // Output: This is a shape.

const square = new Square();
console.log(square.render()); // Output: Rendering a square
console.log(square.describe()); // Output: This is a shape.
