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

### `any` Type in TypeScript
The any type is a special type that can represent any value, regardless of its type.

``let variable: any;

variable = 5;          // OK
variable = "hello";    // OK
variable = true;       // OK``

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

* Array of any Type
```
const any: any[] = ["abc", 1, true]
any.push("Mahmoud) 
any.push(5) 
```