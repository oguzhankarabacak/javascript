//CommonJs Modüller

// const app=require("./module1"); //sadece module1. yazarsak node_modules altında arar

// // console.log(app.value);
// // app.test1();
// // app.test2();


// console.log(app);
// app.test1();
// console.log(app.employee.salary);

//ES6 sonrası import
//********************************************************************************************* */

import {test1,Person} from "./module2";

test1();
// console.log(Person.test4());
Person.test4();

//Hepsini import etmek istiyorsak
console.log("**********************************************");

import * as app2 from "./module2";  //app objesini kullanacaz


console.log(app2.Person);
app2.test1();