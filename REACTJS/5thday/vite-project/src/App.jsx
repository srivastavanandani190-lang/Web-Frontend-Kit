// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useEffect,useState } from 'react'
 
function App() {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(30);
    useEffect(() => {
   async function Githubprofile(){
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();
    setUsers(data);
    console.log("hello");
  }
  Githubprofile();
  }, [count]);
  return (
     <>
       <h1>GitHub Profile</h1>
         <input type="text" placeholder='Enter username' onChange={(e)=>setCount(e.target.value)} />
         <div style={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
           {
             users.map((user)=>(
               <img key={user.id} src={user.avatar_url} alt={user.login} style={{width:"100px",height:"100px",borderRadius:"50%"}}/>
             ))
           }
         </div>
       </>
     )
}
export default App;