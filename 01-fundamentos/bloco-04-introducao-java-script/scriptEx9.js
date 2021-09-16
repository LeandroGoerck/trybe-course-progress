// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const a = 10;
const b = 554;
const c = 91;

if ( ( a % 2 === 1) || ( b % 2 === 1 ) || ( c % 2 === 1) ) {
  console.log("tem impar");
}else{
  console.log("tudo par");
}