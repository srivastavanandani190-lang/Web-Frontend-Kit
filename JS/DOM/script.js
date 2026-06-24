let heading = document.getElementById("heading");
heading.style.color = "#65340acf";
let ul=document.querySelector("ul");//return first ul
const list=document.querySelector('li');

list.style.backgroundColor="orange";
list.style.fontSize="20px";

const list0=document.querySelectorAll('li');//return NodeList
list0[1].style.backgroundColor="pink";
list0[2].style.backgroundColor="grey";

list0.forEach((li)=>{
    li.style.fontSize="25px";
    li.style.color="black";
});

const temp=document.getElementsByClassName("text");//return HTMLCollection 
temp[0].style.fontSize="28px";
temp[0].style.color="#0eafd3";

Array.from(temp).forEach((p)=>{//return array from HTMLCollection
    p.style.fontSize="30px";
    p.style.textDecoration="underline";
});
