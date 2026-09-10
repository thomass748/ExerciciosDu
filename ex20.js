const pedido = {
  produto: "Teclado Mecânico",
  preco: 250,
  quantidade: 2
};

const calcularTotal = ({ preco, quantidade }) => {
  const total = preco * quantidade;
  return total;
}

const {produto, preco, quantidade} = pedido;
console.log(`Produto: ${produto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor unitário: R$${preco}`);  
console.log(`Total: R$${calcularTotal(pedido)}`);
