//HTTP Status Code
//200:ok
//403:forbidden
//404:not found
//505:internal server error

//ReadState Code
//1:server'a bağlandı
//2:request alındı
//3:request işlendi
//4:request bitti ve response hazır

document.getElementById("btn").addEventListener("click",function(){

    const xhr=new XMLHttpRequest();

    // xhr.onreadystatechange=function(){    //readystate değiştikçe fonk. çalışacak
    //     if(this.readyState==4 && this.status == 200){  //Hem veri sağlıklı şekilde gelecek hem de responce hazır olacak
    //         console.log(this.readyState,this.status);

    //     }
    // }

    /*onreadystatechange uzun bir yöntem çünkü if else ile kontrol ediyoruz, xhr.onload eğer readyState=4 olunca çalışır
    böylece sadece veri düzgün birşekilde iletilebilmişmi diye status' kontrol ederiz */
    
    xhr.onload=function(){
        console.log("ready");
        
        if(this.status==200){
            
            document.getElementById("ajax").textContent=this.responseText;  //example.html den alıp divin içine koyduk
        }
    }
    
    xhr.open("GET","example.txt",true);  //example.txt ile js bağlantısı kuruyoruz
    

    xhr.send();  //request gönderiyoruz.Post Request olsaydı send() içine birşeyler yazardık 
});