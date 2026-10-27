//there are two modes in js strict mode and non strict mode
//in strict mode this keyword refers to undefined
//in non strict mode this keyword refers to global object(window in browsers)
'use strict';
var name = "Global Name";
console.log(name); // "Global Name"
function greet(name1, name2) {
    console.log(name1, name2);
}
greet("Hello", "World"); // "Hello World"
//node js environment does not have window object
//this in global scope in node js refers to empty object and in browsers it refers to window object
console.log(this.name); // undefined in node js, "Global Name" in browsers
//globalThis is a standard way to refer to global object in any environment
console.log(globalThis.name); // "Global Name"
//function invocation
const user = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
user.greet(); // "Hello, my name is Alice and I am 30 years old."
const user1={
    name:"Bob",
}
user1.greet=user.greet; //method borrowing
user1.greet(); // "Hello, my name is Bob and I am undefined years old."
//normal function in non strict mode this will refer to global object
//in strict mode this will be undefined
function greet(){
    console.log('hi ${this.name}');
}
const user3={
    name:"Charlie",
    age:25
};
const user2={
    name:"Dave",
    age:28
};
greet.call(user);
greet.call(user2);//less memory consumption because function is not created again for user1 and user2
//using apply
function incrementage(value,name){
    this.age+=value;
    this.name=name;
    console.log(`name:${this.name}, age:${this.age}`);
}
incrementage.call(user1,5,"Charlie Brown");
incrementage.apply(user2,[3,"Dave Smith"]);//arguments passed as array
//using bind
const boundgreet=user1.greet.bind(user1,10,"Charlie Brown");
boundgreet(); // "Hello, my name is Bob and I am undefined years old."

//class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//this empty object is returned from constructor
const person1 = new Person("Eve", 22);
console.log(person1.name);
//arrow function followa lexical scoping for this keyword
const user4 = {
    name: "Frank",
    age: 35,
    greet: function() {
        const innerFunction = () => {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        };
        innerFunction();
    }
};
user4.greet(); // "Hello, my name is Frank and I am 35 years old."
//just arrow function

const greetArrow = () => {
    console.log(this.name);
};
greetArrow(); // undefined in strict mode, "Global Name" in non-strict mode in browsers
const user5 = {
    name: "Grace",
greet : function(){
    const that= this;
    function meet(){
        console.log(that);
    }
    meet(); 
}
};
user5.greet(); // logs user5 object
const stopWatch = {
    seconds: 0,
    start: function() {
        setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }
};
stopWatch.start(); // logs incrementing seconds every second

