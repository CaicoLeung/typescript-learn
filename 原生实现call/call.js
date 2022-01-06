Function.prototype._call = function (context) {
  const args = [...arguments].slice(1);
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

function test(age) {
  return `Hi ${this.name}! you are ${age} old`;
}

const man = {
  name: "caico",
}

console.log(test._call(man, 12));