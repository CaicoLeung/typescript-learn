function Instanceof(left: Object, right: Function) {
  let proto = Object.getPrototypeOf(left);
  const prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

export default Instanceof;
