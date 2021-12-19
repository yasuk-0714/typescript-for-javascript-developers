export {};

class Mahotukai {}
class Souryo {}

class Taro extends Mahotukai {}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();