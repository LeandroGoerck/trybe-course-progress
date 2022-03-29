//Dados um arrey de numeros, crie um outro array somente com os numeros pares

const arrayNumbers = [1, 2, 3, 4, 5, 7, 8, 9, 10, 25, 58, 60, 19, 20, 80];

function getEvenNumbers(array) {
  let evenArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i]%2 === 0) {
      evenArray.push(array[i]);
    }
  }
  return evenArray;
}

console.log(getEvenNumbers(arrayNumbers));
