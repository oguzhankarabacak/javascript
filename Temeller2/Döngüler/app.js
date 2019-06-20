//while
let i=0;
while(i<10){
    if(i==3 || i==5){
        i++;
        continue;
    }
    if(i==9){
        break;
    }
    else {
        console.log(i);
    i++;
    }
}
//do-while
let j=0;
do{
    console.log(j);
    j++;

}while(j<2);
//for
let array1=[10,20,30,40,50];
for(let a=0;a<array1.length;a++){
    console.log(array1[a]);
}
//iterasyon for each
array1.forEach(function(array1,index){
    console.log(array1,index)


});
//map fonksiyonu
const user=[
    {name:"mustafa",age:25},
    {name:"zeynep",age:40},
    {name:"ali",age:12}
];
const names=user.map(function(user){

    return user.name;

});
console.log(names);

//for in
const user2={
    name:"mustafa",
    age:25
};
for(let key in user2){
    console.log(key,user2[key]);
}