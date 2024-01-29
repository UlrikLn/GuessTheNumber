"use strict";

window.addEventListener("load", start);

let number;

function start() {
    console.log("JavaScript is running...");
    number = generateRandomNumber();
    document.querySelector("#guess-form").addEventListener("submit", receiveGuess);

}

function generateRandomNumber(){
    return Math.floor(Math.random() * 99) + 1
}

function receiveGuess(event){
    event.preventDefault();

    const form = event.target;
    const value = form.guess.valueAsNumber;
    console.log("Revieved guess");
    console.log(value);
    form.guess.value = "";
    checkGuess(value);
}

function checkGuess(guess){
    if(guess === number){
        guessIsCorrect();
    }
    else if( guess < number ){
        guessIsTooLow(guess);
    }
    else if (guess > number){
        guessIsTooHigh(guess);
    }

}

function guessIsCorrect(){
    console.log("Guess is correct");
    const list = document.querySelector("#guess-list");
    const html = `<br><li>You guessed ${number} - That was correct!</li>`;
    list.insertAdjacentHTML("beforeend",html);
    const button = document.querySelector("#guess-form");
    button.remove();
}

function guessIsTooLow(guess){
 console.log("Guess is too low");
const list = document.querySelector("#guess-list");
const html = `<li>You guessed ${guess} - That was too low! Try again</li>`;
list.insertAdjacentHTML("beforeend",html);

}

function guessIsTooHigh(guess){
 console.log("Guess is too high");
 const list = document.querySelector("#guess-list");
 const html = `<li>You guessed ${guess} - That was too high! Try again</li>`;
 list.insertAdjacentHTML("beforeend",html);
}