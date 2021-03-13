const keys: KeyOfPerson = 'age' || 'name' || 'sex';
const arrKreys: KeyOfArray = 'concat' || 'every';

const caico: Person = { name: 'caico', age: 25, sex: 'men' }
type TypeofCaico = typeof caico;
function foo(x: number) { return [x] }
type TypeofFoo = typeof foo;

const readonlyDog: ReadonlyDog = { name: 'jack', age: 5 }
readonlyDog.age = 6 // 无法分配到 "age" ，因为它是只读属性。ts(2540)

const pickPerson: PickPerson = { name: 'mm', sex: 'woman' }

const excludePerson: ExcludePerson = 'name';