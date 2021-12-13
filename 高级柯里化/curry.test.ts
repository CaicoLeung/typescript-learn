import curry from "./curry";

function sum(a: number, b: number, c: number) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1)(2, 3));
