const element=document.getElementById("clear-todos");


//Element Özellikleri
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.textContent); //element içindeki yazıları getirir
// console.log(element.innerHTML); //element içindeki herşeyi getirir tag,content
// console.log(element.href);
// console.log(element.style);  //elementin css özelliklerini gösterir


//style ve element özelliklerini değiştirme 

// element.className="btn btn-warning";
// element.style.color="red";
// element.style.marginLeft="5px";  //buton sağa gidiyor
// element.href="https://www.google.com.tr";   //butona basınca gidilecek site
// element.target="_blank";  //yeni sekme
// element.textContent="silin";
// element.innerHTML="<h1>silin</h1>";

console.log(element);


//w3schools css selectorda alttaki kodları bulabiliriz

let element2=document.querySelector("li:last-child");  //son li gelecek

element2.style.background="black"; 

element2=document.querySelector("li:nth-child(2)"); //2. li gelecek

element2.style.background="blue";

element2=document.querySelectorAll("li:nth-child(odd)"); //tek(numarası 1,3,5... olan) li gelecek  (even çiftleri getirecek)

element2.forEach(function(e1){
    e1.style.background="red";  //tek olanların background u kırmızı olacak

});










console.log(element2);

