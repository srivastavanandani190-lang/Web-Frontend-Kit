const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
e.preventDefault();
//use of event.preventDefault() to prevent the default form submission behavior, which would typically cause the page to reload.
//  This allows us to handle the form submission with JavaScript and display the result without refreshing the page.
const name1=document.getElementById("person1");
const name2=document.getElementById("person2");

const l1=name1.value.length;
const l2=name2.value.length;

const result=Math.pow(l1+l2,3)%101;
// This line calculates the "friendship score" by adding the lengths of the two names, 
// raising the sum to the power of 3, and then taking the remainder when divided by 101.
//  This ensures the result is a percentage between 0 and 100.
document.querySelector('h5').textContent=`RESULT:${result}%`;
// This line updates the text content of the first <h5> element in the document to display 
// the calculated friendship score in a formatted string.
form.reset();// This line resets the form fields, clearing the input values for both names after the calculation is done.
 
 

});