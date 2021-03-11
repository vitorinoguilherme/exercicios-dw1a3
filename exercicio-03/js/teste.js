var exibeMensagem = function() {
    var mensagemForaDoIf = 'Caelum';
    if(true) {
    var mensagemDentroDoIf = 'Alura';
    console.log(mensagemDentroDoIf)// Alura ;
    }
    console.log(mensagemForaDoIf); // Caelum
    console.log(mensagemDentroDoIf);// Alura
}

exibeMensagem()
console.log("--------")

var exibeMensagem = function() {
    mensagem = 'Alura';
    console.log(mensagem);
    var mensagem;
    }

exibeMensagem()
console.log("--------")

var exibeMensagem = function() {
    if(true) {
        var escopoFuncao = "Caelum";
        let escopoBloco = 'Alura';

        console.log(escopoBloco);
    }
    console.log(escopoFuncao);
    console.log(escopoBloco);
}

exibeMensagem()
console.log("--------")