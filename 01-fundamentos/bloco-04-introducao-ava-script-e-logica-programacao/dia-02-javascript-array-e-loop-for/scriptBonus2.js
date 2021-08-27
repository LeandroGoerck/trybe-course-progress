// Ordene o array numbers em ordem DECRESCENTE e imprima seus valores;

let arrayVictim = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < arrayVictim.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (arrayVictim[index] < arrayVictim[secondIndex]) {
      let position = arrayVictim[index];
      arrayVictim[index] = arrayVictim[secondIndex];
      arrayVictim[secondIndex] = position;
    }
  }
}

console.log(arrayVictim);