const marvel_heros=["Iron Man","Captain America","Thor","Hulk","Black Widow"];
const dc_heros=["Superman","Batman","Wonder Woman","Flash","Aquaman"];

//concat() method is used to merge two or more arrays.
// //This method does not change the existing arrays, but instead returns a new array.
// const all_heros=marvel_heros.concat(dc_heros);
// console.log(all_heros);

// //push
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

//spread operator
const all_heros2=[...marvel_heros,...dc_heros];
console.log(all_heros2);  

//flat method is used to flatten a nested array into a single-level array.
 const arr=[[1,2],[3,4],[5,6]];
 const flat_arr=arr.flat(Infinity); //infinity is used to flatten the array to any level of nesting.
 console.log(flat_arr);

 console.log(Array.isArray(marvel_heros)); //true
 console.log(Array.isArray("Hello")); //false
 console.log(Array.from("Hello")); //['H','e','l','l','o'] - converts a string into an array of characters
 console.log(Array.from({length:5},(v,i)=>i)); //[0,1,2,3,4] - creates an array of length 5 with values from 0 to 4
 console.log(Array.from({name:"John",age:30})); //[] - creates an empty array from an object that is not iterable ***

 let s1=100;
 let s2=200;
 let s3=300;
 let s4=400;
 let s5=500;
//array.of
const salaries=Array.of(s1,s2,s3,s4,s5);
console.log(salaries); //[100,200,300,400,500] - creates an array from a list of arguments

