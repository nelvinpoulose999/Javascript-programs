var text= "hello hai hello how are";
var word=text.split(" ")
var obj={}
for(let words of word){
    if (words in obj) {
        obj[words]+=1
        
    }
    else{
        obj[words]=1
    }
}
console.log(obj);