/* extends */
type Words = 'a' | 'b' | 'c';

type inWords<T> = T extends Words ? true : false;

type WordA = inWords<'a'>
type WordD = inWords<'d'>