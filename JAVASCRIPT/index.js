console.log("hello honey")
console.log("hello don")
//arithmetic operator
console.log(5+6)
console.log(5-6)
console.log(5*6)
console.log(5/6)
console.log(5%6)
console.log(5**3)
//assignment operator
let x=50;
let y=20;
x+=y;
// x-=y;
// x*=y;
// x/=y;
// x%=y;
console.log(x)
//comaprison operator
let z=20;
let w=8;
console.log(w<z)
console.log(w>z)
console.log(w<=z)
console.log(w>=z)
console.log(w==z)
let a="56";
let b=Number(a);
console.log(typeof a);
console.log(typeof b);
console.log(a==b);//string -> number
console.log(a===b)//type check uske baad comparison
let c="56v"
let d=Number(c);
console.log(d);//notanumber type->number

console.log(Number(true));
//string conversion
//boolean conversion
//undefined-NaN
//""->0
//null->0
//NaN==NaN->false
//rules-Ecma script
let q=0.1;
let r=0.2;
let t=q+r;
console.log(t==0.3);//approximate result in binary
//1.null is loosely equal to undefined only.
//2.in case of comparison operator null is equivalent to zero(number) and undefined->NaN
//3.ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se dono same type me convert(number) honge.
console.log(null==undefined)
// console.log(null===undefined)
// console.log(null==0)
// console.log(null==false)
// console.log(null==true)
// console.log(null=="")
console.log(null>0)
console.log(null<0)
console.log(null>=0)
console.log(null<=0)
console.log("honey">"don");//ascii value
console.log(10>"10")
//if-else
//for loop
for(let i=1;i<=10;i++){
    console.log(i);
}
//while loop
let j=0;
while(j<11){
    console.log(j);
    j++;
}
//do-while
let v=0;
do{
    console.log(v)
   v++;
}while(v<11);
console.log(true&&true)
console.log(true&&false)
console.log(false&&false)
console.log(false&&true)
console.log(true||true)
console.log(true||false)
console.log(false||false)
console.log(false||true)