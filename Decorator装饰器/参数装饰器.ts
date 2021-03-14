/*
参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
  1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2. 成员的名字。
  3. 参数在函数参数列表中的索引。
*/
const requiredMetadataKey = Symbol("required");
const requiredMap = new Map();

function strNum(constructor: Test2, key: string, index: number) {
  const existingRequiredParameters: number[] = requiredMap.get(requiredMetadataKey) || []
  existingRequiredParameters.push(index)
  requiredMap.set(requiredMetadataKey, existingRequiredParameters)
}

function validate(constructor: any, key: string, descriptor: TypedPropertyDescriptor<(name: any) => any>) {
  const originMethod = descriptor.value
  descriptor.configurable = true
  descriptor.value = function () {
    const existingRequiredParameters = requiredMap.get(requiredMetadataKey)
    for (const index of existingRequiredParameters) {
      if (typeof arguments[index] !== 'string') {
        throw TypeError('参数必须是String类似')
      } else if (Number.isNaN(+arguments[index])) {
        throw TypeError('参数不能正确转换成Number类型')
      }
    }
    return originMethod!.apply<any, any, string>(this, arguments)
  }
}

class Test2 {
  @validate
  sayHi(@strNum name: any) {
    return 'hi~' + name
  }
}

const test2 = new Test2()
console.log(test2.sayHi('111')); // hi~111
console.log(test2.sayHi('caico')) // TypeError: 参数不能正确转换成Number类型