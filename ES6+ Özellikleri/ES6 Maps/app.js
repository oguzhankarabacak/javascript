// maplerde key-value ilişkisi vardır
//key veya value herhangi bir veritipi olabilir

// let myMap=new Map();

// const key1="oguz";
// const key2={a:10,b:20};
// const key3=() => 2;

// myMap.set(key1,"value1");   //mape değer ekleme
// myMap.set(key2,"value2");
// myMap.set(key3,"value3");

// console.log(myMap);

// console.log(myMap.get("oguz"));   //mapten değer alma

// console.log(myMap.size);   //map eleman sayısı

//maplerde gezinme

const cities=new Map();

cities.set("ankara",5);
cities.set("ist",20);
cities.set("izmir",4);

cities.forEach(function(value,key){
    console.log(key,value);

});

//for of

for(let a of cities){
    console.log(a);  //burada mapteki elemanları array olarak döner
}

for(let [a,b] of cities){  //destructing yaptık a=key b=value oldu
    console.log(a,b);
}

//sadece key veya value ları almak istersek

for(let key of cities.keys()){  //veya cities.values() yaparak value lar üstünden gezinebilirdik
    console.log(key);
}

//Arrayden map oluşturma 
//burada map key-value yapısı olduğu için array içinde array olmalı

const array=[["key1","value1"],["key2","value2"]];
const newMap=new Map(array);
console.log(newMap);

//mapten array oluşturma

const array2=Array.from(newMap);
console.log(array2);

