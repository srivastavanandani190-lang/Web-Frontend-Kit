class User{
    constructor(name, age,password){
        this.name = name;
        this.age = age;
        this.password = password;
    }
   encryptPassword(){
    return `${this.password} is encrypted`;
   }
   calluser(){
    return `Hello ${this.name}, your age is ${this.age}`;
}
}
const user1 = new User("John", 25, "myPassword123");
console.log(user1.encryptPassword()); 
console.log(user1.calluser());

//behind the scenes

// function User(name, age, password){
//     this.name = name;
//     this.age = age;
//     this.password = password;
// }
// Object.prototype.encryptPassword = function(){
//     return `${this.password} is encrypted`;
// }
// Object.prototype.calluser= function(){
//     return `Hello ${this.name}, your age is ${this.age}`;
// }
// const user2 = new User("Alice", 30, "securePass456");
// console.log(user2.encryptPassword());
// console.log(user2.calluser());

//inheritance using class
class Admin extends User{
    constructor(name, age, password, role){
        //before "call" is used to call the parent class constructor
        super(name, age, password);//calling the parent class constructor
        this.role = role;
    }
    getRole(){
        return `Hello ${this.name}, your role is ${this.role}`;
    }
}
const admin1 = new Admin("Bob", 35, "adminPass789", "Administrator");
console.log(admin1.encryptPassword());
console.log(admin1.calluser());
console.log(admin1.getRole());
console.log(admin1 instanceof Admin); 
console.log(admin1 instanceof User); 