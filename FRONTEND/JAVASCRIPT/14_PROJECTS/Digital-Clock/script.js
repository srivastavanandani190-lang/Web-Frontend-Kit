const clock=document.getElementById("clock");

//setinterval is a function that will run every 1000 milliseconds (1 second) and update the clock with the current time.
setInterval(function(){
let date=new Date();
console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString();
},1000);
