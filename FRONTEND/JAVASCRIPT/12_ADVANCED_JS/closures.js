// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

//function's variable scope is within the function itself,
//but closures allow the inner function to access variables from the outer function's scope even after the outer function has finished executing.

//lexical scoping 
function init(){
    let name = 'Mozilla';  
    function displayName() {  
        console.log(name);  
    }
    displayName();
}
init(); 

function outer(){
    let username = 'John';
    function inner(){
        //let secret = '123';
        console.log(username);
    }
    function inner2(){
        //console.log(secret);
        console.log(username);
    }
    inner();
    inner2();
}
outer(); // This will throw an error because inner2 cannot access the variable 'secret'

//whole lexical scope is accessible not just execution context.
function makefunction(){
    const name = 'Mozilla';
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makefunction();
myFunc(); // This will log 'Mozilla' because the inner function retains access to the outer function's scope even after the outer function has finished executing.

