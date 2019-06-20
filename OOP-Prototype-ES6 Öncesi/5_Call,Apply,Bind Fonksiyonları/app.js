//call() 
//bir fonk. farklı objelerde kullanmamızı sağlar

const obj1={
    number1:10,
    number2:20
}
const obj2={
    number1:30,
    number2:40
}
function addNumbers(number3,number4){
    console.log(this.number1+this.number2+number3+number4);
}

addNumbers(100,200); //burada this window objesini gösterir bu yüzden number1 ve number2 undefined olur ve bu işlemin
//sonucu NaN olur

addNumbers.call(obj1,100,200);  //şimdi artık this obj1 objesini gösterecek sonuç 330 olur;
addNumbers.call(obj2,100,200); //sonuç 370 olur

//apply() da aynı işlemi yapar fakat parametreleri array olarak göndermek zorundayız

addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[100,200]);
console.log("*************");

//bind() da aynı işlemleri yapar fakat bind verilen fonksiyonun yeni bir kopyasını oluşturur

const copyfunc1=addNumbers.bind(obj1);  //burada oluşturduğumuz copyfunc1 fonk. istediğimiz yerde kullanabiliriz ve artık this obj1'i gösteriyor
copyfunc1(100,200);

console.log("*********************************");

const copyfunc2=addNumbers.bind(obj2);
copyfunc2(100,200);


