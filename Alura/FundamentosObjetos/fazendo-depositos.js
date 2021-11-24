const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "654564546",
  email: "andre@email.com",
  fones: ["55912345498", "5521988743124"],
  dependentes: [
    {
      nome: "Sara",
      parentesco: "filha",
      dataNasc: "20/03/2011",
    },
    {
      nome: "Samia Maria",
      parentesco: "filha",
      dataNasc: "04/01/2014",
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);
