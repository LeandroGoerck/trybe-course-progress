// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
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
    city: 'Manaus',
    state: 'Amazonas',
  }
]

// Resultado esperado
//['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']

function buildCitiesArray(array) {
  let newArray =[];
  for (let i = 0; i < citiesAndStates.length; i += 1) {
    newArray.push(`${citiesAndStates[i].city} - ${citiesAndStates[i].state}`);
  }
  return newArray;
}

console.log(buildCitiesArray(citiesAndStates));


// function buildCitiesArray2(array) {
//   const result = [];
//   for (let index = 0; index < array.length; index++) {
//   const obj = array[index];
//   result.push(`${Object.values(obj)[0]} - ${Object.values(obj)[1]}`);
//   }
//   return result;
//   } 
