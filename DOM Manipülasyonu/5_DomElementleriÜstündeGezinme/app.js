let value;
const todolist=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(1)");
const cardrow=document.querySelector(".card.row");  //iki ayrı class biri card diğeri row

// //todolist childları
// value=todolist.childNodes;  //herşeyi alır text,element
// //Atlanılan satırları almak istersek
// value=todolist.children;  //sadece elementleri alır textleri almaz

// todolist.children[2].textContent="değişti";

// value=cardrow;
// value=cardrow.children;
// value=cardrow.children[2]; //2.çocuğu alıyoruz
// value=cardrow.children[2].children[1].textContent="Değişti";
// value=todolist.firstElementChild;//ilk çocuğu alır  (son çocuk lastelementchild)
// value=todolist.children.length;  //çcukların sayısı
// //veya
// value=todolist.childElementCount;

// //Ebeveynler

// value=cardrow;
// value=cardrow.parentElement;//parent
// value=cardrow.parentElement.parentElement;//paretının parentı


//kardeşler

// value=todo;
// todo.nextElementSibling.nextElementSibling.textContent="değiştimmmmmm";  //iki ilerisine gittik
// value=todo.previousElementSibling; //bir öncekine gittik

//eğer gidecek yer olmassa null döner

value=todo;
value.textContent="değişti";
let i=0;
while(true){
    console.log(1);
    value=value.nextElementSibling;
    value.textContent="değişti"
    if(value.nextElementSibling==null){
        break;
    }
    
}

//üstteki benim çalışmam bütün todoları değişti yaptım





console.log(value);