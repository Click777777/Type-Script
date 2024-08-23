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
