// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const a1 = 20;
const a2 = 150;
const a3 = -11;

if ( a1 > 0 && a2 > 0 && a3 > 0 ){
  console.log("Todos os àngulos são válidos");
}else{
  console.log("Existem angulos invalidos.")
}


if ( a1+a2+a3 === 180 ){
  console.log("Representa um triangulo");
}else{
  console.log("Não representa um triangulo");
}
