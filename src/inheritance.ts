class Person {
  constructor(public name: string, public job: string) {}

  speak() {
    return "I can speak";
  }
}

// teacher
class Teacher extends Person {
  constructor(public gender: string, name: string, job: string) {
    super(name, job);
  }

  teach() {
    return "can teach";
  }
}

const teacher = new Teacher("male", "aung", "teacher");
console.log(teacher.speak());
console.log(teacher.job);

// method overriding
class Student extends Person {
  override speak() {
    return "I can speak japanese fluently";
  }
}
const student = new Student("owwi", "student");
console.log(student);
console.log(student.speak());
