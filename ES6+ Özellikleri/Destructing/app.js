//array destructing

arr=[1,2,3,4,5,6];

const [number1,number2]=arr;

console.log(number1,number2);

//obje destructing


const student={
    ad:"oguz",
    soyad:"kara",
    no:118,
    bilgileriGoster:() => console.log("bilgiler gösteriliyor")
}

const {ad:bilgi1,soyad:bilgi2,no:bilgi3,bilgileriGoster:bilgi}=student;

console.log(bilgi1,bilgi2,bilgi3);

bilgi();

//function destructing

const langs=() => ["python","java","c"];

const [lang1,lang2,lang3]=langs();

console.log(lang1,lang2,lang3);