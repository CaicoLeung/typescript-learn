/*
方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2.成员的名字。
  3.成员的属性描述符。
 */
function enumerable(value: boolean) {
  return function (constructor: Greeter, propertyKeys: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

function log(constructor: Greeter, propertyKeys: string) {
  console.log(`${propertyKeys} is running`);
}


class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @log
  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

const greeter = new Greeter('caico')
console.log(greeter.greet());
