//local storageda değerleri depoladığımız zaman değerleri silmediğimiz sürece değerler sabit kalıyor(browseri kapatsak bile)
//session da sekmeyi veya browseri kapatırsak veriler siliniyor(session key-value yapısına göre depolar)

//session ve local storage window objesinin içinde

//session storage


//add butonu,del butonu,hepsini sil butonu
const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

//inputlar

const addKey=document.querySelector("#addkey");
const addValue=document.querySelector("#addvalue");
const deleteKey=document.querySelector("#deletekey");

//eventler

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);

function addItem(e){
    sessionStorage.setItem(addKey.value,addValue.value);
}
function deleteItem(e){
    sessionStorage.removeItem(deleteKey.value);
}
console.log(sessionStorage.getItem("hareket1"));

//aynı key'e farklı value girersek güncellenir

function clearItem(e){
    sessionStorage.clear();
}






