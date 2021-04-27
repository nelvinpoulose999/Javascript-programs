//reduce use to bring to a single value
var arr=[10,20,50,5,3,15]
var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);