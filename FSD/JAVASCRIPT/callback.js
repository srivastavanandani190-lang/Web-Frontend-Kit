function sum(a, b) {
    return a + b;
}

function sumwithMsg(callback,msg) {
    const result = callback(2, 3);
    const fresult="hello "+msg+" the sum is "+result;
    console.log(fresult);
}
sumwithMsg(sum, "Alice");
// Non-blocking execution: Asynchronous functions allow time-consuming tasks to run in the background without
//  freezing the application interface.The async keyword: Preceded before a function name to guarantee it 
//  automatically returns a JavaScript Promise.The await keyword: Pauses code execution inside the specific
//   function until the background task successfully resolves.Unified error handling: Implemented using standard
//    try...catch blocks to capture failures across multiple background steps.