let a=new Number(20);
let b=new Number(20);
console.log("Type of a:",typeof(a))
console.log("Type of b:",typeof(b))
console.log("a==b:",a==b)//two objects are different
console.log("a===b:",a===b)
let c=b;
console.log("c==b:",c==b)//two objects are now pointing same reference
console.log("c===b:",c===b)

console.log("Boolean({}):",Boolean({}))//typecasting of object returns true indicating it occupies space in heap

console.log(Math.abs(-5));
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.ceil(6.56));
console.log(Math.floor(6.2));
console.log(Math.log10(20));
console.log(Math.max(112,45,89,-8));
console.log(Math.min(-8,45,-9,-56,25));
console.log(Math.random());
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*11)+15);

let x = 12.34567;
//all return string type
console.log(x.toFixed(3));     // "12.346"
console.log(x.toPrecision(3)); // "12.3"
console.log(x.toString());     // "12.34567"


