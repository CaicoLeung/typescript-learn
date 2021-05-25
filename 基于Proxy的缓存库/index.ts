type TargetFun<V> = (...argv: any[]) => V

function memoize<V>(fn: TargetFun<V>) {
  return new Proxy(fn, {
    // @ts-ignore
    cache: new Map<string, V>(),
    apply(this: any, target, thisArg, argArray) {
      // 根据数据参数直接生成 Map 的 key
      const cacheKey = argArray.join()
      // 当前没有被缓存，执行调用，添加缓存
      if (!this.cache.has(cacheKey)) {
        const result = target.apply(thisArg, argArray)
        let resultAsync: Promise<V> | null = null;
        // 如果是异步函数
        if (fn?.constructor.name === 'AsyncFunction' || fn instanceof Promise) {
          resultAsync = Promise.resolve(result).catch(err => {
            // 发生错误，删除当前 promise，否则会引发二次错误
            // 由于异步，所以当前 delete 调用一定在 set 之后，
            this.cache.delete(cacheKey)
            // 把错误衍生出去
            return Promise.reject(err)
          })
        }

        this.cache.set(cacheKey, resultAsync || result)
      }
      // 返回被缓存的数据
      return this.cache.get(cacheKey)
    }
  })
}

const fibonacci = (n: number): number => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
const memoizedFibonacci = memoize<number>(fibonacci);

console.time('测试fibonacci')
for (let i = 0; i < 100; i++) fibonacci(30); // ~893.617ms
console.timeEnd('测试fibonacci')

console.time('测试memoizedFibonacci')
for (let i = 0; i < 100; i++) memoizedFibonacci(30); // ~9.683ms
console.timeEnd('测试memoizedFibonacci')
