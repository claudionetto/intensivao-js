import { apagarDoLocalStorage, desenharProdutoCarrinhoSimples, lerLocalStorage, salvarLocalStorage } from "./src/utilidades";

function desenharProdutoCheckout(){
    const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

    for(const idProduto in idsProdutosCarrinhoComQuantidade){
        desenharProdutoCarrinhoSimples(idProduto, "container-produto-checkout", idsProdutosCarrinhoComQuantidade[idProduto]);
    }
}

function finalizarCompra(evento){ 
    evento.preventDefault();
    const idsProdutosCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    if (Object.keys(idsProdutosCarrinhoComQuantidade).length === 0){
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutosCarrinhoComQuantidade
    }
    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage('historico', historicoDePedidosAtualizado);
    apagarDoLocalStorage('carrinho');
    window.location.href = window.location.origin + "/pedidos.html";
}

desenharProdutoCheckout();

document.addEventListener('submit', (evt) => finalizarCompra(evt));