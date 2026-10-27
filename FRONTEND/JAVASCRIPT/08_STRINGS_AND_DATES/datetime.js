let mydate=new Date();//object in js

console.log(mydate);
console.log(mydate.toString());

// mydate.toLocaleString('default',
//  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
//  });//date in local format with options 


console.log(mydate.toDateString());//just date
console.log(mydate.toTimeString());//just time
console.log(mydate.toLocaleDateString());//date in local format
console.log(mydate.toLocaleTimeString());//time in local format

console.log(mydate.getFullYear());//get year
console.log(mydate.getMonth());//get month
console.log(mydate.getDate());//get date
console.log(mydate.getHours());//get hours
console.log(mydate.getMinutes());//get minutes
console.log(mydate.getSeconds());//get seconds
console.log(mydate.getMilliseconds());
console.log(mydate.getDay());//get day of week

 
 
let mydayenew= new Date(2024, 5, 10, 12, 30, 0);
//create date object with specific date and time
let mydayenew2= new Date("01-05-2024 10:00:00");
console.log(mydayenew.toString());
console.log(mydayenew2.toString());

let mytimestamp=Date.now();//get current timestamp in milliseconds
console.log(mytimestamp);
 
console.log(Math.floor(mytimestamp/1000));//get time in seconds since Jan 1, 1970


//month is satrt from 0 in js, so 5 means june
