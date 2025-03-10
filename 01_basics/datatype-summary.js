// Primitive

// 7 types : String, Number, Boolean, null, ndefined, Symbol, BigInt

const score = 100 // number
const scorevalue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null // object
let userEmail = "website-name@gmail.com" //string

const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol

console.log(id === anotherId);

const bigNUmber = 123456789324222353534n // bigint

console.log(typeof(bigNUmber));



// reference (Non primitive)

// Array, Objects, Functions

const company = ["google", "microsoft", "infosys"]; // object
let myObj = {
    name : "sohail",
    age : 20,
}// object

const myFunction = function(){
    console.log("hello world");
    
}// object function

console.log(typeof myFunction); 
