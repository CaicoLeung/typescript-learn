Array.prototype._filter = function (fn) {
  const res = [];
  const arr = this
  for (let i = 0; i < arr.length; i++) {
    const flag = fn.call(null, arr[i], i, arr);
    if (flag) res.push(arr[i]);
  }
  return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const res = arr._filter((item) => item % 2 === 0);

console.log(res);