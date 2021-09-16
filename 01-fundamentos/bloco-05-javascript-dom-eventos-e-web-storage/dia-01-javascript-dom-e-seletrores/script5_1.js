const headerContainer = document.querySelector("#header-container");
headerContainer.style.backgroundColor = "green";

const footerContainer = document.querySelector("#footer-container");
footerContainer.style.backgroundColor = "darkgreen";

const emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "pink";

const EmergencyTasksH3 = document.querySelectorAll(".emergency-tasks h3");
for(let index = 0; index < EmergencyTasksH3.length; index += 1){
  EmergencyTasksH3[index].style.backgroundColor = "black";
}

const noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "yellow";

const noEmergencyTasksH3 = document.querySelectorAll(".no-emergency-tasks h3");
for(let index = 0; index < noEmergencyTasksH3.length; index += 1){
  noEmergencyTasksH3[index].style.backgroundColor = "black";
}


