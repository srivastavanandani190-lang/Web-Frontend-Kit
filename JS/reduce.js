//reduce 
const numbers = [1, 2, 3, 4, 5];
const initialValue = 1;
const sum = numbers.reduce(function (accumulator, currentValue)  { 
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, initialValue);

console.log(sum); // Output: 16
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,2);
console.log(total); // Output: 17

//used mostly to sum up the values of an array. It takes a callback function and an initial value as arguments.
//The callback function takes two parameters: the accumulator and the current value.
//The accumulator is the accumulated value returned from the previous iteration, and the current value is the current element being processed in the array.
//The reduce method iterates through each element of the array, applying the callback function and returning a single value at the end.

const shoppingCart = [
    { item: 'Apple', price: 1.5 },
    { item: 'Banana', price: 0.75 },
    { item: 'Orange', price: 1.25 }
];
const totalPrice = shoppingCart.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
console.log(totalPrice); // Output: 3.5
