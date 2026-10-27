const str1="Honey";
const str2="Nandani";
const str3="strike is coming soon";
console.log(str1,str2,str3);
const day=21;
const str4=`strike is coming soon on ${day}`;
console.log(str4);
console.log(str4.length);
console.log(str4[1]);
//string are primitive datatype and immutable!
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());
console.log(str4.indexOf('strike'));
console.log(str4.lastIndexOf('e'));
console.log(str4.includes("hello"));//present in given string or not!
//slicing!
console.log(str4.slice(0,10));
console.log(str4.slice(0));//indicates just starting part till end!
console.log(str4.slice(-7));
console.log(str4.slice(-7,-2));
console.log(str4.substring(2,7));//no negative indexing.

const a="Nandani";
const b="Srivastava";
const c=a+" "+b;
console.log(c);
console.log(20+"Honey");
console.log(20+30+"Honey");
console.log(str4.replace("strike","challenge"));
// console.log(str4.replaceAll("strike","challenge"));
const password=" nandani@3105 ";
console.log(password.trim());
console.log(password.trimStart());
console.log(password.trimEnd());

const name="rohit , honey ,nandani ,aditya";
console.log(name.split(","));//array
