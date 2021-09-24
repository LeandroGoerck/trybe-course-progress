// Desenvolva uma função que recebe um array e retorna a soma de todos os números desse array
// Ex:
// array: [2, 3, 4, 6, 8, 12, 24]
// resultado esperado: 59

function sumAllNumbers(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element;
  }
  return sum;
}

console.log(sumAllNumbers([2, 3, 4, 6, 8, 12, 24]));