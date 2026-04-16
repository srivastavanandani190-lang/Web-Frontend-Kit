import Detail from "./Detail";

function Book() {

  const books = [
    {
      id: 1,
      name: "THE POWER OF YOUR SUBCONSCIOUS MIND",
      price: 500,
      Image: "https://www.crossword.in/cdn/shop/files/51a_BIdKdML.jpg?v=1764149472&width=200&height=200&crop=fit",
    },
    {
      id: 2,
      name: "BETTER THAN THE MOVIES",
      price: 400,
      Image: "https://www.crossword.in/cdn/shop/files/51a_BIdKdML.jpg?v=1764149472&width=200&height=200&crop=fit",
    }
  ];
//list of arrays of books with their details such as id, name, price and image.
  return (
    <div>
      {
        books.map((element) => (
          <Detail 
            props={element} 
            id={element.id} 
            key={element.id} 
          />
        ))
      }
    </div>
  );
}

export default Book;