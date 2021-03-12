estacionados = [];    

class Parquimetro {
    _tempo = null;
    _troco = null;
    
    constructor() {
        this._moedas = document.getElementById('field1');
        this._output = document.getElementById('resultado_table');
    }

    validarEstacionamento() {
        var moedas = this._moedas.value;

        if (moedas < 1) {
            alert("Valor Insuficiente");
            this._moedas.focus();
            throw new Error();
        } else if (moedas>=1 && moedas<1.75) {
            this._tempo = 30;
            this._troco = moedas - 1;
        } else if (moedas>=1.75 && moedas<3) {
            this._tempo = 60;
            this._troco = moedas - 1.75;
        } else if (moedas>=3) {
            var qtd = 1;
            if (moedas / 3 ) {
                var qtd = Math.floor(moedas / 3);
            } 
            
            this._tempo = qtd * 120;
            this._troco = moedas % 3;
        }

        var resultado = `<tr>
                            <td>${parseFloat(this._moedas.value).toFixed(2)}</td>
                            <td>${this._tempo}</td>
                            <td>${parseFloat(this._troco).toFixed(2)}</td>
                         <tr>`;
       
        estacionados.push(resultado);
    }

    view = () => {
        this._output.innerHTML = `<caption>Estacionamento</caption>
                                  <tr>
                                    <th>Valor R$</th>
                                    <th>Tempo (min)</th>
                                    <th>Troco</th>
                                  </tr>${estacionados}`;
    }
}

window.addEventListener('load', ()=>{
    var inResultado = document.getElementById("field1");
    inResultado.addEventListener('change', ()=>{
        parquimetro = new Parquimetro();
        parquimetro.validarEstacionamento();
        parquimetro.view();
    })
})