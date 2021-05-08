/*Faça um programa que processe alguns pedidos. Para cada pedido o programa deve ler o código do representante
(1 a 10), o total de itens do pedido e o valor da venda. O programa deve infomar:
*O valor da comissão de cada pedido
*O total de vendas dos pedidos processados
*O total de comissões para cada representante
*o total de comissoes que a companhia pagou aos seus representantes*/
let = valorDaComissaoPedido = 0
let = totalDeVendas = 0
let = totalDeComissaoRepresentante = 0
let = totalComissao = 0
valores = []
itens = []
comissoes = []
item = 0
while( item == 0){
    item = Number(prompt("Quantidade de Itens do 1º Representante: "))
    valor = prompt("Valor da venda: ")
    valores.push(valor)
    itens.push(item)
}


for (i = 1; i < 10; i++) {
    item = Number(prompt("Quantidade de Itens do " + (i + 1) + "°" + " Representante:" ))
    valor = prompt("Valor da venda: ")
    valores.push(valor)
    itens.push(item)
}
for(i = 0; i < valores.length; i++){
    if(itens[i] < 20){ //10%
        valorDaComissaoPedido = valores[i] * 0.10
        totalDeComissaoRepresentante = valorDaComissaoPedido
        comissoes.push(totalDeComissaoRepresentante)
        alert(`Valor da comissão do Pedido ${i + 1}: R$${valorDaComissaoPedido}`)
        alert(`Representante ${i+1} ganhou R$${totalDeComissaoRepresentante}`)
        
        
    }
    else if(itens[i] >= 20 && itens[i] < 50){ //15
        valorDaComissaoPedido = valores[i] * 0.15
        totalDeComissaoRepresentante = valorDaComissaoPedido
        comissoes.push(totalDeComissaoRepresentante)
        alert(`Valor da comissão do Pedido ${i + 1}: R$${valorDaComissaoPedido}`)
        alert(`Representante ${i+1} ganhou R$${totalDeComissaoRepresentante}`)
    }
    else if(itens[i] >= 50 && itens[i] < 75){ //20
        valorDaComissaoPedido = valores[i] * 0.20
        totalDeComissaoRepresentante = valorDaComissaoPedido
        comissoes.push(totalDeComissaoRepresentante)
        alert(`Valor da comissão do Pedido ${i + 1}: R$${valorDaComissaoPedido}`)
        alert(`Representante ${i+1} ganhou R$${totalDeComissaoRepresentante}`)
    }
    else if(itens[i] >= 75){ //20
        valorDaComissaoPedido = valores[i] * 0.25
        totalDeComissaoRepresentante = valorDaComissaoPedido
        comissoes.push(totalDeComissaoRepresentante)
        alert(`Valor da comissão do Pedido ${i + 1}: R$${valorDaComissaoPedido}`)
        alert(`Representante ${i+1} ganhou R$${totalDeComissaoRepresentante}`)
    }
}
const somarVendas = (acumulador, atual) => acumulador + atual
totalDeVendas = itens.reduce(somarVendas)
const somarComissões = (acumulador, atual) => acumulador + atual
totalComissao = comissoes.reduce(somarComissões)
alert(`O total de vendas foi de ${totalDeVendas} itens.`)
alert(`O total de comissões que a empresa pagou a seus representantes foi de R$${totalComissao}`)