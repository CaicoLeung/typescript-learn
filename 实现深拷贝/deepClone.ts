const getType = (obj: Object) => Object.prototype.toString.call(obj);

const isObject = (target: unknown) => (typeof(target) === 'object' || typeof(target) === 'function') && target !== null;

const canTraverse: Record<string, boolean> = {
    '[object Map]': true,
    '[object Set]': true,
    '[object Array]': true,
    '[object Object]': true,
    '[object Arguments]': true,
}

const mapTag = '[object Map]';
const setTag = '[object Set]';
const boolTag = '[object Boolean]';
const stringTag = '[object String]';
const regexpTag = '[object RegExp]';
const numberTag = '[object Number]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const funcTag = '[object Function]';
const symbolTag = '[object Symbol]';

const handleRegExp = (target: RegExp) => {
    const {source, flags} = target;
    // @ts-ignore
    return new target.constructor(source, flags);
}

const hanleFunc = (func: Function) => {
    // 箭头函数返回自身
    if (!func.prototype) {
        return func
    }
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramsReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    // 分别匹配 函数参数 和 函数体
    const param = paramsReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (!body) return null
    if (param) {
        const paramArr = param[0].split(',');
        return new Function(...paramArr, body[0]);
    } else {
        return new Function(body[0]);
    }
}

const handleNotTraverse = (target: unknown, tag: string) => {
    const Ctor = (target as Error | Date).constructor;
    switch (tag) {
        case boolTag:
            return new Object(Boolean.prototype.valueOf.call(target));
        case numberTag:
            return new Object(Number.prototype.valueOf.call(target));
        case stringTag:
            return new Object(String.prototype.valueOf.call(target));
        case symbolTag:
            return new Object(Symbol.prototype.valueOf.call(target));
        case errorTag:
        case dateTag:
            // @ts-ignore
            return new Ctor(target);
        case regexpTag:
            return handleRegExp(target as RegExp);
        case funcTag:
            return hanleFunc(target as Function);
        default:
            // @ts-ignore
            return new Ctor(target);
    }
}

type UnkownMap = Map<unknown, unknown>;

export default function deepClone<T = unknown>(target: T, map = new WeakMap<object, boolean>()): T {
    if (!isObject(target)) {
        return target
    }
    let type = getType(target);
    let cloneTarget: T;
    if (!canTraverse[type]) {
        // 处理不能遍历对象
        return handleNotTraverse(target, type);
    } else {
        // 这波操作相当关键，可以保证对象的原型不丢失！
        let ctor = (target as Object).constructor;
        // @ts-ignore
        cloneTarget = new ctor();
    }
    if (map.get(target as Object)){
        return target;
    }
    map.set(target as Object, true);
    if (type === mapTag) {
        (target as unknown as UnkownMap).forEach((item, key) => (cloneTarget as unknown as UnkownMap).set(deepClone(key, map), deepClone(item, map)));
    }
    if (type === setTag) {
        (target as unknown as Set<unknown>).forEach(item => (cloneTarget as unknown as Set<unknown>).add(deepClone(item, map)));
    }
    // 处理数组和对象
    for (let prop in target) {
        if ((target as unknown as Object).hasOwnProperty(prop)) {
            (cloneTarget as unknown as Record<keyof T, unknown>)[prop] = deepClone(target[prop], map);
        }
    }
    return cloneTarget;
}
