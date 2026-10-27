//for of loop ->array specific loop
let arr = [1, 2, 3, 4, 5];

for (const value of arr) {
    console.log(value);
}
for(const index in arr) {//for in loop ->array specific loop just keys
    console.log(arr[index]);
}


const greeting = "Hello World";
for (const char of greeting) {
    console.log(char);
}


const map = new Map();//->unique values only
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
for (const [key, value] of map) {//array destructuring [key, value] 
    console.log(`${key}: ${value}`);
}
// for(const key in map) {//for in loop ->object specific loop
//     console.log(`${key}: ${map[key]}`);   //not iterable 
// }


let obj = {
    IN: "India",
    US: "United States",
    UK: "United Kingdom"
};
for (const [key, value] of Object.entries(obj)) {//object specific loop
    console.log(`${key}: ${value}`);
}
for (const key in obj) {//for in loop ->object specific loop
     console.log(`${key}: ${obj[key]}`);   
}

//for of vs for in loop
//for of loop ->array specific loop -->value
//for in loop ->object specific loop -->

const codingLanguages = ["JavaScript", "Python", "Java", "C++"];
// codingLanguages.forEach(function (language) {
//     console.log(language);
// });
codingLanguages.forEach((language) => console.log(language));

//array with objects-->database 
let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
];
users.forEach((user) => console.log(`${user.name}: ${user.age}`));
