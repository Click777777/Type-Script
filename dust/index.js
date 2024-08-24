"use strict";
var _a;
const myName = "jasmin";
const myAge = 22;
const arr = ["harry", 22, "coding"];
const hobby = ["coding", 1, true];
let mySize = "s";
console.log(mySize);
function testFun(para, year = 2002) {
    if (year < 2020)
        return para * 30;
    return para * 40;
}
console.log(testFun(2, 3003));
let info = {
    id: 1,
    name: "lucky",
    gender: "male",
    time: (date) => {
        console.log(date);
    },
};
function calculateAge(para) {
    if (typeof para === "string")
        return parseInt(para) * 3;
    else
        return para * 4;
}
console.log(calculateAge(2));
console.log(calculateAge("2"));
let YouDo = {
    sleep() { },
    code() { },
};
let net = 33;
function yourName(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Unknown");
}
yourName("mygroy");
yourName(undefined);
yourName(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
const logCustomer = getCustomer(1);
console.log("logCustomer is ", logCustomer);
console.log((_a = logCustomer === null || logCustomer === void 0 ? void 0 : logCustomer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
console.log(log === null || log === void 0 ? void 0 : log("a"));
let value = null;
let result = value !== null && value !== void 0 ? value : "i am null";
console.log(result);
let value21;
let result21 = value21 !== null && value21 !== void 0 ? value21 : "i am undefined";
console.log(result21);
let values = 0;
let results = values || "i am zero";
console.log(results);
let score = 0;
let result3 = score !== null && score !== void 0 ? score : 100;
console.log(result3);
let isActive = false;
let result55 = isActive !== null && isActive !== void 0 ? isActive : true;
console.log(result55);
let values88 = "";
let results88 = values88 !== null && values88 !== void 0 ? values88 : "i am empty string";
console.log(results88);
let values99 = NaN;
let results99 = values99 !== null && values99 !== void 0 ? values99 : "i am NaN";
console.log(results99);
function render(document) {
    if (typeof document === "string")
        document.toUpperCase();
}
function processFun() {
    while (true) { }
}
//# sourceMappingURL=index.js.map