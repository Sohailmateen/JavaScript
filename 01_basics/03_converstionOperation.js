let score = "50a";

console.log(typeof(score));

let valNumber = Number(score);

console.log(typeof(valNumber));
console.log((valNumber));

// 33 => 33
// "33abc" => NaN
// true => 1


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sohail" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
console.log("\n");



// ***************************  Operations *********************

let value = 3
let nevValue = -value
console.log(nevValue);

// basic operations 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);
console.log("\n");


let str1 = "hello"
let str2 = " sohail"

let str3 = str1 + str2
console.log((str3));

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((+true));


let gameCounter = 100
gameCounter++;
console.log(gameCounter);
