const num = parseInt(Math.random()*100 + 1);
console.log(num)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultPara')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    });
}

function validateGuess(val) {
    if(isNaN(val) || val < 1 || val > 100) alert('Please Enter a Valid Number');
    else {
        prevGuess.push(val);
        if(numGuess == 11) {
            disaplayGuess(val);
            displayMessage(`Game Over. Random number was ${num}`);
            endGame();
        }
        else {
            disaplayGuess(val);
            checkGuess(val);

        }
    }
}

function checkGuess(val) {
    if(val == num) {
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(val < num ) {
        displayMessage(`Number is too low`);
    }
    else {
        displayMessage(`Number is too High`);
    }
}

function disaplayGuess(val) {
    userInput.value = '';
    guessSlot.innerHTML += `${val}`;
    numGuess += 1;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(val) {
    lowOrHi.innerHTML = `<h2>${val}</h2>`;
}

function endGame() {
    
}

function newGame() {

}