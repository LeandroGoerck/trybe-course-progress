// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
// 1 ♔ Rei
// 1 ♛ Dama
// 2 ♝ Bispo
// 2 ♞ Cavalo
// 2 ♜ Torre
// 8 ♟ Peão

let peca = "cavalo";

peca = peca.toLowerCase();

switch(peca){
  
  case "rei" :
    console.log("para todos os lados, 1 quadrado");
    break;
  case "dama" :
    console.log("para todos os lados");
    break;
  case "bispo" :
    console.log("diagonal");
    break;
  case "cavalo" :
    console.log("em L");
    break;
  case "torre" :
    console.log("para frente e para os lados");
    break;
  case "peao" :
    console.log("anda para frente, e come para os lados");
    break;
  default :
    console.log("erro");
}
