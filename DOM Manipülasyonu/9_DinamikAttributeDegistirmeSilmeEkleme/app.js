const todoInput=document.getElementById("todo");
let element;

//class ekleme
todoInput.className="form-control newClass"; //hem öncekini hem yenisini yazdık

//yeni yöntem

todoInput.classList.add("newClass");  //class ekliyoruz
todoInput.classList.add("newClass2");

todoInput.classList.remove("form-control");  //class çıkardık

todoInput.classList.add("form-control");

element=todoInput.placeholder;  //placeholder özelliği gelecek
//veya
element=todoInput.getAttribute("placeholder");

//özellik değiştirme
todoInput.setAttribute("placeholder","naber"); //todoinput'un placeholder özelliğini değiştirdik

//özellik ekleme
todoInput.setAttribute("title","input");

element=todoInput.hasAttribute("placeholder");  //eğer özelliklik(burada placeholder) varsa true yoksa false dönecek

//özellik silme

todoInput.removeAttribute("name"); //name özelliğini kaldırdık


console.log(todoInput);