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