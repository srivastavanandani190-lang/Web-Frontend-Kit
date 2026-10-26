var a=10;
a=20;//updation
console.log("a:",a)
console.log(typeof(a))
var a=30.2//redecalaration
console.log("New a:",a)
console.log(typeof(a))
var b;//hosting as undefined
console.log("b:",b)
console.log(typeof(b))//undefined

let c=56;
console.log("c:",c)
c=89.2;//updation
console.log("New c:",c)
// let c=7 no redecalaration
//let d temporal dead zone
let d="honey"
console.log("d:",d)
console.log(typeof(d))

const e=89
console.log("e:",e)
//e=8 no updation and redecalaration

//Non-Primitive datatype are mutable!
let obj={
    name:"Honey",
    age:20,
    city:"Gaziabad"
}
console.log("DETAILS:",obj)
console.log(typeof(obj))
obj.name="Nandani";
console.log("DETAILS:",obj)

let arr=[10,20.5,"hello",56]
arr.push(70);
console.log("Array:",arr)
arr[2]="Hii";
arr.pop()
console.log("New Array:",arr)
let arr2=arr;//refrence is passed!
arr2[1]=99;
console.log("Array2:",arr)
console.log("Initial Array:",arr)
//Primitive data type are immutable
let n=789;
let m=n;//new memory location!
m=900;
console.log("n:",n)
console.log("m:",m)
//function in variable
let z=function greet(){
     console.log("GOOD EVENEING");
}
//ways to function call!
z();
console.log(typeof(z))