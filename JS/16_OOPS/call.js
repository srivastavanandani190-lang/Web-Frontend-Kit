//call hold refrences to the function and the object it should be called with
function SetUsername(username){
    this.username=username;
    console.log("called");
}
function createuser(username,email,password){
    SetUsername.call(this,username);//pases current execution context to the function
    this.email=email;
    this.password=password;
}
let user1=new createuser("Nandani","nandani@gmail.com","1234");
console.log(user1);