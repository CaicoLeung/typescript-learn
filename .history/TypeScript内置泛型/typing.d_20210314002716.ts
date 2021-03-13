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
interface Dog {
  name: string;
  age: number;
}
type Func = (dog: Dog) => void;
type Param = ParamType<Func>; // Dog
type TypeString = ParamType<string>; // string
type TypeBoolean = ParamType<boolean>; // string