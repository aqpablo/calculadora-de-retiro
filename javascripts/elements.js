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
    
    const div = document.createElement("div");
    div.classList.add("formToAddElement");

    //construyo cada elemento
    const contentElement = `<input class="elementText" value ="${text}" readonly>
    <input class="elementAmount element"value="${amount}" readonly>
    <input class="elementInterest element"value="${interest}" readonly>
    <button class = "elementButtonSubstract element" data-id="${id}">−</button>`;

    $(div).append(contentElement);

    //debo retornar el div para ingresarlo en el contenedor
    return div;
}

//----------------------------------
//--------Seccion deudas-------------
//----------------------------------

function buildDebtsSection() {
    const debtText = $("#debtText");
    const debtAmount = $("#debtAmount");
    const debtInterest = $("#debtInterest");
    const buttonAddDebt = $("#debtButton");

    buttonAddDebt.click( function () {

        debtText.val(debtText.val().trim());

        if(debtText.val() != "" && debtAmount.val() != 0){

            //ingresamos los datos al json que los guardará
            dataDebts.push(
                {
                    "id": dataDebts.length,
                    "name": debtText.val(),
                    "amount": parseFloat(debtAmount.val()),
                    "interest": parseFloat(debtInterest.val()),
                    "enabled" : true,
                }
            )
            
            //construimos la tabla
            loadTableDebt();

            //reemplazamos el texto del contenedor de deuda que agrega la informacion    
            debtText.val("");
            debtAmount.val("");
            debtInterest.val("");
        }
    });
}

function loadTableDebt(){
    
    //borramos todos las deudas que existen en la tabla
    $("#tableDebt").empty()
    
    //cargamos nuevamente todos los datos que se encuentran en el json
    //si esta deshabilitado, no los cargo (no se como eliminarlo del array sin causar problemas con los id's)
    if (dataDebts != []){
        dataDebts.forEach(function (element) {
            if(element.enabled){
                let oneMoreDebt = addElement(element.id, element.name, element.amount, element.interest);
                tableDebt.append(oneMoreDebt);
            }
        });
    }

    //guardo en el local storage
    localStorage.setItem("debts", JSON.stringify(dataDebts));

    //selecciono los botones - y por cada uno agrego una escucha, para removerlos si se presiona
    $(".elementButtonSubstract").each(function(i,element){
        $(element).click(removeDebt);
    })
}

function removeDebt(event) {
    dataDebts[event.target.dataset.id].enabled = false;
    loadTableDebt();
}

// -------------------------------------
// --------Seccion Ahorros------------
// -------------------------------------

function buildSavingsSection() {
    const savingsText = $("#savingText");
    const savingsAmount = $("#savingAmount");
    const savingsInterest = $("#savingInterest");
    const buttonAddSavings = $("#savingButton");
    
    savingsInterest.val(0);

    buttonAddSavings.click( function () {

        savingsText.val(savingsText.val().trim());

        if(savingsText.val() != "" && savingsAmount.val() != 0){
            //ingresamos los datos al json que los guardará
            
            dataSavings.push(
                {
                    "id": dataSavings.length,
                    "name": savingsText.val(),
                    "amount": parseFloat(savingsAmount.val()),
                    "interest": 0,
                    "enabled" : true,
                }
            )
            
            //construimos la tabla
            loadTableSavings();

            //reemplazamos el texto del contenedor de deuda que agrega la informacion    
            savingsText.val("");
            savingsAmount.val("");
            savingsInterest.val(0);
        }

    });
}

function loadTableSavings(){
    //borramos todos las deudas que existen en la tabla
    let tableSavings = $("#tableSavings");
    tableSavings.empty();

    //cargamos nuevamente todos los datos que se encuentran en el json
    //si esta deshabilitado, no los cargo (no se como eliminarlo del array sin causar problemas con los id's)
    if (dataSavings != []){
        dataSavings.forEach(function (element) {
            if(element.enabled){
                let oneMoreSavings = addElement(element.id, element.name, element.amount, element.interest);
                tableSavings.append(oneMoreSavings);
            }
        });
    }

    //guardo en el local storage
    localStorage.setItem("savings", JSON.stringify(dataSavings));

    //selecciono los botones - y por cada uno agrego una escucha, para removerlos si se presiona
    $(".elementButtonSubstract").each(function(i,element){
        $(element).click(removeSavings);
    })
}

function removeSavings(event) {
    dataSavings[event.target.dataset.id].enabled = false;
    loadTableSavings();
}

//---------------------------------------
//-------------seccion inversiones-----
//---------------------------------------

function buildInvestingsSection() {
    const investingsText = $("#investingText");
    const investingsAmount = $("#investingAmount");
    const investingsInterest = $("#investingInterest");
    const buttonAddInvesting = $("#investingButton");

    buttonAddInvesting.click( function () {

        investingsText.val(investingsText.val().trim());

        if(investingsText.val() != "" && investingsAmount.val() != 0){
            //ingresamos los datos al json que los guardará
            
            dataInvestings.push(
                {
                    "id": dataInvestings.length,
                    "name": investingsText.val(),
                    "amount": parseFloat(investingsAmount.val()),
                    "interest": parseFloat(investingsInterest.val()),
                    "enabled" : true,
                }
            )
            
            //construimos la tabla
            loadTableInvestings();

            //reemplazamos el texto del contenedor de deuda que agrega la informacion    
            investingsText.val("");
            investingsAmount.val("");
            investingsInterest.val("");
        }

    });
}

function loadTableInvestings(){
    //borramos todos las deudas que existen en la tabla
    let tableInvestings = $("#tableInvestings");
    tableInvestings.empty();

    //cargamos nuevamente todos los datos que se encuentran en el json
    //si esta deshabilitado, no los cargo (no se como eliminarlo del array sin causar problemas con los id's)
    if (dataInvestings != []){
        dataInvestings.forEach(function (element) {
            if(element.enabled){
                let oneMoreInvestings = addElement(element.id, element.name, element.amount, element.interest);
                tableInvestings.append(oneMoreInvestings);
            }
        });
    }

    //guardo en el local storage
    localStorage.setItem("investings", JSON.stringify(dataInvestings));

    //selecciono los botones - y por cada uno agrego una escucha, para removerlos si se presiona
    $(".elementButtonSubstract").each(function(i,element){
        $(element).click(removeInvestings);
    })
}


function removeInvestings(event) {
    dataInvestings[event.target.dataset.id].enabled = false;
    loadTableInvestings();
}