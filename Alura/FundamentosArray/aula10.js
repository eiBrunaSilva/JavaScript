const notas = [10, 6.5, 8, 7.5];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;
console.log(media);
