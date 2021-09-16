// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function checkEndWord( word, ending ){
  let countEqual = 0;
  let endingX = 0;
  let wordX = 0;

  for( endingX = ending.length, wordX = word.length; endingX > 0; endingX -= 1 , wordX -= 1){

    if ( ending[ endingX-1 ] === word[ wordX-1 ]){
      countEqual += 1;
    }
  }
  if( countEqual === ending.length){
    return true;
  }else{
    return false;
  }

}

console.log( checkEndWord( 'trybe', 'be') );
console.log( checkEndWord (  'joaofernando', "ando" )  );