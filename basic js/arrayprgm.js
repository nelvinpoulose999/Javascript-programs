var num = [10,50,111,30,12]
console.log(num[0])
for (let num1 of num ){
    console.log(num1)
}
num.push(50);
console.log(num)
num.pop()
console.log(num)
// num.sort((a,b)=>a-b)
// console.log(num);
// num.sort((a,b)=>b-a)
// console.log(num);
num.sort((a,b)=>a<b? -1:1)
console.log(num);
num.sort((a,b)=>a>b? -1:1)
console.log(num);
