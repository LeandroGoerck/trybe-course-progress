// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

let testNumber = 55;

function getSumTilN ( number ){
  let sum = 0;
  for( let index = 1; index <= number; index += 1 ){
    sum += index;    
  }
  return sum;
}

console.log( "O somatorio de 1 até " + testNumber + " é " + getSumTilN( testNumber ));