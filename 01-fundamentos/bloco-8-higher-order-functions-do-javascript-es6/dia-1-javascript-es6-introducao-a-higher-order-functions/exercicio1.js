const employeesObj = (fullName) => {
  const newEmployeeObjec = {
    nomeCompleto: fullName,
    email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`,
  }
  return newEmployeeObjec;
}

const newEmployees = () => {
  const employees = {
    id1: employeesObj('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeesObj('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeesObj('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());


