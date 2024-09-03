"use strict";
class User {
    constructor(name, age, email) {
        this.getMail = () => {
            return `${this.name} mail is: ${this.email}`;
        };
        this.name = name;
        this.age = age;
        this.email = email;
        this.msg = function () {
            return `Hello! I am ${this.name} and I have ${this.age} years.`;
        };
    }
}
const userOne = new User("Mahmoud", 35, "mahmoud@mail.com");
console.log(userOne);
console.log(userOne.getMail());
console.log(userOne.msg());
class Person {
    constructor(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this.username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
let personOne = new Person("Elzero", 6000, "Cairo");
console.log(personOne.msg());
console.log(personOne.sayMsg());
class Users {
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    constructor(_username, salary, address) {
        this._username = _username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this._username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
}
let usersOne = new Users("Elzero", 6000, "Cairo");
console.log(usersOne.username);
usersOne.username = "Ahmed";
console.log(usersOne.username);
console.log(usersOne.salary);
console.log(usersOne.msg());
console.log(usersOne.sayMsg());
class Car {
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(model) {
        this.model = model;
        Car.created++;
    }
}
Car.created = 0;
let c1 = new Car("Peugeot");
let c2 = new Car("Toyota");
let c3 = new Car("Renault");
Car.getCount();
class Product {
    constructor(name, theme, brand) {
        this.name = name;
        this.theme = theme;
        this.brand = brand;
    }
    save() {
        console.log(`saved`);
    }
    update() {
        console.log(`updated`);
    }
}
let productOne = new Product("Laptop", true, "Asus");
console.log(productOne.name);
console.log(productOne.brand);
productOne.save();
productOne.update();
