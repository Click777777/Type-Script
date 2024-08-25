"use strict";
class PersoniImpl {
    constructor(nameValue) {
        this.name = nameValue;
    }
    speak() {
        return "i am speaking";
    }
}
const impliPerson = new PersoniImpl("goney");
console.log(impliPerson.speak());
//# sourceMappingURL=interface.js.map