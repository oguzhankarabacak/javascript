//Object.Create objenin başka bir objenin prototype'ını kullanmasını sağlıyor

//obje için

const obj={
    test1:function(){
        console.log("test1");
    },
    test2:function(){
        console.log("test2");
    }
}
console.log(obj);
console.log("***********************");

const obj2=Object.create(obj);  //Burada obj prototype'ını miras aldık 

console.log(obj2);


//methodlar için Object.create() bir fonk. prototype'ını başka bir Constructor'ın prototype olarak kullanabiliri
function Person(){

}
Person.prototype.person1=function(){
    console.log("person1 prototype'ı");
}
Person.prototype.person2=function(){
    console.log("person2 prototype'ı");
}

function Employee(name,age){
    this.name=name;
    this.age=age;
} 

Employee.prototype=Object.create(Person.prototype);
const emp1=new Employee("oguz",21);
console.log(emp1);