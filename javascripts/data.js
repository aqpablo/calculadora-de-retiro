let dataDebts = [   
];
let dataSavings = [  
];
let dataInvestings = [    
];


function initializeElements(){
    
    if(localStorage.getItem("debts")){
        dataDebts = JSON.parse(localStorage.getItem("debts"));
    }
    if(localStorage.getItem("savings")){
        dataSavings = JSON.parse(localStorage.getItem("savings"));
    }
    if(localStorage.getItem("investings")){
        dataInvestings = JSON.parse(localStorage.getItem("investings"));
    }
    
    
    buildDebtsSection();
    buildSavingsSection();
    buildInvestingsSection();
    
    loadTableDebt();
    loadTableSavings();
    loadTableInvestings();
}




function addElement(id, text, amount, interest) {
    //construyo cada elemento
    const div = document.createElement("div");
    const textElement = document.createElement("input");
    const amountElement = document.createElement("input");
    const interestElement = document.createElement("input");
    const buttonElement = document.createElement("button");

    //le agrego una clase a cada elemento
    div.classList.add("formToAddElement");
    textElement.classList.add("elementText");
    amountElement.classList.add("elementAmount");
    interestElement.classList.add("elementInterest")
    buttonElement.classList.add("elementButtonSubstract");

    //le agrego un contenido al elemento
    textElement.value = text;
    amountElement.value = amount;
    interestElement.value = interest;
    buttonElement.textContent = "−";
    buttonElement.setAttribute("data-id", id);
    //buttonElement.addEventListener('click', this.removeDebt)


    //introduzco cada elemento dentro del primer div
    div.appendChild(textElement);
    div.appendChild(amountElement);
    div.appendChild(interestElement);
    div.appendChild(buttonElement);

    //debo retornar el div para ingresarlo en el contenedor
    return div;
}

//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------


function buildDebtsSection() {
    const debtText = document.getElementById("debtText");
    const debtAmount = document.getElementById("debtAmount");
    const debtInterest = document.getElementById("debtInterest");
    const buttonAddDebt = document.getElementById("debtButton");
    const tableDebt = document.getElementById("tableDebt");

    buttonAddDebt.addEventListener('click', function () {

        debtText.value = debtText.value.trim();

        if(debtText.value != "" && debtAmount.value != 0){
            //ingresamos los datos al json que los guardará
            
            dataDebts.push(
                {
                    "id": dataDebts.length,
                    "name": debtText.value,
                    "amount": parseFloat(debtAmount.value),
                    "interest": parseFloat(debtInterest.value),
                    "enabled" : true,
                }
            )
            
            //construimos la tabla
            loadTableDebt();

            //reemplazamos el texto del contenedor de deuda que agrega la informacion    
            debtText.value = "";
            debtAmount.value = "";
            debtInterest.value = "";
        }

    });
}

function loadTableDebt(){
    //borramos todos las deudas que existen en la tabla
    while (tableDebt.firstChild) {
        tableDebt.removeChild(tableDebt.lastChild);
    }

    //cargamos nuevamente todos los datos que se encuentran en el json
    //si esta deshabilitado, no los cargo (no se como eliminarlo del array sin causar problemas con los id's)
    if (dataDebts != []){
        dataDebts.forEach(function (element) {
            if(element.enabled){
                let oneMoreDebt = addElement(element.id, element.name, element.amount, element.interest);
                tableDebt.appendChild(oneMoreDebt);
            }
        });
    }

    //guardo en el local storage
    localStorage.setItem("debts", JSON.stringify(dataDebts));

    //selecciono los botones - y por cada uno agrego una escucha, para removerlos si se presiona
    const buttonSubstract = document.querySelectorAll(".elementButtonSubstract");
    buttonSubstract.forEach(function(element){
        
        element.addEventListener("click", removeDebt);
    })
}

function removeDebt(event) {
    
    dataDebts[event.target.dataset.id].enabled = false;
    loadTableDebt();
}


// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------

