class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log(this.name,this.age);
    }
}

class Employee extends Person {   //Persondan kalıtım yaptık
    constructor(name,age,salary){
        super(name,age);  //brada person constructor'ını miras aldı (name ve age i aldı);
        this.salary=salary;
    }
    showInfos(){  //override
        console.log(this.name,this.age,this.salary);
    }
    toString(){  //Object Prototypedaki metodu override etti
        console.log("toString employee");
    }
    raiseSalary(amount){  //Employee'e ait metod
        this.salary += amount;
    }
}

const emp1=new Employee("oguzhan",24,4000);
emp1.showInfos();

emp1.raiseSalary(400);
emp1.showInfos();

const emp2=new Employee("merve",12,3000);

emp2.raiseSalary(400);
emp2.showInfos();
console.log(emp1);