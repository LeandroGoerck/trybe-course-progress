class Customer {
  private _name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if(value.length < 3) throw new Error('Name must have at least 3 characters!')
    this._name = value;
  }
}

const customer1 = new Customer('Leandro');

console.log(customer1);