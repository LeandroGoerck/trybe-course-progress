abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Him I'm ${this._name}. I attack at close range`);
  }

  specialMove(): void {
    console.log(this._specialMoveName);
  }
}

const char1 = new MeeleeCharacter('The Thing', 'Destroy things');

char1.specialMove();