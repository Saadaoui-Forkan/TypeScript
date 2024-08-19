"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = 0;
        this.owner = "";
        this.balance = 0;
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount can't be less than 1");
        }
        this.balance = this.balance + amount;
    }
}
let myAccount = new Account(1, "Mahmoud", 10);
myAccount.deposit(-20);
console.log(myAccount);
