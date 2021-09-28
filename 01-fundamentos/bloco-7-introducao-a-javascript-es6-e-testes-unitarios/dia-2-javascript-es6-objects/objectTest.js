function addObjectKey(object, keyName, keyValue){
  object[keyName] = keyValue;
  return object;
}

const costumer2 = {
  name: 'Franciela',
  age: 24,
}

console.log(costumer2);

addObjectKey(costumer2, 'lastName', 'Mello');

console.log(costumer2);