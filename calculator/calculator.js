function displayText (num){
    var input=document.querySelector("#displaybox")
    input.value+=num
    
}
function calculate() {
    var culval=document.querySelector('#displaybox').value;
    var res=eval(culval);
    var culval=document.querySelector('#displaybox').value=res;
    
    
}
function backspace(){
    var bacval=document.querySelector('#displaybox').value;
    var res=bacval.slice(0,-1);
    var bacval=document.querySelector('#displaybox').value=res;
}