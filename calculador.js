// definiciones
var valor_dolar = "45";

function calculator() {
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var z = Number(document.getElementById("z").value);
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