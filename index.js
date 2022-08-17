
const mainPage = document.getElementById("mainPage");

const submitDiv = document.getElementById("submitContainer");
submitDiv.style.display = "none";
let textInput = document.getElementById("word");

const gameScreen = document.getElementById("gameScreen");
const blanksDiv = document.getElementById("blanks");
const keyDiv = document.getElementById("keys");
const wrongLettersDiv = document.getElementById("wrongLetters");
const guessesLeft = document.getElementById("guessesLeft");

const resultScreen = document.getElementById("resultScreen");
const resultMessage = document.getElementById("message");
const solution = document.getElementById("solution");
const leftoverGuesses = document.getElementById("leftoverGuesses");
const pokeSpriteDiv = document.getElementById("spriteDiv");

let correctWord;
let wordArr;
let blanksArr = [];
let wrongLettersArr = [];
let buttons;
let count = 0;


const randArr = ["jazz", "augenlicht", "granatapfel", "gizmo", "Gorilla", 
    "Javascript", "Duschgel", "maul", "bildschirm", "Axt"];
let rand = Math.floor(Math.random() * 10);



 

function ownWords() {
    mainPage.style.display = "none";
    submitDiv.style.display = "flex";
}


function wordToBlanks(currentWord) {
    //  converts each character to underscores
    correctWord = currentWord;
    wordArr = currentWord.split("");
    for (let i = 0; i < currentWord.length; i++) {
        if (wordArr[i] === "-") {
            blanksArr.push("-");
        }else {
            blanksArr.push("_");
        }
    }
    blanksDiv.innerHTML = blanksArr.join(" ");
}


function getWord() {
    //  start button
    submitDiv.style.display = "none";
    wordToBlanks(textInput.value);
    showKeys();
}


const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//  eigener button für END

function showKeys() {

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
        gameOver();
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
        mistake();//   drawHangman
    }
    wrongLettersDiv.innerHTML = wrongLettersArr.join(", ");
}
 

function wrongLetters() {
    //  note wrong guesses
    wordArr.forEach(element => {
        if (element.toUpperCase !== event.target.innerHTML) {
            wrongLettersArr.push(event.target.innerHTML);
            wrongLettersDiv.innerHTML = wrongLettersArr.join(",");
        }
    });
}


function gameOver() {
    //  first letter to uppercase
    correctWord = correctWord.charAt(0).toUpperCase() + correctWord.slice(1);

    if (blanksDiv.innerHTML === wordArr.join(" ").toUpperCase()) {
        gameScreen.style.display = "none";
        resultScreen.style.display = "flex";
        resultMessage.innerHTML = "You won!";
        solution.innerHTML = "The word was: " + correctWord;
        leftoverGuesses.innerHTML  = "You had " + guessCount + " guesses left";
        //1 guess und 2 guesses!
        //  only for Pokèmon
        showSprite();
    }
    else if (count >= 8) {
        gameScreen.style.display = "none";
        resultScreen.style.display = "flex";
        resultMessage.innerHTML = "You lost!";
        solution.innerHTML = "The word was: " + correctWord;
        //  only for Pokèmon
        showSprite();
    }
}


function playAgain() {
    //  refresh page
    location.reload();
}


function allowOnlyLetters(e, t) {    
   if (window.event)    
   {    
      var charCode = window.event.keyCode;    
   }    
   else if (e)   
   {    
      var charCode = e.which;    
   }    
   else { return true; }    
   if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))  
       return true;    
   else  
   {    
      alert("Please enter only alphabets");    
      return false;    
   }           
}




const ownWordButton = document.getElementById("ownWord");
ownWordButton.addEventListener("click", ownWords, true);

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", getWord, true);

keyDiv.addEventListener("click", compareLetters, true);

const playAgainButton = document.getElementById("playAgainButton");
playAgainButton.addEventListener("click", playAgain, true);

//  danach wieder tauschen
//ownWordButton.style.display = "none";

