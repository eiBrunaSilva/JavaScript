import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";

const cliente1 = new Cliente();
// const cliente2 = new Cliente();

cliente1.nome = "Bruna";
cliente1.cpf = 111222000;

// cliente2.nome = "Alex";
// cliente2.cpf = 111223325;

const contaCorrenteBruna = new ContaCorrente();
contaCorrenteBruna.agencia = 1001;
contaCorrenteBruna.cliente = cliente1;

contaCorrenteBruna.depositar(500);

const conta2 = new ContaCorrente();
conta2.Cliente = new Cliente();
conta2.cliente.nome = "Alex";
conta2.cliente.cpf = 11122229;
conta2.agencia = 102;
console.log(conta2);

contaCorrenteBruna.tranferir(200, conta2);
console.log(conta2);
