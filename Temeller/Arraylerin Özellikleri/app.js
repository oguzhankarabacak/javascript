let value;
const number=[43,56,33,23,44,35,5];
const number2=new Array(1,2,3,4,5,6,7);
const langs=["python","js","java"];
const mix=["merhaba",22,null,undefined,3.14]; //veritipleri farklı olabilir

value=number.length;
value=number[0];
number[2]=100000;
value=number[2];
value=number.indexOf(35);
number.push(49); //değer ekleme
value=number[number.length-1];
number.unshift(99); //başına değer ekleme
value=number[0];
value =number.pop(); //sonundan değer atma  atılan değeri döner
value=number.shift(); //başından atma
value=number.splice(0,2); //0,1 indexlerini atar
value=number;
number.reverse();  //tersine çevirme
value=number;

value=number.sort(function(x,y){  //küçükten büyüğe
    return x-y;
}); //sıralama

value=number.sort(function(x,y){  //büyükten küçüğe sıralama
    return y-x;
});





console.log(value);
