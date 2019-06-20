// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(data);  //olumlu sonuç
            
//         },5000);

//     });
// }
// //console.log(getData("merhaba"));  //burada PromiseStatus veya PromiseValue yazacak

// //Then ve catch ile yakalamak

// getData("merhaba").then(function(response){  //response resolve ile dönen sonuç
//     console.log(response);
// });


//Şimdi remove ile reject'i then ile catch beraber kullanacaz


//eğer gönderilen data stringse olumlu sonuç değilse olumsuz sonuç gönderecez
function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data === "string"){
                resolve(data);
            }
            else{
                reject(new Error("Lütfen bir string girin"));  //new Error hata mesajı yazmamızı sağlar
            }

        },5000);
    });
}

getData(123)                      
.then(function(response){
    console.log(response);
}).catch(function(err){  //catch ve error ayrı ayrı yazmak yerine böyle birleştirebiliriz
    console.error(err);   //console.error() hata mesajını kırmızı yazar
});


//************************************************************************************ */

//eğer then ile tekrar bir sonuç döndürürsek dönen sonuç tekrar promise objesi şeklinde olur

function addTwo(number){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }
            else{
                reject(new Error("lütfen bir sayı giriniz"));
            }
            
        },5000);
    });
}

addTwo(24).then(function(response){
    console.log(response);
    return response+2;
}).then(function(response){
    console.log(response);
}).catch(function(error){
    console.error(error);
});
//burada sonuçlar sırasıyla 24 ve 26

//burası çok önemli****
//sırayla then yazabiliriz ama yalnızca bir defa catch olmalı