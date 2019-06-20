/* <li class="list-group-item d-flex justify-content-between">
        Todo 1
        <a href = "" class ="delete-item">
            <i class = "fa fa-remove"></i>
        </a>

    </li> */


//Arayüze Todo Ekleme


//tüm elementleri seçtik 
const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];  //mesaj eklemek için
const secondCardBody=document.querySelectorAll(".card-body")[1];  //mesaj eklemek için
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListeners();  //sayfa yeni açıldığında

function eventListeners(){   //tüm event listenerlar
    form.addEventListener("submit",addTodo);  //formun içinde tıklandığında
    document.addEventListener("DOMContentLoaded",loadAllTodos);   //sayfayı ilk açtığımızda todolar arayüze gelecek
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
    
}
function addTodo(e){
    const newTodo=todoInput.value.trim();
    //     (trim())   girilen değerdeki boşlukları siler
    if(newTodo===""){
        showAlert("danger","lütfen bir todo girin");     //eğer todo alanı boşsa mesaj gösterecek
    }
    else{
        const todos=getTodosFromStorage();
        let index=0;
        
            
            if(todos.includes(newTodo)){  //eğer varsa
                showAlert("danger","zaten bulunuyor");
            }
            else {
                addTodoToUI(newTodo);  //arayüze todoları ekler
                addLocalStorage(newTodo);
                showAlert("success","başarıyla eklendi");
                    
            }
    }
}
function addTodoToUI(newTodo){  //aldığı strinleri list-item olarak ekleyecez

    //listıtem oluşturma
    const listItem=document.createElement("li");
    listItem.className="list-group-item d-flex justify-content-between";
    //link oluşturma
    const link=document.createElement("a");
    link.href="";
    link.className="delete-item";
    link.innerHTML= "<i class = 'fa fa-remove'></i>";
    //listItem textnode ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todoliste listıtem ekleme

    todoList.appendChild(listItem);
    



}

//bilgilendirme mesajları

function showAlert(type,message){
    // alert mesajı
    /* <div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>*/

    const alert=document.createElement("div");

    alert.className="alert alert-"+type;
    alert.appendChild(document.createTextNode(message));
    firstCardBody.appendChild(alert);

    //setTimeout  //belli bir zaman bekliyor

    setTimeout(function(){
        alert.remove();

    },2000);   //1000 milisaniye sonra function çalışacak
    
    


}
function getTodosFromStorage(){   //tododan getirme
    let todos;
    if(localStorage.getItem("todos")===null){
        
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
        
    }
    return todos;
}
function addLocalStorage(newTodo){  //depoya ekleme
    let todos=getTodosFromStorage();
    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
    
}
function loadAllTodos(){
    let todos=getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);


    });


}
function deleteTodo(e){  //todoları arayüzden silme
    // console.log(e.target);
    if(e.target.className==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","todo başarıyla silindi");
    }
}

function deleteTodoFromStorage(deleteTodoText){  //todoları depodan silme
    let todos=getTodosFromStorage();
    todos.forEach(function(todo,index){
        if (todo===deleteTodoText){
            todos.splice(index,1);  //o indexten itibaren 1 eleman sil dedik
            
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
    

}
//todoları filtreleme
function filterTodos(e){
    const filterValue=e.target.value.toLowerCase();  //hepsini küçük harfe çevirdik
    const list_items=document.querySelectorAll(".list-group-item");

    list_items.forEach(function(item){

        const text=item.textContent.toLowerCase();  //hepsini küçük harfe çevirdik

        if(text.indexOf(filterValue)=== -1 ){  //bulamadı
            item.setAttribute("style","display : none !important");   //sayfada göstermez
            //!important anlamı hiçbir css elemanı veya özelliği display:none'yi gölgelemesin kesinlikle none olsun

        }
        else {
            item.setAttribute("style","display : block");  //sayfada gösterir
        }

    });


}
function clearAllTodos(){
    if(confirm("Tümünü silmek istediğinize eminmisiniz")==true){
        //todoları arayüzden temizleme
        //1. yöntem
        // todoList.innerHTML="";  //biraz yavaş yöntem


        //2. yöntem
        while(todoList.firstElementChild != null){
            
            todoList.removeChild(todoList.firstElementChild);
            
        }
        localStorage.removeItem("todos");


    }
    


}
