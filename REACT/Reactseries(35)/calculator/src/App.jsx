import './App.css'
import { useState } from 'react';

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  }

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  }

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  }

  const divide = () => {
    if (num2 == 0) {
      setResult("Cannot divide by 0");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  }

  return (
    <div>
      <h1>Basic Calculator</h1>

      <input 
        type="number" 
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input 
        type="number" 
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <h2>Result: {result}</h2>
    </div>
  )
}

export default App;