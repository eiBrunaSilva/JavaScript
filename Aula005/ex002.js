var now = new Date()
var hour = now.getHours()
console.log(`It´s ${hour} hours`)
if(hour < 12){
  console.log('Good mornig!')
} else if (hour <= 18){
  console.log('Good aftenoon!')
} else {
  console.log('Good nigth!')
}