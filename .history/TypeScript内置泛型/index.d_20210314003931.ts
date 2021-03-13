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
