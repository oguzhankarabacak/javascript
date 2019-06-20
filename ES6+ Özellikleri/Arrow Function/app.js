const merhaba=function(){
    console.log("merhaba");
}
//arrow function formatı

const merhaba_arrow=() => {
    console.log("merhaba");
}
merhaba_arrow();

//parametreli yazarsak

const merhaba_parametre=(firstname,secondname) => {
    console.log("merhaba",firstname,secondname);
}

merhaba_parametre("oguz","merve");

//tek parametre kullanırsak

const merhaba2=firstname => {
    console.log("merhaba",firstname);
}
merhaba2("oguz");

//eğer function tek işlem varsa

const merhaba3=firstname => console.log("merhaba",firstname);

merhaba3("oguzz444");

//eger function sadece return dönecekse

const cube=sayi => sayi*sayi*sayi;

console.log(cube(4));