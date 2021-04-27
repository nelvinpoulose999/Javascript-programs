// map
var arr=[10,20,30,40,50,11,51]
var cube=arr.map(num=>num**3)
console.log(cube);

//filter
var even=arr.filter(num=>num%2==0)
console.log(even);

//using foreach
var cube=arr.map(num=>num**3).forEach(num=>console.log(num))