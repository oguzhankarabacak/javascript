const emp1={
    name:"oguz",
    age:21,
    salary:10000

}

/*bir sürü emp objesi oluşturmak istersek böyle sırayla yazmak sağlıklı bir yöntem değil
onun yerine bir tane constructor fonk. yazıp ondan objeler üretebiliriz(constructor fonk. isminin baş harfi büyük olmalı)*/

function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
    console.log(this);   //böyle yaptığımızda objenin özelliklerini gösterecek
    this.showInfos=function(){
        console.log(this.name,this.age,this.salary);
    }
}


//constructordan obje oluşturma

const emp2=new Employee("oguz",21,10000);
const emp3=new Employee("merve",14,5000);

console.log(emp3.name);
emp2.showInfos();

