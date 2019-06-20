const cities=new Map();

cities.set("ist",15);
console.log(cities.get("ist"));   //burada biz mapten primitive veri tipi(string) ile değeri alıyoruz o yüzden değer geliyor

cities.set([1,2,3],25);
console.log(cities.get([1,2,3]));  
/* yukarıda undefined sonucunu aldık çünkü array bir reference veri tip ve bizim set ve getteki arrayler
farklı pointerlara sahip o yüzden undefined sonucunu almamak için arrayleri bir değişkene atamalıyız */

const arr=[1,2,3,4];
cities.set(arr,45);
console.log(cities.get(arr));  //burada 45 sonucunu aldık 
