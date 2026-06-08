import './App.css'
import { useState } from 'react';

function App() {
  // let  counter=5;
let [count, setCount] = useState(5);

  const ADDValue=()=>{
   if (count < 20) {

    setCount(count + 1);
   } else {
    alert("Counter value cannot exceed 20");
   }
  }

  const SubtractValue=()=>{
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Counter value cannot be negative");
    }
  }
  return (
    <div>
       <h1>Counter App</h1>
       <h2>Counter value: {count}</h2>
       <button
       onClick={ADDValue}>ADD Value</button>
       <br />
        <button onClick={SubtractValue}>Subtract Value</button>
    </div>
  )
}

export default App
