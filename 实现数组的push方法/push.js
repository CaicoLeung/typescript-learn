Array.prototype._push = function () {
  for (let index = 0; index < arguments.length; index++) {
    this[this.length] = arguments[index];
  }
  return this.length;
}

const arr = [1, 2, 3]
const len = arr._push(4, 5, 6);
console.log(len, arr);