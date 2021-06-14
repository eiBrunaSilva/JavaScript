var tabuada = 7;

for(var i = 0; i < 10; i++){
console.log("Valor de "+tabuada+ " X "+i+" = "+tabuada * i)
}

var numSorte = 10;

for(var i = 0; i < 100; i++){
  if(numSorte === i){
    console.log("parabens")
  }
}


 var achou = false;
var numSorteado = 7;
var possivelValor = 10;

while(!achou){
  possivelValor +=1;
  if(numSorteado === possivelValor){
    achou = true;
  }else{
    console.log("Valor errado")
  }
}