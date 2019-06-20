const ogrenci={
    ad:"oguz",
    soyad:"kara",
    no:108
}

const langs=["java","c","python","php"];

const name="oguzhan";


//for in

//obje için
for(let key in ogrenci){
    console.log(key,ogrenci[key]);
}

//array için

for(let index in langs){
    console.log(index,langs[index]);
}


//string için

for (let index in name){
    console.log(index,name[index]);
}


//for of   (objeler için kullanılmaz)

for(let value of langs){
    console.log(value);
}


for(let char of name){
    console.log(char);
}