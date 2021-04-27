class Person{
    constructor(id,name,age)//constructor is created name-constructor
    {
        this.id=id;//
        this.name=name;// instance variables
        this.age=age;//
    }
    printPerson(){
        console.log(this.id+this.name+this.age);
    }
}
var obj=new Person(100,'amal',25);

obj.printPerson()

var obj1=new Person(101,'ram',26); //invoking constructor during object creating

obj1.printPerson()