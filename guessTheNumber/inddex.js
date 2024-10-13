let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.getElementById('subt'); // submit new guess
const userInput = document.querySelector('#guessField'); // user guess 
const guessSlot = document.querySelector('.guesses'); // previous guesses
const remaining = document.querySelector('.lastResult'); // chances remainig 
const loOrHigh = document.querySelector('.lowOrHi'); // how close you are
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []; // our previous guesses
let numGuess = 1 ; // how many guesses we guess 

let playGame = true ;



if(playGame){
    submit.addEventListener("click",function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}




function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid input ');
    }
    else if(guess < 1 || guess > 100 ){
        alert('Enter the number between 1 to 100 ');
    }
    
    else{
        prevGuess.push(guess); // we push the guess to show which guesses

        if(numGuess >=10){
            cleanUpGuess(guess); // we clean everything for the starting new game 
              displayMessage(`Game Over . Random Number was ${randomNumber}`);
            endGame();
        } 
        else{
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    }
}




function checkGuess(guess){

    if(guess > randomNumber) {
        displayMessage(`Number is TOO high`);
    }
    else if (guess < randomNumber){
        displayMessage(`Number is TOO low `)
    }
    else{
        displayMessage(`You guessed it Right.`);
        
        endGame();
    }
  
}



function cleanUpGuess(guess){
    userInput.value = ''; // here we empty the input 
    guessSlot.innerHTML += `${guess} , `;  // we push the number of guesses in to the guessSlot
    numGuess++; // we increase the number of guesses

    remaining.innerHTML = `${11-numGuess}`; // the chances that we have remaining 
}

function displayMessage(message){
    loOrHigh.innerHTML = `<h3>${message} </h3>` ;
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute("disabled", ""); // disabled the input 
    p.classList.add('button');
    p.innerHTML =`<h3 id="newGame"> Start new Game </h3>`;
    startOver.appendChild(p);
    playGame = false ;
    newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click' ,function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess =[];
    numGuess = 1;
    guessSlot.innerHTML = '' ;
    remaining.innerHTML = `${11- numGuess} ,` ;
    userInput.removeAttribute('disabled') ;
    startOver.removeChild(p);

    playGame = true ;
});
}
