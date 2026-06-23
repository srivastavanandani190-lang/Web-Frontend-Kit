const codingLanguages = ["JavaScript", "Python", "Java", "C++"];
 //foreach doesn't return anything, it just executes a function for each element in the array
const values= codingLanguages.forEach((language) => {
    console.log(language);
    return language;
});
console.log(values); // Output: undefined

//filter
const nums=[1,2,3,4,5,6,7,8,9,10];
const evenNums= nums.filter((num) => {
    //scope use return statement to filter out even numbers
    return num % 2 === 0;
});
console.log(evenNums); // Output: [2, 4, 6, 8, 10]

//map
const squaredNums= nums.map((num) => {
    return num * num;
});
console.log(squaredNums); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//arrays of books as objects
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950 },
    { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 }];
    const recentBooks= books.filter((book) => {
        return book.year > 1950 && book.author === "Dan Brown";
    });
    console.log(recentBooks); // Output: [{ title: "The Da Vinci Code", author: "Dan Brown", year: 2003 }]  

 //map vs filter
 //1. map returns a new array with the same number of elements as the original array, while filter returns a new array with only the elements that pass the test implemented by the provided function.
 //2. map is used to transform each element of an array, while filter is used to select a subset of elements from an array based on a condition.
 //3. map can be used to create a new array with modified values, while filter can be used to create a new array with only the values that meet a certain criteria.
 //4. map is often used when you want to perform an operation on each element of an array, while filter is often used when you want to remove elements from an array that do not meet a certain condition.

//chainning map
const numbers = [1, 2, 3, 4, 5];
const squaredEvenNumbers = numbers
    .filter((num) => num % 2 === 0) // Filter even numbers
    .map((num) => num * num) // Square the filtered even numbers
    .map((num) => num * 2); // Double the squared even numbers

console.log(squaredEvenNumbers); // Output: [4, 16]
