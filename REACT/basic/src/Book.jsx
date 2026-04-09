// import Detail from "./Detail.jsx";
function Book(){
 
    // const Book1={id:1,
    //     Name:"THE POWER OF YOUR SUBCONSCIOUS MIND",
    //     price:500,
    //     Image:"https://www.crossword.in/cdn/shop/files/51a_BIdKdML.jpg?v=1764149472 &width=200 &height=200&crop=fit"
    // }
    // const Book2={id:2,
    //     Name:"BETTER THAN THE MOVIES",
    //     price:400,
    //     Image:"https://www.crossword.in/cdn/shop/files/51a_BIdKdML.jpg?v=1764149472 &width=200 &height=200&crop=fit"
    // }
const Book=[
{  "name":"THE POWER OF YOUR SUBCONSCIOUS MIND",
    "price":500,
    "Image":"https://www.crossword.in/cdn/shop/files/51a_BIdKdML.jpg?v=1764149472 &width=200 &height=200&crop=fit",
},
{
    "name":"BETTER THAN THE MOVIES",
    "price":400,
    "Image":"https://www.crossword.in/cdn/shop/files/51a_BIdKdML.jpg?v=1764149472 &width=200 &height=200&crop=fit",
}
]
    
   return(
        <div>
            <h2><u>Book Component</u></h2>
            {/* <Detail data={Book1
            }/> */}
            <h3>Book Name:- {Book[0].name}</h3>
            <h3>Book ID:- {Book[0].id}</h3>
            <h4>Book Price:- {Book[0].price}</h4>
            <img src={Book[0].Image} alt="book image" />
            <h3>Book Name:- {Book[1].name}</h3>
            <h3>Book ID:- {Book[1].id}</h3>
            <h4>Book Price:- {Book[1].price}</h4>
            <img src={Book[1].Image} alt="book image" />

        </div>
    )
}
export default Book;