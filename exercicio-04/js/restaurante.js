class Restaurante {
    constructor(kgPreco, grConsumoCliente) {
        this._kgPreco = kgPreco
        this._grConsumoCliente = grConsumoCliente
    }

    calcularConta() {
        return (this._kgPreco * (this._grConsumoCliente/1000))
    }
}

function run() {
    var kgPreco = document.getElementById("restaurante__preco-quilo").value;
    var grConsumoCliente = document.getElementById("restaurante__consumo-cliente").value;
    
    var restaurante = new Restaurante(kgPreco, grConsumoCliente);
    document.getElementById("restaurante__conta-cliente").innerHTML = `Conta Cliente = R$ ${restaurante.calcularConta()}`;
}

window.addEventListener("load", function() {
    var btConta = document.getElementById("restaurante__conta");
    btConta.addEventListener('click', run);
})