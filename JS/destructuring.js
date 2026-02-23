let obj1={
    name:"John",
    age:30,
    address:{
    city:"New York",
    country:"USA",
    pincode:10001
    },
    class:"10th"
}
//Destructuring
console.log(obj1.address);
let city=obj1.address.city;
console.log(city);
let name=obj1.name;
console.log(name);