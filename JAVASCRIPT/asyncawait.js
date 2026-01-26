













const orderdetails = {
    orderId: 1234,
    food:["biryani","chicken curry","fried rice"],
    cost:500,
    customer_name:"Srivastava",
    customer_location:"Bangalore",
    resturant_location:"Hyderabad"
}
function placeorder(orderdetails){
    console.log("Order Placed. Waiting for resturant to accept order");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(orderdetails);
        }, 2000);
    }); 
}
function preparingorder(orderdetails){
    console.log("Resturant has accepted the order. Preparing your food");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(orderdetails);
        }, 3000);
    });
}
function pickuporder(orderdetails){
    console.log("Order is ready. Delivery person is picking up the order");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(orderdetails);
        }, 2000);       
    });
}
function deliveryorder(orderdetails){
    console.log("Delivery person is on the way to deliver your order"); 
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(orderdetails);
        }, 4000);
    });
}

//program using promises
// placeorder(orderdetails)
// .then((orderdetails)=>{
//     return preparingorder(orderdetails);    
// })
// .then((orderdetails)=>{
//     return pickuporder(orderdetails);    
// })
// .then((orderdetails)=>{
//     return deliveryorder(orderdetails);    
// })
// .then((orderdetails)=>{
//     console.log(`Order delivered to ${orderdetails.customer_name} at ${orderdetails.customer_location}`);    
// })
// .catch((error)=>{
//     console.log("Error:", error);
// });

//program using async await
async function orderfood(){
    try{
        const orderplaced = await placeorder(orderdetails);
        const orderprepared = await preparingorder(orderplaced);
        const orderpickedup = await pickuporder(orderprepared);
        const orderdelivered = await deliveryorder(orderpickedup);
        console.log(`Order delivered to ${orderdelivered.customer_name} at ${orderdelivered.customer_location}`); 
    }
    catch(error){
        console.log("Error:", error);
    }   
}
orderfood();
//parallel using async await
//number of database calls parallelly

async function userdetails(params) {
    const [comment,photos,chat]=await Promise.all([fetch("usercomment.json"),fetch("userphotos.json"),fetch("userchat.json")]);
    
}