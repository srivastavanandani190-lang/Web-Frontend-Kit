const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
e.preventDefault();
const name1=document.getElementById("person1");
const name2=document.getElementById("person2");
const l1=person1.value.length;
const l2=person2.value.length;
const result=Math.pow(l1+l2,3)%101;
document.querySelector('h5').textContent=`RESULT:${result}%`;
form.reset();
});