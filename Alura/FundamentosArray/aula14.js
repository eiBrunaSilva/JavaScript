const sala1 = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const sala2 = [6, 5, 8, 9, 5, 6];
const sala3 = [7, 3.5, 8, 9.5];

function mediaSalas(notas) {
  const soma = notas.reduce((acumulador, atual) => atual + acumulador, 0);
  return soma / notas.length;
}

console.log(mediaSalas(sala1));
console.log(mediaSalas(sala2));
console.log(mediaSalas(sala3));

const notas = [10, 6.5, 8, 7];
const media = notas.reduce((a, b) => b + a, 0) / notas.length;
console.log(media);
