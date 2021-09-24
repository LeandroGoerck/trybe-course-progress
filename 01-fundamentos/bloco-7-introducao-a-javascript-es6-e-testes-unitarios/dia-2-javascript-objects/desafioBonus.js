// Ex:
// array: [2, 3, 4, 5, 6, 8, 12, 24, 15]
// resultado esperado: 23

function sumAllOdds(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%2 !== 0) {
      sum = sum + element;
    }
  }
  return sum;
}

console.log( sumAllOdds([2, 3, 4, 5, 6, 8, 12, 24, 15]) );