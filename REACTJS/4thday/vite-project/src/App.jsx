import { useState } from 'react';
//usestae ,count=0,setcount
//setcount is a function to update count and app function will re render
function App() {
  //  let count = 0;
  let [count,setCount]=useState(0);
    //useState is a hook function
    //it helps to create a state variable in react component
    //it returns an array of two values
    //first value is the current state value
    //second value is a function to update the state value
  function increaseNumber(){
    count++;
    setCount(count);
    //hook function to update the state on UI
    //setCount will inform react that state has changed
    //react will re-render the component


    // console.log(count);
    // const para=document.querySelector("p");
    // para.textContent=`Counter:${count}`;
    //react should be used to update the UI
    //source of bug first paragraph will change!
   } 
  return (
    <>
    <p>Counter:{count}</p>
    <button onClick={increaseNumber}>Increment:{count} </button>
    
    </>
  )
}
export default App;
