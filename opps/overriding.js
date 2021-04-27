class Parent{
    phone(){
        console.log('parent phone');
    }
}
class Child extends Parent{
    phone(){
        console.log('child phone');
    }
}
var obj =new Child()
obj.phone()