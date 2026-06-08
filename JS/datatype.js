"use strict";// newer js

// 1. String
let str = "Hello, World!";
console.log(str); // Output: Hello, World!

// 2. Number
let num = 42;
console.log(num); // Output: 42

// 3. Boolean
let isTrue = true;
console.log(isTrue); // Output: true

// 4. Null
let nullValue = null;
console.log(nullValue); // Output: null
console.log(typeof nullValue); // Output: object (this is a known quirk in JavaScript)

// 5. Undefined
let undefinedValue;
console.log(undefinedValue); // Output: undefined
console.log(typeof undefinedValue); // Output: undefined

// 6. Symbol
let sym = Symbol("unique");
console.log(sym); // Output: Symbol(unique)
console.log(typeof sym); // Output: symbol

// 7. BigInt
let bigIntValue = 9007199254740991n;
console.log(bigIntValue); // Output: 9007199254740991n
console.log(typeof bigIntValue); // Output: bigint

// 8. Object
let obj = { name: "Alice", age: 30 };
console.log(obj); // Output: { name: 'Alice', age: 30 }


// 9. Array
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

//alert(3+3); runs in browser, not in node.js environment