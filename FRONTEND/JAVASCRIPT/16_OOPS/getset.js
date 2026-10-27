function User(email,password){
    this.email = email;
    
    Object.defineProperty(this,'password',{
        get: function(){
            return `${this._password.toUpperCase()+"Hii"} is your password`;
        },
        set: function(value){
            this._password = value;
        }
    });
    this.password = password;
}

const user1 = new User("John@email.com","john123");
console.log(user1.password);