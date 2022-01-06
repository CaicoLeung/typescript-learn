Function.prototype._bind = function (context) {
  const fn = this;
  const args = [...arguments].slice(1);
  return function Fn() {
    return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
  }
}

function test(age) {
  return `Hi ${this.name}! you are ${age} old`;
}

const man = {
  name: "caico",
}

const newText = test._bind(man);

console.log(newText(20))