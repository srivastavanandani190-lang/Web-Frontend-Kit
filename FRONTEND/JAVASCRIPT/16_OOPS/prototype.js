// js prototype behaviour means layer by layer inheritance. 
// prototype behaviour goes on searching till not getting null values.
// this ,arrow function,new,classes,inheritance.
// array,string ,function ->objects ->null

function multiply(num){
    return num * 2;
}
multiply.power = 2;
console.log(multiply.power); // 2
console.log(multiply(5)); // 10
console.log(multiply.prototype); // {}
//function is function and object too.

function createuser(name,score){
    this.name = name;
    this.score = score;
}
createuser.prototype.getscore = function(){
    this.score++;//current context(jisne bhi)
}
createuser.prototype.getname = function(){
    console.log(this.name);
}
const user1 = new createuser("harshit",3);//with new keyword this will point to user1 object.
const user2 = new createuser("mohit",4);//to undersatnd context.
user1.getname(); //harshit
user2.getname(); //mohit

/*
A new object is created: The new keyword initiates the
creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked
to the prototype property of the constructor function. This
means that it has access to properties and methods defined
on the constructor's prototype.

The constructor is called: The constructor function is
called with the specified arguments and this is bound to
the newly created object. If no explicit return value is
specified from the constructor, JavaScript assumes this,
the newly created object, to be the intended return value.

The new object is returned: After the constructor function
has been called, if it doesn't return a non-primitive value
(object, array, function, etc.), the newly created object
is returned.
*/

let myname="Nandani      ";
console.log(myname.length); //13
console.log(myname.trim().length); //7

//factory fucntion->by using factory function we can create multiple objects with same properties and methods.
let superheros=["thor","ironman"];
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getspidermanpower:function(){
        console.log(`spiderman power is ${this.spiderman}`);
    }
}
Object.prototype.honey=function(){
    console.log("I am Legendary");
}
heroPower.honey(); 
superheros.honey(); 
//power to array and functions too because they are objects.
Array.prototype.hey=function(){
    console.log("I am array");
}
superheros.hey(); //not to object 