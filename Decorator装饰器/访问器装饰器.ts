/*
访问器装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。
3. 成员的属性描述符。
 */

function configurable(value: boolean) {
  return function (constructor: Point, key: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value
  }
}

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() { return this._x; }

  @configurable(false)
  get y() { return this._y; }
}