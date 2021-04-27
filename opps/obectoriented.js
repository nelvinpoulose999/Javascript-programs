class Person{
    setPerson(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    printPerson(){
        console.log(this.id+this.name+this.age);
    }
}
var obj=new Person();
obj.setPerson(100,'amal',25);
obj.printPerson()

var obj1=new Person;
obj1.setPerson(101,'ram',26)
obj1.printPerson()