let lista = [1, 2, 5];
let listaCon = [3, 4];

for (let i = 0; i < listaCon.length; i++) {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] >= listaCon[i]) {
      lista.splice(j, 0, listaCon[i]);
      j++;
    }
  }
}
console.log(lista);

const listRes = [1, 2, ...listaCon, 5];
console.log(listaRes);

//--------

let arr = ["a", "b", "c"];

let arr2 = [...arr];

console.log(arr);
console.log(arr2);

arr2.push("d");
console.log(arr2);
