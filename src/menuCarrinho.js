import { catalogo } from "./utilidades";

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

export function adicionarAoCarrinho(idProduto){
    const produto = catalogo.find((p) => p.id = idProduto);
    const containerProdutoCarrinho = document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-200 p-1 rounded-lg relative">
    <button class="absolute top-0 right-1" id="fechar-carrinho">
      <i class="fa-solid fa-circle-xmark text-slate-400 hover:text-slate-800"></i>
    </button>
    <img
      src="assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="py-2">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
  </article>`;

  containerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho;
}