class Campeonato {
    constructor() {
        this.inClube = document.getElementById("inClube");
    }

    get inClube() {
        return this._inClube;
    }

    set inClube(clube) {
        if (clube.value == "") {
            alert("Por favor entre com um clube valido.")
            clube.focus();

        }
        this._inClube = clube.value;
    }
}

class CubleStorage {
    constructor() {
        this.output = document.getElementById("campeonato_resultado");
    }

    add(inClube) {
        this.listClubes = [];
        
        if (inClube != "") {
            var clubeStorage = window.localStorage.getItem('clubeStorage');

            if (clubeStorage == null) {
                this.listClubes.push([inClube]);

                window.localStorage.setItem('clubeStorage', this.listClubes)

            } else if ((clubeStorage.split(',')).length > 7) {
                alert("Máximo de clubes por campeonato");
            } else {
                this.listClubes.push(inClube);
                this.listClubes.push(clubeStorage);
                
                window.localStorage.setItem('clubeStorage', this.listClubes)
            }
        }
    
    }

    display() {
        var clubeStorage = window.localStorage.getItem('clubeStorage')

        if (clubeStorage == null) {
            alert("Lista vazia.")
        } else {
            // Tratamento para criar html
            clubeStorage = clubeStorage.split(',')
            clubeStorage = clubeStorage.join('</li><li>')

            this.output.innerHTML = `
            <h2>Lista de Clubes</h2>
            <ol>
                <li>${clubeStorage}</li>
            </ol>
            
            `
        }
        
    }
}

class TableJogos {

    constructor() {
        this.output = document.getElementById("campeonato_resultado");
    }

    montar() {
        var clubeStorage = window.localStorage.getItem('clubeStorage')

        if (clubeStorage == null) {
            alert("Lista vazia.")
        } else {
            // Tratamento para criar html
            clubeStorage = clubeStorage.split(',')
            
            var rowsGames = []
            while (clubeStorage != 0) {
                let rowGame = `
                <tr>
                    <td>${clubeStorage.shift()}</td>
                    <td>${clubeStorage.pop()}</td>
                </tr>
                ` 
                rowsGames.push(rowGame);
            }

            this.output.innerHTML = `
            <table id="resultado__table">
                <caption>Tabela de Jogos</caption>
            
                
                ${rowsGames.join("")}
            </table>
            `
        }

    }

}


window.addEventListener('load', ()=>{
    //window.localStorage.removeItem('clubeStorage');

    var cubleStorage = new CubleStorage();
    document.getElementById("btAdicionar").addEventListener('click', ()=>{
        var campeonato = new Campeonato();
        cubleStorage.add(campeonato._inClube);
    })

    document.getElementById("btListar").addEventListener('click', ()=>{
        cubleStorage.display();
    })

    document.getElementById("btTabela").addEventListener('click', ()=>{
        var tableJogos = new TableJogos();
        tableJogos.montar();
    })
})



