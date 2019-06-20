//local strorage  key-value yapısı vardır

//butonlar

const add=document.querySelector("#add");
const del = document.querySelector("#delete");
const clear=document.querySelector("#clear");


//inputlar

const addKey=document.querySelector("#addkey");
const addValue=document.querySelector("#addvalue");
const deleteKey=document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",delItem);
clear.addEventListener("click",clearItem);

function addItem(e){  //önce key sonra value verirsin ve ekler
    localStorage.setItem(addKey.value,addValue.value);
}

function delItem(e){  //verdiğin keye göre değer siler
    localStorage.removeItem(addKey.value);
}
function clearItem(e){  //Hepsini temizler
    localStorage.clear();
}

//değer sorgulama

console.log(localStorage.getItem("yikik"));  //eğer yoksa null döner //key veriyoruz

//hem key hemde value string olarak kaydedilir


//local storage array yazma

const todos=["todo1","todos2","todos3"];
localStorage.setItem("todos",todos); //string olarak yazdı

//array olarak yazmak için

localStorage.setItem("todos",JSON.stringify(todos));

//array olarak yazılanı almak için
const value=JSON.parse(localStorage.getItem("todos"));
console.log(value);