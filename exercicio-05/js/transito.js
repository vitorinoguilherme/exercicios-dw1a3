class Transito {
    constructor() {
        this.inData = document.getElementById('inData');
        this.inMulta = document.getElementById('inMulta');
        this.output = document.getElementById('transito__resultado');
    }

    calcular() {
        var currentDate = new Date();

        var dataLimiteComDesconto = new Date(this.inData.value);
        dataLimiteComDesconto.setDate(dataLimiteComDesconto.getDate() + 90); 


        var pagamentoMulta = currentDate > dataLimiteComDesconto ? `${parseFloat(this.inMulta.value).toFixed(2)} (Sem desconto)` : `${parseFloat(this.inMulta.value - (0.2 * this.inMulta.value)).toFixed(2)} (20% desconto)`; 
        
        this.output.innerHTML = `
        <p>Data Limite para Pagamento: ${dataLimiteComDesconto.toLocaleDateString()} </p>
        <p>Valor da Multa: R$ ${pagamentoMulta}</p>`;
    }
}

window.addEventListener('load', ()=>{
    document.getElementById('inData').valueAsDate = new Date();

    document.getElementById("btCalcular").addEventListener('click', ()=>{
        var transito = new Transito();
        transito.calcular();
    })
})