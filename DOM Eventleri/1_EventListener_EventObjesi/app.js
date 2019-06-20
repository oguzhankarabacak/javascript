//input eventi

const filterinput=document.getElementById("filter");
// filterinput.onfocus=function(){   //onfocus özelliği çalıştığı zaman(filterinput alanına tıklandığında) fonk çalışacak 
//     console.log("odaklandı");
// }
//ikinci yöntem
filterinput.addEventListener("focus",function(e){  //burada e eventin özelliklerini veriyor
    console.log("odaklandı");
    console.log(e);
    console.log(e.type);  //event tipini
    console.log(e.target); //event nerede oluşmuş
    console.log(e.target.className); //oluştuğu yerin class ismi



});
console.log(filterinput);

//submit eventi

const todoform=document.getElementById("todo-form");
console.log(todoform);

todoform.addEventListener("submit",submitform);  //submit butonu için geçerli
function submitform(e){
    console.log("submit eventi");

    e.preventDefault();  //default özellikleri yok sayıyoruz(engelliyoruz)
}

