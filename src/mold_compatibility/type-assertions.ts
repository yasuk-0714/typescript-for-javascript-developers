export {};

let name: any = 'yasu';

// let length = name.length;
// length = '再代入が可能'

// let length: number = name.length;

let length = name.length as number;

let length2 = (name as string).length;
console.log(length2)
