//ABABC
var text='ABABC';
var obj={}
for(let ch of text){
    if (ch  in obj) {
        console.log(`${ch} is the first recurssive element`);
        break;
        
    }
    else{
        obj[ch]=1
    }
}