const notas = [10, 9, 8, 7, 6];
const notasAtu = notas.map((nota) => (nota == 10 ? nota : ++nota));
console.log(notasAtu);

let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];
const nomesBonitinhos = nomes.map((nome) => nome.toUpperCase());
console.log(nomesBonitinhos);
