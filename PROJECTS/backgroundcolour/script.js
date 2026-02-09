const parentElement = document.getElementById('parent');
parentElement.addEventListener('click',(e)=>{
    const child=e.target;
    const body=document.querySelector('body');
    body.style.backgroundColor=child.id;
});
//explain This code snippet adds an event listener to an HTML element with the id 'parent'. 
// When any child element of 'parent' is clicked, the event listener captures the click event and 
// retrieves the target element (the child that was clicked). It then changes the background color of the entire body 
// of the webpage to match the id of the clicked child element. This allows for dynamic changes to the background color 
// based on user interaction with the child elements.   