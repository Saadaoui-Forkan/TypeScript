class Account {
    username?: string;
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
    // getBalance (): number {
    //     return this._balance
    // }

    /* Getter */
    get balance(): number {
        return this._balance
    }

    /* Setter */
    set balance(value: number) {
        if (value <=0) {
            throw new Error("Amount can't be less than 1")
        }
        this._balance = value
    }
}

let myAccount = new Account(1, "Mahmoud", 10)
myAccount.balance = 20
console.log(myAccount)