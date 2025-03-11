// singleton
// Object.create

// object literals

const mysymbol = Symbol("key1")
const jsuser = {
    name: "sohail",
    "full name" : "Sohail Mateen",
    [mysymbol] : "mykey1",
    age: 20,
    location: "bangalore",
    email: "sohail@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysymbol]);

// jsuser.email = "sohail@chatgpt.com"
// Object.freeze(jsuser)
// jsuser.email = "sohail@mic.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
