//callback bir fonsiyonun parametresinden başka bir fonk. kullanmaktır.mesela forEach,Event fonksiyonları


// function process1(callback){   //callback burada gelen bir terimdir herhangi bir özelliği yoktur
    
//     setTimeout(function() {
//         console.log("process1");
//         callback();
//     },3000);
// }

// function process2(){
//     setTimeout(function(){
//         console.log("process2");
        
//     },2000);
// }

// process1(process2);

//burada bir senkron durum söz konusu çünkü process1 çalıştıktan sonra process2 çalışıyor

const langs=["python","c","java"];

function addNew(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("eklendi");
        callback();
    },3000);

}
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang) {
            console.log(lang);
        });
    },2000);
}
addNew("javascript",getAllLangs);

/*şimdi burada önce addNew çalıştı sonra getAllLangs çalıştı ve bu fonk. toplam 5 saniyede çalıştı eğer callback 
yapmasaydık 2 saniye sonra diller yazılacaktı fakat javascript daha eklenmemiş olacaktı bu yüzden yazılan 
diller arasında javascript olmayacaktı yani burada senkron yaptık */