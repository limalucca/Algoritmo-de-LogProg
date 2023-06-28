#README
##Descrição
Este é um projeto simples em JavaScript que calcula o valor total de compras e fornece detalhes sobre a forma de pagamento. O programa solicita o valor de cada produto comprado, permite adicionar várias compras, e em seguida, calcula o total das compras. Em seguida, solicita a forma de pagamento e fornece informações adicionais com base na opção selecionada.

##Pré-requisitos
Node.js instalado (https://nodejs.org)

##Como executar o projeto
Faça o clone do repositório para o seu ambiente local:
```
git clone https://github.com/limalucca/Algoritmo-de-LogProg.git
```

Instale as dependências do projeto:
```
npm install
```

Execute o projeto:
```
node script.js
```
Siga as instruções apresentadas no console para interagir com o programa.

##Funcionamento do programa
Ao ser executado, o programa solicitará o valor de cada produto comprado. Insira o valor e pressione Enter.

Após cada compra, será perguntado se deseja fazer outra compra. Responda com 's' para continuar adicionando compras ou com 'n' para encerrar.

Após inserir todas as compras, o programa calculará o total das compras.

Em seguida, será solicitada a forma de pagamento. Digite '1' para PIX ou '2' para pagamento com cartão de crédito.

Dependendo da forma de pagamento selecionada, o programa fornecerá informações adicionais:

Para PIX: Será aplicado um desconto de 15% no valor total das compras, e o programa exibirá o valor final com o desconto aplicado.
Para pagamento com cartão de crédito: Será solicitado o número de parcelas desejado. O programa calculará o valor de cada parcela com base no número de parcelas e no juros de 10% (valor fixo). Em seguida, exibirá o valor de cada parcela com juros.
Por fim, o programa perguntará se deseja confirmar a compra. Responda com 's' para confirmar ou com 'n' para cancelar.

Após a confirmação da compra, o programa exibirá os detalhes da compra, incluindo a forma de pagamento selecionada, desconto (caso seja PIX), número de parcelas (caso seja cartão de crédito), valor das parcelas com juros (caso seja cartão de crédito) e o valor final da compra.