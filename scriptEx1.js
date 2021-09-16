// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

//criação da variavel n

let n = 5;


//repete por n vezes a linha de asteriscos
for( let y = 0; y < n; y += 1){
  //concatena em uma string uma linha de n asteriscos
  let line = "";
  for ( let x = 0; x < n; x += 1 ){
    line = line.concat("*");
  }
  console.log(line);
}



