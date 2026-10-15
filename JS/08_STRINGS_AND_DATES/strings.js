let str="Hello"; //stores the string "Hello" as a primitive value in stack.
console.log(str);
console.log(typeof str); // string
console.log(str[0]); // H
console.log(str.length); // 5


let s1=new String("Hello"); //stores the string "Hello" as an object of type String in heap.
console.log(s1); // [String: 'Hello']
console.log(typeof s1); // object
console.log(s1[0]); // H
console.log(s1.length); // 5


//STRINGS PROTOTYPE METHODS
console.log(s1.toUpperCase()); // HELLO
console.log(s1.charAt(1)); // e
console.log(s1.indexOf('l'));
console.log(s1.lastIndexOf('l'));

console.log(s1.slice(1,4)); // ell
console.log(s1.slice(-4,-1)); // ell -> negative indices count from the end of the string

console.log(s1.substring(1,4)); // ell-> last parameter is the index of the first character that will not be included in the returned substring
console.log(s1.substr(1,3)); // ell -> second parameter is the length of the substring to be returned
console.log(s1.replace('l', 'x')); // Hexo will replace only the first occurrence of 'l' with 'x', resulting in "Hexlo"

console.log(s1.split('')); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(s1.split('l')); // [ 'He', '', 'o' ]

console.log(s1.trim()); // Hello ->used to remove whitespace from both ends of a string.
console.log(s1.trimStart()); // Hello
console.log(s1.trimEnd()); // Hello

console.log(s1.startsWith('He')); // true
console.log(s1.endsWith('lo')); // true
console.log(s1.includes('ell')); // true

//blink
console.log(s1.blink()); // <blink>Hello</blink> -> returns a string that represents the text wrapped in HTML <blink> tags, which causes the text to blink when rendered in a web browser. Note that the <blink> tag is not supported in all browsers and is generally considered outdated.
//bold
console.log(s1.bold()); // <b>Hello</b> -> returns a string that represents the text wrapped in HTML <b> tags, which causes the text to be displayed in bold when rendered in a web browser.
