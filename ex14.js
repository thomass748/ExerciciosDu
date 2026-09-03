const pessoa = {
  nome: "Mariana",
  idade: 25,
  profissao: "Desenvolvedora"
};

const apresentarPessoa = (nome, idade, profissao) => {
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e sou ${profissao}.`);
};

const {nome, idade, profissao} = pessoa;
apresentarPessoa(nome, idade, profissao);