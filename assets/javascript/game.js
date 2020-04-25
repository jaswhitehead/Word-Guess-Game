//**First I set up all my variables for outcomes */
var underscoresLabel = document.querySelector("#underscores");
var remainingLabel = document.querySelector("#remaining-guesses");
var attemptsLabel = document.querySelector("#attempts");

//**This offers a wordbank of potential answers */
var wordBank = ["stewie", "quagmire", "brian", "herbertthepervert", "lois", "meg", "peter", "cleveland", "joe", "chris"];

//**This sets the total amount of attempts allowed and creates an array to record the numbers */
var attempts = []
var remainingAttempts = 8;
// Main Functionality Starts
var wordToGuess = getWord();
updateLabels()
function getWord() {
    var wordsSize = wordBank.length;
    var indexWord = Math.floor(Math.random() * wordsSize);
    return wordBank[indexWord];
}
function updateLabels() {
    underscoresLabel.textContent = updateBlanks()
    remainingLabel.textContent = remainingAttempts;
    attemptsLabel.textContent = attempts.toString();
}
function updateBlanks() {
    var blanks = []
// Go through each letter in nameToGuess
    for(var letter of wordToGuess) {
        if(attempts.includes(letter)) {
            blanks.push(letter)
        } else {
            blanks.push('_')
        }
    }
    return blanks.join(' ')
}

//*Event Listener is to watch for correct keys corresponding to randomly chosen name from wordbank
document.addEventListener("keypress", function(e) {
    var keyPressed = e.key.toLocaleLowerCase();
    if(!attempts.includes(keyPressed)) {
        attempts.push(keyPressed);
        if(!wordToGuess.includes(keyPressed)) {
            remainingAttempts--;
        }
    }
    // Decrease attempts by one when key pressed
    updateLabels();
    if(remainingAttempts == 0) {
        alert("Game Over!")
        window.location.reload(true);
    }
})