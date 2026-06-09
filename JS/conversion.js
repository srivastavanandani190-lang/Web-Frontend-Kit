//conversion to number

let score="33";
let score1=Number(score);
console.log(score1);
console.log(typeof score1);

let sco="33abc";
let sco1=Number(sco);
console.log(sco1);
console.log(typeof sco1);
 
let sco2=null;
let sco3=Number(sco2);
console.log(sco3);
console.log(typeof sco3);

let sco4=undefined;
let sco5=Number(sco4);
console.log(sco5);
console.log(typeof sco5);

let sco6=true;
let sco7=Number(sco6);
console.log(sco7);
console.log(typeof sco7);

//conversion to boolean

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

let isLoggedIn1=0;
let booleanIsLoggedIn1=Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1);
console.log(typeof booleanIsLoggedIn1);

let isLoggedIn2="honey";
let booleanIsLoggedIn2=Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2);
console.log(typeof booleanIsLoggedIn2);

let isLoggedIn3="";
let booleanIsLoggedIn3=Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3);
console.log(typeof booleanIsLoggedIn3);

//conversion to string

let value=33;
let stringValue=String(value);
console.log(stringValue);
console.log(typeof stringValue);
