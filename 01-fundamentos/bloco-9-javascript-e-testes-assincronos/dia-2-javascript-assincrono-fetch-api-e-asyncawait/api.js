const API_URL = 'https://api.coincap.io/v2/assets';
const criptoContainer = document.getElementById('criptoList');
let savedData = [];

   function appendList(listString){
     const jokeContainer = document.getElementById('criptoOrderedlist');
     const li = document.createElement('li');
     li.innerText = listString;
     criptoOrderedlist.appendChild(li);
  }
  
  function createCriptoList(dataArray) {
    dataArray.forEach((coinData, index) => {
      const criptoInfoText = `${coinData.name} (${coinData.symbol}): ${parseFloat(coinData.priceUsd).toFixed(2)}`;
      appendList(criptoInfoText);
    });
  
  }

  const fetchCripto = () => {
    const myArr = [];

    fetch(API_URL, myArr)
    .then(response => response.json())
    .then(data => {
      savedData = data;
      createCriptoList(data.data);
      // const criptoInfoText = `${savedData.data[0].name} (${savedData.data[0].symbol}): ${parseInt(savedData.data[0].priceUsd).toFixed(2)}`;
      // appendList(criptoInfoText);
      console.log(data)})
    .catch((error) => console.log(error));
  };
  
  window.onload = () => fetchCripto();