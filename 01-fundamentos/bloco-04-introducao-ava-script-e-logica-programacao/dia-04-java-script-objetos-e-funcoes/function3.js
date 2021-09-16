// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .


let testArray = [2, 4, 6, 7, 10, 0, -3]; 


function getMinValue ( arrayInt ){
  let minValue = arrayInt[0];
  let minValueIndex = 0;

  for( let index = 1 ; index < arrayInt.length;  index += 1  ){
    if (minValue > arrayInt[index] ){
      minValue = arrayInt[index];
      minValueIndex = index;
    }
  }
  return minValueIndex;
}

console.log( "O indice do valor minimo é " + getMinValue(testArray) );