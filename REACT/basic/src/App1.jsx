 import Book from "./Book.jsx";

//  function APP1() {//captial denotes component(RETURN single component) and small indicates function
//   return (
//     <div> 
//       <Book />
//       <h1> Hello World </h1 >
//     <h2>Java Script</h2>
//     <h3>Myself NANDANI SRIVASTAVA</h3>
//     <User />
//     </div>
//   )
// }
// // export function Comp(){
// //   return (
// //     <p>first component</p>
// //   )
// // }
// export default APP1;// this is used to export the component to be used in other files like index.js where we render the component to the DOM.
// // export default Comp;
import './App1.css';
 import User from "./User.jsx";
function APP1() {
  // let name = "NANDANI SRIVASTAVA";
  // let clas="react";
  return (
    <div>
      {/* <h1> Hello World </h1 > */}
      <h2>REACT</h2>
      {/* <h3>Myself {name}</h3>
      <h2>Class: {clas}</h2> */}
      {/* <User name={name} class={clas}/> */}
      <Book />
    </div>
  )
}
export default APP1;

