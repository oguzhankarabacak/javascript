const numbers=[1,2,3,4,5];

console.log(...numbers);


const numbers2=[9,10,...numbers];

console.log(...numbers2);

const [a,b,...numbers3]=numbers;

console.log(...numbers3);

const addNumbers=(a,b,c) => console.log(a+b+c);

addNumbers(...numbers3);