const stateList = document.querySelector('#state');
const startDate = document.querySelector('#start-date');
const submitButton = document.querySelector('#submit-button');

const states = [
	{ key: "AC", value: "Acre" },
	{ key: "AL", value: "Alagoas" },
	{ key: "AP", value: "Amapá" },
	{ key: "AM", value: "Amazonas" },
	{ key: "BA", value: "Bahia" },
	{ key: "CE", value: "Ceará" },
	{ key: "DF", value: "Distrito Federal" },
	{ key: "ES", value: "Espírito Santo" },
	{ key: "GO", value: "Goiás" },
	{ key: "MA", value: "Maranhão" },
	{ key: "MT", value: "Mato Grosso" },
	{ key: "MS", value: "Mato Grosso do Sul" },
	{ key: "MG", value: "Minas Gerais" },
	{ key: "PA", value: "Pará" },
	{ key: "PB", value: "Paraíba" },
	{ key: "PR", value: "Paraná" },
	{ key: "PE", value: "Pernambuco" },
	{ key: "PI", value: "Piauí" },
	{ key: "RJ", value: "Rio de Janeiro" },
	{ key: "RN", value: "Rio Grande do Norte" },
	{ key: "RS", value: "Rio Grande do Sul" },
	{ key: "RO", value: "Rondônia" },
	{ key: "RR", value: "Roraima" },
	{ key: "SC", value: "Santa Catarina" },
	{ key: "SP", value: "São Paulo" },
	{ key: "SE", value: "Sergipe" },
	{ key: "TO", value: "Tocantins" }
]

{/* <option value="bh">Belo Horizonte</option> */}
function stateOption() {
  // console.log(states[0].key, states[0].value);
  for (let i = 0; i < states.length; i += 1) {
    const optionLine = document.createElement('option');
    optionLine.innerText = states[i].value;
    optionLine.value = states[i].key;
    stateList.appendChild(optionLine);
  }
}

window.onload = stateOption;

function dateValidation() {
// Caso digitar o primeiro numero maior que 3, passa para o segundo algarismo
  if (startDate.value[0] > 3) {
    startDate.value = '0' + startDate.value;
  }
}

startDate.addEventListener('keyup',dateValidation);

function preventDef(event) {
  event.preventDefault();
}

submitButton.addEventListener('click', preventDef);
