export {};

// この二つを共通化したい
// const echo = (arg: number): number => {
  // return arg;
// }
// 
// const echo = (arg: string): string => {
  // return arg;
// }

const echo = <T>(arg: T): T => {
  return arg;
}

console.log(echo<number>(100))
console.log(echo<string>('wasshoi!'))
console.log(echo<boolean>(true))


class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo())
console.log(new Mirror<string>('string型です').echo())
console.log(new Mirror<boolean>(false).echo())