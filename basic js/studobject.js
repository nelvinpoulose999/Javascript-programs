var student={
    id:105,
    name:'abc',
    course:'mca'
    
}
console.log(student['name']);
console.log("total" in student);
for(let key in student){
    console.log(student[key]);
}