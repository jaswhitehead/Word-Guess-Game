
//Gets computer to generate a random letter that will serve as the correct answer for the game**/

var emptyStrong
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var guess;
var guessCount = 0;
var priorGuess = 0;
var correctGuess = false; 

function getRandomNumber(upper){
    var num = Math.floor(Math.random()*upper) + 1;
    return num;
}
while(true){
    guess = prompt('I am thinking of a random letter between A-Z.....What is it?');
    guessCount += 1;
    if (parseInt(guess) === randomNumber){
        correctGuess = true;
        break;
    }
}
document.write('<h1>You guessed the correct letter!</h1>');
document.write('it took you' + guessCount + ' tries to guess the number' + randomNumber);