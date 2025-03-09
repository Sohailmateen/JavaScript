const accountId = 90874
let accountEmail = "sohailmateen001@gmail.com"
var accountPass = "12345"
accountCity = "bangalore"
let accountState;

// accountId = 2 // not allowed coz it's is already declared as const

accountEmail = "mateen@gmail"
accountPass = "21346"
accountCity = "hyderabad"


console.log(accountId);
/*
Prefer not to use var
because of ussue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])