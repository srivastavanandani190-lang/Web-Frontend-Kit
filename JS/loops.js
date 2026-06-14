//control flow statements

if(2 == "2"){
    console.log("true");
}   else{
    console.log("false");
}

if(2 === "2"){
    console.log("true");
}   else{
    console.log("false");
}

//block acope
 const score = 100;
 if(score > 50){
    const power = "flying";
    console.log( `inside if block: ${power}`); //flying
 }
// console.log( `outside if block: ${power}`); //error

const userloggedIn = true;
const payment = false;
if(userloggedIn && payment){
    console.log("you can watch the movie");
}   
else{
    console.log("you cannot watch the movie");
}

//switch case
const day = 3;
switch(day){
    case 1:
        console.log("monday");
        break;  
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;  
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}   

