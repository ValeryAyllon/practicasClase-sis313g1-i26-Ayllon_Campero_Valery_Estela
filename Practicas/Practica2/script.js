let boton = document.getElementById("btnEnviar");

boton.addEventListener("click", function () {

    let puntaje = 0;

    // Pregunta 1
    let respuesta1 = document.getElementById("respuesta1").value;
    if (respuesta1 == 2) {
        puntaje++;
    }

    // Pregunta 2
    let respuesta2 = document.getElementById("respuesta2").value;
    if (respuesta2.trim().toLowerCase() == "sucre") {
        puntaje++;
    }

    // Pregunta 3
    let respuesta3 = document.querySelector('input[name="lenguaje"]:checked');
    if (respuesta3 && respuesta3.value == "javascript") {
        puntaje++;
    }

    // Pregunta 4
    let respuesta4 = document.querySelectorAll('input[name="programacion"]:checked');
    let correctas = 0;

    respuesta4.forEach(function (respuesta) {
        if (respuesta.value == "python" || respuesta.value == "javascript") {
            correctas++;       
        }
    });

    if (correctas == 2 && respuesta4.length == 2) {
        puntaje++;
    }

    // Pregunta 5
    let respuesta5 = document.getElementById("respuesta5").value;
    if (respuesta5 != "") {
        puntaje++;
    }

    // Actualizar el puntaje en el H1
    document.getElementById("puntaje").textContent = "Total puntaje: " + puntaje;

});