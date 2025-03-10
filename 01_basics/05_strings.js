const name = "sohail"
const repocount = 15

// console.log((name + repocount + " value")); // not good

// console.log((`Hello my name is ${name} and my repocount is ${repocount}`));

const r = new String ("sohial")

// console.log(r[0]);
// console.log(r.__proto__);

// console.log((r.length));
// console.log(r.toUpperCase());
// console.log(r.charAt(4));
// console.log(r.indexOf('i'));



const newstring = r.substring(0,4);
console.log(newstring);

const anotherString = r.slice(-5,5)
console.log(anotherString);

const newStringOne = "  mateen   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://sohail.com/sohail%20mateen"

console.log(url.replace('%20','-'));

console.log(url.includes('sohail'))
console.log(url.includes('code'))


const gamename = "call of duty";
console.log(gamename.split(" "));
