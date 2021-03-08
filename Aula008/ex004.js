/*
function factorial(n){
  let fat = 1 
  for(let c = n; c < 1; c--){
    fat *= c
  }
  return fat
}
console.log(fatorial(5))
*/


function factorial (n) {
  if (n == 1){
    return 1
  }else{
    return n * factorial(n-1)
  }
}
console.log(factorial(5))