//Getter and setter are used in classes to access and modify the private properties of an object.

class User{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    get password(){
        return `${this._password.toUpperCase()+"Hii"} is your password`;
    }
    set password(value){
        this._password = value;
    }
}
const user1 = new User("John","johnemail.com","john123");
console.log(user1.password);