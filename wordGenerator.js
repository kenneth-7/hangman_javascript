

function getRandomWord() {
    const url = `https://random-word-api.herokuapp.com/word`;
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (stopper === 1) {
                randomWords(data);
            }
            else { //stop 
            }
        });
        stopper++;    
}

    
function randomWords(data) {
    getRandomWord();
    mainPage.style.display = "none";
    wordToBlanks(data[0]);
    showKeys();
}
    
const randomWordButton = document.getElementById("randomWord");
randomWordButton.addEventListener("click", randomWords, true);