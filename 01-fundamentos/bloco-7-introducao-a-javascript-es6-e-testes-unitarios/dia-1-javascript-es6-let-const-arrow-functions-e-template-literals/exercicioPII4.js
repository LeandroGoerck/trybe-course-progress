let arraySkills = ['HTML', 'CSS', 'javaScript', 'flexbox', 'bootstrap'];
const myame = 'Leandro';

function changeX (phrase) {
  return  phrase.replace('x', myame);
}

//console.log(changeX(`Tryber x aqui!`));

function superSkills () {
  arraySkills = arraySkills.sort();
  return `${changeX('Tryber x aqui!')} Minhas cinco principais habilidades são:
  ${arraySkills[0]}
  ${arraySkills[1]}
  ${arraySkills[2]}
  ${arraySkills[3]}
  ${arraySkills[4]}
  #goTrybe
  `;
}

console.log(superSkills());