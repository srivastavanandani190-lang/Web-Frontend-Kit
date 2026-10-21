const promiseone=new Promise(function(resolve, reject){
    //do as async task
    // DB calls ,cryptography, network calls
    setTimeout(() => {
       console.log("ASYNC TASK DONE");
       resolve();//link to then block
    }, 1000);
});
promiseone.then(function() {
    console.log("Promise one then called");
});


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("ASYNC TASK TWO DONE");
        resolve();
    }, 2000);
}).then(function() {
    console.log("Promise two then called");
});


//data consumption
const promiseThree=new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("ASYNC TASK THREE DONE");
        resolve({name:"John", age:30});
    }, 3000);
}).then(function(data) {
    console.log("Promise three then called");
    console.log(data);
});


//chainning and error handling 
const promiseFour=new Promise(function(resolve, reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({name:"Honey", age:20});
        }else{
            reject("Error: Something went wrong");
        }
    }, 4000);
}).then(function(data) {
    console.log(data);
    return data.name;
}).then(function(name) {
    console.log(name);
}).catch(function(error) {
    console.log(error);
}).finally(function() {
    console.log("Promise four finally called");
});


//async await
const promiseFive=new Promise(function(resolve, reject){
    setTimeout(() => {
        let error=true;    
    if(!error){
        resolve({name:"Nandani", age:19});
    }else{
        reject("Error: Something went wrong");
    }}
, 5000)
});
async function asyncFunction() {
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

asyncFunction();//false run properly 
//in case of error handling we can use try catch block


// async function getAllusers(){
//     try{
//         const response=await fetch("https://jsonplaceholder.typicode.com/users");
//         const data=await response.json();//parsing the data into json format
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }
// getAllusers();


fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response) {
    return response.json(); 
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});