class Hero {
  name: string = '';
  power:Array<string> = [];
  age: number = 0;

  constructor(name: string) {
    this.name = name;
  }
}

const hero1: Hero = new Hero('Thor');
const hero2: Hero = new Hero('Batman');

console.log(hero1.name);
