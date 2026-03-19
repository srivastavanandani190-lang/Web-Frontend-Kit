 import Book from "./Book.jsx";
 import User from "./User.jsx";
 function APP1() {//captial denotes component(RETURN single component) and small indicates function
  return (
    <div> 
      <Book />
      <h1> Hello World </h1 >
    <h2>Java Script</h2>
    <h3>Myself NANDANI SRIVASTAVA</h3>
    <User />
    </div>
  )
}
// export function Comp(){
//   return (
//     <p>first component</p>
//   )
// }
export default APP1;// this is used to export the component to be used in other files like index.js where we render the component to the DOM.
// export default Comp;