const prompt = require('prompt-sync')({ sigint: true });

var JurosPerc = 10;
var continuar = true;
var compras = [];

while (continuar) {
  ValorProduto = parseFloat(prompt('Digite qual o valor do produto: '));

  var resposta = prompt('Deseja fazer outra compra? (s/n): ');
  if (resposta.toLowerCase() !== 's') {
    continuar = false;
  }

  compras.push(ValorProduto);
}

var total = 0;

for (var i = 0; i < compras.length; i++) {
  var valorCompra = compras[i];
  total += valorCompra;
}

console.log('\nRESUMO DAS COMPRAS:');
console.log('Total geral das compras: R$ ' + total.toFixed(2) + '\n');

// FORMA DE PAGAMENTOS  
var FormaPagamento = prompt('Digite qual será a forma de pagamento (1 para PIX ou 2 para CREDITO): ');
var detalhesCompra = '';

if (FormaPagamento === "1") {
  var desconto = total * 0.15;
  var valorFinal = total - desconto;
  detalhesCompra += '\nForma de pagamento: Pix\n';
  detalhesCompra += 'Desconto: - R$ ' + desconto.toFixed(2) + '\n';
  detalhesCompra += 'Valor final da compra: R$ ' + valorFinal.toFixed(2) + '\n';
} else if (FormaPagamento === "2") {
  var numParcelas = parseFloat(prompt('Digite o número de parcelas desejado: '));
  var valorParcelaComJuros = calcularParcelas(total, numParcelas, JurosPerc);
  detalhesCompra += '\nForma de pagamento: Crédito\n';
  detalhesCompra += 'Número de parcelas: ' + numParcelas + '\n';
  detalhesCompra += 'Juros Percentual: ' + JurosPerc + '%' + '\n';
  detalhesCompra += 'Valor da parcela com juros: ' + valorParcelaComJuros+ '\n';
} else {
  var valorFinal = total;
  detalhesCompra += '\nForma de pagamento: Outros\n';
  detalhesCompra += 'Valor Final da compra: R$ ' + valorFinal.toFixed(2)+ '\n';
}

var confirmaCompra = prompt('Deseja confirmar sua compra? (s/n): ');
if (confirmaCompra.toLowerCase() !== 's') {
  console.log('COMPRA CANCELADA!!');
}

console.log('\nDETALHES DA COMPRA:\n', detalhesCompra);

// FUNÇÃO DE CALCULO PARCELAS
function calcularParcelas(ValorProduto, numParcelas, JurosPerc) {
  var valorParcela = ValorProduto / numParcelas;
  var valorComJuros = valorParcela + (valorParcela * JurosPerc / 100);

  return valorComJuros.toFixed(2);
}
