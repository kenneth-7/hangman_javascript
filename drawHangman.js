
let canvas = document.getElementById("hangmanCanvas");
let ctx = canvas.getContext("2d");
let guessCount = 8;

function mistake() {
    //  x, y
    if (count == 1) {
        //  base
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(60, 180);
        ctx.lineTo(140, 180);
        ctx.stroke();
        guessCount -= 1;
    }
    if (count == 2) {
        //  straight    
        ctx.moveTo(100, 180);
        ctx.lineTo(100, 60);
        ctx.stroke();
        guessCount -= 1;
    }
    if (count == 3) {
        //  bar
        ctx.moveTo(100, 61);
        ctx.lineTo(150, 61);
        ctx.stroke();
        guessCount -= 1;
    }
    if (count == 4) {
        //  rope
        ctx.moveTo(150, 61);
        ctx.lineTo(150, 80);
        ctx.stroke();
        guessCount -= 1;
    }
    if (count == 5) {
        //  head
        ctx.beginPath();
        ctx.arc(150, 89, 8, 0, 2 * Math.PI);
        ctx.stroke();
        guessCount -= 1;
    }
    if (count == 6) {
        //  body
        ctx.moveTo(150, 97);
        ctx.lineTo(150, 119);
        ctx.stroke();
        guessCount -= 1;
    }
    if (count == 7) {
        //  arms
        ctx.moveTo(150, 103);
        ctx.lineTo(140, 110);
        //  left ^  right v
        ctx.moveTo(150, 103);
        ctx.lineTo(160, 110);
        ctx.stroke();
        guessCount -= 1;
    }
    if (count == 8) {
        //  legs
        ctx.moveTo(150, 119);
        ctx.lineTo(140, 130);
        //  left ^  right v
        ctx.moveTo(150, 119);
        ctx.lineTo(160, 130);
        ctx.stroke();
        guessCount -= 1;
    }
    guessesLeft.innerHTML = "Guesses left: " + guessCount;
}