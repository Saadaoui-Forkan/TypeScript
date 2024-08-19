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

