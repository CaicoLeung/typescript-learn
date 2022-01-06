import Instanceof from "./instanceof";

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    return `Hi, I am ${this.name}, ${this.age} years old now`;
  }
}

const self = new Person("caico", 15);

const caico = {
  name: "caico",
  age: 11
}

console.log(Instanceof(self, Person));
console.log(Instanceof(caico, Person));