function buildSavingsSection() {
    const savingsText = document.getElementById("savingText");
    const savingsAmount = document.getElementById("savingAmount");
    const savingsInterest = document.getElementById("savingInterest");
    const buttonAddSavings = document.getElementById("savingButton");
    const tableSavings = document.getElementById("tableSavings");

    savingsInterest.value = 0;

    buttonAddSavings.addEventListener('click', function () {

        savingsText.value = savingsText.value.trim();

        if(savingsText.value != "" && savingsAmount.value != 0){
            //ingresamos los datos al json que los guardará
            
            dataSavings.push(
                {
                    "id": dataSavings.length,
                    "name": savingsText.value,
                    "amount": parseFloat(savingsAmount.value),
                    "interest": parseFloat(savingsInterest.value),
                    "enabled" : true,
                }
            )
            
            //construimos la tabla
            loadTableSavings();

            //reemplazamos el texto del contenedor de deuda que agrega la informacion    
            savingsText.value = "";
            savingsAmount.value = "";
            savingsInterest.value = 0;
        }

    });
}

function loadTableSavings(){
    //borramos todos las deudas que existen en la tabla
    while (tableSavings.firstChild) {
        tableSavings.removeChild(tableSavings.lastChild);
    }

    //cargamos nuevamente todos los datos que se encuentran en el json
    //si esta deshabilitado, no los cargo (no se como eliminarlo del array sin causar problemas con los id's)
    if (dataSavings != []){
        dataSavings.forEach(function (element) {
            if(element.enabled){
                let oneMoreSavings = addElement(element.id, element.name, element.amount, element.interest);
                tableSavings.appendChild(oneMoreSavings);
            }
        });
    }

    //guardo en el local storage
    localStorage.setItem("savings", JSON.stringify(dataSavings));

    //selecciono los botones - y por cada uno agrego una escucha, para removerlos si se presiona
    const buttonSubstract = document.querySelectorAll(".elementButtonSubstract");
    buttonSubstract.forEach(function(element){
        element.addEventListener("click", removeSavings);
    })
}

function removeSavings(event) {
    
    dataSavings[event.target.dataset.id].enabled = false;
    loadTableSavings();
}

//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------

function buildInvestingsSection() {
    const investingsText = document.getElementById("investingText");
    const investingsAmount = document.getElementById("investingAmount");
    const investingsInterest = document.getElementById("investingInterest");
    const buttonAddInvesting = document.getElementById("investingButton");
    const tableInvesting = document.getElementById("tableInvestings");

    buttonAddInvesting.addEventListener('click', function () {

        investingsText.value = investingsText.value.trim();

        if(investingsText.value != "" && investingsAmount.value != 0){
            //ingresamos los datos al json que los guardará
            
            dataInvestings.push(
                {
                    "id": dataInvestings.length,
                    "name": investingsText.value,
                    "amount": parseFloat(investingsAmount.value),
                    "interest": parseFloat(investingsInterest.value),
                    "enabled" : true,
                }
            )
            
            //construimos la tabla
            loadTableInvestings();

            //reemplazamos el texto del contenedor de deuda que agrega la informacion    
            investingsText.value = "";
            investingsAmount.value = "";
            investingsInterest.value = "";
        }

    });
}

function loadTableInvestings(){
    //borramos todos las deudas que existen en la tabla
    while (tableInvestings.firstChild) {
        tableInvestings.removeChild(tableInvestings.lastChild);
    }

    //cargamos nuevamente todos los datos que se encuentran en el json
    //si esta deshabilitado, no los cargo (no se como eliminarlo del array sin causar problemas con los id's)
    if (dataInvestings != []){
        dataInvestings.forEach(function (element) {
            if(element.enabled){
                let oneMoreInvestings = addElement(element.id, element.name, element.amount, element.interest);
                tableInvestings.appendChild(oneMoreInvestings);
            }
        });
    }

    //guardo en el local storage
    localStorage.setItem("investings", JSON.stringify(dataInvestings));

    //selecciono los botones - y por cada uno agrego una escucha, para removerlos si se presiona
    const buttonSubstract = document.querySelectorAll(".elementButtonSubstract");
    buttonSubstract.forEach(function(element){
        element.addEventListener("click", removeInvestings);
    })
}

function removeInvestings(event) {
    
    dataInvestings[event.target.dataset.id].enabled = false;
    loadTableInvestings();
}