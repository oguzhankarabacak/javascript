//pencere üzerinde yapmak istediğimiz işlemler için kullanılan js objesi
console.log(this); //üzerinde bulunduğumuz objedir.  //window dönecek çünkü window en genel objedir

console.log(window.alert("dikkat")); //alert("merhaba") ile aynı işi yapıyor


//confirm-doğrulama
const cevap=confirm("emin misiniz"); //okeyde true cancelda false döner

if(cevap){
    console.log("tebrikler");

}
else{
    console.log("olmadı ");
}

//prompt(input)

const cevap2=prompt("2+2 = ?");
console.log(typeof cevap2);
//location
let value;
value=window.location;
value=window.location.host;
console.log(value);
if(confirm("sayfa yenilensinmi")){
    window.location.reload();
}
else{
    console.log("sayFA yenilenmedi");
}

//genişlik uzunluk alma
value=window.outerHeight;
value=window.innerHeight;


//scroll
value=window.scrollX; //sayfanın x eksenindeki konumnu veriyor //scrollY
console.log(value);