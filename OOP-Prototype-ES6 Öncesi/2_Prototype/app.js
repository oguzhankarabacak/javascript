const object2=new Object(); //En temel obje
object2.name="oguzhan";

console.log(object2);


function Employee(name,age){
    this.name=name;
    this.age=age;
    this.showInfos=() => console.log(name,age);
}

/*biz burada kendi constructorımızı oluştursak bile bundan oluşturduğumuz objeler Object Prototype'ına sahip olacak */

const emp1=new Employee("oguz",21);
console.log(emp1);

//şimdi Object Prototypeında olan bir method ekleyelim

function Employee2(name,age){
    this.name=name;
    this.age=age;
    this.showInfos=() => console.log(this.name,this.age);
    this.toString=() => console.log("bu bir employee objesidir");

}

const emp2=new Employee2("oguz",21);
console.log(emp2);
emp2.toString();  //burada Employee Objesine ait olan metodu çağıracak yani Object Prototypeına ait olanı çağırmayacak

