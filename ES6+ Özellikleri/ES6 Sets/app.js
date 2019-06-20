const myset=new Set();

myset.add("oguz");
myset.add(123);
myset.add({ad:"oguzhan",soyad:"karabacak"});
myset.add([1,2,3,4,5,6]);

//veya

const myset2=new Set(["oguz",123,[1,2,3,4,5,6],{ad:"oguzhan",soyad:"karabacak"}]);

console.log(myset);
console.log(myset2);

const size=myset.size;

console.log(size);

myset.delete("oguz");
console.log(myset);

console.log(myset.has(123));

console.log(myset.has([1,2,3,4,5,6]));  //set'e eklediğimiz ile buradaki pointerlar farklı
console.log("***************************");

myset.forEach(function(value){
    console.log(value);
})
console.log("****************************");
for(let value of myset){
    console.log(value);
}
console.log("***************************");

//setten array oluşturma

const array2=Array.from(myset2);
console.log(array2);
