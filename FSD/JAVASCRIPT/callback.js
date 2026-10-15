function sum(a, b) {
    return a + b;
}

function sumwithMsg(callback,msg) {
    const result = callback(20, 30);
    const fresult="hello "+msg+" the sum is "+result;
    console.log(fresult);
}
sumwithMsg(sum, "Alice");
// callback function: A function passed as an argument to another function, allowing it to be invoked later.
//It is commonly used for asynchronous operations, event handling, and functional programming patterns.