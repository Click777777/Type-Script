// String , Number
const myName: string = "jasmin";
const myAge: number = 22;

// Array , Tuple
const arr: (string | number)[] = ["harry", 22, "coding"];
const hobby: [string, number, boolean] = ["coding", 1, true];

// enum
const enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}
let mySize: Size = Size.Small;
console.log(mySize);

// function
function testFun(para: number, year = 2002): number {
  if (year < 2020) return para * 30;
  return para * 40;
  //undefined
}
console.log(testFun(2, 3003));

// type alias
type Info = {
  readonly id: number;
  name: string;
  gender: string;
  time: (date: Date) => void;
};

// object
let info: Info = {
  id: 1,
  name: "lucky",
  gender: "male",
  time: (date) => {
    console.log(date);
  },
};

// type union
function calculateAge(para: string | number): number {
  if (typeof para === "string") return parseInt(para) * 3;
  else return para * 4;
}
console.log(calculateAge(2));
console.log(calculateAge("2"));

// intersection types
type Sleep = {
  sleep: () => void;
};
type Code = {
  code: () => void;
};
type Do = Sleep & Code;

let YouDo: Do = {
  sleep() {},
  code() {},
};

// literal types
type Net = 33 | 11; // string can be use
let net: Net = 33;

// nullable types
function yourName(name: null | undefined | string) {
  // narrowing
  if (name) console.log(name.toUpperCase());
  else console.log("Unknown");
}
yourName("mygroy");
yourName(undefined);
yourName(null);

// optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
const logCustomer = getCustomer(1);
console.log("logCustomer is ", logCustomer);
// if (logCustomer !== null && logCustomer !== undefined)
//   console.log(logCustomer.birthday);

// optional property access operator
console.log(logCustomer?.birthday?.getFullYear());

// optional element access operator
// if (logCustomer !== null && logCustomer !== undefined)
// logCustomer?[0]

// optional call
let log: any = null;
console.log(log?.("a"));

// nullish coalescing operator
// "falsy" values (0, false, NaN, "") the same way it treats null or undefined.
let value = null;
let result = value ?? "i am null";
console.log(result);

let value21;
let result21 = value21 ?? "i am undefined";
console.log(result21);

let values = 0;
let results = values || "i am zero";
console.log(results);

let score = 0;
let result3 = score ?? 100;
console.log(result3); // Output: 0

let isActive = false;
let result55 = isActive ?? true;
console.log(result55); // Output: false

let values88 = "";
let results88 = values88 ?? "i am empty string";
console.log(results88);

let values99 = NaN;
let results99 = values99 ?? "i am NaN";
console.log(results99);

// type assertion
// const getWithId=document.getElementById("id") as HTMLElement
// const getWithId = <HTMLElement>document.getElementById("id");
// getWithId.innerHTML = "hello";

// unknown type
function render(document: unknown) {
  // document.hero() // by using unknown type so we can't call undefined method in document
  if (typeof document === "string") document.toUpperCase();
}

// never type
function processFun(): never {
  while (true) {}
}
// processFun();
// console.log("first");
