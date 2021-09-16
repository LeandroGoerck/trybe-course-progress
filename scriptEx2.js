// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
//criação da variavel n

let n = 5;



//repete por n vezes a linha de asteriscos
for( let y = 0; y < n; y += 1){
  //concatena em uma string uma linha de n asteriscos
  let line = "";
  for ( let x = 0; x <= y; x += 1 ){
    line = line.concat("*");
  }
  console.log(line);
}



