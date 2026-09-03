const produto = {
  nome: "Mouse",
  preco: 80
};

const mostrarProduto = ({nome, preco}) => {
  console.log(`Produto: ${nome} - Preço: R$${preco}.`);
}

mostrarProduto(produto);