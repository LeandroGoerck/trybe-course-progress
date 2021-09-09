
let fridayButtonFlag = 0;


function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercicio 1

  function generateDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  let daysList = document.querySelector("#days");

  for(let index = 0; index < dezDaysList.length; index += 1){
    const day = dezDaysList[index];                           // Guarda na varivel day cada item do array, cada dia do mês
    const dayListItem = document.createElement('li');         // cria um elemento html 'li'
    dayListItem.innerHTML = day;                              // Adiciona o dia do mês dentro do elemento 'li': ex: <li>4</li>
    dayListItem.classList.add("day");                         // Adiciona a classe "day" ao elemento 'li':      ex: <li class="day" >4</li>
    if(day === 24 || day === 25 || day === 31){               // Adiciona a classe "holiday" ao elemeno 'li':   ex: <li class="day" class="holiday">24</li>
      dayListItem.classList.add("holiday");
    }
    if(day === 4 || day === 11 || day === 18 || day === 25){  // Adiciona a classe "friday" ao elemento 'li'    ex: <li class="day" class="friday">11</li>
      dayListItem.classList.add("friday");
    }
    daysList.appendChild(dayListItem);                        // Adiciona o item montado como filho do id "days"
  }

}

generateDays();

// Exercicio 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createHolidaysButton(str){
  const buttonItem = document.createElement('button');
  buttonItem.innerText = str;
  buttonItem.setAttribute("id", "btn-holiday")

  const selectButtonsContainer = document.querySelector(".buttons-container");
  selectButtonsContainer.appendChild(buttonItem);
}

createHolidaysButton("Feriados");

//Exercicio 3
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function changeHolidaysColor(){

  let daysOfMonth = document.querySelector("#days").children; // Recupera os dias do mês em formato de array

  for(let index=0; index<daysOfMonth.length; index +=1){
    if(daysOfMonth[index].classList.contains("holiday") &&  daysOfMonth[index].style.background != "lightblue" ){
      daysOfMonth[index].style.background="lightblue";
    }else if(daysOfMonth[index].style.background === "lightblue"){
      daysOfMonth[index].style.background="rgb(238,238,238)";
    }
  }
}

let buttonSelecion = document.querySelector("#btn-holiday");
buttonSelecion.addEventListener('click', changeHolidaysColor);
//changeHolidaysColor();

// Exercicio 4
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createFridayButton(str){
  const buttonItem = document.createElement('button');
  buttonItem.innerText = str;
  buttonItem.setAttribute("id", "btn-friday")

  const selectButtonsContainer = document.querySelector(".buttons-container");
  selectButtonsContainer.appendChild(buttonItem);
}

createFridayButton("Sexta-Feira");

// Exercicio 5
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeFridaysText(){

  let daysOfMonth = document.querySelector("#days").children; // Recupera os dias do mês em formato de array

  if(fridayButtonFlag === 0){
    for(let index=0; index<daysOfMonth.length; index +=1){
      if(daysOfMonth[index].classList.contains("friday")){
        daysOfMonth[index].innerText = "#"+daysOfMonth[index].innerText+"#";
      }
    }
    fridayButtonFlag = 1;
  }else{
    for(let index=0; index<daysOfMonth.length; index +=1){
      if(daysOfMonth[index].classList.contains("friday")){
       // daysOfMonth[index].innerText = parseInt(daysOfMonth[index].innerText);
        let justNumber = daysOfMonth[index].innerText.match(/\d+/g);
        daysOfMonth[index].innerText = justNumber;        
      }
    }
    fridayButtonFlag = 0;
  }

}

let buttonFriday = document.querySelector("#btn-friday");
buttonFriday.addEventListener('click', changeFridaysText);
