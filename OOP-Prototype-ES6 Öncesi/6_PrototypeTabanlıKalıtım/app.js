function Person(name,age){
    this.name=name;
    this.age=age;
}
console.log("***********************");
console.log(Person);

console.log("***********************");

Person.prototype.showInfos=function(){
    console.log(this.name , this.age);
}


function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}
console.log(Employee);

console.log("*************************************");

Employee.prototype=Object.create(Person.prototype);
console.log(Employee);

console.log("******************************");
const emp1=new Employee("oguz",21,7000);
console.log(emp1);
emp1.showInfos();

//Override (miras alınan metodu değiştirme)


// Employee.prototype.showInfos=function(){
//     console.log(this.name,this.age,this.salary);
// }

// emp1.showInfos();


//Call function ile de yapabiliriz

function Employee2(name,age,salary){
    Person.call(this,name,age);  //burdaki this employee2 yerine geçecek
    this.salary=salary;
}