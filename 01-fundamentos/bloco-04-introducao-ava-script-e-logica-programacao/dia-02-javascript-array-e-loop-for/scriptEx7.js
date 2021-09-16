// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// A verificação não pode acontecer com o valor inicial em zero.
let menorValor = numbers[0]; 

for ( let index=0; index < numbers.length; index += 1){
  if ( menorValor > numbers[index] ){
    menorValor = numbers[index];
  }
}

console.log("O menor valor contido no array é: " + menorValor);

