export class UI{
    constructor(){
        this.employeesList=document.getElementById("employees");
        this.updateButton=document.getElementById("update");
        this.nameInput=document.getElementById("name");
        this.departmentInput=document.getElementById("department");
        this.salaryInput=document.getElementById("salary");
        this.form=document.getElementById("employee-form");


    }
    addAllEmployeesToUI(employees){
        // <!-- <tr>
                                            
        //                                     <td>Mustafa Murat Coşkun</td>
        //                                     <td>Bilişim</td>
        //                                     <td>4000</td>
        //                                     <td>1</td>
        //                                     <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        //                                     <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        //                                 </tr>
        //                                    -->

        let result="";
        employees.forEach(employee => {
            result += `<tr>
                                            
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                        <td>${employee.id}</td>
                        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
                        </tr>`
            
        });
        this.employeesList.innerHTML=result;
    }
    clearInputs(){
        this.nameInput.value="";
        this.salaryInput.value="";
        this.departmentInput.value="";
    }
//     message(mess,type){
// //         <div class="alert alert-primary" role="alert">
// //   This is a primary alert—check it out!
// // </div>
//         let userMessage=` <div class="alert alert-${type}" role="alert">
//         ${mess}
//       </div>`
//       setTimeout(() => {
//           this.form.appendChild(userMessage);
          
//       }, 3000);
//     }
    addEmployeeToUI(employee){
        let result="";
        
        result += `<tr>
                                            
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.id}</td>
                    <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                    <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
                    </tr>`;
        this.employeesList.innerHTML += result;  
    

    }
    deleteEmployeeFromUI(element){
        element.remove();
    }
    toggleUpdateButton(target){
        if(this.updateButton.style.display === "none"){  //buton gözükmüyorsa
            this.updateButton.style.display = "block";
            this.addEmployeeInfoToInputs(target);
        }
        else {  //buton gözüküyorsa 
            this.updateButton.style.display = "none";
            this.clearInputs();
        }
    }
    addEmployeeInfoToInputs(target){
        const children=target.children;
        this.nameInput.value=children[0].textContent;
        this.departmentInput.value=children[1].textContent;
        this.salaryInput.value=children[2].textContent;

    }
    updateEmployeeOnUI(employee,parent){
        parent.innerHTML=`<tr>
                                            
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>`;
        this.clearInputs();

    }
}