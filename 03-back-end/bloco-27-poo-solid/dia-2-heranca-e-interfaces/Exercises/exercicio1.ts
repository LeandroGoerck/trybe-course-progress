class PersonX {
  private _name: string;
  private _birthdate: string;

  constructor(name: string, birthdate: string) {
    this._name = '';
    this._birthdate = '';
    this.name = name;
    this.birthdate = birthdate;
  }
  
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if(value.length < 3) throw new Error('Name must have at least 3 characters');
    this._name = value;
  }

  public get birthdate(): string {
    return this._birthdate;
  }
  public set birthdate(value: string) {
    const now = Date.now()
    const personBirthDate = Date.parse(value);
    const calc = (now - personBirthDate);

    if (calc < 0) throw new Error('Date must not be in the future');
    this._birthdate = value;
  }
}

const p1 = new PersonX('Franciela', '1996/10/21');

console.log(new Date().getTime());
console.log(`value: ${31_536_000_000}`);