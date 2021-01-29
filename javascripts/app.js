
const salary = document.getElementById("salary");
const savings= document.getElementById("savings");
const interest = document.getElementById("interest");
const yearsDisplay = document.getElementById("years");
const buttonCalculate = document.getElementById("calculate");


//SECCIONES DE FINANZas
initializeElements();


// if(localStorage.key("usuario")){
//     salary.value = JSON.parse(localStorage.getItem("usuario")).salary;
//     savings.value = JSON.parse(localStorage.getItem("usuario")).savings;
//     interest.value = JSON.parse(localStorage.getItem("usuario")).interest;
//     var localUser = new User(parseFloat(salary.value), parseFloat(savings.value), parseFloat(interest.value));
//     yearsDisplay.textContent = localUser.calculateYearsToRetire();
// }else{
//     var localUser = new User(0, 0, 0);
// }

let localUser = new User (0,0,0);


//boton CALCULAR
buttonCalculate.addEventListener('click', buttonClicked);
function buttonClicked(){
    
    yearsDisplay.textContent = localUser.calculateYearsToRetire();
    
    localUser.salary = salary.value
    localUser.savings = savings.value
    localUser.interest = interest.value

    localStorage.setItem("usuario", JSON.stringify(localUser));
}