// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sohail"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "sohail@gmail.com",
    fullName:{
        userfullname:{
            firstname : "sohail",
            lastname: "mateen"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 ={...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id:1,
        email: "sohail@gmail.com",
    },
    {
        id:1,
        email: "sohail@yahoo.com",
    },
    {
        id:1,
        email: "sohail@amcec.amc",
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price : "199",
    coursePlatform: "youtube"
}

// course.coursePlatform

const {coursePlatform: platform} = course

// console.log(coursePlatform);
console.log(platform);




// json
// {
//     "name" : "sohail",
//     "coursename": "js",
//     "price": "free"
// }