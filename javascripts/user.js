class User {

    constructor(salary, savings, interest,) {
        this.salary = salary;
        this.savings = savings;
        this.interest = interest;
        this.loadLocalStorage();
    }

    loadLocalStorage() {
        if (localStorage.getItem("usuario")) {
            
            salary.value = JSON.parse(localStorage.getItem("usuario")).salary;
            savings.value = JSON.parse(localStorage.getItem("usuario")).savings;
            interest.value = JSON.parse(localStorage.getItem("usuario")).interest;
            this.salary = salary.value;
            this.savings = savings.value;
            this.interest = interest.value;

            const yearsDisplay = document.getElementById("years");
            yearsDisplay.textContent = this.calculateYearsToRetire();

            
        }
    }

    calculateYearsToRetire() {
        let arrayDeudasDestruidas = this.destroyDebts();
        
        let años = arrayDeudasDestruidas[0];
        let total = arrayDeudasDestruidas[1];

        let salario = this.salary;
        let ahorro = arrayDeudasDestruidas[2];
        let interes = this.interest;
        
        let costoVida = salario - ahorro;
        let fondo = (costoVida * 12) / (interes / 100); //fondo total ahorrado necesario para retirarse
        

        if (fondo == Infinity) {
            años = "∞"
        } else {
            while (total < fondo) {
                total = (total + ahorro * 12) * (1 + interes / 100);
                años += 1
            }
        }
        
        return años;
    }

    destroyDebts() {
        
        let años = 0;
        let total = 0; //es el ahorro total que iremos construyendo durante los años
        let ahorro = parseFloat(savings.value);

        //los ahorros se sumarán al total ahorrado
        if (dataSavings != []) {
            dataSavings.forEach(function (element) {
                if (element.enabled) {
                    total += element.amount;
                }
            });
        }

        //las inversiones daran un retorno mensual que sumaremos al ahorro
        if (dataInvestings != []) {
            dataInvestings.forEach(function (element) {
                if (element.enabled) {
                    ahorro += element.amount * (element.interest / 100) / 12;
                }
            });
        }
        //hasta aca .....................................
        

        //depuro las deudas
        let nuevoArray = dataDebts.map(
            function (element) {
                if (element.enabled) {
                    return [element.amount, element.interest];
                }
            }
        )
        nuevoArray = nuevoArray.filter(element => element != undefined);

        let deudasAmount = 0; //defino el monto total de las deudas
        nuevoArray.forEach(function (element) {
            deudasAmount += element[0];
        })

        //mientras que los ahorros sean mayores a las deudas, los puedo cancelar
        if (total >= deudasAmount) {
            nuevoArray.forEach(function (element) {
                total -= element[0];
                deudasAmount -= element[0];
                element[0] = 0;
            });
        } else {//si las deudas son mayores, cancelo todo lo que puedo
            nuevoArray.forEach(function (element) {
                if (total > element[0]) {
                    total -= element[0];
                    deudasAmount -= element[0];
                    element[0] = 0;
                } else {
                    deudasAmount -= element[0];
                    element[0] -= total;
                    deudasAmount += element[0];
                    total = 0;
                }
            })
        }

            while (deudasAmount > ahorro * 12) {
                let anualSavings = ahorro * 12;
                nuevoArray.forEach(function (element) {
                    if (anualSavings > element[0]) {
                        anualSavings -= element[0];
                        element[0] = 0;

                    } else {
                        element[0] -= anualSavings;
                        anualSavings = 0;
                    }
                });
                años += 1;
                deudasAmount = 0;
                nuevoArray.forEach(function (element) {
                    element[0] = element[0] * (1 + element[1] / 100);
                    deudasAmount += element[0];
                })
            }

            if (deudasAmount > 0 && deudasAmount <= ahorro * 12) {
                total = ahorro * 12 - deudasAmount;
                deudasAmount = 0;
                nuevoArray.forEach(function (element) {
                    element[0] = 0;
                })
                años += 1;
            }

        return [años, total, ahorro];
    }



}
