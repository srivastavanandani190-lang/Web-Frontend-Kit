let value=3;
let v=-value;
console.log(v);

console.log(10+3);//addition operator
console.log(10-3);//subtraction operators
console.log(10*3);//multiplication operator
console.log(10/3);//division operator
console.log(10%3);//remainder operator
console.log(10**3);//power operator

let s="Hello";
let t="World";
console.log(s+t);

console.log("1"+2);
console.log("1"+2+3);
console.log(1+"2"+3);//string concatenation happens from left to right, so "1"+2 results in "12", and then "12"+3 results in "123".
console.log(1+2+"3");

console.log(+true);//converts true to 1
console.log(+false);//converts false to 0
console.log(+"");//converts empty string to 0
console.log(+"123");//converts string "123" to number 123
console.log(+"123e-1");//converts string "123e-1" to number 12.3

//postfix
let postfix=5;
console.log(postfix++);
console.log(postfix);

//prefix
let prefix=5;
console.log(++prefix);
console.log(prefix);

//comparison operators
console.log(5>3);
console.log(5<3);
console.log(5>=3);
console.log(5<=3);
console.log(5==3);
console.log(5!=3);

console.log(5=="5");//loose equality operator performs type coercion before comparison, so it converts the string "5" to the number 5 before comparing, resulting in true.
console.log(5==="5");//strict equality operator checks both value and type, while the regular equality operator performs type coercion before comparison.
console.log(5!=="5");//loose inequality operator performs type coercion before comparison, so it converts the string "5" to the number 5 before comparing, resulting in false.

console.log(null==undefined);
console.log(null===undefined);  

console.log(0==false);
console.log(0===false); 

console.log(null==0);
console.log(null>=0);
console.log(null<=0);
console.log(null>0);
console.log(null===0);

console.log(NaN==NaN);
console.log(NaN===NaN);

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined>=0);
console.log(undefined<=0);
console.log(undefined==0);
console.log(undefined===0);

