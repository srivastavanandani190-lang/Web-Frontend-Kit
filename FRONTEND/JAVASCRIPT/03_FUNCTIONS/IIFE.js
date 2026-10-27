//IIFE->IMMEDIATELY INVOKED FUNCTION EXPRESSION
//It is defined as a function that is executed immediately after it is defined.

//semicolon is used to prevent issues when concatenating scripts, ensuring that the IIFE is treated as a separate statement.
//it is important to note that the function is defined and immediately invoked, which allows for encapsulation of variables and prevents global scope pollution.
//(function)(execution)
//global scope pollution is avoided by using IIFE because 
//variables declared inside the function are not accessible outside of it.
//This helps in preventing conflicts with other variables in the global scope and keeps the code organized.

(function newone(){
     
    console.log("IIFE is executed immediately after it is defined.");
})();//named iife


(() => {
    console.log("IIFE with arrow function syntax.");
})();//unnamed iife

((name) => {
    console.log(`Hello, ${name}! This is an IIFE with a parameter.`);
})("Alice");//iife with parameter