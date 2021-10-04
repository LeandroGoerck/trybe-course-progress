// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS   = ['A',  'C',  'B', 'D', 'A', 'A',   'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkTemplate = (rightAnswarsArray, studentAnswerArray) => {
  let grade = 0;
  studentAnswerArray.forEach((element, position) => {
    if (element === rightAnswarsArray[position]) {
      grade += 1;
    } else if (element === 'N.A'){
      grade += 0;
    } else {
      grade -= 0.5;
    }
  });
  return grade;
}

const testResult = (rightAnswarsArray, studentAnswerArray, callback) => {
  return callback(rightAnswarsArray, studentAnswerArray);
}

console.log(testResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkTemplate));