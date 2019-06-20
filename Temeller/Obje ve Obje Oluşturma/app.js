let value;
const programmer={
    name:"oguzhan",
    age:20,
    langs:["python","java","c"],
    address:{
        street:"meram",
        city:"konya"
    },
    work:function(){
        console.log("programcı çalışıyor");
    }



}

value=programmer.address.city;
programmer.work();
programmer.address.street="karapınar";
value=programmer.address.street;
value=programmer;
const programmers=[{name:"oguzhan",age:25},{name:"oguz",age:35}]; //objeden oluşan arrayler
value=programmers[0].name;

console.log(value);