/*
属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2.成员的名字。
*/
function Readonly(constructor: Test, key: string) {
  Object.defineProperty(constructor, key, { writable: false })
}

class Test {
  @Readonly
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  setGreet() {
    this.greeting = 'caico'
  }
}

const text = new Test('lenug')
console.log(text); // TypeError: Cannot assign to read only property 'greeting' of object '#<Test>'
