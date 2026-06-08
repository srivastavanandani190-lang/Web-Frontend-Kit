//js is single threaded synchronous language--it can do one thing at a time(no parallelism){-delay},step by step synchronously
//but it can handle asynchronous operations using event loop

console.log("Start");
setTimeout(() => {
  console.log("Timeout finished1");
}, 2000); //asynchronous operation
setTimeout(() => {
  console.log("Timeout finished2");
}, 3000); //setTimeout is a web API provided by the browser(environment) to handle asynchronous operations.
console.log("End");

//js never waits for asynchronous operations to complete(webfreezes)->it continues executing the rest of the code.
//web API handles the asynchronous operations in the background. js engine is free to execute other code.
//once the asynchronous operation is complete, web API pushes the callback function to the callback queue(microtask queue or task queue).
//ALL function calls are API calls.
//window object(global) provides web APIs like setTimeout, DOM manipulation, fetch,local storage,locations,timer,etc.
//browser provides these web APIs, not js engine [multithreading].

let arr=[10,20,30,40,50];
arr.push(60);  

//once the asynchronous operation is complete, it pushes the callback function to the callback queue.
//event loop continuously checks if the call stack is empty, if it is, it pushes the first function from the callback queue to the call stack for execution.
//data is fetched from web API in form of obejects.
//microtask queue has higher priority than task queue.(fetch,promises go to microtask queue).
//event loop gives priority to microtask queue over task queue while pushing functions to call stack.
//rest all asynchronous operations go to task queue(setTimeout,setInterval,DOM events).
console.log("Start1");
fetch("https://api.github.com/users").then(() => {
  console.log("Fetch complete");
});
console.log("End1");