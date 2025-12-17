function add(...num){//rest operator
    let sum=0;
    for(let n of num){
        sum=sum+n;
    }
    console.log("SUM:",sum);
}
add(5,6);
add(89,5,6,2);
function addnum(num1,num2){
    let sum=num1+num2;
    console.log(sum);
}
addnum(5,6,8);//just first two number
