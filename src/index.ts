class Account {
    /* Properties */
    // readonly id: number;
    // owner: string;
    // private balance: number;
    // username?:string;

    // constructor(id: number, owner: string, balance: number) {
    //     this.id = id;
    //     this.owner = owner;
    //     this.balance = balance;
    // }

    username?:string;
    /* Parameter Properties */
    constructor(public readonly id: number, public owner: string, private _balance: number) {

    }

    /* Method */
    deposit(amount: number): void {
        if (amount <=0) {
            throw new Error("Amount can't be less than 1")
        }
        this._balance = this._balance + amount
    }
    getBalance (): number {
        return this._balance
    }
}

let myAccount = new Account(1, "Mahmoud", 10)
myAccount.deposit(10)
const myBalance = myAccount.getBalance()
console.log(myBalance)