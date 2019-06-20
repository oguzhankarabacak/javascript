// async function get(data){   //eğer foksiyon async ise o fonksiyon promise döner
//     return data;  //brada js,datayı otomatik olarak resolve kısmına koyuyor

// }

// //Bu aslında şuna eşitti

// async function get2(data){
//     return new Promise(function(resolve,reject){
//         resolve(data);
//     });
// }

// console.log(get("merhaba"));
// console.log(get2("merhaba"));


// //await kelimesi --> bir promise'in resolve(olumlu) dönüş yapmasını bekleyen bir anahtar kelime

// async function get3(data){
//     let promise=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("bu bir değerdir");
//         },5000);

//     });
//     let response=await promise;  //bu satır buraya 5 saniye bekleyecek aşağısındaki hiçbir kod çalışmayacak
//     console.log(response);//response="bu bir değerdir";
//     console.log("naber");
// }

// get3("merhaba");  //then'e gerek yok

// //await sadece async fonksiyonları içinde çalışır

// //fonksiyon response dönerse

// async function test(data){
//     let promise=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(data);
//         },5000);
//     });
//     let response=await promise;
//     return response;   //burada response = data'ydı fakat async fonksiyonlar promise döndüğü için bu fonk. promise dönecek
// }

// test("merhaba").then(response => console.log(response));  //promise döndüğü için then ile almak zorundayız


//hem resolve hem reject olursa aynı fetch'deki gibi olur

async function test2(data){
    let promise=new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data === "string"){
                console.log(data);
            }
            else{
                console.log("bu bir string değildir");
            }
        },5000);
    });
    const response=await promise;
    console.log(response);  //burada data veya bu bir string değildir yazısı yazacak
    return response;
}

test2(1234).then(response => console.log(response))
.catch(err => console.log(err));


//async,await ile fetch fonk. kullanımı

async function getCurrency(url){
    console.log(fetch(url));  //promise yazacak
    const response=await fetch(url);  //fetch promise öbjesi döner //response response objesidir
    console.log(response);  //responce objesi
    const data=await response.json();  //data json objesi oluyor
    return data;  //data promise olarak dönüyor
}

getCurrency("https://api.exchangeratesapi.io/latest").then(response => console.log(response));


