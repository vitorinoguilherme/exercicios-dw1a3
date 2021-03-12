class Carro {
    constructor() {
        this.inMarca = document.getElementById('inMarca');
        this.inModelo = document.getElementById('inModelo');
        this.inYear = document.getElementById('inYear');
        this.inPrecoVenda = document.getElementById('inPrecoVenda');
        this.output = document.getElementById('carro_resultado');
        this.precoAPrazo = this.calcularPrecoAPrazo();
        this.precoAVista = this.calcularPrecoAVista();
    }

    calcularPrecoAPrazo() {
        return (this.inPrecoVenda.value * 0.5) / 12
    }

    calcularPrecoAVista() {
        return (this.inPrecoVenda.value * (1 - 0.05))
    }

    toString() {
        return `
        <p>Marca: ${this.inMarca.value}</p>
        <p>Modelo: ${this.inModelo.value}</p>
        <p>Ano Fabricação: ${this.inYear.value}</p>
        <p>Venda: ${this.inPrecoVenda.value}</p>
        <p>Venda à prazo (50% de entrada, restante dividido por 12 mesês): ${this.precoAPrazo.toLocaleString()} por mês </p>
        <p>Venda à vista (5% desconto): ${this.precoAVista.toLocaleString()}</p>
        `
    }

    viewCarro() {
        this.output.innerHTML = this.toString();
    }
}

window.addEventListener('load', ()=>{
    document.getElementById('btCalcular').addEventListener('click', ()=>{
        var carro = new Carro();
        carro.viewCarro();
    })
})