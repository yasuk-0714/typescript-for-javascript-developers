export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let card = new VisaCard('やす');
console.log(card.owner);
