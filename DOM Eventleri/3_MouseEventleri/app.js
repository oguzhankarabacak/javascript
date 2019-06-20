const cardbody=document.querySelectorAll(".cardBody")[1];
const title=document.querySelector("#tasks-title");


//click eventi   //mouse tıkladığımız anda olur

// title.addEventListener("click",run);

// function run(e){
//     console.log(e.type);  //event tipini gösterir
// }


//double click   //çift tıkladığımızda oluşacak

// title.addEventListener("dblclick",run2);

// function run2(e){
//     console.log(e.type);
// }


//mousedown  //click eventine benzer sadece basıp tuttuğumuzda mousedown oluşuyor

// title.addEventListener("mousedown",run3);

// function run3(e){
//     console.log(e.type);
// }


//mouseup  //mouse a tıklayıp elimizi çektiğimizde oluşur


// title.addEventListener("mouseup",run4);

// function run4(e){
//     console.log(e.type);
// }


//mouseover   //elementin üzerine geldiğimiz zaman oluşan bir event.Tıklamaya gerek yok sadece üzerine gelmek yeterli

title.addEventListener("mouseover",run5);

function run5(e){
    console.log(e.type);
}


//mouseout  //elementten çıkdığımız anda oluşan event

title.addEventListener("mouseout",run6);
function run6(e){
    console.log(e.type);
}