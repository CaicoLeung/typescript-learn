const keys: KeyOfPerson = 'age' || 'name' || 'sex';
const arrKreys: KeyOfArray = 'concat' || 'every';

const caico: Person = { name: 'caico', age: 25, sex: 'men' }
type TypeofCaico = typeof caico;
function foo(x: number) { return [x] }
type TypeofFoo = typeof foo;