//Object value overwiting
console.log(Math.PI); // Output: 3.141592653589793
Math.PI = 3.14;
console.log(Math.PI); // can't overerite

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descripter);

const chai={
    name:"ginger tea",
    price: 10,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    writable: false,
    configurable: false,
    enumerable: true
});
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
chai.name = "green tea";
console.log(chai.name);

for(let [key, value] of Object.entries(chai)){
    console.log(`${key}: ${value}`);
}
