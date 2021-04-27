var num=123;
result=0
while (num!=0){
    digit=num%10;
    result=result+digit
    num=Math.floor(num/10)

}
console.log(result);