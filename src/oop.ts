class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  deposit(amount: number) {
    if (amount <= 0) console.log("Can't deposit ");
    else console.log("Deposit :", (this._balance += amount));
  }

  //   get_balance() {
  //     console.log("Balance :", this.balance);
  //   }

  get getBalance(): number {
    return this._balance;
  }

  set setBalance(value: number) {
    if (value <= 0) throw new Error("Invalid Value");
    else this._balance = value;
  }
}

const bank_acc = new Account(1, "Black", 3000);
console.log("Instance of Account :", bank_acc instanceof Account);
bank_acc.deposit(4000);
// bank_acc.get_balance();
console.log(bank_acc.getBalance);
