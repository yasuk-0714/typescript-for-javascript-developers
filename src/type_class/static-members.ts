export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'kenta';
  static lastName: string = 'yasuhara';

  static work() {
    return `Hey, guys! This is ${this.firstName}! Are you intezrested in TypeScript?`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());
