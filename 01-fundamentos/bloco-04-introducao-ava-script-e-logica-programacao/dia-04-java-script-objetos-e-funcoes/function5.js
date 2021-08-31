// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .


let testArray = [2, 3, 2, 5, 8, 2, 4, 4, 4, 4, 3, 2];

// Verifica se o valor no endereço 0 se repete no array

function getMostRepeted() {
  let maxValue = 0;
  let indexMaxValue = 0;
  let countChar = 0;

// Percorrer o indice da posição comparada
  for( let x = 0; x < testArray.length; x += 1){
    // Percorre o array de teste e calcula a quantidade para a posição 0
    //maxValue = 0;
    //indexMaxValue = 0;
    countChar = 0;

    for ( let index = 0; index < testArray.length; index += 1 ){
      if ( testArray[x] === testArray[index] ){
        countChar += 1;
      }  
    }

    if ( maxValue < countChar ) {
      maxValue = countChar;
      indexMaxValue = x;
    }
    //console.log(countChar);
  }
  //console.log(maxValue);
  return testArray[indexMaxValue];
}

console.log( "O valor que mais se repete é: " + getMostRepeted(testArray));



