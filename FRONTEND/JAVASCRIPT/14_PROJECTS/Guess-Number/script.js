const randomNumber = Math.floor(Math.random() * 100) + 1;

const submit=document.querySelector('#guessSubmit');
const userInput=document.querySelector('#guessField');

const guesses=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult');

const lowOrHi=document.querySelector('.lowOrHi');

const startOver=document.querySelector('.resultParas');
const p=document.createElement('p');

let prevguesses=[];
let guessCount=1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',checkGuess);
}

//value 1 to 100
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('Please enter a number greater than 0');
    }else if(guess>100){
        alert('Please enter a number less than 100');
    }else{
        return true;
    }
}

//check the guess
function checkGuess(guess){
    const userGuess=Number(userInput.value);
    if(validateGuess(userGuess)){
        prevguesses.push(userGuess);
        guesses.textContent=prevguesses.join(', ');
        guessCount++;
        lastResult.textContent=10-guessCount;
        if(userGuess===randomNumber){
            lowOrHi.textContent='Congratulations! You guessed the number!';
            playgame=false;
        }else if(guessCount===10){
            lowOrHi.textContent='Game Over! The number was '+randomNumber;
            playgame=false;
        }else{
            lowOrHi.textContent='Try again!';
        }
    }
}

function displayguesses(){
    if(guessCount===1){
        guesses.textContent='Previous guesses: ';
    }
}

function displaymessage(){
    if(!playgame){
        userInput.value='';
        userInput.setAttribute('disabled',true);
        submit.setAttribute('disabled',true);
        p.textContent='Click to start a new game';
        startOver.appendChild(p);
        p.addEventListener('click',newGame);
    }
}
function newGame(){}

function  endgame(){
}