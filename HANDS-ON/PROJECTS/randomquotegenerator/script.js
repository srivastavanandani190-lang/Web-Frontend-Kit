const   quotes=[
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Dream bigger. Do bigger.",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Great things never come from comfort zones. - Neil Strauss",
    "Push yourself, because no one else is going to do it for you",
    "Opportunities don't happen, you create them.",
    "It is never too late to be what you might have been.",
    "Do what you can, with what you have, where you are.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "If you can dream it, you can do it.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "I am not a product of my circumstances. I am a product of my decisions.",
    "It always seems impossible until it's done.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success consists of going from failure to failure without loss of enthusiasm.",
];
// This code snippet defines an array called 'quotes' that contains a list of motivational quotes. 
// Each quote is a string, and the array can be used to randomly select and display a quote when needed.

const button=document.querySelector("button");
const quote=document.querySelector("h1");
//querySelector is used to select the first element that matches a specified CSS selector. 
// In this case, it selects the first <button> element and the first <h1> element in the document and assigns
//  them to the variables 'button' and 'quote' respectively.

button.addEventListener("click",()=>{

    const randomIndex=Math.floor(Math.random()*quotes.length);
    // This line generates a random index by multiplying a random decimal (between 0 and 1) with the length of the 
    // quotes array, and then rounding it down to the nearest whole number using Math.floor(). This ensures that the 
    // index is a valid position within the quotes array.


    quote.textContent=quotes[randomIndex];// This line updates the text content of the h1 element
    //  (which is selected and stored in the variable 'quote')


});