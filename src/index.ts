/**
 * Interface Declaration
*/
interface User {
  id?: number,
  readonly username: string,
  country: string
}

let userDetails: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt"
}

userDetails.country = "Syria";

console.log(userDetails);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Osama", country: "KSA" });

/**
 * Interface Method & Parameter
*/
interface Car {
  id: number;
  owner: string;
  owner_country: string;
  sayHello() : string;
  sayWelcome: () => string;
  getDouble(num: number) : number;
}

let user: Car = {
  id: 100,
  owner: "Elzero",
  owner_country: "Egypt",
  sayHello() {
    return `Hello ${this.owner}`;
  },
  sayWelcome: () => {
    return `Welcome ${user.owner}`;
  },
  getDouble(n) {
    return n * 2;
  }
}

console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));

/**
 * Interface ReOpen And Use Cases
*/

// Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
interface Settings {
  sidebar: boolean;
}

// Contact Page
interface Settings {
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}

/**
 * Interface Extend
*/
interface Person {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends Person, Moderator {
  protect?: boolean;
}

let person: Admin = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  role: "Mod",
  protect: true
}

console.log(person.id);

/**
 * Interface Final Discussion
*/
let el = document.getElementById("id") as HTMLElement;

// Homepage
type Setting = {
  readonly theme: boolean;
  font: string;
  sidebar: boolean;
  external: boolean;
}

let userSetting: Setting = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}