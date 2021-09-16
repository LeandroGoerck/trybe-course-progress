//const paragraph = document.getElementById("paragraph");
const paragraph = document.querySelector("#paragraph");
paragraph.style.color = "gray";

//const pageTitle = document.getElementById("page-title");
const pageTitle = document.querySelector("#page-title");
pageTitle.textContent = "Velozes e Furiozos";

//const secondParagraph = document.getElementById("second-paragraph");
const secondParagraph = document.querySelector("#second-paragraph");
secondParagraph.style.color = "blue";
secondParagraph.textContent = "Aprenda Soft Skills";

//const subtitle = document.getElementById("subtitle");
const subtitle = document.querySelector("#subtitle");
subtitle.textContent = "O subtitulo também pode ser mudado.";
subtitle.style.color = "red";

//const paragraphsTest = document.getElementsByClassName("paragraphsTest");
const paragraphsTest = document.querySelectorAll(".paragraphsTest");
paragraphsTest[0].style.color = "green";
paragraphsTest[0].backgroundColor = "gray";
paragraphsTest[1].style.color = "green";

//const subtitleTest = document.getElementsByTagName("h4");
const subtitleTest = document.querySelectorAll("h4");
subtitleTest[0].style.color = "red";
