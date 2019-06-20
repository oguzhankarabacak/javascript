const cardbody=document.getElementsByClassName("card-body")[1];
const newElement=document.createElement("h3");
newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="Yeni todolar";

const oldElement=document.querySelector("#tasks-title");  //eski elementi getiriyoruz
cardbody.replaceChild(newElement,oldElement); 
 //cardbody'nin iki çocupu yer değiştirdi newElement oldElementin yerine geçti

 
console.log(newElement);