const produto = {
  nome: "Headset",
  preco: 200,
  desconto: 20
};

const {nome, preco, desconto} = produto;

const calcularDesconto = (preco, desconto) => preco - desconto;

console.log(`Headset custava R$${preco} e agora custa R$${calcularDesconto(preco, desconto)}.`);