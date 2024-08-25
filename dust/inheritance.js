"use strict";
class Person {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
    speak() {
        return "I can speak";
    }
}
class Teacher extends Person {
    constructor(gender, name, job) {
        super(name, job);
        this.gender = gender;
    }
    teach() {
        return "can teach";
    }
}
const teacher = new Teacher("male", "aung", "teacher");
console.log(teacher.speak());
console.log(teacher.job);
class Student extends Person {
    speak() {
        return "I can speak japanese fluently";
    }
}
const student = new Student("owwi", "student");
console.log(student);
console.log(student.speak());
//# sourceMappingURL=inheritance.js.map