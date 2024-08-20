"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount can't be less than 1");
        }
        this._balance = this._balance + amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0) {
            throw new Error("Amount can't be less than 1");
        }
        this._balance = value;
    }
}
let myAccount = new Account(1, "Mahmoud", 10);
myAccount.balance = 20;
console.log(myAccount);
