// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2, 5, 9, 66, 0, 1, -2, 45];

// Seu código aqui.
const compare = (a, b) => a - b;

console.log(`Os numeros ${oddsAndEvens.sort(compare)} se encontram ordenados de forma crescente!`);
