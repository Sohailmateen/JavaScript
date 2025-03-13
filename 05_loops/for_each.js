const lang = ["python", "js", "cpp", "ruby", "go", "c#"]

// lang.forEach( function (val){
//     console.log(val);
// })


// lang.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// lang.forEach(printMe)


// lang.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })


const mycode =[
    {
    langName: "javascript",
    langFileName: "js"
    },
    {
    langName: "java",
    langFileName: "java"
    },
    {
    langName: "python",
    langFileName: "py"
    },
]

mycode.forEach( (item)=>{

    console.log(item.langName);
    
})