let num = [5, 8, 2, 9, 3]

console.log(`Our array is ${num}`)
console.log(`The array have ${num.length} positions`)
console.log(`The array in ascending order is ${num.sort()}`)
/*
for(var c = 0; c <= num.length; c++){
  console.log(`The position ${c} has the value ${num[c]}`)
}
*/
for(let c in num){
  console.log(`The position ${c} has the value ${num[c]}`)
}