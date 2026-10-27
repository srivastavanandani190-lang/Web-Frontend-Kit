console.log("hello Honey")
console.log("hello World")
//arithmetic operator
console.log("Arithmetic operators")
console.log("Sum:",5+6)
console.log("Difference",5-6)
console.log("Product",5*6)
console.log("Division:",5/6)
console.log("Modulus:",5%6)
console.log("Exponent:",5**3)
//assignment operator
let x=50;
let y=20;
x+=y;
// x-=y;
// x*=y;
// x/=y;
// x%=y;
console.log("x:",x)
//comaprison operator
let z=20;
let w=8;
console.log("Comparison operators")
console.log(w<z)
console.log(w>z)
console.log(w<=z)
console.log(w>=z)
console.log(w==z)
//typecasting
let a="56";
let b=Number(a);
console.log("Type of a:",typeof a);
console.log("Type of b:",typeof b);
console.log(a==b);//string -> number
console.log(a===b)//type check uske baad comparison
let c="56v"
let d=Number(c);
console.log("d:",d);//notanumber type NaN
console.log(Number(true));//value of bool
console.log(NaN==NaN)//both fALSE?
console.log(NaN===NaN)
//string conversion
//boolean conversion
//undefined-NaN
//""->0
//null->0
//NaN==NaN->false
//rules-Ecma script
console.log("observation:")
let q=0.1;
let r=0.2;
let t=q+r;
console.log("t:",t);
console.log(t==0.3);//approximate result in binary

//1.null is loosely equal to undefined only.
//2.in case of comparison operator null is equivalent to zero(number) and undefined->NaN
//3.ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se dono same type me convert(number) honge.
console.log("null vs undefined")
console.log("null==undefined:",null==undefined)
console.log("null===undefined:",null===undefined)
console.log("null==0:",null==0)
console.log("null==false:",null==false)
console.log("null==true:",null==true)
console.log("null==\"\":",null=="")
console.log("null>0:",null>0)
console.log("null<0:",null<0)
console.log("null>=0:",null>=0)
console.log("null<=0:",null<=0)

console.log("honey>don:","honey">"don");//ascii value
console.log("10>\"10\":",10>"10")
//if-else
//for loop
console.log("1 to 10:")
for(let i=1;i<=10;i++){
    console.log(i);
}
//while loop
console.log("11 to 20:")
let j=11;
while(j<21){
    console.log(j);
    j++;
}
//do-while
console.log("21 to 30:")
let v=21;
do{
    console.log(v)
   v++;
}while(v<31);

console.log("logical operators:")
console.log(true&&true)//&& AND GATE
console.log(true&&false)
console.log(false&&false)
console.log(false&&true)
console.log(true||true)//|| OR GATE
console.log(true||false)
console.log(false||false)
console.log(false||true)