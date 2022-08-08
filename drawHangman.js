function mistake() { 
    //  x, y
if (count == 1) {
    //  base
    ctx.beginPath();
    ctx.moveTo(30, 140);
    ctx.lineTo(100, 140);
    ctx.stroke();
}
if (count == 2) {
    //  straight    
    ctx.moveTo(63, 140);
    ctx.lineTo(63, 60);
    ctx.stroke();
}
if (count == 3) {
    //  bar
    ctx.moveTo(63, 61);
    ctx.lineTo(111, 61);
    ctx.stroke();   
}
if (count == 4) {
    //  rope
    ctx.moveTo(110, 61);
    ctx.lineTo(110, 80);
    ctx.stroke();
}
if (count == 5) {
    //  head
    ctx.beginPath();
    ctx.arc(110, 89, 8, 0, 2 * Math.PI);
    ctx.stroke();  
}
if (count == 6) {
    //  body
    ctx.moveTo(110, 97);
    ctx.lineTo(110, 119);
    ctx.stroke();
}
if (count == 7) {
    //  arms
    ctx.moveTo(110, 103);
    ctx.lineTo(100, 110);
    //  left ^  right v
    ctx.moveTo(110, 103);
    ctx.lineTo(120, 110);
    ctx.stroke();
}
if (count == 8) {
    //  legs
    ctx.moveTo(110, 119);
    ctx.lineTo(100, 130);
    //  left ^  right v
    ctx.moveTo(110, 119);
    ctx.lineTo(120, 130);
    ctx.stroke();
}
}