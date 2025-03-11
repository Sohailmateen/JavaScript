const user = {
    username: "sohail",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "mateen"
// user.welcomeMessage()

// console.log(this);


// function one(){
//     let username = "sohail"
//     console.log(this.username);
//     console.log(this);
    
// }
// one()

// const one = function(){
//     let username = "sohail"
//     console.log(this.username);    
// }


// const one = () =>{
//     let username = "sohail"
//     console.log(this);
// }
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "sohail"})

console.log(addTwo(2, 4));

