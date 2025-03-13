// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num);
}

const greetings = "Hello world!"
for(const val of greetings){
    // console.log(`Each char is ${val}`); 
}

// maps

const map = new Map()
map.set("IN", "India")
map.set("fr", "france")
map.set("UAE", "united arab emirates")

// console.log(map);

for(const [key, value] of map){
    // console.log(key, ":-", value);
}


const myObject = {
    game1 : "red light green light",
    game2 : "chess",
    game3 : "checkers",
    game4 : "free fire"
}

for (const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const lang = ["js", "ruby", "py", "java", "cpp"]

for (const key in lang) {
    // console.log(lang[key]);
    
}


for(const key in map){
    console.log(key);
}