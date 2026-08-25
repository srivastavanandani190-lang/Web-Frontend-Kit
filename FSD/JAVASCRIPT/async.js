console.log("task 1");
console.log("task 2");
setTimeout(() => {
    console.log("task 3");
}, 1000);
console.log("hello ABES");
//call back function is a function which is passed as an argument to another function and it is executed after some time or after some task is completed.
// User Experience (UX): It keeps your web apps responsive. 
// Buttons remain clickable and animations keep smoothly running while data loads in the background.
// Resource Efficiency: Your server doesn't waste CPU power sitting idle while waiting for database queries or file transfers to finish.
// Flexibility: It allows you to pass actions around, not just data. You can tell a function:
//  "Do your job, and when you are done, execute this specific action I just handed you."
