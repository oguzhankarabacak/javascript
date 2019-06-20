// const person={
//     age:25,
//     tellAge:function(){
//         console.log(this.age); //buradaki this person objesini gösteriyor yani 25 yazacak
//     }
//     //burada ise func. dışında this window objesini gösteriyor
    

// }
const person={
    age:25,
    tellAge:function(){
        console.log(this.age); 
    }.bind(this) //burada window objesini gösterdiği için ve window da age olmadığı için undefined yazacak
    
    

}
//Arrow Function

const person2={
    age:25,
    tellAge:() => {
        console.log(this.age);  //burada da this window objesini gösteriyor bu arrow gösterimi üstteki bind gösterimi ile aynı

    }
}
person.tellAge();
person2.tellAge();