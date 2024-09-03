/**
 * Class Type Annotations
*/
class User {
  name: string;
  age: number;
  email: string;
  msg: () => string;
  constructor(name: string, age: number, email: string) {
    this.name = name
    this.age = age;
    this.email = email;
    this.msg = function () {
      return `Hello! I am ${this.name} and I have ${this.age} years.`
    }
  }
  getMail = () => {
    return `${this.name} mail is: ${this.email}`;
  };
}

const userOne = new User ("Mahmoud", 35, "mahmoud@mail.com")
console.log(userOne)
console.log(userOne.getMail())
console.log(userOne.msg())

/**
 * Class Access Modifiers
*/
class Person {
  msg: () => string;
  constructor(private username: string, protected salary: number,public readonly address: string) {
    this.msg = function () {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}

let personOne = new Person("Elzero", 6000, "Cairo");

// console.log(userOne.username);
// console.log(userOne.salary);
console.log(personOne.msg());
console.log(personOne.sayMsg());

/**
 * Get & Set Accessors
*/
class Users {
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  msg: () => string;
  constructor(private _username: string, public salary: number, public readonly address: string) {
    this.msg = function () {
      return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this._username} Your Salary Is ${this.salary}`;
  }
  // get username() : string {
  //   return this._username;
  // }
  // set username(value: string) {
  //   this._username = value;
  // }
}

let usersOne = new Users("Elzero", 6000, "Cairo");

console.log(usersOne.username);
usersOne.username = "Ahmed";
console.log(usersOne.username);
console.log(usersOne.salary);
console.log(usersOne.msg());
console.log(usersOne.sayMsg());

/**
 * Class Static Members
 * *** Don't Use "name, length, call"
*/
class Car {
  private static created: number = 0;
  static getCount(): void {
    console.log(`${this.created} Objects Created`)
  }
  constructor(public model: string) {
    Car.created ++
  }
}

let c1 = new Car("Peugeot");
let c2 = new Car("Toyota");
let c3 = new Car("Renault");
Car.getCount()

/**
 * Class Implement Interface
*/
interface Settings {
  theme: boolean;
  brand: string;
  save(): void;
}

class Product implements Settings {
  constructor(public name: string, public theme: boolean, public brand: string) {}
  save(): void {
    console.log(`saved`)
  }
  update(): void {
    console.log(`updated`)
  }
}

let productOne = new Product("Laptop", true, "Asus")
console.log(productOne.name)
console.log(productOne.brand)

productOne.save()
productOne.update()

/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime() : void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Pizza Is 1 Hour`);
  }
}

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Burger Is Half Hour`);
  }
}

let pizzaOne = new Pizza("Awesome Pizza", 100);

console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();