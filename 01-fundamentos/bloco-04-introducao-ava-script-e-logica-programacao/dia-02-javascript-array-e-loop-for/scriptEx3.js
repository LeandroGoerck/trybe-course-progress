// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somatorio = 0;
let media     = 0;

for ( let index=0; index < numbers.length; index += 1){
  somatorio = somatorio + numbers[ index ];
}

media = somatorio / numbers.length;

console.log("A media dos valores do vetor é: " + media);