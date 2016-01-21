// Your goal is to create a command line game, where users
// guess a randomly generated number between 1-100 until
// they have guessed correctly.

// You'll need to npm install prompt
var prompt = require('prompt');

// example of using prompt
// prompt.get(['guess'], function (err, result) {
// 	console.log(result);
// 	console.log(result.guess);
// });
var compChoice = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// Create a game, where users can guess until they guess correctly.
function playGuessingGame() {

    console.log("Pick a number between 1-100");
    prompt.get(["guess"], function(err, result) {

        var guess = parseInt(result.guess);
        if (guess === compChoice) {
            console.log('Congrats! You won!');
        } else if (guess < compChoice) {
            console.log('Your guess is too low.');
            playGuessingGame();
        } else {
            console.log('Your guess is too high');
            playGuessingGame();
        }
    })
}

playGuessingGame();
