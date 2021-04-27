class Employee{
    constructor(id,name,desig,sal){
        this.id=id
        this.name=name
        this.desig=desig
        this.sal=sal
    }
    printEmp(){
        console.log(this.id,this.name,this.desig,this.sal);
    }
        
}
var arr=[]
var obj=new Employee(100,'ram','developer',10000)
var obj1=new Employee(101,'amal','testing',15000)
var obj2=new Employee(102,'raj','developer',30000)
var obj3=new Employee(103,'arjun','QA',20000)
var obj4=new Employee(104,'surya','testing',25000)

arr.push(obj)
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)
arr.push(obj4)


 console.log(arr);
//employee name
  var empname= arr.map(val=>val.name)
console.log(empname);
//employees with developer 
 var empname= arr.filter(val=>val.desig=='developer')
 console.log(empname);
 //employee with 30000
 var empname= arr.filter(val=>val.sal>=30000)
 console.log(empname);
 arr.sort((emp1,emp2)=>emp1.sal-emp2.sal)
console.log(arr);
 arr.sort((emp1,emp2)=>emp1>emp2?-1:1)
 console.log(arr);
var max=arr.reduce((n1,n2)=>n1.sal>n2.sal?n1:n2)
console.log(max);
var min=arr.reduce((n1,n2)=>n1.sal>n2.sal?n2:n1)
console.log(min);
    
