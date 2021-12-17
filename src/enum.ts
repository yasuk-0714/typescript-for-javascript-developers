export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let red = COLORS.RED;
console.log(red);

enum COLORS {
  YELLOW = '#FFFF00',
}
console.log(COLORS.YELLOW);
