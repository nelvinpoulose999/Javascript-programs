var arr=[10,20,50,5,3,15]
arr.sort((no1,no2)=>no1-no2);
console.log(arr);
arr.sort((no1,no2)=>no2-no1);
console.log(arr);
if (no1>no2) {
    return-1
}
else{
    return 1
}