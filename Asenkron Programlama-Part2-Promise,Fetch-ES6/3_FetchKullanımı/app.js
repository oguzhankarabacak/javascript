//fetch kullanarak data çekecez

//textfiledan çekecez

function getText(){
    fetch("example.txt")  //bu bize promise döner ayrıca default olarak GET request atar
    .then(function(response){
        // console.log(response);
        return response.text();  //burada promise objesinin içinden texti aldı ve promise olarak döndü
    })
    .then(function(response2){
        console.log(response2);  //burada ise then yaparak promise'yi aldı
    })
    .catch(function(err){
        console.log(err);
    });
}
getText();

//jsondan çekeceğiz sadece response.json() yapsak yeterli

function getJson(){
    fetch("example.json")  
    .then(function(response){
        // console.log(response);
        return response.json();  
    })
    .then(function(response2){
        console.log(response2);  
    })
    .catch(function(err){
        console.log(err);
    });
}
getJson();


//Uzak apı den data çekmek

function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(function(response){
        // console.log(response.json());//burada hata alıyoruz
        // console.log(response);
        return response.json();  //kısaca olay şu burada adam veriyi çekiyor ama promise şeklinde ve bunu tekrar promise olarak dönüyor
    })
    .then(function(data){
        const rates=data.rates;
        const TRY=rates.TRY;
        console.log(TRY);
    })
    .catch(function(err){
        console.log(err);
    });
}

getExternalAPI();

