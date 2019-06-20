//Yazdığımız Constructorda metodları Prototype'e eklemeliyiz
//eğer constructorın içine yazarsak her obje oluşturduğumuzda metod oluşur ve  bellekte fazla alan kaplar 
//fakat prototype da birkere oluşur ve her obje erişebilir

function Employee(name,age){
    this.name=name;
    this.age=age;
}
Employee.prototype.shomInfos=function(){
    console.log(this.name,this.age);
}

const emp1=new Employee("oguz",21);
emp1.shomInfos();