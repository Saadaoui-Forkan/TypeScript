class Account {
    /* Properties */
    readonly id: number;
    owner: string;
    private balance: number;
    username?:string;

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
    getBalance (): number {
        return this.balance
    }
}

let myAccount = new Account(1, "Mahmoud", 10)
myAccount.deposit(10)
const myBalance = myAccount.getBalance()
console.log(myBalance)