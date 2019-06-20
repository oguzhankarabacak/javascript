// es6 ile beraber classlar yazıyoruz ama arka planda prototype olarak çalışıyor

//prototype örneği

function Employee(name,age,salary){
    this.name=name;
    this.age=Age;
    this.salary=salary;
}

Employee.prototype.showInfos=function(){
    console.log(this.name,this.age,this.salary);
}


//bunu şimdi class ile yazıyoruz 

class Employee2{  //class içinde yazılan methodlar direk prototype'a kaydedilir
    constructor(name,age,salary){  //BAŞINA FUNCTİON YAZMAMIZA GEREK YOK
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    showInfos(){
        console.log(this.name,this.age,this.salary);
    }


}

const emp1=new Employee2("oguz",21,4000);
console.log(emp1);
emp1.showInfos();
console.log(emp1.name);