//js hold classes? 
//Yes, JavaScript is a prototype-based language.
//Yes, JavaScript supports classes, which are a template for creating objects.
//Classes in JavaScript were introduced in ECMAScript 6 (ES6) and provide a more structured and object-oriented way to create objects and handle inheritance.
//objects ->collection of properties and methods (example toLowerCase(), toUpperCase(), length, etc.)
//parts of oop ->object literals, constructor functions,prototype, classes, inheritance, encapsulation, polymorphism, abstraction,instance(new ,this).



const user={
    username:"Nandani",
    email:"nandani@example.com",
    logincount:0,
    signin:true,

    getUserDetails:function(){
        console.log(`Username: ${this.username}`);
        console.log(this);//current context i.e user object
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//current context i.e window object

// const promiseone=new Promise();
//new is constructor function which is used to create an instance of a single object.

function User(username,email,logincount,signin){
    this.username=username;
    this.email=email;
    this.logincount=logincount;
    this.signin=signin;
    return this;//without, it will work.
}
const user1=new User("Nandani","nandani@example.com",0,true);
const user2=new User("hani","hani@example.com",1,false);
console.log(user1);
console.log(user2);
//without new it will overwrite the global object and return user2 in user1 and user2 will be undefined.
console.log(user1.constructor);//refer to itself.
