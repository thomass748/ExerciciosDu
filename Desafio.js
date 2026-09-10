const notebook = {
  marca: "Dell",
  modelo: "Inspiron",
  preco: 3500,
  desconto: 500
};

const { marca, modelo, preco, desconto } = notebook;

const calcularPrecoFinal = (preco, desconto) => {
  return preco - desconto;
};

console.log(`Notebook ${marca} ${modelo}\n Preço original: R$${preco}\n Desconto: R$${calcularPrecoFinal(desconto)}\n Preço final: R$${preco - desconto}`);
