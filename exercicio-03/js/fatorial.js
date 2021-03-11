class calculoFatorial {
    constructor(numberInteiro) {
        this.numberInteiro = numberInteiro;      
    }

    fatorial() {
        var resultado = 1;
        for (var count=1; count<=this.numberInteiro; count++) {
            resultado *= count;
        }
        
        return `<p>Resultado: ${resultado}</p>`;
    }
}


function run() {
    var number = parseInt(document.getElementById("number").value);
    var calculo = new calculoFatorial(number);
    document.getElementById("c-container__resultado").innerHTML = calculo.fatorial();
}

window.onload = function() {
    var btResultado = document.getElementById("btResultado");
    
    btResultado.addEventListener('click', run);
}


