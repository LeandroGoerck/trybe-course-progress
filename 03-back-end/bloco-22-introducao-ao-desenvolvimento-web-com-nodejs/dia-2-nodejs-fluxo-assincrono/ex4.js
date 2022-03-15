// Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida
//  com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

function printAll() {
  simpsons.forEach((simpson) => console.log(`${simpson.id} ${simpson.name}`));
}

// printAll();


function printSimpson(charId) {
  return new Promise((resolve, reject) => {
    if(charId > simpsons.length) return reject('Numero id muito alto');
    if(charId <= 0) return reject('Numero id muito Baixo');

    resolve(simpsons[charId-1].name);
  })
}

printSimpson(1)
   .then(result => console.log(result))
   .catch(error => console.log(error));



 async function getSimpsonById(id) {
   const simpsons = await fs
     .readFile('./simpsons.json', 'utf-8')
     .then((fileContent) => JSON.parse(fileContent));

   const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

   if (!chosenSimpson) {
     /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
      * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
      * tendo como motivo o que passarmos para o `throw`.
      * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
      */
     throw new Error('id não encontrado');
   }

     /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
      * `return` aciona o fluxo de sucesso e resolve a Promise.
      * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
      * dentro do executor de uma Promise.
      */
     return chosenSimpson;
 }

getSimpsonById('5');



