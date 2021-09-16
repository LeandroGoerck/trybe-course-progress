// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false


function checkPalindome( phrase ) {
  let phraseLength = phrase.length;
  let equalCount = 0;
  let incremetalPointer  = 0;
  let decrementalPointer = phrase.length;

  for( incremetalPointer = 0; incremetalPointer < phraseLength ; incremetalPointer += 1){
    decrementalPointer = phraseLength-(incremetalPointer+1);
    if ( phrase[incremetalPointer] === phrase[decrementalPointer]  ){
      equalCount += 1 ;
    }
    //console.log( phrase[incremetalPointer], phrase[decrementalPointer] );
  }
  //console.log(equalCount);
  if ( equalCount === phraseLength){
    return true;
  }
  else{
    return false;
  }

}

console.log( checkPalindome("arara") );
console.log( checkPalindome('desenvolvimento') );
console.log( checkPalindome('oniino') );