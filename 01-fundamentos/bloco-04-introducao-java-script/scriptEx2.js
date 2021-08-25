// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const a = 45;
const b = 45;

if ( a > b ){
  console.log("O maior número entre " +a+ " e " +b+ " é: " +a);
}else if ( a < b ){
  console.log("O maior número entre " +a+ " e " +b+ " é: " +b);
}else{
  console.log("Os números são iguais")
}