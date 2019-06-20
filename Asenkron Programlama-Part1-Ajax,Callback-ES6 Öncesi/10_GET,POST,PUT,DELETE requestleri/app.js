//burada ajax ,callback ve http request kullanacağız

// class request{
//     constructor(){
//         this.xhr=new XMLHttpRequest();
//     }
//     //GET Request
//     get(url){
//         this.xhr.open("GET",url);  //bağlantı açtık
//         this.xhr.onload=function(){
//             if(this.xhr.status===200){  //burada ve altsatırda hata alırız çünkü buradaki this onload func. içinde 
//                 console.log(this.xhr.responseText);//bu yüzden artık this requesti göstermiyor XMLHttpRequest'i gösteriyor
//             }
//         }

//         this.xhr.send();
//     }
// }
//**************************************************************************************************************** 
// //this için 1. çözüm

// class Request{
//     constructor(){
//         this.xhr=new XMLHttpRequest();
//     }
//     //GET Request
//     get(url){
//         this.xhr.open("GET",url);  //bağlantı açtık
//         const temp=this;  //buradaki temp artık requestti gösteriyor
//         this.xhr.onload=function(){
//             if(temp.xhr.status===200){ //bu en ilkel yöntem
//                 console.log(temp.xhr.responseText);
//             }
//         }

//         this.xhr.send();
//     }
// }
// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");

//********************************************************************************************************** */
//this için 2.çözüm

// class Request{
//     constructor(){
//         this.xhr=new XMLHttpRequest();
//     }
//     //GET Request
//     get(url){
//         this.xhr.open("GET",url);  //bağlantı açtık
        
//         this.xhr.onload=function(){
//             if(this.status===200){ //this zaten XMLHttpRequest gösterdiği için this.xhr yazmamıza gerek yok
//                 console.log(this.responseText);
//             }
//         }

//         this.xhr.send();
//     }
// }
// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");


//********************************************************************************************************** */
//this için 3.çözüm



// class Request{
//     constructor(){
//         this.xhr=new XMLHttpRequest();
//     }
//     //GET Request
//     get(url){
//         this.xhr.open("GET",url);  //bağlantı açtık
//         this.xhr.onload=function(){
//             if(this.xhr.status===200){ 
//                 console.log(this.xhr.responseText);
//             }
//         }.bind(this)  //bind-this ilişkisine göre onload func. dışında this Requesti gösteriyor o zaman üstteki thisler hatasız çalışır

//         this.xhr.send();
//     }
// }

// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");

//4. yöntemde ise bind ile aynı işlemi yapan arrow function'u kullanabiliriz

// *****************************************************************************************************************
//Şimdi callback kullandığımız kısma geldik

class Request{
    constructor(){
        this.xhr=new XMLHttpRequest();
    }
    //GET Request
    get(url,callback){  //buraya callback func. gönderdik
        this.xhr.open("GET",url);  //bağlantı açtık
        this.xhr.onload=function(){
            if(this.xhr.status===200){ //eğer hata yoksa
                callback(null,this.xhr.responseText);  //1. parametre hatayı 2. parametre ise text i gönderiyor
            }
            else{  //eğer hata varsa
                callback("hata oluştu",null);
            }
        }.bind(this)  //bind-this ilişkisine göre onload func. dışında this Requesti gösteriyor o zaman üstteki thisler hatasız çalışır

        this.xhr.send();
    }


    //POST Request
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-Type", "application/json")   //json tipinde veri göndereceğimizi belirmemiz lazım
        this.xhr.onload=() => {
            if(this.xhr.status === 201){   //201 POST İÇİN
                
                callback(null,this.xhr.responseText);
            }
            else{
                callback("hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));//burada data obje formunda fakat apı ile veri alışverişi string olur
    }

    //put requesti  //post'a benzer
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-Type", "application/json")   //json tipinde veri göndereceğimizi belirmemiz lazım
        this.xhr.onload=() => {
            if(this.xhr.status === 200){   //201 PUT İÇİN
                
                callback(null,this.xhr.responseText);
            }
            else{
                callback("hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));//burada data obje formunda fakat apı ile veri alışverişi string olur
    }

    //delete requesti  //get'a benzer

    
    delete(url,callback){  //buraya callback func. gönderdik
        this.xhr.open("DELETE",url);  //bağlantı açtık
        this.xhr.onload=function(){
            if(this.xhr.status===200){ //eğer hata yoksa
                callback(null,this.xhr.responseText);  //1. parametre hatayı 2. parametre ise text i gönderiyor
            }
            else{  //eğer hata varsa
                callback("hata oluştu",null);
            }
        }.bind(this)  //bind-this ilişkisine göre onload func. dışında this Requesti gösteriyor o zaman üstteki thisler hatasız çalışır

        this.xhr.send();
    }
}

//burada callback kullanmamızda amacımız olası hata durumunda asenkron durumunu engellemek

// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){  //buradaki function parametresi
//     if(err===null){                                                                //callback fonksiyonudur.
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// });


// //eğer url'nin yanına 1 eklersek json'da id'si 1 olan objeyi getirecek
// request.get("https://jsonplaceholder.typicode.com/albums/1",function(err,response){  
//     if(err===null){                                                                
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// });


// //POST request objesi
// const request=new Request();
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:118,title:"deneme"},function(err,response){
//     if(err===null){                                         //üst kısımda id eklememize gerek yok çünkü apı otomatik ekler
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }

//     }
// )


//PUT Request Objesi

// const request=new Request();                       //altta url'yi verirken 10. idyi değiştirmeliyiz dedik
// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:118,title:"deneme"},function(err,response){
//     if(err===null){                                         
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }

//     }
// )

//Delete request objesi

const request=new Request();                       //altta url'yi verirken 10. silmeliyiz dedik
request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err===null){                                         
        console.log(response);
    }
    else{
        console.log(err);
    }

    }
)

//bunun sonucu boş obje olacak çünkü sildi

