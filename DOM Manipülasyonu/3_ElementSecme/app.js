let element;
//id'ye göre seçme
element=document.getElementById("todo-form");  //idsi todo-form olan elementleri getir

//class ismine göre seçme
element=document.getElementsByClassName("list-group-item");  //html collection
//gelen elementlerden ilkini seçmek istersek
element=document.getElementsByClassName("list-group-item")[0];  

//Tage göre seçme
element=document.getElementsByTagName("li");  //listeleri getir  //html collection



//query selector ile 3ünüde tek seferde seçebiliriz  -----> tek bir element döner
element=document.querySelector("#todo-form"); //idsi todo-form olanları getir


element=document.querySelector("li");  //ilk gördüğü li tagini getirecek

element=document.querySelector(".list-group-item");  // ilk bulduğu classı getirecek

//bütün classları ve taglari getirmek istersek

element=document.querySelectorAll(".list-group-item"); //Nodelist olarak dönecek



console.log(element);

