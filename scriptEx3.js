// 3- Agora inverta o lado do triângulo.


let n = 30;



//repete por n vezes a linha de asteriscos
for( let y = 0; y < n; y += 1){
  //concatena em uma string uma linha de n asteriscos
  let line = "";
  for ( let x = 0; x < n-y; x += 1 ){
    line = line.concat(" ");
  }

  for ( let x = 0; x < y; x += 1 ){
    line = line.concat("*");
  }

  console.log(line);

}



