function abrirCarrinho(){
    const carrinho = document.getElementById("carrinho");
    carrinho.classList.remove("right-[-360px]");
    carrinho.classList.add("right-[0px]");
}

function fecharCarrinho(){
    const carrinho = document.getElementById("carrinho");
    carrinho.classList.remove("right-[0px]");
    carrinho.classList.add("right-[-360px]");
}

export function inicializarCarrinho(){
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}