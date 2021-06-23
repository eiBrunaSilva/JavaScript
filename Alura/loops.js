const listaDeDestinos = new Array("salvador", "canoas", "sapucaia");
const idade = 15;
const acompanhado = true;
let passagemComprada = false;
const destino = "canoas";

//while
// const podeComprar = idade >= 18 || acompanhado == true;
// let contador = 0;
// let destinoExiste = false;
// while (contador < 3) {
//   if (listaDeDestinos[contador] == destino) {
//     console.log("Destino existe");
//     destinoExiste = true;
//     break;
//   }
//   contador++;
// }

//for

const podeComprar = idade >= 18 || acompanhado == true;
let contador = 0;
let destinoExiste = false;
for (let i = 0; i < 3; i++) {
  if (listaDeDestinos[i] == destino) {
    console.log("Destino existe");
    destinoExiste = true;
    break;
  }
}
