export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('yasu');
console.log(me.name);

const osaka = new Japanese.Osaka.Person('関西人');
console.log(osaka.name);

const michel = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michel);
