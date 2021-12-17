export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretshu: Mojiretsu = 'Hello';

const example1 = {
  name: 'yasu',
  age: 25,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'yasu',
  age: 25,
};

type Profile2 = typeof example1;
