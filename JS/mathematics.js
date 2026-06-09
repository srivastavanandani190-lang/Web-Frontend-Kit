let num=100;
console.log(num);

let num1=new Number(100);
console.log(num1);

console.log(num1.toString());
console.log(num1.toExponential());
console.log(num1.toFixed(2));
console.log(num1.toPrecision(3));

let num2=565.8645;
console.log(num2.toFixed(2));//toFixed() method rounds the number to the specified number of decimal places and returns it as a string.

console.log(num2.toPrecision(3));//toPrecision() method rounds the number to the specified number of significant digits and returns it as a string. 
//It can be used to format numbers in a more readable way, especially when dealing with very large or very small numbers.

const num3=123456789;
console.log(num3.toLocaleString());
console.log(num3.toLocaleString('en-US'));

//Maths
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

console.log(Math.sqrt(16));
console.log(Math.pow(2,3));
console.log(Math.abs(-5));

console.log(Math.ceil(4.2));//top
console.log(Math.floor(4.8));//bottom
console.log(Math.round(4.5));//round to nearest integer

console.log(Math.random());//mostly used to generate random numbers between 0 and 1.
//It can be used in various applications, such as games, simulations, and data analysis.
console.log(Math.random()*100+1);//to generate random numbers between 1 and 100.
console.log(Math.floor(Math.random()*100)+1);//to generate random integers between 1 and 100.

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);//to generate random integers between 10 and 20.


console.log(Math.max(1,5,3,9,2));
console.log(Math.min(1,5,3,9,2));


 