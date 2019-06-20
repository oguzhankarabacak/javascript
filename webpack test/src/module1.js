//ES6 Öncesi Modulleri Export Etme

// module.exports=function test1(){
//     console.log("test1");
// }
// module.exports=function test2(){
//     console.log("test2");

// }

//üstteki gibi yapıp module1'i import ettiğimizde test1 fonksiyonu export edilmez 
//eğer ikisininde export edilmesini istiyorsak bu fonk. bir tane anahtar kelime vermeliyizi 

// module.exports.test1=function test1(){
//     console.log("test1");
// }
// module.exports.test2=function test2(){
//     console.log("test2");
// }

// module.exports.value="oguzhan";


//daha güzel syntax
//bunları bir obje içinde yazabiliriz

module.exports={
    name:"oguzhan",
    test1:function(){
        console.log("test1");
    },
    employee:{
        salary:4000,
        department:"it"

    }
}

