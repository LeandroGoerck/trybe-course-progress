const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function printSkills(student) {
  const arrayOfSkills = Object.keys(student);
  for (index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]} Nível: ${student[arrayOfSkills[index]]}`);
  }
}
console.log('Estudante 1')
printSkills(student1);
console.log('Estudante 2')
printSkills(student2);