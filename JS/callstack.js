//Java script execution context->how file runs?
//it runs in two phases
//1.memory creation phase->just space allocation
//2.execution phase->code is executed line by line

//{code}->global execution context(this) browser(value of this)->window
//{code}->function execution context
//{code}->eval execution context(mongose)

let a=10;
let b=20;
function sum(a,b){
    let c=a+b;
     return c;
}
let r=sum(a,b);
let s=sum(8,9);

//1.global environment->a,b,sum(this)

//2.memory phase->a=undefined,b=undefined,sum=definition of sum function,r=undefined,s=undefined,sum=function s=undefined

//3.execution phase->a=10,b=20,sum=function sum(a,b){...}[new variable environment+execution thread
// a.memory phase->c=undefined ,a=undefined,b=undefined
// b.execution phase->a=10,b=20,c=30
//return in global execution context=>c=30
//],r=30,s=17(same process for s)

//call stack->it is a data structure which keeps track of the execution context
//it follows LIFO(last in first out) principle
//when a function is called, a new execution context is created and pushed onto the call stack
//when a function returns, its execution context is popped from the call stack

//what is this?
//this is a special keyword in JavaScript that refers to the object that is currently executing the code.
//The value of this depends on how a function is called. In the global context, this refers to the global object (window in browsers).
//In a function, this refers to the object that owns the function. In strict mode, this is undefined in functions that are not called as methods of an object.

