import deepClone from "./deepClone";

const obj = {a: 123, b: 456};
const regexp = /\s+/;
const arr = [1, 2, 3];
const string = "caico";
const symbol = Symbol("caico");
const func1 = (value: unknown) => console.log(value);
function func2() {
    console.log("function");
}
const set = new Set([1, 2, 3, 4]);
const map = new Map([["name", "caico"], ["age", "234"]]);

const cloneObj = deepClone(obj);
console.log(cloneObj, cloneObj === obj);

const cloneRegexp = deepClone(regexp);
console.log(cloneRegexp, cloneRegexp === regexp);

const cloneArr = deepClone(arr);
console.log(cloneArr, cloneArr === arr);

const cloneString = deepClone(string);
console.log(cloneString, cloneString === string);

const cloneSymbol = deepClone(symbol);
console.log(cloneSymbol, cloneSymbol === symbol);

const cloneFunc1 = deepClone(func1);
console.log(cloneFunc1, cloneFunc1 === func1);

const cloneFunc2 = deepClone(func2);
console.log(cloneFunc2, cloneFunc2 === func2);

const cloneSet = deepClone(set);
console.log(cloneSet, cloneSet === set);

const cloneMap = deepClone(map);
console.log(cloneMap, cloneMap === map);
