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
const car = new Object();//singleton object
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
console.log(car.make);
console.log(Object.keys(car)); // [ 'make', 'model', 'year' ]
console.log(Object.values(car)); // [ 'Toyota', 'Camry', 2020 ]
console.log(Object.entries(car)); // [ [ 'make', 'Toyota' ], [ 'model', 'Camry' ], [ 'year', 2020 ] ]
console.log(car.hasOwnProperty("model")); // true

const regularuser={
    email:"regular@example.com",
    fullname:{
        firstname:"John",
        lastname:"Doe"
    }
}
console.log(regularuser.fullname.firstname); // John ?**

const obj1 = { a: 1, b: 2 };
const obj2 = {c: 3, d: 4 };
const obj3={e:5, f:6};
console.log(obj1 === obj2); // false (different references)
//combine
const combined = Object.assign({}, obj1, obj2, obj3);//** 
console.log(combined); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
const combined2 = {...obj1, ...obj2, ...obj3};//**commonly used in react
console.log(combined2); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
//objects in array
const user=[
    { name:"Alice", age:25},
    { name:"Bob", age:30},
    { name:"Charlie", age:35}
]
console.log(user[0].name); // Alice




 