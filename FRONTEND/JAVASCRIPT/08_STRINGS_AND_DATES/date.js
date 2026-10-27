const now=new Date();
console.log(now);//ust
console.log(now.toString());//system time
console.log(now.toISOString());//India standard time
console.log(now.toLocaleString());//am,pm12-hour format
console.log(now.getDate());
console.log(now.getDay());//1 based
console.log(now.getMonth());//0 based
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getSeconds());
const newnow=new Date(2005,1,31,6,30,20,22);
console.log(newnow);
const now1=Date.now();
const dates=new Date(123545912);//mmsecond
console.log(dates.toString());
const dates1=new Date(0);
console.log(dates1.toString());


