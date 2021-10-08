// Adicione o código do exercício aqui:
// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
 const partObj = names.reduce( (acc, curr) => {
  return acc += ( (curr.split('a').length - 1) + (curr.split('A').length) - 1 );
 }, 0 );
 return partObj;
};

console.log(containsA());
//console.log( (names[0].split('a').length - 1) + (names[0].split('A').length) - 1 ) ;