
function cartprice(...items){
    return items;
}
console.log(cartprice(10, 20, 30)); // Output: [10, 20, 30]
console.log(cartprice(5, 15)); // Output: [5, 15]

function calculatecartprice(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
console.log(calculatecartprice(10, 20, 30)); // Output: 60
console.log(calculatecartprice(5, 15)); // Output: 20
console.log(calculatecartprice(100)); // Output: 100
console.log(calculatecartprice()); // Output: 0

//object in functions
const user = {
    name: "John",
    age: 30,
    city: "New York"
};
function displayUserInfo(anyobject) {
    console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}, City: ${anyobject.city}`);
}
displayUserInfo(user); // Output: Name: John, Age: 30, City: New York
//typechecking is done in js but not in ts

//array in functions
const arr=[100,562,896,456,789,654];
function returnsecondlargest(getArray){
    const sorted = getArray.sort((a, b) => b - a);
    return sorted[1];
}
console.log(returnsecondlargest(arr)); // Output: 789