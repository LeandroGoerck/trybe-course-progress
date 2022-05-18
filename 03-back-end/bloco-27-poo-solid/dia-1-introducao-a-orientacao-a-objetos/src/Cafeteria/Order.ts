class Order {
  private _customer: Customer;
  private _consumedItems: Product[] = [];
  private _paymentMethod: 'creditCard' | 'money';
  private _discountPercent: number = 0;

  
  constructor(customer: Customer, items: Product[], method: 'creditCard' | 'money', discount: number) {
    this._customer = customer;
    this.consumedItems = items;
    this._paymentMethod = method;
    this._discountPercent = discount;
  }

  public get customer(): Customer {
    return this._customer;
  }
  public set customer(value: Customer) {
    this._customer = value;
  }

  public get consumedItems(): Product[] {
    return this._consumedItems;
  }
  public set consumedItems(value: Product[]) {
    this._consumedItems = value;
  }

  public get paymentMethod(): 'creditCard' | 'money' {
    return this._paymentMethod;
  }
  public set paymentMethod(value: 'creditCard' | 'money') {
    this._paymentMethod = value;
  }

  public get discountPercent(): number {
    return this._discountPercent;
  }
  public set discountPercent(value: number) {
    this._discountPercent = value;
  }

  calculateTotal() {
    return [...this._consumedItems]
    .reduce((previousItem, value) => {
      value += previousItem.price;
      return value;
    }, 0)
  }
}