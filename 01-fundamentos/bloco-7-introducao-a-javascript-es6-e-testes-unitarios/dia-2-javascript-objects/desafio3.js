// Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que o número recebido por parâmetro, falso caso contrário

// Ex: 
// array: [20, 30, 19, 1, 50]
// number: 20
// resultado esperado: false 

// Ex: 
// array: [20, 30, 19, 21]
// number: 18
// resultado esperado: true

function allGreaterThan(number, array) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (number > element) {
      return false;
    }
  }
  return true;
}

console.log(allGreaterThan(20,[20, 30, 19, 1, 50]));
console.log(allGreaterThan(18,[20, 30, 19, 21]));