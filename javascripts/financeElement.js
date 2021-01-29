class FinanceElement {

    constructor(type, text, amount, interest, data){
        this.type = type;
        this.text = text;
        this.amount = amount;
        this.interest = interest;
        this.data = data;

    }

    initialize(){
        let section = document.getElementById("secondContainer");
        let div = document.createElement("div");
        div.innerHTML = 
        `<h4>${this.type[0].toUpperCase()+this.type.slice(1)}</h4>
        <div class="tableDebt" id="${this.type}table"></div>
        <div class="formToAddDebt">
            <input type="text" class="debtText" id="${this.type}Text">
            <input type="number" class="debtAmount" id="${this.type}Amount">
            <input type="number" class="debtInterest" id="${this.type}Interest">
            <button class="debtButton" id="${this.type}Button">+</button>
        </div>`
        section.appendChild(div);
        
    }

    drawElement(id, text, amount, interest) {
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

        //introduzco cada elemento dentro del primer div
        div.appendChild(textElement);
        div.appendChild(amountElement);
        div.appendChild(interestElement);
        div.appendChild(buttonElement);

        //debo retornar el div para ingresarlo en el contenedor
        return div;
    }

    // listenToTheButton(){
        
    //     const debtText = document.getElementById(this.type+"Text");
    //     const debtAmount = document.getElementById(this.type+"Amount");
    //     const debtInterest = document.getElementById(this.type+"Interest");
    //     const buttonAddDebt = document.getElementById(this.type+"Button");
    //     const tableDebt = document.getElementById(this.type+"table");
       
    //     buttonAddDebt.addEventListener('click', this.addElementToTheList);
       
    // }

    addElementToTheList(type){
        
        const elementText = document.getElementById(type+"Text");
        const elementAmount = document.getElementById(type+"Amount");
        const elementInterest = document.getElementById(type+"Interest");
        const buttonAddElement = document.getElementById(type+"Button");
        
        
        elementText.value = elementText.value.trim();

        if(elementText.value != "" && elementAmount.value != 0){
            //ingresamos los datos al json que los guardará
            
            data.push(
                {
                    "id": data.length,
                    "name": elementText.value,
                    "amount": elementAmount.value,
                    "interest": elementInterest.value,
                    "enabled" : true,
                }
            )
            

            //reemplazamos el texto del contenedor de deuda que agrega la informacion    
            elementText.value = "";
            elementAmount.value = "";
            elementInterest.value = "";
        }
    }

    loadTableElement(type){
        console.log("holis")

        const tableElement = document.getElementById(type+"table");

        //borramos todos las deudas que existen en la tabla
        while (tableElement.firstChild) {
            tableElement.removeChild(tableElement.lastChild);
        }

        //cargamos nuevamente todos los datos que se encuentran en el json
        //si esta deshabilitado, no los cargo (no se como eliminarlo del array sin causar problemas con los id's)
        if (data != []){
            data.forEach(function (element) {
                if(element.enabled){
                    let oneMoreDebt = localUser.addDebt(element.id, element.name, element.amount, element.interest);
                    tableDebt.appendChild(oneMoreDebt);
                }
            });
        }

        //guardo en el local storage
        deudas.setItem("debts", JSON.stringify(data));

        //selecciono los botones - y por cada uno agrego una escucha, para removerlos si se presiona
        const buttonSubstract = document.querySelectorAll(".debtButtonSubstract");
        buttonSubstract.forEach(function(element){
            element.addEventListener("click", deudas.removeElement);
        })
    }

    removeElement(){
        console.log("remove element")
    }

}