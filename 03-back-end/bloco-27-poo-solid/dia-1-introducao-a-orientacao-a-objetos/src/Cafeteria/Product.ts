class Product {
  private _name: string = '';
  private _price: number = 99999;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if(value.length < 3) throw new Error('Name must have at least 3 characters!')
    this._name = value;
  }

  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
}


const product1 = new Product('Batatas fritas', 9.5); 
const product2 = new Product('Açaí', 10.5);
const product3 = new Product('Açaa', 10.5);


console.log(product1);