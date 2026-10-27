//Scope 
//1.Global scope->accessible from anywhere
//2.functional scope->accessible within the functional
//3.block scope->accessible within the block
//var doesn't follow block scope but let and const follow all scope

let global=40;
function greet(){
    let global=30;
    function meet(){
        let global=20;
        console.log(global);
    }
    meet();
}
greet();
console.log(global);

function createCounter(){
    let count=0;
    function increment(){
        count++;
        return count;
}
    return increment;
}
const counter1=createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

let user={
    balance:1000,
    deposit:function(amount){
        if(typeof amount==='number' && amount>0){
            this.balance+=amount;
            return this.balance;
    }
}
}
console.log(user.deposit(500));
console.log(user.deposit(-200));//undefined
console.log(user.deposit("abc"));//undefined

function createBankAccount(){
    let balance=500;
    const user={
        deposit:function(amount){
            if(typeof amount==='number' && amount>0){
                balance+=amount;
                return balance;
            }
    },
        withdraw:function(amount){
            if(typeof amount==='number' && amount>0 && amount<=balance){
                balance-=amount;
                return balance;
            }
        },
        getBalance:function(){
            return balance;
        }
    }
    return user;
}
const myAccount=createBankAccount();
console.log(myAccount.getBalance());
console.log(myAccount.deposit(300));
console.log(myAccount.withdraw(200));
console.log(myAccount.getBalance());
//higher order function
function double(){
    return function execute(){
        console.log("function inside function");
    }
}
const ans=double();
ans();
function double(value){
    return function execute(num){
        return num*value;
    }
}
const triple=double(3);
console.log(triple(5));
const quadruple=double(4)(5);
console.log(quadruple);
