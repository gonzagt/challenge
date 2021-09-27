// Seleccionando elementos

const balance = document.getElementById('saldoActual');
const montoIngreso = document.getElementById('ingreso_monto');
const montoEgreso = document.getElementById('egreso_monto');
const razonIngreso = document.getElementById('ingreso_tipo');
const razonEgreso = document.getElementById('egreso_tipo');
const botonIngreso = document.getElementById('ingreso_boton');
const botonEgreso = document.getElementById('egreso_boton');

// Eventos

let lista_movimientos = [];

botonIngreso.addEventListener('click', function() {
    let ingreso = {
        propiedad: 'ingreso',
        monto: parseFloat(montoIngreso.value),
        razon: razonIngreso.value
    }

    console.log(ingreso.monto);
    console.log(ingreso.propiedad);
});

botonEgreso.addEventListener('click', function () {
    let egreso = {
        propiedad: 'egreso',
        monto: parseFloat(montoEgreso.value),
        razon: razonEgreso.value
    }
    console.log(egreso.monto);
    console.log(egreso.propiedad);
});

