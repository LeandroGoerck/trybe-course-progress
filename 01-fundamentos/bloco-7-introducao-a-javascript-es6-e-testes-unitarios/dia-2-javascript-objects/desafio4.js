// Desenvolva uma função que recebe como primeiro parâmetro um array contendo objetos com cidades e estados. 
// Como segundo parâmetro ela recebe o nome de um estado.
// A função deverá retornar o primeiro objeto que contenha a propriedade state igual ao nome do estado recebido por parâmetro 

// Exemplo do array
const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Ponta Grossa',
    state: 'Paraná',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  },
  {
    city: 'Vitória da Conquista',
    state: 'Bahia',
  },
  {
    city: 'Curitiba',
    state: 'Paraná',
  },
]

// Caso a função receba o array acima como primeiro parâmetro e a string 'Paraná' no parâmetro state, o resultado esperado é o objeto:
// { city: 'Ponta Grossa', state: 'Paraná' }

// Caso a função receba o array acima como primeiro parâmetro e a string 'Bahia' no parâmetro state, o resultado esperado é o objeto:
// { city: 'Salvador', state: 'Bahia' }

function getCityByState(array, state) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (state === element.state) {
      return element;
    }
  }
}

console.log( getCityByState(citiesAndStates,'Bahia'));
