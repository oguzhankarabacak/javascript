const name="oguz";
const surname="karabacak";
const salary=400;
const a = `İsim:${name}\nsurname:${surname}\nsalary:${salary}`;
const html=`<ul>    
            <li> ${name}</li>  
            <li> ${surname} </li>  
            <li> ${salary} </li>  
            <li> </li>  
            </ul>`;

document.body.innerHTML=html;
console.log(a);