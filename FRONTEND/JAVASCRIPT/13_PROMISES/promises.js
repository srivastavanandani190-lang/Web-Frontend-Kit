//promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never.
// A promise can be in one of three states: pending, fulfilled, or rejected.

// fetch("https://api.github.com/users")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json();
//     }
//     )
//     .then((data) => {
//         console.log(data);
//         const parent=document.getElementById("first");
//         for(let i=0;i<data.length;i++){
//             const image=document.createElement("img");
//             image.src=data[i].avatar_url;
//             image.style.width="100px";
//             image.style.height="100px";
//             image.style.margin="10px";
//             parent.appendChild(image);
//         }   
//     })
//     .catch((error) => {
//         console.error("There has been a problem with your fetch operation:", error);
//     });

// In this example, we use the fetch API to get a list of GitHub users. The fetch function returns a promise that resolves to the Response object representing the response to the request.
// We then use the .then() method to handle the fulfilled state of the promise, where we parse the JSON data and create image elements for each user's avatar.
// If there is an error during the fetch operation, we catch it using the .catch() method and log it to the console.

const j1={
    name:"John",
    age:30,
    city:"New York",
    c:undefined//undefined values are not allowed in JSON
}
const j2=JSON.stringify(j1);
console.log(j2);//converts JavaScript object to JSON string

const jsonString='{"name":"John","age":30,"city":"New York"}';
const j3=JSON.parse(jsonString);
console.log(j3);//converts JSON string to JavaScript object

//creating a promise
const myPromise=new Promise((resolve,reject)=>{
    //resolve("Promise resolved successfully");
    reject("Promise rejected");
});
// console.log(myPromise);

//consuming a promise   
myPromise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.error(error);
});