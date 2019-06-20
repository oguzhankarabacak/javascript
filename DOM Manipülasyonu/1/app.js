console.log(this.document); //console.log(document) aynı //sayfanın html'ini gösteriyor

let value;
value=document.all; //tüm html elementleri html collection olarak gelecek (for ile gezinebiliriz for each ile gezinilmez)
// for(let i=0;i<value.length;i++){
//     console.log(value[i]);
// }
console.log(value[0]);
console.log(document.all.length); //kaç tane element var
console.log(value);
console.log("******************************");


//html collectionu arraye çevirme
const collections=Array.from(document.all); //şimdi for each ile gezinebiliriz 

// collections.forEach(function(collection){
//     console.log(collection);
// });


//Elemente erişmek

value=document.body;  //body'e eriştik
value=document.location.host;
console.log(value);


