//array->it is defined as a collection of disimilar data types.it is used to store multiple values in a single variable.
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // apple
console.log(fruits.length); // 3
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "orange", "grape"]
fruits.pop();
console.log(fruits); // ["apple", "banana", "orange"]
let arr1=["java",1,"hello"];
console.log(arr1[0]); // java
console.log(arr1[1]); // 1
console.log(arr1[2]); // hello


//it is resizable and mutable in nature.
//we can add or remove elements from an array.
//it is ordered collection of data. it is zero indexed.
//it can store duplicate values. it can store any type of data.
//shallow copy --> it creates a new array but the elements are still referencing the same objects in memory.
//deep copy --> it creates a new array and also creates new objects in memory for the elements.

let arr2 = [1, 2, 3];
let shallowCopy = arr2;
let deepCopy = [...arr2];
shallowCopy.push(4);
console.log(arr2);
// Output: [1, 2, 3, 4] - because shallowCopy and arr2 reference the same array
deepCopy.push(5);
console.log(arr2);
// Output: [1, 2, 3, 4] - because deepCopy is a new array and does not affect arr2
console.log(deepCopy);
// Output: [1, 2, 3, 5] - because deepCopy is a new array and does not affect arr2

//methods of array

//1.push() --> it adds an element to the end of the array.
let arr3 = [1, 2, 3];
arr3.push(4);
console.log(arr3); // [1, 2, 3, 4]

//2.pop() --> it removes the last element from the array and returns it.
let arr4 = [1, 2, 3];
let lastElement = arr4.pop();
console.log(lastElement);
console.log(arr4); // [1, 2]

//3.shift() --> it removes the first element from the array and returns it.
let arr5 = [1, 2, 3];
let firstElement = arr5.shift();
console.log(firstElement);
console.log(arr5);

//4.unshift() --> it adds an element to the beginning of the array.
let arr6 = [1, 2, 3];
arr6.unshift(0);
console.log(arr6);

//5.slice() --> it returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let arr7 = [1, 2, 3, 4, 5];
let slicedArr = arr7.slice(1, 4);
console.log(slicedArr);

//splice() --> it changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(1,3);// it removes 3 elements starting from index 1
console.log(arr8); // [1, 2, 4, 5]

console.log(arr7.includes(3)); 
console.log(arr7.indexOf(6));

const arrnew=arr7.join();
console.log(arrnew); // "1,2,3,4,5"
console.log(typeof arrnew); // "string"

const arrnew2=arr7.join("-");
console.log(arrnew2); // "1-2-3-4-5"
