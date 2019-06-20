const todoList=document.querySelector("ul.list-group");  //ullerden classı list grop olanı seçtik
const todos=document.querySelectorAll("li.list-group-item");

//remove metodu
todos[0].remove();  //ilk todo silindi

//removechild
todoList.removeChild(todoList.lastElementChild);  //todolist deki son çocuk silindi
todoList.removeChild(todos[2]);  //3. elementi sildik

console.log(todoList);
console.log(todos);

