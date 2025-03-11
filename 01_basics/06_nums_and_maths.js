const score = 200
// console.log(score);

const balance = new Number (100)
// console.log(balance)

console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3))


const hundereds = 1000000
// console.log((hundereds.toLocaleString())); // 'en-US' // 'en-IN'


// *************************** Maths ***********************


console.log(Math);
console.log(Math.abs(-23));
console.log(Math.round(34.5));
console.log(Math.ceil(35.2));
console.log(Math.floor(34.6));
console.log(Math.pow(2,10));
console.log(Math.max(2,50,1,10));
console.log(Math.min(2,50,1,10));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min) 
