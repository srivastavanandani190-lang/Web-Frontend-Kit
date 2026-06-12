const user={
    username: "John",
    price: 100,
    welcomeMessage: function() {
        console.log(`Welcome ${this.username}, your ticket price is ${this.price}`);
        console.log(this);
    }
}
//this->current context
user.welcomeMessage();
user.username="honey";
user.welcomeMessage();

//arrow function does not have its own this, it uses the this of the enclosing context
console.log(this);//{} in node environment, window in browser because in browser window is global object

// function hello(){
//     console.log(this);
//     let username="John";
//     console.log(this.username); undefined because this is not referring to the function context, it is referring to the global context where username is not defined
// }   
// hello();

const hello=()=>{
    console.log(this);
    let username="John";
    console.log(this.username); //undefined because this is not referring to the function context, it is referring to the global context where username is not defined
}
hello();

const add=(a,b)=>{
    return a+b;
}
console.log(add(2,3));

//if there is only one parameter, we can omit the parentheses
const square=x=>x*x;
console.log(square(5));

//implicit return
const greet=()=>"Hello World";//object return must be wrapped in parentheses
console.log(greet());

const myArray=[1,2,3,4,5];

myArray.forEach((num)=>{
    console.log(num);
});

