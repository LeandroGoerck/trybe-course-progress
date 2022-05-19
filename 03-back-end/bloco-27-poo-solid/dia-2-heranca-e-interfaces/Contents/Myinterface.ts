interface MyInterface {
  myNumber: number;
  test: number;
  myFunc(myParam: number): string ;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number, public test: number) {
    this.myNumber = myNumber;
    this.test = test;
    console.log(this);
  }
  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`
  }
}

const classNumber1 = new MyClass(55, 1);

classNumber1.myFunc(123);
console.log(classNumber1.myNumber);