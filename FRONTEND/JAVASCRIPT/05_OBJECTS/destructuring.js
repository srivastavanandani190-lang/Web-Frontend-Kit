let obj1={
    name1:"John",
    age:30,
    address:{
    city:"New York",
    country:"USA",
    pincode:10001
    },
    class:"10th"
}
//Destructuring
// console.log(obj1.address);
// let city=obj1.address.city;
// console.log(city);
// let name=obj1.name;
// console.log(name);
let {name1,age,address:{city,country,pincode:pin}}=obj1;//destructuring
console.log(name1);
console.log(age);
console.log(city);
console.log(country);
console.log(pin);//renaming pincode to pin
let arr=[1,2,3,4,5];
//destructuring array   
let [a,b,c,d,e]=arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
