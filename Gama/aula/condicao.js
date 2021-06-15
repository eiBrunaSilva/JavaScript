var nome = "Bruna";

if(nome ===  "Bruna"){
  console.log("Seu nome é esse mesmo")
}else if(nome === "Vinicius"){
  console.log("Seu nome não é Bruna")
}else{
  console.log("Você não tem nome")
}


switch (nome){

case "Bruna":
console.log("Seu nome é Bruna");
break;

case "Vini":
console.log("Seu nome é Vini");
break;

case "Loki":
console.log("Seu nome é Loki");
break;

default:
console.log("Seu nome é Java");
break;
}