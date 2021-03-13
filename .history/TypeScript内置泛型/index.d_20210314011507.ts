/* 关键字 */

/* extends
* 可以用来继承一个class,interface,还可以用来判断有条件类型
*/
type Words = 'a' | 'b' | 'c';
type inWords<T> = T extends Words ? true : false;
type WordA = inWords<'a'> // true
type WordD = inWords<'d'> // false

/* infer
*  表示在extends条件语句中待推断得类型变量
 */
// 如果泛型参数T满足约束条件Array 那么就返回这个类型变量U
type Union<T> = T extends Array<infer U> ? U : never;
// 栗子:
type ParamType<T> = T extends (params: infer P) => void ? P : T;
type Func = (dog: Dog) => void;
type Param = ParamType<Func>; // Dog
type TypeString = ParamType<string>; // string
type TypeBoolean = ParamType<boolean>; // boolean

/* keyod
* keyof 可以用来取得一个对象接口的所有 key 值：
 */
type KeyOfPerson = keyof Person; // "name" | "age" | "sex"
type KeyOfArray = keyof Person[]; // "length" | "push" | "pop"  ...
type keyOfObj = keyof { [x: string]: Person }; // string | number

/* typeof
* 在 JS 中 typeof 可以判断数据类型，在 TS 中，它还有一个作用，就是获取一个变量的声明类型，如果不存在，则获取该类型的推论类型。
*/

/* 内置帮助类型 */

/* Partial
* 让T中的所有属性都是可选的.在某些情况下，我们希望类型中的所有属性都不是必需的，只有在某些条件下才存在，
* 我们就可以使用Partial来将已声明的类型中的所有属性标识为可选的。
*/
type PartialDog = Partial<Dog>;
/* 等价于
type PartialDog = {
 age?: number;
 name?: string;
} */

/* Required
* Required 的作用刚好跟 Partial 相反，Partial 是将所有属性改成可选项，Required 则是将所有类型改成必选项：
*/
type RequiredPerson = Required<Person>;
/* 等价于
type RequiredPerson = {
 age: number;
 name: string;
 sex: string;
} */

/* Readonly
* 给子属性添加 readonly 的标识
*/
type ReadonlyDog = Readonly<Dog>;
/* 等价于
type ReadonlyDog = {
 readonly age: number;
 readonly name: string;
} */

/* Pick
* 从T中，选择一组键在并集K中的属性
*/
type PickPerson = Pick<Person, 'name' | 'sex'>;

/* Exclude
* 与Pick相反，Pick用于拣选出我们需要关心的属性，而Exclude用于排除掉我们不需要关心的属性
*/
type ExcludePerson = Exclude<KeyOfPerson, 'age' | 'sex'>; // 'name'

/* Record
* 构造一个具有一组属性K(类型T)的类型
*/

/* Extract
* Extract 的作用是提取出 T 包含在 U 中的元素，换种更加贴近语义的说法就是从 T 中提取出 U
*/
type ExtractDagPerson = Extract<Dog, Person>;
type ExtractWords = Extract<'a' | 'b' | 'c', 'a' | 'd' | 'e'>; // a

/* Omit
* 在上一个用法中，我们使用Exclude来排除掉其他不需要的属性，但是在上述示例中的写法耦合度较高，当有其他类型也需要这样处理时，
* 就必须再实现一遍相同的逻辑，使用Omit可以避免这些问题，老版本ts未内置，TypeScript 3.5已经内置：
*/
type OmitPerson = Omit<Person, 'age'>;

/* NonNullable
* 这个类型可以用来过滤类型中的 null 及 undefined 类型。
*/
type NonNullableTest = NonNullable<Test>; // string | number

/* Parameters
* 该类型可以获得函数的参数类型组成的元组类型。
*/

/* ConstructorParameters
* 该类型的作用是获得类的参数类型组成的元组类型
*/

/* ReturnType
* 该类型的作用是获取函数的返回类型。
*/