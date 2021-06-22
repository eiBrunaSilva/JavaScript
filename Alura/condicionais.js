const listaDeDestinos = new Array("salvador", "canoas", "sapucaia");
const idade = 15;
const acompanhado = true;

// condição simples

// if (idade >= 18) {
//   console.log(`Destinos possíveis`);
//   console.log(listaDeDestinos);
// } else {
//   console.log(`Você é menor de idade e não pode comprar uma passagem!`);
// }

// condição encadeada

// if (idade >= 18) {
//   console.log(`Destinos possíveis`);
//   console.log(listaDeDestinos);
// } else if (acompanhado == true) {
//   console.log(`Destinos possíveis`);
//   console.log(listaDeDestinos);
// } else {
//   console.log(
//     `Você é menor de idade e não está acompanhado, você não pode comprar!`
//   );
// }

// switch
const dia = 6;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Esse dia não existe! Tente outro!");
}
