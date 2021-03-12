class PesoIdeal {
    constructor() {
        this._name = document.getElementById("name");
        this._mAltura = document.getElementById("altura");
        this._output = document.getElementById("pesoideal__resultado");
        this._genre = document.querySelector('input[name="gender"]:checked');
    }

    get name() {
        return this._name;
    }

    set genre(genre) {
        if (genre == null) {
            alert("Error in selected Sexo");
            genre.focus();
        } else {
            this._genre = genre;
        }
    }

    calculo = () => {
        try {
            if (this._genre.value == 'm') {
                return 22 * Math.pow(this._mAltura.value, 2);
            } else if (this._genre.value == 'f') {
                return 21 * Math.pow(this._mAltura.value, 2);
            } else {
                alert("Error in selected Sexo");
                this._genre.focus();
            }
        } catch (e) {
            alert(`error: ${e}`)
        }
    }

    limparCampos() {
        location.reload();
    }

    showOutput = () => {
        var genre = this._genre.value == 'm' ? 'MASCULINO' : 'FEMININO';

        var result = `<p>Nome: ${this._name.value}</p>
                  <p>Sexo: ${genre}</p>
                  <p>Peso Ideal: ${this.calculo()}</p>`
        this._output.innerHTML = result;
    } 
}

window.addEventListener('load', function() {
    var btCalcular = document.getElementById("pesoideal__btCalcular");
    btCalcular.addEventListener('click', () => {
        var pesoIdeal = new PesoIdeal();
        pesoIdeal.showOutput();
    });  

    var btLimparCampos = document.getElementById("pesoideal__limpar");
    btLimparCampos.addEventListener('click', new PesoIdeal().limparCampos);
})