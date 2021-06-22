// const salvador = 'Salvador';  x
// const canoas = 'canoas';      x
// const sapucaia = 'sapucaia';   x

// V

const listaDeDestinos = new Array("salvador", "canoas", "sapucaia");
console.log(`Destinos possíveis`);
console.log(listaDeDestinos);
listaDeDestinos.push("sao leopoldo"); //adicionou mais uma na lista
console.log(listaDeDestinos);
listaDeDestinos.splice(0, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2]);
