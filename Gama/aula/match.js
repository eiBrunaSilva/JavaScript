const cpf = "Meu cpf é 042.287.450-75";

const regex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}");

console.log(cpf.match(regex));
