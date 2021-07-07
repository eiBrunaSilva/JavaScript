class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  #saldo = 0; // --> privado, não pode acessar fora da classe

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return; // --> vai parar o programa
    }
    this.#saldo += valor;
  }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Bruna";
cliente1.cpf = 111222000;

const contaCorrenteBruna = new ContaCorrente();
contaCorrenteBruna.agencia = 1001;

console.log(contaCorrenteBruna.saldo);
contaCorrenteBruna.depositar(2000);
console.log(contaCorrenteBruna.saldo);

// let valorSacado = 200;
// contaCorrenteBruna.saldo -= valorSacado;
// console.log(contaCorrenteBruna.saldo);

const valorSacado = contaCorrenteBruna.sacar(100);
console.log(valorSacado);
console.log(contaCorrenteBruna);
