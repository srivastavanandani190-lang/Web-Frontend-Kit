// A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation.
// It acts as a placeholder for a value that is not immediately known but will be delivered in the future.
function f1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello Student");
            resolve();
        },4000);
    });
}
function f2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Welcome to ABES");
            resolve();
        },1000);
    });
}
f1().then(f2). catch((error) => {
    console.log("f1 and f2 are executed");
    console.error(error);
});
