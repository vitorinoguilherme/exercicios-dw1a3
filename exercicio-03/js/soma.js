class calculoSoma {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    somar() {
        return Number(this.number1) + Number(this.number2);
    }
}

function showResult() {   
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var calculo = new calculoSoma(number1,number2);
    document.getElementById("c-container__resultado").innerHTML = `<p>Resultado: ${calculo.somar()}</p>` ;
}


window.onload = function() {
    var btSoma = document.getElementById("resultado");
    btSoma.addEventListener("click", showResult);
}


