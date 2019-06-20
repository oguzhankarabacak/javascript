document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest");  //true default olarak atar
    xhr.onload=function(){
        if(xhr.status == 200){
            const response=JSON.parse(this.responseText);
            const rate=response.rates.TRY;
            const amount=Number(document.getElementById("amount").value);
            document.getElementById("tl").value=amount*rate;
        }
    }
    xhr.send();
}