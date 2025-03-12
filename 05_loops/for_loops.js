// for loops

for(let i = 0; i <= 10; i++){
    if(i == 5){
        // console.log("this is 5th iteration");
    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(i + "*" + j + '=' + i*j); 
    }    
}


let myArr = ["new york", "las vegas", "moscow", "dallas"]

for (let i = 0; i < myArr.length; i++) {
    // console.log(myArr[i]);
}


//break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        // console.log(`detected 5`);
        break
    }
    // console.log(`value of i is ${i}`);
}


for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}