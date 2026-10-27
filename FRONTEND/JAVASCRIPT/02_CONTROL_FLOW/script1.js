// function handleClick() {
//     const element = document.getElementById('first');
//     element.textContent = "Button Clicked!";
// }
// const element =document.getElementById('first');
// element.onclick=function handleClick(){
//     element.textContent = "Button Clicked!";
// }//overwrite if multiple onclick

// const element =document.getElementById('first');
// element.addEventListener('click',()=>{
//   element.textContent = "Button Clicked!";
//   element.style.backgroundColor = "gray";
// })//can add multiple listeners
// //mouseenter,dblclick,mouseover,mouseout,keydown,keyup,keypress,change,select,submit

// const parent=document.getElementById('parent');
// console.log(parent.children);
// for(let child of parent.children){
// child.addEventListener('click',()=>{
//   child.style.backgroundColor='white';
// })
// }
const grandparent=document.getElementById('grandparent');
grandparent.addEventListener('click',(e)=>{
 console.log(e);
  grandparent.style.backgroundColor='beige';
})//event bubbling
const parent=document.getElementById('parent');
parent.addEventListener('click',()=>{
  parent.style.backgroundColor='pink';
})
const child=document.getElementById('child');
child.addEventListener('click',()=>{
  child.style.backgroundColor='lightgreen';
},false)//false by default, true for event capturing
//in case of true capturing the order will be grandparent->parent->child top to bottom me triggering
//in case of false bubbling the order will be child->parent->grandparent bottom to top me triggering