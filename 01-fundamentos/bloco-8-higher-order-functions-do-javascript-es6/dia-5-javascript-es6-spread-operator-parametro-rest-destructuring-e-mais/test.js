// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçâ', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'linhaça'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [
    ...fruit,
    ...additional,
  ]
};

console.log(fruitSalad(specialFruit, additionalItens));