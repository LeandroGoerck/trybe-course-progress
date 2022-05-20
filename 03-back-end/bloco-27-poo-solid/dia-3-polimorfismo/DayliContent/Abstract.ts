// pra que serve a classe abstrata? pra não ser instanciada.
// pra que serve o metodo abstrato dentro da classe abstrata? só pra marcar territorio,
// apontar que o metodo deve ser implementado na subclasse

abstract class Animal {
  constructor(public name: string) { }
  abstract move(): void
}
class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}
class Fish extends Animal {
  move() { console.log(`${this.name} está nadando.`); }
}

const a = new Fish('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/