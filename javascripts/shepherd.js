
const tour = new Shepherd.Tour({
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        classes: 'shepherd-style'
    }
});

tour.addStep({
    title: 'Bienvenido!',
    text: `Con esta pequeña app podrás estimar la cantidad de años que necesitas trabajar, ahorrando e invirtiendo consistentemente\
            todos los meses, para lograr retirarte! Es decir, construirás un\
            fondo de una cantidad tal que los retornos de tu inversión mantendán\
            tu costo de vida por siempre.`,

    buttons: [
        {
            action() {
                return this.back();
            },
            classes: 'shepherd-button-secondary',
            text: 'Volver'
        },
        {
            action() {
                return this.next();
            },
            text: 'Siguiente'
        }
    ],
    id: 'creating'
});
tour.addStep({
    // title: 'Salario',
    cancelIcon: "disabled",
    text: 'Comencemos ingresando tu salario o los \
            ingresos totales que obtienes mes a mes',
    buttons: [
        {
            action() {
                return this.back();
            },
            classes: 'shepherd-button-secondary',
            text: 'Volver'
        },
        {
            action() {
                return this.next();
            },
            text: 'Siguiente'
        }
    ],
    attachTo: {
        element: '.salary',
        on: 'bottom',
    }
})
tour.addStep({
    // title: 'Ahorro',
    cancelIcon: "disabled",
    text: 'Aquí ingresa la cantidad de tu salario que eres capaz de hacer a un lado para invertirlo es crucial.\
            ¡Tu capacidad de retiro no depende de qué tan grande sea tu salario!\
            si no del <b>porcentaje del mismo que destines a invertir</b>, ya que el restante\
            determina tu costo de vida, y por lo tanto, la cantidad total de\
            dinero que necesitas ahorrar',
    buttons: [
        {
            action() {
                return this.back();
            },
            classes: 'shepherd-button-secondary',
            text: 'Volver'
        },
        {
            action() {
                return this.next();
            },
            text: 'Siguiente'
        }
    ],
    attachTo: {
        element: '.savings',
        on: 'bottom',
    }
})
tour.addStep({
    // title: 'Interés',
    cancelIcon: "disabled",
    text: 'El interés es el porcentaje de retorno de tus ahorros.\
            Existen muchos instrumentos de inversión hoy en día\
            y dependerán de vos encontrarlos y balancear los riesgos\
            y los retornos.\
            Esta pieza es fundamental: si construyes un gran capital\
            pero no lo inviertes, eventualmente te gastarás todos tus\
            ahorros. En cambio, la estrategia ganadora es obtener\
            un retorno constante de este fondo.',
    buttons: [
        {
            action() {
                return this.back();
            },
            classes: 'shepherd-button-secondary',
            text: 'Volver'
        },
        {
            action() {
                return this.next();
            },
            text: 'Siguiente'
        }
    ],
    attachTo: {
        element: '.interest',
        on: 'bottom',
    }
})
tour.addStep({
    // title: 'Calcular!',
    cancelIcon: "disabled",
    text: 'Cuando completes todo presiona en el botón Calcular',
    buttons: [
        {
            action() {
                return this.back();
            },
            classes: 'shepherd-button-secondary',
            text: 'Volver'
        },
        {
            action() {
                return this.next();
            },
            text: 'Siguiente'
        }
    ],
    attachTo: {
        element: '.calculate',
        on: 'bottom',
    }
})

const elementsTour = new Shepherd.Tour({
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        classes: 'shepherd-style'
    }
});

elementsTour.addStep({
    cancelIcon: "disabled",
    text: 'En esta sección podrás agregar elementos adicionales a tus finanzas: <b>deudas, ahorros e inversiones</b>. Cada elemento deberá tener una descripción, el valor o monto, y el interés. Cuando termines de agregarlos puedes volver a pulsar en el botón de Calcular y observar cómo éstos modifican tus años laborales.',
    buttons: [
        {
            action() {
                return this.next();
            },
            text: 'Listo'
        }
    ],
})