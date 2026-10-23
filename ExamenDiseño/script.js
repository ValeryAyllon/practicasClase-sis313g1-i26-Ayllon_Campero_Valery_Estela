const inputMonto = document.getElementById('montoBase');
const btnCalcular = document.getElementById('btnCalcular');

const resultadoBase = document.getElementById('resultadoBase');
const resultadoIva = document.getElementById('resultadoIva');
const resultadoFinal = document.getElementById('resultadoFinal');

btnCalcular.addEventListener('click', function() {
    
    let precioBase = Number(inputMonto.value);

    if (precioBase <= 0 || inputMonto.value === "") {
        resultadoFinal.textContent = "Por favor ingrese un monto válido.";
        resultadoBase.textContent = "";
        resultadoIva.textContent = "";
        return;
    }

    let iva = precioBase * 0.13;
    let precioFinal = precioBase + iva;

    resultadoBase.textContent = "Precio base: " + precioBase;
    resultadoIva.textContent = "IVA (13%): " + iva;
    resultadoFinal.textContent = "Precio final: " + precioFinal;
});