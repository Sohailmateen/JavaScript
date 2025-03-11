
function saymyname(){
    console.log("sohail");
    
}

// saymyname()


// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
    
// }

function addTwoNum(num1, num2){
    
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNum(2, 4)

// console.log(result);



function loginUserMessage(username ){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("sohail"))
// console.log(loginUserMessage("sohail"))


function calculateCarPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCarPrice(200, 400, 500,2394));


const product = {
    username : "pen",
    price: 100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and  price is ${anyobject.price}`);
    
}
// handleObject(product)


handleObject({
    username : "sohail",
    price: 100
})



const myNewArr = [200, 445, 200, 800]

function returnSeconValue(getArray){
    return getArray[1]
}

// console.log(returnSeconValue(myNewArr));
console.log(returnSeconValue([200, 300, 900, 204]));
