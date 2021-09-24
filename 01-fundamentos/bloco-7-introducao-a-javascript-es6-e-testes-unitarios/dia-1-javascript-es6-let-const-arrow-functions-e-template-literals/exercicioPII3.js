const clickCount = document.getElementById('counter');
const button = document.getElementById('button');
let counter = 0;

button.addEventListener('click', () => {
  counter += 1;
  clickCount.innerText = counter;
})