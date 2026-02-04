let count=0;
const para=document.createElement("p");
para.innerText=`Counter:${count}`;
const button=document.createElement("button");
button.innerText="Increment";
const parent=document.getElementById("root");
parent.appendChild(para);
parent.appendChild(button);
button.addEventListener('click',()=>{
    count++;
    para.innerText=`Counter:${count}`;
    console.log(count);
});