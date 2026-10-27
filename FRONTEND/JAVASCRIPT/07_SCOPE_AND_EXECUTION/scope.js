let a=10;
const b=20;
var c=30;
//var can used out of block scope but let and const can't be used out of block scope
if(true){
    let a=100;
    const b=200;
    var c=300;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

//gobal scope ->is different in node and browser
//in browser global scope is window and in node global scope is global
let x=1000;
function test(){
    console.log(x);
}
test();

//nested scope
function outer(){
    let x=100;
    const username="john";
    function inner(){
        const website="youtube.com";
        console.log(x);
        console.log(username);
        console.log(website);
    }
    //console.log(website); //website is not defined in outer scope
    inner();
    console.log(x);
}
outer();

//functions expression
const myFunc=function(){
    console.log("this is function expression");
}
myFunc();

//arrow function
const myArrowFunc=()=>{
    console.log("this is arrow function");
}
myArrowFunc();//can't be used before declaration because of hoisting 
//hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase.
//This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
//So if you try to access a variable before it is initialized, it will return undefined.

