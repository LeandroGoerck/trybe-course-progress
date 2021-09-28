// itera graciosamente através de chave-valor (key-value)
var obj = {a: 5, b: 7, c: 9};
for (var [key, value] of Object.entries(obj)) {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}

// Ou, usando array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
});