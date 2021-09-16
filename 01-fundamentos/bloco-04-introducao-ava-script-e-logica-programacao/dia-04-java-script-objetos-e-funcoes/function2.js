// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let testArray = [2, 3, 6, 7, 10, 1];


function getMaxValue ( arrayInt ){
  let maxValue = arrayInt[0];
  let maxValueIndex = 0;

  for( let index = 1 ; index < arrayInt.length;  index += 1  ){
    if (maxValue < arrayInt[index] ){
      maxValue = arrayInt[index];
      maxValueIndex = index;
    }
  }
  return maxValueIndex;
}

console.log( "O indice do valor maximo é " + getMaxValue(testArray) );