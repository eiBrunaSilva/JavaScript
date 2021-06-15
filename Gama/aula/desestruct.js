const pessoa = {
  nome: "Bruna",
  sobrenome: "Silva",
  idade: 18,
};

console.log(pessoa);

let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;

let { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);
