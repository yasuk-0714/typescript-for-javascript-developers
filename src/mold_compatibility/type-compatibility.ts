
export {};

let fooCompatible: any;
let barcompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barcompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1996 = 1996;
fooNumber = fooNumberLiteral;


interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(25, 'kenta');
