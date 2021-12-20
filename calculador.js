// definiciones
var valor_dolar = "45";

//funciones

function calculo_area() {
    var largo = Number(document.getElementById("largo").value);
    var ancho = Number(document.getElementById("ancho").value);
    var alto = Number(document.getElementById("alto").value);
    var result = largo*ancho*alto;
    document.getElementById("consumo").innerHTML =  result;
}

function calculator() {
    calculo_area();
    var largo = Number(document.getElementById("largo").value);
    var ancho = Number(document.getElementById("ancho").value);
    var alto = Number(document.getElementById("alto").value);
    var p = Number(30);
    var result;
    var calc = document.getElementById("tipo-caja").value
    switch (calc) {
        case "1":
        result = z * p;
        break;
        case "2":
        result = x * p + 50;
        break;
        case "3":
        result = x * p + 30;
        break;

    }

    document.getElementById("result").innerHTML = " = " + result;
}