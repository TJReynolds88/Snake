var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");
var board = [
    "###############",
    "#             #",
    "#             #",
    "#             #",
    "#    ####     #",
    "#    ####     #",
    "#             #",
    "#             #",
    "#             #",
    "###############",
];

var currentYoffset = 0;
var squareSize = 30;

board.forEach(function checkLine(line) {
    line = line.split('');
    var currentXoffset = 0;
    line.forEach(function checkCharacter(character) {
        if(character == '#') {
            ctx.fillStyle = "black";
            ctx.fillRect(currentXoffset, currentYoffset, squareSize, squareSize);
        }
        currentXoffset += squareSize;
    });
    currentYoffset += squareSize;
})


function draw() {
    
ctx.fillStyle = "black";
ctx.fillRect(0,0,30,30);

}


function remove() {
    ctx.clearRect(0,0, 300, 300);
}