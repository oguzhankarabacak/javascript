//primitive (ilkel) number,string,boolean,undefined
var b=20;
var a=20;

console.log(a+b);
console.log(typeof a);

var c="merhaba";
console.log(c);
console.log(typeof c);

var d=true;
console.log(typeof d);

var d=null;
console.log(typeof d);  //çıkan sonuç js bugundan kaynaklanıyor


var f;

console.log(typeof f); //undefined


//reference (gelişmiş) array,kendi objemiz,zaman,tarih ve primite haricindeki diğer tipler

var number=[1,2,3,4,5,6];
console.log(typeof number);

console.log(number[0]);


var date=new Date();
console.log(date);

console.log("********************************");
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude);
        console.log(longitude);
    });
    
}
