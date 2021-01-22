class User {

    constructor(salary, savings, interest) {
        this.salary = salary;
        this.savings = savings;
        this.interest = interest;
    }

    calculateYearsToRetire() {
        let costoVida = salary.value - savings.value;
        let fondo = (costoVida * 12) / (interest.value / 100); //fondo total ahorrado necesario para retirarse

        let total = 0; //total del fondo desde que se comienza a ahorrar
        let años = 0;

        if (fondo == Infinity) {
            años = "∞"
        } else {
            while (total < fondo) {
                total = (total + savings.value * 12) * (1 + interest.value / 100);
                años += 1
            }
        }

        return años;
    }

    addInvesment() {

    }

    removeInvesment() {

    }

    buildDebtsSection() {
        const debtText = document.getElementById("debtText");
        const debtAmount = document.getElementById("debtAmount");
        const debtInterest = document.getElementById("debtInterest");
        const buttonAddDebt = document.getElementById("debtButton");

        const tableDebt = document.getElementById("tableDebt");

        buttonAddDebt.addEventListener('click', function () {

            //ingresamos los datos al json que los guardará
            data.push(
                {
                    "id": data.length,
                    "name": debtText.value,
                    "amount": debtAmount.value,
                    "interest": debtInterest.value,
                    "enabled" : true,
                }
            )
            
            //construimos la tabla
            localUser.loadTableDebt();

            //reemplazamos el texto del contenedor de deuda que agrega la informacion    
            debtText.value = "";
            debtAmount.value = "";
            debtInterest.value = "";

        });
    }

    loadTableDebt(){
        //borramos todos las deudas que existen en la tabla
        while (tableDebt.firstChild) {
            tableDebt.removeChild(tableDebt.lastChild);
        }

        //cargamos nuevamente todos los datos que se encuentran en el json
        //si esta deshabilitado, no los cargo (no se como eliminarlo del array sin causar problemas con los id's)
        data.forEach(function (element) {
            if(element.enabled){
                let oneMoreDebt = localUser.addDebt(element.id, element.name, element.amount, element.interest);
            tableDebt.appendChild(oneMoreDebt);
            }
        });
        //selecciono los botones - y por cada uno agrego una escucha, para removerlos si se presiona
        const buttonSubstract = document.querySelectorAll(".debtButtonSubstract");
        buttonSubstract.forEach(function(element){
            element.addEventListener("click", localUser.removeDebt);
        })
    }

    addDebt(id, text, amount, interest) {
        //construyo cada elemento
        const div = document.createElement("div");
        const textElement = document.createElement("input");
        const amountElement = document.createElement("input");
        const interestElement = document.createElement("input");
        const buttonElement = document.createElement("button");

        //le agrego una clase a cada elemento
        div.classList.add("formToAddDebt");
        textElement.classList.add("debtText");
        amountElement.classList.add("debtAmount");
        interestElement.classList.add("debtInterest")
        buttonElement.classList.add("debtButtonSubstract");

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

    removeDebt(event) {
        
        data[event.target.dataset.id].enabled = false;
        localUser.loadTableDebt();
    }
}
