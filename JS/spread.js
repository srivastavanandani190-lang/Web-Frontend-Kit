//array vs object
//spread operator
//array
let arr1 = [1,2,3,6,8,7,3];
let arr2 = [...arr1,4,5];//copy
console.log([...arr1]);
console.log({...arr1});//index as key and value as element of array.
console.log(arr2);  
let arr3=arr1;
arr3.push(10);
console.log(arr1); //arr1 also gets changed because arr3 is reference to arr1.
console.log(arr3); //arr3 also gets changed because arr3 is reference to arr1.
let arr4=[...arr1,...arr2];
console.log(arr4);

//string
let str1 = "Hello";
console.log(str1.split("")); //split string into array of characters. 
console.log({...str1}); //spread string into array of characters.

//object
let obj1 = { a: 1, b: 2, name: "Nandani" ,
    age:21,
    city:"Pune"
};
let obj2 = { ...obj1, c: 3 };
console.log(obj2);  
