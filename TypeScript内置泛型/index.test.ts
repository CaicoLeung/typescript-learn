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

const extractDagPerson: ExtractDagPerson = { name: 'kk', age: 2 }

function test(a: string, b: number, c: boolean) { return false }
const parameters: Parameters<typeof test> = ['ddd', 2, false]; // [a: string, b: number, c: boolean]
const returnType: ReturnType<typeof test> = false;

const men: ThisType<Person> = {
  asyHi() {
    return `hi~${this.name}`
  }
}