// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .


let arrayVictim = [];

for ( let i = 0; i < 25; i += 1 ){

  arrayVictim.push( i + 1 );

}

console.log(arrayVictim);

for ( let i = 0; i < 25; i += 1){
  console.log(arrayVictim[i]/2)  
}
