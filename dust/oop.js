"use strict";
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            console.log("Can't deposit ");
        else
            console.log("Deposit :", (this._balance += amount));
    }
    get getBalance() {
        return this._balance;
    }
    set setBalance(value) {
        if (value <= 0)
            throw new Error("Invalid Value");
        else
            this._balance = value;
    }
}
const bank_acc = new Account(1, "Black", 3000);
console.log("Instance of Account :", bank_acc instanceof Account);
bank_acc.deposit(4000);
console.log(bank_acc.getBalance);
//# sourceMappingURL=oop.js.map