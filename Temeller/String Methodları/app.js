let value;
const name="oguzhan";
const langs="java,python,js";

value=name.length; //uzunluk

value=name.concat(" ",langs," "); //istediğimiz kadar ekleyebiliriz
value=name.toUpperCase();
// value=name.toLowerCase();
value=name[0];
value=name[name.length-1];
value=name.indexOf("z");
value=name.charAt(2);
value=langs.split(",");  //array'e dönüşür
value=langs.replace("js","css"); //string'de js yerine css gelir
value=langs.includes("java"); //java var mı?varsa true yoksa false
console.log(value);


