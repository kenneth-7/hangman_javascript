



const submitDiv = document.getElementById("submitContainer");

let wordArr;
let blanksArr = [];
let wrongLettersArr = [];
let buttons;

function wordToBlanks(currentWord) {
    //  converts each character to underscores
    wordArr = currentWord.split("");
    for (let i = 0; i < currentWord.length; i++) {

        blanksArr.push("_");
    }
    document.getElementById("blanks").innerHTML = blanksArr.join(" ");
}


function getWord() {
    let textInput = document.getElementById("word").value;
    //  da showKeys und wordToBlanks(textInput) in showKeys
    wordToBlanks(textInput);
    showKeys(submitDiv);
}


const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'END'];

//  eigener button für END

function showKeys(hide) {
    hide.style.display = "none";
    const keyDiv = document.getElementById("keys");

    for (let j = 0; j < alphabet.length; j++) {
        buttons = document.createElement("button");
        buttons.id = "keyButtons";
        buttons.innerHTML = alphabet[j];
        keyDiv.appendChild(buttons);
        buttons.setAttribute("key", alphabet[j]);
    }
}


function ownWords() {
    ownWordButton.style.display = "none";
    submitDiv.style.display = "flex";
}


function compareLetters(event) {

    for (let k = 0; k < wordArr.length; k++) {
        if (wordArr[k].toUpperCase() == event.target.innerHTML) {
            event.target.style.backgroundColor = "#1C7C54";
            event.target.style.color = "black";
            blanksArr[k] = wordArr[k].toUpperCase();
            event.target.disabled = true;
            document.getElementById("keys").style.backgroundColor = "#262626";
        }
        document.getElementById("blanks").innerHTML = blanksArr.join(" ");
    }

    let check = wordArr.every(element => {
        //  check if clicked letter is in the word 
        return element.toUpperCase() !== event.target.innerHTML;
    });

    if (check === true) {
        wrongLettersArr.push(event.target.getAttribute("key"));
        event.target.style.backgroundColor = "#D64933";
        event.target.style.color = "black";
        event.target.disabled = true;
        document.getElementById("keys").style.backgroundColor = "#262626";
    }
    document.getElementById("wrongLetters").innerHTML = wrongLettersArr.join(" ");
}


function wrongLetters() {

    wordArr.forEach(element => {
        if (element.toUpperCase !== event.target.innerHTML) {
            wrongLettersArr.push(event.target.innerHTML);
            document.getElementById("wrongLetters").innerHTML = wrongLettersArr.join(",");
        }
    });
}


const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", getWord, true);

const ownWordButton = document.getElementById("ownWord");
ownWordButton.addEventListener("click", ownWords, true);

const keyDiv = document.getElementById("keys");
keyDiv.addEventListener("click", compareLetters, true);

//  danach wieder tauschen
//submitDiv.style.display = "none";
ownWordButton.style.display = "none";





