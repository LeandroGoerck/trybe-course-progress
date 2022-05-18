class Superclass {
  isSuper: boolean ;

  constructor() {
    this.isSuper = true;
  }

  public sayHello() {
    console.log('Hello World!')
  }
}

class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false;
  }
}

function myFunc(superClass: Superclass) {
  superClass.sayHello();
  console.log(superClass.isSuper ? 'Super!' : 'Sub!');
}

const superClassObject = new Superclass();
const subClassObject = new Subclass();

myFunc(superClassObject);
myFunc(subClassObject);