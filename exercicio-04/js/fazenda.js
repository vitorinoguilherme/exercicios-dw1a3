class Fazenda {
    constructor () {
        this.qtdChinchilas = document.getElementById("qtdChinchilas");
        this.years = document.getElementById("years");
        this._output = document.getElementById("resultado__table");
        this._listChinchilas = []
    }

    get qtdChinchilas() {
        return this._qtdChinchilas;
    }
    set qtdChinchilas(qtd) {
        if (qtd.value<2) {
            alert("Número inicial de chinchilas deve ser maior ou igual 2.")
            throw new Error("Número inicial de chinchilas deve ser maior ou igual 2.");
        }
        this._qtdChinchilas = qtd;
    }

    get years() {
        return this._years;
    }
    set years(years) {
        if (years.value<=0) {
            alert("Quantidade de anos inválido.")
            throw new Error("Quantidade de anos inválido.");
        }
        this._years = years;
    }

    calcularPrevisaoChinchilasPorAno() {
        var currentYear = new Date().getFullYear();
        var qtdChinchilas = this._qtdChinchilas.value;

        
        for (var count=1; count<=this._years.value; count++) {
            this._listChinchilas.push(
                `
                <tr>
                    <td>${++currentYear}</td>
                    <td>${qtdChinchilas *= 3}</td>
                </tr>
                `
            )
        }
    }

    displayTable() {
        this._output.innerHTML = `
        <caption>Número médio previsto de chinchilas na fazenda</caption>
        <tr>
            <th>Ano</th>
            <th>Quantidade Chinchilas</th>
        </tr>
        <tr>
            <td>${new Date().getFullYear()}</td>
            <td>${this._qtdChinchilas.value}</td>
        </tr>
        ${this._listChinchilas}
        `;
    }
}

window.addEventListener("load", ()=>{
    document.getElementById("calcular").addEventListener('click', () => {
        fazenda = new Fazenda();
        fazenda.calcularPrevisaoChinchilasPorAno();
        fazenda.displayTable();
    })
})