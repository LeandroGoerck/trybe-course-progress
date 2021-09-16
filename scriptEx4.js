// 4- Depois, faça uma pirâmide com n asteriscos de base:

let base = 10;
let middle = Math.floor( base/2 );

//console.log(middle);

//laço para formar as linhas
let asterisk = 1; 

for ( let line =  0; line <= middle ; line += 1 , asterisk += 2){
  
  console.log(" ".repeat(middle - line) + "*".repeat( asterisk )  );
  
}