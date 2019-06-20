//Set Timeout   

// setTimeout(function(){
//     console.log("naber");
// }, 4000);   //4 saniye sonra functionı çalıştıracak


//Setinterval ve clearinterval

let i=0;
let a=setInterval(function(){
    console.log("naber",i++);
},1000);  //2 saniye aralıklarla fonksiyonu çalıştıracak


document.getElementById("btn").addEventListener("click",function(){  //butona basınca naber yazmayı bırakacak
    clearInterval(a);   //intervali durduruyor eğer durdurmassak interval hep çalışır
    console.log("durdu");
});
