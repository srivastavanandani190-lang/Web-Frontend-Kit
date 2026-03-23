// import Detail from "./Detail.jsx";
function Book(){
 
    const Book1={id:1,
        Name:"c",
        price:5000
    }
// ,{
//     id:2,
//     Name:"hello",
//     price:2000
// }]
    
   return(
        <div>
            <h1>Book Component</h1>
            {/* <Detail data={Book1
            }/> */}
            <h2 >book name is {Book1.Name}</h2>
            <h3>book id is {Book1.id}</h3>
            <h4>book price is {Book1.price}</h4>
        </div>
    )
}
export default Book;