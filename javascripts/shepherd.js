
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
            ingresos totales que obtienes mes a mes.',
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
    text: 'Aquí ingresa la cantidad de tu salario que eres capaz de hacer a un lado para invertir.\
            ¡Tu capacidad de retiro no depende de qué tan grande sea tu salario!\
            si no del <b>porcentaje del mismo que destines a invertir</b>.',
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
    text: 'El interés es el porcentaje de retorno anual de tus ahorros.\
            Existen muchos instrumentos de inversión hoy en día\
            y dependerá de vos encontrarlos y balancear los riesgos\
            y beneficios.\
            Se recomienda suponer un 4% anual en dólares, aunque se pueden\
            encontrar en el mercado retornos del 8% o hasta el 10% en\
            instrumentos relativamente seguros.',
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
    text: 'Cuando completes todo presiona en el botón <i>Calcular</i>',
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
            text: 'Finalizar'
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
    text: 'En esta sección podrás agregar elementos adicionales a tus finanzas: <b>deudas, ahorros e inversiones</b>. Cada elemento deberá tener un nombre, un monto, y el interés. Cuando termines de agregarlos puedes volver a pulsar en el botón <i>Calcular</i> y observar cómo se modifican tus años laborales.',
    buttons: [
        {
            action() {
                return this.next();
            },
            text: 'Listo'
        }
    ],
})