
const submitDiv = document.getElementById("submitContainer");
const blanksDiv = document.getElementById("blanks");
const wrongLettersDiv = document.getElementById("wrongLetters");
const gameScreen = document.getElementById("gameScreen");
const keyDiv = document.getElementById("keys");
const loserScreen = document.getElementById("loserScreen");
const solution = document.getElementById("solution");

let textInput = document.getElementById("word");

gameScreen.style.display = "none";

let wordArr;
let blanksArr = [];
let wrongLettersArr = [];
let buttons;
let count = 0;

function wordToBlanks(currentWord) {
    //  converts each character to underscores
    wordArr = currentWord.split("");
    for (let i = 0; i < currentWord.length; i++) {

        blanksArr.push("_");
    }
    blanksDiv.innerHTML = blanksArr.join(" ");
}


function getWord() {
    
    //  da showKeys und wordToBlanks(textInput) in showKeys
    wordToBlanks(textInput.value);
    showKeys(submitDiv);
}


const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'END'];

//  eigener button für END

function showKeys(hide) {
    hide.style.display = "none";
    gameScreen.style.display = "flex";

    for (let j = 0; j < alphabet.length; j++) {
        buttons = document.createElement("button");
        buttons.id = "keyButtons";
        buttons.innerHTML = alphabet[j];
        keyDiv.appendChild(buttons);
        buttons.setAttribute("key", alphabet[j]);
        keyDiv.disabled = true;
    }
}


function ownWords() {
    ownWordButton.style.display = "none";
    submitDiv.style.display = "flex";
}


function compareLetters(event) {

    for (let k = 0; k < wordArr.length; k++) {
        if (wordArr[k].toUpperCase() == event.target.innerHTML) {
            //  click the right letter
            event.target.style.backgroundColor = "#faff76";
            event.target.style.color = "black";
            blanksArr[k] = wordArr[k].toUpperCase();
            event.target.disabled = true;
        }
        blanksDiv.innerHTML = blanksArr.join(" ");
    }

    let check = wordArr.every(element => {
        //  check if clicked letter is not in the given word 
        return element.toUpperCase() !== event.target.innerHTML;
    });

    if (check === true && event.target.id === "keyButtons") {
        //  if letter is not  in the word && if you press a button
        wrongLettersArr.push(event.target.getAttribute("key"));
        event.target.style.backgroundColor = "#2c2c2c";
        event.target.style.color = "ababab";
        event.target.disabled = true;
        count++;
        gameOver();
    }
    wrongLettersDiv.innerHTML = wrongLettersArr.join(", ");
}
 

function wrongLetters() {

    wordArr.forEach(element => {
        if (element.toUpperCase !== event.target.innerHTML) {
            wrongLettersArr.push(event.target.innerHTML);
            wrongLettersDiv.innerHTML = wrongLettersArr.join(",");
        }
    });
}


function gameOver() {
    if (count >= 8) {   //  (8)
        loserScreen.style.display = "flex";
        solution.innerHTML = "The word was: " + textInput.value;
    }
}


function playAgain() {
    //  refresh page
    location.reload();
}


const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", getWord, true);

const ownWordButton = document.getElementById("ownWord");
ownWordButton.addEventListener("click", ownWords, true);


keyDiv.addEventListener("click", compareLetters, true);

const playAgainButton = document.getElementById("playAgainButton");
playAgainButton.addEventListener("click", playAgain, true);

//  danach wieder tauschen
//submitDiv.style.display = "none";
ownWordButton.style.display = "none";





