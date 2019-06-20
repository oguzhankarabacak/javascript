function merhaba(a){
    console.log("merhaba  "+a);
}
merhaba("oğuzhan");
function tanıt(name,age){
    console.log(`isim ${name}  yaş:${age}`);
}
tanıt("oguzhan",21); //hiçbir değer yazılmassa undefined atanır

//default parametre

function tanıt2(name="bilgi yok",age="bilgi yok"){
    console.log(`isim ${name}  yaş:${age}`);
}
let name;
let age=21;
tanıt2(name,age);

//return
console.log("********************");
function sqr(sayi){
    return sayi*sayi;

}
console.log("********************");
let a=sqr(5);
console.log(a);

//function expression

const merhaba2=function(){
    console.log("merhaba2");
};
merhaba2();
//IIFE immediately invaled function expression
//tanımlandığı yerde çalışan fonksiyondur
(function(name){
    console.log("merhaba  "+ name);
})("murat");
//objeler
const database={  //objenin içindeki method ve değişkenlerde veritipi belirtmeye gerek yok
    host:"localhost",
    add:function(){
        console.log("eklendi");
    },
    get:function(id){
        console.log("Elde edildi "+id);
    }
}
console.log(database.host);
database.get(15);
