//functions->block of code that performs a specific task. It is a reusable piece of code that can be called multiple times. 
// It can take input in the form of parameters and can return output. It helps in breaking down a large problem into smaller,
// manageable pieces. It also helps in reducing code duplication and improving code readability.
//var->undefined ; let->ReferenceError; const->ReferenceError
//function declaration -> function with name is called function declaration.you can call the function before declaration because of hoisting.
let a;
let b;
function sum(a,b){
    return a+b;
}
sum(45,20);
sum();
var result = sum(45,20);
console.log(sum(5,4)); //30
console.log(result);
console.log(`sum of two numbers is ${sum(70,80)}`);


//function expression -> function without name is called anonymous function and when we assign it to a
// variable then it is called function expression.
const sum1 = function(a,b){

    return a+b;
}   
console.log(sum1(10,20)); //30
//function expression example
const factorial = function(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }  
}
console.log(factorial(5)); //120


//arrow function -> function with arrow syntax is called arrow function. It is a shorter syntax for function expression. 
// It does not have its own this, arguments, super, or new.target.It is not suitable for methods, and it cannot be used 
// as constructors. It is best suited for non-method functions, and it cannot be used as generators.without declaration you can't call the function.
const sum2 = (a,b) => a+b;
console.log(sum2(142,20)); //30

const geet=(S)=>{
    console.log(`Hello ${S}`);
}
geet("Nandani");

const msg=()=>{
    return "good morning";
}
console.log(msg());

const msg1=()=> "good morning";
console.log(msg1());


