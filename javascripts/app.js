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
    

    //SECCIONES DE FINANZas
    initializeElements();

    let localUser = new User(0, 0, 0);


    //boton CALCULAR
    $("#calculate").click(function () {

        localUser.salary = parseFloat(salary.val());
        localUser.savings = parseFloat(savings.val());
        localUser.interest = parseFloat(interest.val());
        
        yearsDisplay.text(localUser.calculateYearsToRetire());

        localStorage.setItem("usuario", JSON.stringify(localUser));

        
    }
    )
    $("#mostrar").click(function(){
        
            $('#secondContainer').show(1500)}
        
    )
    $("#ocultar").click(function(){
        
            $('#secondContainer').hide(1500)}
        
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

    $("#limpiar").click(function(){
        salary.val("")
        savings.val("")
        interest.val("")
        dataDebts = [];
        dataSavings = [];
        dataInvestings = [];
        loadTableDebt();
        loadTableSavings();
        loadTableInvestings();  
    })
})

