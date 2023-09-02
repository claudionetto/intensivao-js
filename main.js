
import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogos";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosNoCarrinho } from "./src/menuCarrinho";


renderizarCatalogo();
atualizarPrecoCarrinho();
renderizarProdutosNoCarrinho();
inicializarCarrinho();
inicializarFiltros();