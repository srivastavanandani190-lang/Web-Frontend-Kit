function Detail({ props }) {
return (
    <div>
        <h2>{props.name}</h2>
        <p>Price: ${props.price}</p>
        <img src={props.Image} alt={props.name} />
    </div>  
)
}
export default Detail;
//useof props in react is to pass data from parent component to child component. 
//In this code, we are passing the book details as props from the Book component to the Detail component. 
//The Detail component then uses these props to display the book information
//map method is used to iterate over an array and render a list of components based on the data in the array.
//reduce method is used to accumulate a single value from an array by applying a function to each element in the array.
//filter method is used to create a new array with all elements that pass a test implemented by a provided function.