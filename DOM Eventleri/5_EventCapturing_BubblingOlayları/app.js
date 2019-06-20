//event bubbling

/*eğer içteki elementte click eventi yaparsak bu elementin parentlarına da bu click eventi geçiyor */

document.querySelector(".container").addEventListener("click",run1);

function run1(){
    console.log("div container");
}


//event capturing veya delegation

/*eğer parent bir elemente click eventi yapılırsa bu elementin childrenlarınada bu click eventi geçiyor  */