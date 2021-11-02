const alunos = ["Jão", "Juliano", "Caio", "Ana"];
const media = [10, 7, 9, 6];

let matriz = [alunos, media];

const mostrar = (nome) => {
  // include retorna boolean
  if (matriz[0].includes(nome)) {
    let indice = matriz[0].indexOf(nome);
    return matriz[0][indice] + " sua media é " + matriz[1][indice];
  } else {
    return "Aluno não encontrado";
  }
};

console.log(mostrar("Ana"));
