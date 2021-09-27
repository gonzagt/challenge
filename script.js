// Seleccionando elementos

const balanceFinal = document.querySelector('p');
const montoIngreso = document.getElementById('ingreso_monto');
const montoEgreso = document.getElementById('egreso_monto');
const razonIngreso = document.getElementById('ingreso_tipo');
const razonEgreso = document.getElementById('egreso_tipo');
const botonIngreso = document.getElementById('ingreso_boton');
const botonEgreso = document.getElementById('egreso_boton');
const totalIngresos = document.getElementById('total_ingresos');
const totalEgresos = document.getElementById('total_egresos');
const listaMovimientos = document.getElementById('last_movements');


// Variables

let LISTA_MOVIMIENTOS = [];
let balance = 0;
let ingresos = 0;
let egresos = 0;

// Eventos

botonIngreso.addEventListener('click', function() {
    if (!montoIngreso.value || !razonIngreso.value) return;
    let ingreso = {
        propiedad: 'ingreso',
        monto: parseFloat(montoIngreso.value),
        razon: razonIngreso.value
    }
    LISTA_MOVIMIENTOS.push(ingreso)
    actualizar();
    limpiarInput([montoIngreso, razonIngreso]);
});

botonEgreso.addEventListener('click', function () {
    if (!montoEgreso.value || !razonEgreso.value) return;
    let egreso = {
        propiedad: 'egreso',
        monto: parseFloat(montoEgreso.value),
        razon: razonEgreso.value
    }
    LISTA_MOVIMIENTOS.push(egreso)
    actualizar();
    limpiarInput([montoEgreso, razonEgreso]);
});

// Funciones

const actualizar = () => {
    ingresos = calcularTotal('ingresos', LISTA_MOVIMIENTOS);
    egresos = calcularTotal('egresos', LISTA_MOVIMIENTOS);
    balance = calcularBalance(ingresos, egresos);
}

const calcularTotal = function(type, list) {
    let sum = 0;
    list.forEach(entrada => {
        if(entrada.type = type) {
            sum+=entrada.monto;
        }
    })
    return sum;
}

const calcularBalance = function(entrada,salida) {
    return entrada-salida;
}

const limpiarInput = (array) => {array.forEach(element => {
    element.value = "";    
});
}


