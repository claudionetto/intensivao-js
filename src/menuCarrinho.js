import { catalogo } from "./utilidades";

const idsProdutosCarrinhoComQuantidade = {};

function abrirCarrinho() {
  const carrinho = document.getElementById("carrinho");
  carrinho.classList.remove("right-[-360px]");
  carrinho.classList.add("right-[0px]");
}

function fecharCarrinho() {
  const carrinho = document.getElementById("carrinho");
  carrinho.classList.remove("right-[0px]");
  carrinho.classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}


function removerCarrinho(idProduto){
  delete idsProdutosCarrinhoComQuantidade[idProduto];
  renderizarProdutosNoCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutosCarrinhoComQuantidade[idProduto]++;
  atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {

  if(idsProdutosCarrinhoComQuantidade[idProduto] === 1){
    removerCarrinho(idProduto);
    return;
  } 

  idsProdutosCarrinhoComQuantidade[idProduto]--;
  atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutosCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto){
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutoCarrinho = document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex", "bg-slate-200", "p-1", "rounded-lg", "relative"
  ];

  for (const articleClass of articleClasses){
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `<button id="remover-item-${produto.id}" class="absolute top-0 right-1" id="fechar-carrinho">
      <i class="fa-solid fa-circle-xmark text-slate-400 hover:text-slate-800"></i>
    </button>
    <img
      src="assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg gap-2">
      <button id="decrementar-produto-${produto.id}">-</button>
      <p id="quantidade-${produto.id}">${
    idsProdutosCarrinhoComQuantidade[produto.id]
  }</p>
      <button id="incrementar-produto-${produto.id}">+</button>
    </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutoCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));

    document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removerCarrinho(produto.id));
}

function renderizarProdutosNoCarrinho(){
  const containerProdutoCarrinho = document.getElementById("produtos-carrinho");
  containerProdutoCarrinho.innerHTML = '';
  
  for (const idProduto in idsProdutosCarrinhoComQuantidade){
    desenharProdutoNoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutosCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return;
  }

  idsProdutosCarrinhoComQuantidade[idProduto] = 1;
  desenharProdutoNoCarrinho(idProduto);
}
