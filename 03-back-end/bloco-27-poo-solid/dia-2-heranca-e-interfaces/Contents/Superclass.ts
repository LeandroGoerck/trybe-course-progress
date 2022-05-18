class Superclass {
  public isSuper: boolean = true;
  public sayHello() {
    console.log('Hello World!')
  }
}

class Subclass extends Superclass {
  
}

function myFunc(superClass: Superclass) {
  superClass.sayHello();
}

const superClassObject = new Superclass();
const subClassObject = new Subclass();

myFunc(superClassObject);
myFunc(subClassObject);