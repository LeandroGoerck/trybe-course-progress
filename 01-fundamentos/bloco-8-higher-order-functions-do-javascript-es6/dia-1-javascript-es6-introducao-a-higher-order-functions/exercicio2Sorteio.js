// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkNumber = (betNumber, drawnNumber) => {
  if (betNumber === drawnNumber) {
    return true;
  } else {
    return false;
  };
};

const prizeDrawn = (betNumber, callBack) => {
  const drawnNumber = Math.floor(Math.random()*5);
  if (callBack(betNumber, drawnNumber)) {
    return "Parabéns você ganhou";
  } else {
    return "Tente novamente";
  }
};

console.log(prizeDrawn(3, checkNumber));