export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let me = new MyNumberCard('やす', 123123123);
console.log(me.owner());
console.log(me.debugPrint());
me.secretNumber = 123456789;
console.log(me.debugPrint());
console.log(me.secretNumber);
