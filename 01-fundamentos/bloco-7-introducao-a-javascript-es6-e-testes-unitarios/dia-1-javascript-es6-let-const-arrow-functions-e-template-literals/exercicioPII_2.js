// Crie uma função que receba uma frase e retorne qual a maior palavra.
//longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const myPhrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const longestWord = (phrase) => {
  const phraseArray = phrase.split(' ');
  let indexFound = 0;
  let maxLength = 0;
  let i ;
  for (i = 0; i < phraseArray.length; i += 1) {
    if (maxLength < phraseArray[i].length) {
      maxLength = phraseArray[i].length;
      indexFound = i;
    };   
    //console.log(phraseArray[i].length, indexFound);
  }
  //console.log(phraseArray[indexFound]);
  return phraseArray[indexFound];
}

console.log(longestWord(myPhrase));
