import {Request} from "./request";
import {UI} from "./ui";


//Elementleri Seçme

const form=document.getElementById("employee-form");
const nameInput=document.getElementById("name");
const departmentInput=document.getElementById("department");
const salaryInput=document.getElementById("salary");
const employeesList=document.getElementById("employees");
const updateEmployeeButton=document.getElementById("update");



const request=new Request("http://localhost:3000/employees");
const ui=new UI();

let updateState=null;

// request.get().then(response => console.log(response))
// .catch(err => console.log(err));  //Deneme Amaçlı 

//  request.post({name:"oguzhan",department:"memur",salary:6000}).then(response => console.log(response));


// request.delete(7).then(response => console.log(response));

eventListeners();

function eventListeners(){
    
    document.addEventListener("DOMContentLoaded",getAllEmployees);
    form.addEventListener("submit",addEmployee);
    employeesList.addEventListener("click",UpdateOrDelete);
    updateEmployeeButton.addEventListener("click",UpdateEmployee);
    

}

function getAllEmployees(){
    
    request.get()
    .then(employees => {
        
        ui.addAllEmployeesToUI(employees);
        

    })
    .catch(err => {
        console.log(err);

    });
}
function addEmployee(e){
    console.log()
    const employeeName=nameInput.value.trim();
    const employeeDepartment=departmentInput.value.trim();
    const employeeSalary=salaryInput.value.trim();

    if(employeeName === "" || employeeDepartment === "" || employeeSalary === ""){
        alert("lütfen boş alan bırakmayınız");
    }
    else {
        let data={
            name:employeeName,
            department:employeeDepartment,
            salary:Number(employeeSalary)
        }
        request.post(data)
        .then(response => {
            console.log("database eklendii");
            ui.addEmployeeToUI(response);

        })
        .catch(err => console.log(err+ "data erri"));
        
    }


    ui.clearInputs();
    e.preventDefault();

}
function UpdateOrDelete(e){
    
    if(e.target.id === "delete-employee"){
        let userId=Number(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        request.delete(userId).then(message => {
            ui.deleteEmployeeFromUI(e.target.parentElement.parentElement);

        }).catch(err => console.log(err));
    }
    else if(e.target.id === "update-employee"){
        
        updateEmployeeContoller(e.target.parentElement.parentElement);
    }
}
function updateEmployeeContoller(targetEmployee){
    ui.toggleUpdateButton(targetEmployee);
    
    if(updateState === null){
        
        updateState={
            updateId:targetEmployee.children[3].textContent,
            updateParent:targetEmployee
        }
        
    }
    else{
        updateState=null;
        
    }
    

}
function UpdateEmployee(){
    if(updateState){
        //Güncelleme
        const data={
            name:nameInput.value.trim(),
            department:departmentInput.value.trim(),
            salary:Number(salaryInput.value.trim())
        }
        
        request.put(updateState.updateId,data)
        .then(updatedEmployee => {
            ui.updateEmployeeOnUI(updatedEmployee,updateState.updateParent);
           
        })
        .catch(err => console.log(err));
    }

}