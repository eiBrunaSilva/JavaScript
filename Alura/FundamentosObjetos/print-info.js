const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "654564546",
  email: "andre@email.com",
};

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);

console.log(
  `Meus 3 primeiros números do cpf são ${cliente.cpf.substring(0, 3)}`
);
