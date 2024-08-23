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
//# sourceMappingURL=index.js.map