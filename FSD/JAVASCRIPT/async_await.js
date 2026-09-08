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
function f(){
    return new Promise((resolve, reject) => {
    },1000);
}
async function executeFunctions() {
    try{
        await f1();
        await f2();
    }
    catch(error){
        console.log("f1 and f2 are executed");
        console.error(error);
    }
}
executeFunctions();
//call back(hell)->promise()->async await(wait time increases)
// Callbacks suffer from unreadable nested code ("callback hell") and poor error tracking,
//  while async/await inherits Promises' structural flaws like immediate execution, lack of native cancellation, 
//  and an inability to handle live data streams.