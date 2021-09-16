const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addClassTech(event){
  
  // Se algum dos três itens tiver a classe "tech", então remova-a
  if(firstLi.classList.contains("tech")){
    firstLi.classList.remove("tech");
  }if(secondLi.classList.contains("tech")){
    secondLi.classList.remove("tech");
  }if(thirdLi.classList.contains("tech")){
    thirdLi.classList.remove("tech");
  }
  // Adiciona a classe "tech" no item clicado
  event.target.classList.add("tech");
    
}

  firstLi.addEventListener('dblclick', addClassTech);
  secondLi.addEventListener('dblclick', addClassTech);
  thirdLi.addEventListener('dblclick', addClassTech);



// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function updateText(event){
  let textInput = document.getElementById("input").value; // Recupera o que esta dentro do campo de texto
  let elementsList = document.querySelector(".container").children; // Recupera em form de array a lista de itens da tag "conteiner"
  let index = 0;

  for(index=0; index < elementsList.length; index += 1){ // Percorre cada elemento recuperado
    if(elementsList[index].classList.contains("tech")){  // verifica se um deles contem a classe "tech"
      break;                                             // caso tiver, apenas sai do for pois o objetivo é ibter o indice da lista
    }
  }
  elementsList[index].innerText = textInput;             // Atualiza o texto do quadrado selecionado com o texto do campo input

  
}

input.addEventListener('keyup', updateText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function goToPortfolio(event){
  window.open("https://leandrogoerck.github.io/", '_blank').focus();

}

myWebpage.addEventListener('click', goToPortfolio);


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeSpotrybefyColor(event){
  event.target.style.color = "darkgray";
}

myWebpage.addEventListener('mouseover', changeSpotrybefyColor);


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  event.target.classList.add("tech");
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);


// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.



  


















