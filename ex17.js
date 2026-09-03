const aluno = {
  nome: "Lucas",
  nota1: 8,
  nota2: 6
};

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;

const {nome, nota1, nota2} = aluno;

console.log(`${nome} ficou com ${calcularMedia(nota1, nota2)} de média.`);