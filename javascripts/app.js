$(document).ready(function () {

    //iniciar el tour de shepherd si es la primera vez en la pagina
    if(localStorage.getItem("usuario")==null){
        tour.start();
    }

    const salary = $("#salary");
    const savings = $("#savings");
    const interest = $("#interest");
    const yearsDisplay = $("#years");
    const buttonCalculate = $("#calculate");

    //SECCIONES DE FINANZas
    initializeElements();

    let localUser = new User(0, 0, 0);


    //boton CALCULAR
    buttonCalculate.click(function () {

        localUser.salary = parseFloat(salary.val());
        localUser.savings = parseFloat(savings.val());
        localUser.interest = parseFloat(interest.val());
        
        yearsDisplay.text(localUser.calculateYearsToRetire());

        localStorage.setItem("usuario", JSON.stringify(localUser));
    }
    )

})

