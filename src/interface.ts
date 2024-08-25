interface Personi {
  name: string;
  // method implementatin
  // speak():string{
  //     return "hello"
  // }
  speak(): string; // Method signature, no implementation
}

class PersoniImpl implements Personi {
  name: string;
  constructor(nameValue: string) {
    this.name = nameValue;
  }
  speak(): string {
    return "i am speaking";
  }
}

const impliPerson = new PersoniImpl("goney");
console.log(impliPerson.speak());
