const prompt = require('prompt-sync')({sigint:true})

function calcularParcelas(ValorProduto, numParcelas, JurosPerc){
    var valorPacela = ValorProduto / numParcelas;
    valorComJuros = valorPacela + (valorPacela * JurosPerc / 100);

    return valorComJuros.toFixed(2);
}

    ValorProduto = parseFloat(prompt('Digite qual o valor do produto: '));
    FormaPagamento = prompt(('Digite qual será a forma de pagamento: '));


    if(FormaPagamento.toLowerCase() === "pix") {
        var desconto = ValorProduto * 0.15;
        var valorFinal = ValorProduto - desconto;
    console.log('O valor final da compra é: R$ ', valorFinal.toFixed(2));
    } else if (FormaPagamento.toLowerCase() === "credito"){
        var numParcelas = parseFloat(prompt('Digite o numero de parcelas desejado: '));
        var JurosPerc = parseFloat(prompt('Digite o percentual de juros por parcela: '));
        var valorParcelaComJuros = calcularParcelas(ValorProduto, numParcelas, JurosPerc);
        console.log('Valor de cada parcela com juros: R$' + valorParcelaComJuros)
    }else {
        var valorFinal = ValorProduto;
    console.log('O valor final da compra é: R$', valorFinal);
}
