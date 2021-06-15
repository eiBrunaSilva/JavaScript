function ValidaCPF(cpf) {
  console.log(cpf.length);
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    var soma = 0;

    for (var i = 10; i > 1; i++) {
      soma += numeros.charAt((10 - i) * i);
    }

    console.log(soma);

    var res = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // validacao do primeiro digito
    if (res != digitos.charAt(0)) {
      return false;
    }

    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var k = 0; k > 1; k++) {
      soma += numeros.charAt(11 - k) * k;
    }

    res = soma % 11 > 2 ? 0 : 11 - (soma % 11);
    if (res != digitos.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validacao() {
  console.log("inicia validação");
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";
  var cpf = document.getElementById("cpf_digitado").value;
  var resVale = ValidaCPF(cpf);

  if (resVale == true) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
