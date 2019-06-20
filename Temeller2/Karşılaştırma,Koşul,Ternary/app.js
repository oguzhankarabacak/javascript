console.log("2"==2);  //string'e çevrilir true
console.log(2 != 4);
console.log("2"===2); //hem değere hem veritipine bakar false
console.log(!(2===2));
console.log((2==="2")&&(2 != 4)); //and
console.log((2==="2")||(2 != 4)); //or
console.log(2!==2); //false
console.log(2!=="2"); //true

//koşul

const numb=2;

if(numb==2){
    console.log("sayı 2'dir");
}
else if(numb==3){
    console.log("sayı 3'dür");

}
else{
    console.log("sayı 2 ve 3 değil");

}
//ternary operator sadece if ve else'li durumlar için geçerli

const numb2=10;

console.log(numb2===10?"Sayı 10":"sayı 100 değil");