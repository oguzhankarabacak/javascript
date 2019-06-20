//3 çeşittir global,function,block(if,for,block)

var value1=10;
let value2=20;
const value3=30;
function a(){
    var value1=40;
    let value2=50;
    const value3=60;
    console.log(value1,value2,value3); //fonk özel değerler gelir
}
a();

console.log(value1,value2,value3);


if(true){
    var a=10;
    let b=20;
    const c=30;
    console.log(a,b,c);

}
console.log(a);
// console.log(b); //hata
// console.log(c); //hata 

//burada var block içinde tanımlansa bile dışarıda varolur ama let ve const değişkenleri sadece block içinde kalır

for(let i=0;i<10;i++){
    console.log(i);
}
console.log(i); //Hata i block içinde tanımlandı