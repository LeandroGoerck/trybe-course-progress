const numbers = [32, 15, 3, 2, -5, 56, 10];

function sum(array) {
  let acc = 0;
  let bigger = array[0];
  for ( index = 0; index < array.length; index += 1 ) {
    element = array[index];
    acc += element;
    if ( bigger < element ) {
      bigger = element;
    };
  };
  return bigger;
};

console.log(sum(numbers));


const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const getBigger2 = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 57);
console.log(bigger); // 85

console.log('A função getBiger retorna: ' + getBigger( 5, 8));