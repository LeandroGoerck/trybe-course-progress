// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

function appendJoke(jokeStr){
  const jokeContainer = document.getElementById('jokeContainer');
  const paragraph = document.createElement('p');
  paragraph.innerText = jokeStr;
  jokeContainer.appendChild(paragraph);

}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => appendJoke(data.joke));
};

window.onload = () => fetchJoke();
