//objects can be declaraed in two ways
//singleton object: only one instance of the object can exist
//1. using object literal syntax

const mysymbol = Symbol("mySymbol");
let person = {  
    name: "Nandani",
    age: 30,
    city: "New York",
    email:"nandani@example.com",
    [mysymbol]: "This is a symbol property" 
};
console.log(person.name); // Nandani
console.log(person["age"]); // 30
console.log(person[mysymbol]); // This is a symbol property***
person.email = "abc@example.com";
// Object.freeze(person); //freeze the object to prevent modification
person.email = "def@example.com"; //this will not change the email property
console.log(person.email);

person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};
console.log(person.greet());
console.log(person.greet); // [Function: greet]

//2. using object constructor syntax
 