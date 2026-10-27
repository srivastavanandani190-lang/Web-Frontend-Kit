function add(...num){//rest operator
    let sum=0;
    for(let n of num){
        sum=sum+n;
    }
    console.log("SUM:",sum);
}
add(5,6);
add(89,5,6,2);
function addnum(num1,num2){
    let sum=num1+num2;
    console.log(sum);
}
addnum(5,6,8);//just first two number
const greet=()=>{
    console.log("hello coder!");
}
greet();
const cube=num=>{
    return num*num*num;
}
console.log(cube(8));
const squr=num=>num*num;
console.log(squr(11));
const hii=()=>({name:"honey",age:20});
console.log(hii());

(function greeting(){
    console.log("good evening");
})
();//function call
//function callback argument as function (heart of js)
function blinkit(){
    console.log("We have started paking your order");
}
function zomato(){
    console.log("We have started preparing your order");
}
function payment(amount,callback){
    console.log(`${amount} payment has initiated`);
    console.log("Payment is received");
    callback();
}
payment(500,zomato);
payment(800,blinkit);
 
function approval(){
    console.log("yes");
}
function disapproval(callback){
    console.log("no");
    callback();
}
disapproval(approval);
