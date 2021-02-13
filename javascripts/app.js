$(document).ready(function () {

    //iniciar el tour de shepherd si es la primera vez en la pagina
    if(localStorage.getItem("usuario")==null){
        tour.start();
        $('#secondContainer').hide();
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

        setTimeout(function(){
        $('#secondContainer').slideDown(1500)},
        3000,
        );
    }
    )

    $("#ejemplo").click(function(){
        $.ajax({
            url: "javascripts/data.json",
            dataType: "json",
            success: function(e){
                console.log("SUCCESS");
                salary.val( e.usuario.salary)
                savings.val(e.usuario.savings)
                interest.val(e.usuario.interest)
                dataDebts = e.deudas;
                dataSavings = e.ahorros;
                dataInvestings = e.inversiones
                loadTableDebt();
                loadTableSavings();
                loadTableInvestings();  
            },
            error: function(){
                console.log("FAIL");
            }
        })
    })
})

