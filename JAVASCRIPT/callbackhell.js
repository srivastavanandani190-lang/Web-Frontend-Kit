//zomato 
function placeOrder(callback){
    console.log("Payment is in process");
    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        callback();
    },3000);
}
function preparingOrder(callback){
    console.log("Your food preparation has been started");
    setTimeout(()=>{
        console.log("Your food is prepared");  
        callback(); 
    },3000);
}
function pickUpOrder(){
    console.log("Your order is out for delivery");
    setTimeout(()=>{
        console.log("Your order has been delivered");
    },3000);
}
 
//callback hell very complex to read and maintain.
//debugging is very difficult,function get nested deeply.
//solution to this problem is Promises and async await


placeOrder(()=>{
    preparingOrder(()=>{
        pickUpOrder();
    });  
});

