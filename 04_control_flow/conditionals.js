// <, >, <=, >=, ==, !=, ===, !==


const bal = 1000

// if(bal > 400) console.log("greater than 400");


// if (bal < 1000){
//     console.log("less than 500");
// }else if (bal < 1000){
//     console.log("less than 1000");
// }else {
//     console.log("greater that 1000");  
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard){
    console.log("allowed to purchase anything");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}

