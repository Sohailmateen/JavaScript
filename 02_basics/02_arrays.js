const indian_cities = ["pune", "bangalore", "hyd", "delhi"]
const foreign_cities = ["tokyo", "barcelona", "rome", "bangkok"]

// indian_cities.push(foreign_cities)

// console.log(indian_cities);
// console.log(indian_cities[4][2]);

// const allCities = indian_cities.concat(foreign_cities)
// console.log(allCities);


const all_cities = [...indian_cities, ...foreign_cities]
// console.log(all_cities);

const arr = [1,2,3,[4,5,6],7,[6,7,[3,5]]]
const newArr = arr.flat(Infinity)
console.log(newArr);



console.log(Array.isArray("sohail"))
console.log(Array.from("sohail"))
console.log(Array.from({name: "sohail"})) //

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));
