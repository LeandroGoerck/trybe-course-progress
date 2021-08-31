// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let countChar = 0;
let indexMaxLetters = 0;
let maxLetters = 0;

// Percorre o array calculando o tamanho de cada palavra

function getMaxLetters (arrayNames){

  for ( let arrayIndex = 0; arrayIndex < arrayNames.length; arrayIndex += 1){
    // compara o tamanho de cada palavra do array com uma variavel de controle
    if ( maxLetters < arrayNames[arrayIndex].length ){
      maxLetterString = arrayNames[arrayIndex];
      maxLetters = arrayNames[arrayIndex].length;
      console.log(arrayIndex, arrayNames[arrayIndex].length );
    }
  }
  
  return maxLetterString;
}

console.log("O nome com a maior quantidade de caracteres é " + getMaxLetters(testArray));






