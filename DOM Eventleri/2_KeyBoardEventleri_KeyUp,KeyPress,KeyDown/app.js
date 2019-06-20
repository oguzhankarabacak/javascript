//klavye eventleri
// document.addEventListener("keypress",run);   //klavyede herhangi bir tuşa bastığımızda çalışır 
//harfler ve sayılar,işaretler kabul ediliyor diğerleri event yapmıyor

// function run(e){
//     // console.log("naber");
//     console.log(e.key);  //karakteri görmek için  //e.which ascii tablosundaki değerini gösterir
// }

//keydown

// document.addEventListener("keydown",run2);  //tüm tuşlar dahil , tuşa basar basmaz oluşuyor

// function run2(e){
//     console.log(e.key);

// }

//keyup

// document.addEventListener("keyup",run3);  //herhangi bir tuşu bıraktığımız zaman oluşuyor
//A ya basıyoruz a ya basıtğımızda yazı çıkmaz fakat bıraktığımız zaman event oluşur
// function run3(e){
//     console.log(e.key)
// }

//input alanına yazı yazıldığında başlık değişmesi

const header=document.querySelector(".card-header");
const todoInput=document.querySelector("#todo");

todoInput.addEventListener("keyup",run4);

function run4(e){
    console.log(e.target.value);   //input alanından yazıyı alıyoruz
    header.textContent=e.target.value;  //input alanına göre başlığı güncelliyoruz

}