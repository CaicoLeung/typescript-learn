/*
类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
*/

function Freeze(constructor: Function) {
  Object.freeze(constructor)
  Object.freeze(constructor.prototype)
}

function ClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'new property'
  }
}


@Freeze
@ClassDecorator
class Person {
  name: string;
  age = 25;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('caico')
person.age = 123
console.log(person);
