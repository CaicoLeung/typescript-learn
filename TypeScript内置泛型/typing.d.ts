interface Dog {
  name: string;
  age: number;
  color?: string;
}

interface Person {
  name: string;
  age: number;
  sex?: string;
}

type Test = string | number | null;
