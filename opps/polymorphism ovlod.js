//many forms
//1)method overloading
//2)methid overriding
class Math{
    add(){
        console.log('no arg');
    }
    add(no1,no2){
        console.log('two arg');
    }
    add(no1,no2,no3){
        console.log('3 arg');
    }
}
var obj= new Math()
obj.add(10,20)