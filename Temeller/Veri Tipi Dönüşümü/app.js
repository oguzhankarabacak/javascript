let value;
value=123;
console.log(typeof value);
value=(123).toString();
console.log(value);

let str_value=String(value);

console.log(typeof str_value);


let value2=Number("12345");
console.log(value2+1);

value2=Number(null);
console.log(value2);

value2=Number("hello");  //NaN sonucunu alacaz  //Not a Number
console.log(value2);

value2=Number([1,2,3,4,5,6]);
console.log(value2);
console.log("*****************");

value2=Number("3.14");
console.log(value2);

//aynı işlem

value2=parseFloat("3.14");
console.log(value2+2);
value2=parseInt("3.14");
console.log(value2+2);

//OTOmatik döndürme
const a="hello"+34;  //34 string'e dönüştürür
console.log(a); 

