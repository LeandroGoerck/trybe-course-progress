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
}

createHolidaysButton("Feriados");