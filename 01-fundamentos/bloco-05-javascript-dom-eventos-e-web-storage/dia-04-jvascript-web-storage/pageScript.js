window.onload = function(){
  document.body.style.backgroundColor = "rgb(35,35,35)";
  //article.style.color = "white";
  document.body.style.color = "white";
};


let backgroundColorInput = document.querySelector("#backgroundColorPicker");
let textColorInput = document.querySelector("#textColorPicker");
let articleItem = document.querySelector("#article");
let buttonSizeUp = document.querySelector("#sizeUp");
let buttonSizeDown = document.querySelector("#sizeDown");

backgroundColorInput.addEventListener('input', () =>{
  let color = backgroundColorInput.value;
  document.body.style.backgroundColor = color;

});

textColorInput.addEventListener('input', () =>{
  let color = textColorInput.value;
  article.style.color = color;
  document.body.style.color = color;
});

buttonSizeUp.onclick = function () {
  document.body.fontsize = 'greater';
  document.body.style.color = "green";
};

buttonSizeDown.onclick = function () {
  document.body.fontsize = '20px';
};
