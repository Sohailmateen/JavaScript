const nums = [1,2,3]

// const initial_val = 0
// const total = nums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, initial_val)


const total = nums.reduce( (acc, curr) => acc+curr, 0)

console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "web dev",
        price: 3999
    },
    {
        itemName: "data science",
        price: 9999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
