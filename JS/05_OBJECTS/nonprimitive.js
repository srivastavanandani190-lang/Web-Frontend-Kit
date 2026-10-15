//non-primitive data types are objects, arrays, functions, etc. They are mutable and can hold multiple values.

//arrays
let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

//objects
let obj = {
    name: "John",
    age: 30
};
console.log(obj); // { name: 'John', age: 30 }

//functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

//non-primitive data types are passed by reference, meaning that when you assign an object to a variable, 
//you are assigning a reference to that object, not a copy of it. 
//Therefore, changes made to the object through one variable will affect all variables that reference that object.
let obj1 = { name: "John" };
let obj2 = obj1; // obj2 references the same object as obj1
obj2.name = "Alice"; // changing the name property through obj2
console.log(obj1.name); // Alice - obj1 is also affected because it references the same object

let name1="Honey";
let name2=name1;
name2="Bunny";
console.log(name1); // Honey - name1 is not affected because it is a primitive data type (string) and is passed by value
console.log(name2); // Bunny - name2 is affected because it is a primitive data type (string) and is passed by value

//stack and heap
//primitive data types are stored in the stack, while non-primitive data types are stored in the heap.
//The stack is a simple data structure that stores primitive values and function calls. 
//The heap is a more complex data structure that stores objects, arrays, and functions. 
//When you create a non-primitive data type, it is stored in the heap, and a reference to that data is stored in the stack.
