import { useState ,useCallback,useEffect,useRef} from 'react'
 

function App() {
 
  const [length, setLength] = useState(10)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const[password, setPassword] = useState('')
   
  //useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    // Password generation logic here
    let generatedPassword = ''
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    if(number){
      str+="0123456789"
    }
    if(symbol){
      str+="!@#$%^&*()_+"
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      generatedPassword+=str.charAt(char)
    }
    setPassword(generatedPassword)
  }, [length, number, symbol, setPassword]);

  const copytoClipboard =useCallback(() => {
    passwordRef.current?.select();//user can select the password by clicking on the input field
    passwordRef.current?.setSelectionRange(0, password.length); // For mobile devices
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, number, symbol, passwordGenerator]);

  //memoization of the passwordGenerator function using useCallback to avoid unnecessary re-renders and improve performance.

  return (
    <>

      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-8 py-3 my-10
       text-yellow-200 text-2xl font-bold bg-white/15 backdrop-blur-sm">
      <h1 className="text-1xl text-center text-yellow-200 font-bold my-3">
        Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden border mb-4">
         <input 
         type="text"
         value={password}
         className="outline-none w-full py-1 px-3 bg-black text-yellow-200"
         placeholder="Your Password"
         readOnly
         ref={passwordRef}
             />
             <button 
             onClick={copytoClipboard}
             className="bg-yellow-200  px-3 text-lg text-black py-1"
             >Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min="3"
                max="50"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="cursor-pointer"
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={number}
                id="number"
                onChange={()=>{
                  setNumber((prev) => !prev)
                }}
              />
              <label htmlFor="number">Numbers</label>
            </div>
            <div classNa
            me="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={symbol}
                id="symbol"
                onChange={()=>{
                  setSymbol((prev) => !prev)
                } }
              />
              <label htmlFor="symbol">Characters</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
