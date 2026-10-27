const User={
    _email:'john@email.com',
    _password:'john123',
    //underscore is used to make the property private
    get email(){
        return this._email.toLowerCase();
    },//bring from memory
    set email(value){
        this._email=value;
    }//set in memory
}
const user1 = Object.create(User);
console.log(user1.email);