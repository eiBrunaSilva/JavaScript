class matematica {
  soma(valor1, valor2) {
    return valor1 + valor2;
  }

  sub(valor1, valor2) {
    return valor1 - valor2;
  }
}

var instanciaMatematica = new matematica();

var res = instanciaMatematica.soma(4, 7);

console.log(res);
