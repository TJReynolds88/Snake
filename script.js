// Board
var game = {
    board: [
    "###############",
    "#             #",
    "#             #",
    "#             #",
    "#    ####     #",
    "#    ####     #",
    "#             #",
    "#             #",
    "#             #",
    "###############"
]
};

var snake = {
    parts: [
        {x: 4, y: 2}, // Head
        {x: 3, y: 2}, // Middle
        {x: 2, y: 2}, // Tail
    ],
    facing: "E"
};

var graphics = {
    canvas: document.getElementById("canvas"),
    squareSize: 30,
    drawBoard: function (ctx) {
        var ctx = graphics.canvas.getContext("2d");
        var currentYoffset = 0;
        game.board.forEach(function checkLine(line) {
            line = line.split('');
            var currentXoffset = 0;
            line.forEach(function checkCharacter(character) {
                if (character == '#') {
                    ctx.fillStyle = "black";
                    ctx.fillRect(currentXoffset, currentYoffset, graphics.squareSize, graphics.squareSize);
                }
                currentXoffset += graphics.squareSize;
            });
            currentYoffset += graphics.squareSize;
        });
    }
};

graphics.drawBoard();
graphics.drawSnake();