# TypeScript Course
### Introduction:
* Is a strongly typed programming language that builds on javascript.
* Developed and maintained by Microsoft.
* Is javascript with types.
* Add features to javascript without changing it.

### Why we need TypeScript
* Detect errors without running the code.
* Analyze the code as you type.
* Save some unit tests as the error show while writing.
* Every JS file is TS file.
* Will help you when you write React.
* Gives you the missing features in JS like "Interfaces, Generics, Decorators".

### How TypeScript works:
* TypeScript compiler compile TS code into javascript code "This called Transpilation"

### Installation
```
    npm i -g typescript
    tsc --init
```

### Statically vs Dynamically Typed Languages
```
Statically Typed Language Like [Rust, C, C++]
    - Variables Types Are Static, Once You Declare It You Cannot Change
    - Type Of A Variable Is Known At Compile Time "Do Type Checking At Compile-Time"
    --- Have Better Performance At Run-Time Due To Not Needing To Check Types Dynamically
    - Error Detected Earlier

Dynamically Typed Language Like [PHP, Python, JavaScript]
    - Variables Types Are Dynamic, You Can Always Change It
    - "Type Checking At Execution-Time"
    - Error Can Be Detected After Execution
```

###  Type:`any` in TypeScript
The any type is a special type that can represent any value, regardless of its type.

```
let variable: any;

variable = 5;          // OK
variable = "hello";    // OK
variable = true;       // OK
```

### Arrays in TypeScript
Arrays in TypeScript can be of various types. Here are a few examples:
* Array of Numbers
```
const numbers: number[] = [1, 2, 3]
numbers.push(5)
numbers.push("Mahmoud) //Error
```

* Array of Strings
```
const strings: string[] = ["abc", "def", "ghi"]
strings.push("Mahmoud) 
strings.push(5) //Error
```

* Type Annotations With Multi-Dimensional Array
```
let arrOne: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];
let arrTwo: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];
```

* Array of any Type
```
const any: any[] = ["abc", 1, true]
any.push("Mahmoud) 
any.push(5) 
```

### tuple in TypeScript
array with fix type & length
 ```
 const vars: [number, string] = [1, "Mahmoud"]        // OK
 const vars: [number, string] = [true, "Mahmoud"]     // Error
 const vars: [number, string] = [1, "Mahmoud", false] // Error
 ```

### Void And Never
- Void
  1. Function That Will Return Nothing
  2. Function In JavaScript That Not Return A Value Will Show undefined
  3. undefined is not void

- Never
  1. Return Type Never Returns
  2. The Function Doesn't Have A Normal Completion
  3. It Throws An Error Or Never Finishes Running At All "Infinite Loop"

### Type `enum` in TypeScript
In TypeScript, an enum (short for "enumeration") is a special data structure that allows you to define a set of named constants, which can be either numeric or string-based. Enums are useful for creating a collection of related values that can be used more descriptively in your code.
* Numeric Enums
```
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

let move: Direction = Direction.Up;
console.log(move);  // Output: 0
```

* String Enums
```
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let move: Direction = Direction.Right;
console.log(move);  // Output: "RIGHT"
```

### Type Annotations With Functions
- noImplicitAny

- noImplicitReturns
--- Will Check All Code Paths In A Function To Ensure They Return A Value

- noUnusedLocals
--- Report Errors On Unused Local Variables

- noUnusedParameters
--- Report Errors On Unused Parameters In Functions.

### Interface
```
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
```

### Access Modifiers in TypeScript
1. Public
2. Private
3. Protected

`readonly` can't be changed
`?` optional parameter
`+true` ===> 1
`instanceof` return a boolean value

```
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public (default)
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"

```
*********
```
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
}

let myAccount = new Account(1, "Mahmoud", 10)
myAccount.balance = 200  //Error: Property 'balance' is private and only accessible within class 'Account'
```

