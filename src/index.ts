class Account {
    /* Properties */
    id: number = 0;
    owner: string = "";
    balance: number = 0;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    /* Method */
    deposit(amount: number): void {
        if (amount <=0) {
            throw new Error("Amount can't be less than 1")
        }
        this.balance = this.balance + amount
    }
}

let myAccount = new Account(1, "Mahmoud", 10)
myAccount.deposit(20)
console.log(myAccount)