const prompt = require('prompt-sync')({sigint:true})

function calcularParcelas(ValorProduto, numParcelas, JurosPerc){
    var valorPacela = ValorProduto / numParcelas;
    valorComJuros = valorPacela + (valorPacela * JurosPerc / 100);

    return valorComJuros.toFixed(2);
}

    var continuar = true;

    while(continuar){
    ValorProduto = parseFloat(prompt('Digite qual o valor do produto: '));
    FormaPagamento = prompt(('Digite qual será a forma de pagamento: '));
    

        var detalhesCompra = '';


        if(FormaPagamento.toLowerCase() === "pix") {
            var desconto = ValorProduto * 0.15;
            var valorFinal = ValorProduto - desconto;
            detalhesCompra += 'Forma de pagamento: Pix\n';
            detalhesCompra += 'Desconto: R$ ' + desconto.toFixed(2) + '\n';
            detalhesCompra += 'Valor final da compra: R$ ' +valorFinal.toFixed(2);
        
        
        } else if (FormaPagamento.toLowerCase() === "credito"){
            var numParcelas = parseFloat(prompt('Digite o numero de parcelas desejado: '));
            var JurosPerc = parseFloat(prompt('Digite o percentual de juros por parcela: '));
            var valorParcelaComJuros = calcularParcelas(ValorProduto, numParcelas, JurosPerc);
            detalhesCompra += 'Forma de pagamento: Crédito\n'
            detalhesCompra += 'Número de parcelas: ' + numParcelas + '\n';
            detalhesCompra += 'Valor da parcela com juros: ' + valorParcelaComJuros;
        
        
        }else {
            var valorFinal = ValorProduto;
            detalhesCompra += 'Forma de pagamento: Outros\n';
            detalhesCompra += 'Valor Final da compra: R$ ' + valorFinal.toFixed(2);

        }
        
        var confimaCompra = prompt('Deseja confirmar sua compra? (sim/nao): ');
        if(confimaCompra.toLowerCase() !== 'sim'){
            console.log('COMPRA CANCELADA!!');
            break; 
        }
        

        console.log('DETALHES DA COMPRA:\n', detalhesCompra);

        var resposta = prompt('Deseja fazer outra compra? (sim/nao): ');
        if (resposta.toLowerCase() !== 'sim'){
        continuar = false;
        console.log('Obrigado pela preferência!!');
    
    }
}