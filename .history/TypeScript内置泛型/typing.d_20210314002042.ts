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