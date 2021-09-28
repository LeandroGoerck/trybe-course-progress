const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// 1 Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function modifyObject(object, key, keyValue) {
  object[key] = keyValue;
}

modifyObject(lesson2, 'turno', 'noite');

console.log(lesson2);


// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(object){
  const arrayKeys = Object.keys(object);
  for (key in object ) {
    console.log(key);
  }
}
listKeys(lesson3);

// 3 Crie uma função para mostrar o tamanho de um objeto.
function objectLength(object) {
  const arrayObject = Object.values(object);
  console.log(arrayObject.length);
}
objectLength(lesson1);

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(object){
  const arrayKeys = Object.keys(object);
  for (key in object ) {
    console.log(object[key]);
  }
}
listValues(lesson3);


// 5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = {
  lesson1,
  lesson2,
  lesson3,
}
console.log(allLessons);

//6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalStudents(allClassesObject) {
  const array = Object.entries(allClassesObject);
  let totalStudents = 0;
  
  totalStudents += allClassesObject.lesson1.numeroEstudantes;
  totalStudents += allClassesObject.lesson2.numeroEstudantes;
  totalStudents += allClassesObject.lesson3.numeroEstudantes;

  return totalStudents;
}

console.log(totalStudents(allLessons));


// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

function getValueByNumber(object, number) {
  const array = Object.values(object);
  return array[number];
}
console.log(getValueByNumber(lesson1, 0));

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

function verifyPair(object, key, value) {
  const array = Object.entries(object);
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (array[index][0] === key && array[index][1] === value) {
      return true;
    }
  }
  return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));