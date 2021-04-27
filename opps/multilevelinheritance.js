class Parent{
    m1(){
        console.log('parent');
    }
}
class Child extends Parent{
    m2(){
        console.log('child');
    }
}
class SubChild extends Child{
    m3(){
        console.log('subchild');
    }
}
var obj=new SubChild()
obj.m3()
obj.m2()
obj.m1()