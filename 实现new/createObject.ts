function createObject(Constructor: Function, ...args: any) {
    // 创建新对象
    const obj = Object.create(null);
    // 将obj.__proto__ -> 构造函数原型
    // (不推荐)obj.__proto__ = Constructor.prototype
    Object.setPrototypeOf(obj, Constructor.prototype);
    // 执行构造函数, 并接受构造函数返回值
    const ret = Constructor.apply(obj, args);
    // 若构造函数返回值为对象, 直接返回该对象
    // 否则返回obj
    return typeof(ret) === 'object' ? ret : obj;
}

// test
function Person(this: {name: string; sayHi: () => void}, name: string) {
    this.name = name;
    this.sayHi = function () {
        console.log(`你好啊, ${this.name}`);
    }
}

const person = createObject(Person, "Caico");
console.log(person.name);
person.sayHi();
