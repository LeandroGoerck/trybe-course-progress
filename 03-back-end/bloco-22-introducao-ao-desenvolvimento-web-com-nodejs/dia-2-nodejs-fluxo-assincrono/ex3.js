// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

const m = require("./ex1");


const num1 = m.getRandomNumber();
const num2 = m.getRandomNumber();
const num3 = m.getRandomNumber();

async function calcs() {
  try {
    result =  await m.calc(num1, num2, num3);
    console.log(result);
  } catch (error) {
    return error;
  }
}

calcs();