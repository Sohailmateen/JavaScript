// var c = 20
let a = 300
if (true){
    let a = 10
    const b = 30
    var c = 20
    // console.log(a)
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "sohail"

    function two(){
        const  website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true){
    const username = "sohail"
    if(username === "sohail"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}


// **********************************************

addone(5)
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}