class PieceSelector {
    constructor(x, y, boardWidth) {
        this.x = x;
        this.y = y;
        this.boardWidth = boardWidth;
        this.pieces = this.generatePieces();
        this.filledInds = [1, 1, 1];
    }

    generatePieces() {
        var pieces = new Array(3);
        for (let i = 0; i < pieces.length; i++) {
            const random = Math.floor(Math.random() * 22);
            const c = Math.floor(Math.random() * 5) + 1;
            switch (random) {
                case 0:
                    pieces[i] = [
                        [c, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        1,
                        1
                    ]
                    break;
                case 1:
                    pieces[i] = [
                        [c, 0, 0, 0, 0],
                        [0, c, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        2
                    ]
                    break;
                case 2:
                    pieces[i] = [
                        [0, c, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        2
                    ]
                    break;
                case 3:
                    pieces[i] = [
                        [c, c, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        3
                    ]
                    break;
                case 4:
                    pieces[i] = [
                        [c, c, c, 0, 0],
                        [0, 0, c, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        3,
                        2
                    ]
                    break;
                case 5:
                    pieces[i] = [
                        [0, c, 0, 0, 0],
                        [0, c, 0, 0, 0],
                        [c, c, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        3
                    ]
                    break;
                case 6:
                    pieces[i] = [
                        [c, 0, 0, 0, 0],
                        [c, c, c, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        3,
                        2
                    ]
                    break;
                case 7:
                    pieces[i] = [
                        [c, c, 0, 0, 0],
                        [0, c, 0, 0, 0],
                        [0, c, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        3
                    ]
                    break;
                case 8:
                    pieces[i] = [
                        [0, 0, c, 0, 0],
                        [c, c, c, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        3,
                        2
                    ]
                    break;
                case 9:
                    pieces[i] = [
                        [c, 0, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [c, c, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        3
                    ]
                    break;
                case 10:
                    pieces[i] = [
                        [c, c, c, 0, 0],
                        [c, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        3,
                        2
                    ]
                    break;
                case 11:
                    pieces[i] = [
                        [c, c, c, 0, 0],
                        [c, c, c, 0, 0],
                        [c, c, c, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        3,
                        3
                    ]
                    break;
                case 12:
                    pieces[i] = [
                        [c, c, 0, 0, 0],
                        [c, c, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        2
                    ]
                    break;
                case 13:
                    pieces[i] = [
                        [c, 0, 0, 0, 0],
                        [c, c, 0, 0, 0],
                        [0, c, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        3
                    ]
                    break;
                case 14:
                    pieces[i] = [
                        [0, c, c, 0, 0],
                        [c, c, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        3,
                        2
                    ]
                    break;
                case 15:
                    pieces[i] = [
                        [0, c, 0, 0, 0],
                        [c, c, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        3
                    ]
                    break;
                case 16:
                    pieces[i] = [
                        [c, c, 0, 0, 0],
                        [0, c, c, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        3,
                        2
                    ]
                    break;
                case 17:
                    pieces[i] = [
                        [c, c, c, c, c],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        5,
                        1
                    ]
                    break;
                case 18:
                    pieces[i] = [
                        [c, 0, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        1,
                        5
                    ]
                    break;
                case 19:
                    pieces[i] = [
                        [c, c, c, 0, 0],
                        [0, c, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        3,
                        2
                    ]
                    break;
                case 20:
                    pieces[i] = [
                        [0, c, 0, 0, 0],
                        [c, c, 0, 0, 0],
                        [0, c, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        3
                    ]
                    break;
                case 21:
                    pieces[i] = [
                        [0, c, 0, 0, 0],
                        [c, c, c, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        3,
                        2
                    ]
                    break;
                case 22:
                    pieces[i] = [
                        [c, 0, 0, 0, 0],
                        [c, c, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        2,
                        3
                    ]
                    break;
                case 23:
                    pieces[i] = [
                        [c, 0, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [c, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        1,
                        4
                    ]
                    break;
                case 23:
                    pieces[i] = [
                        [c, c, c, c, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        1,
                        4
                    ]
                    break;
            }
        }
        return pieces;
    }

    setPiece(index, value) {
        pieces[index] = value;
    }

    draw(blockCtx, selectedIndex, mode = "select", placeLoc = [0, 0], isObstructed = true, x = this.x, y = this.y, boardWidth = this.boardWidth) {
        blockCtx.fillStyle = "green";
        blockCtx.fillRect(x, y, boardWidth, boardWidth * 5 / 12)
        const smallBlockWidth = boardWidth / 25;
        const xSpacing = (boardWidth) / 4;
        const ySpacing = (boardWidth * 17 / 12 - boardWidth - smallBlockWidth * 5) / 2;
        blockCtx.fillStyle = "lightBlue";
        this.pieces.forEach((piece, index) => {
            if (piece) {
                blockCtx.globalAlpha = 0.5;
                if (mode == "select") {
                    if (index == selectedIndex) {
                        blockCtx.globalAlpha = 1;
                    }
                } else {
                    if (index == selectedIndex) {
                        blockCtx.globalAlpha = 0;
                    }
                }
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        if (piece[i][j]) {
                            switch (piece[i][j]) {
                                case 1:
                                    blockCtx.fillStyle = "lightBlue";
                                    break;
                                case 2:
                                    blockCtx.fillStyle = "purple";
                                    break;
                                case 3:
                                    blockCtx.fillStyle = "red";
                                    break;
                                case 4:
                                    blockCtx.fillStyle = "yellow";
                                    break;
                                case 5:
                                    blockCtx.fillStyle = "orange";
                                    break;
                            }
                            blockCtx.strokeWidth = 0;
                            blockCtx.fillRect((xSpacing) * (index + 1) + x + j * smallBlockWidth, y + i * smallBlockWidth + ySpacing, smallBlockWidth, smallBlockWidth);
                        }
                    }
                }
            }
        });
        blockCtx.globalAlpha = 0.7;
        const selectBlockWidth = boardWidth / 8;
        const selectedPiece = this.pieces[selectedIndex];
        if (isObstructed) {
            blockCtx.fillStyle = "red";
        } else {
            blockCtx.fillStyle = "rgb(50, 255, 50)";
        }
        if (mode == "place") {
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    if (selectedPiece[i][j]) {
                        blockCtx.fillRect(x + placeLoc[0] * selectBlockWidth + selectBlockWidth * j, y - boardWidth + placeLoc[1] * selectBlockWidth + selectBlockWidth * i, selectBlockWidth, selectBlockWidth)
                    }
                }
            }
        }
        blockCtx.globalAlpha = 1;
    }
}

class Controls {
    constructor() {
        this.up = false;
        this.down = false;
        this.right = false;
        this.left = false;
        this.esc = false;
        this.enter = false;
        this.#addEventListeners();
    }

    #addEventListeners() {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    this.up = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.down = true;
                    break;
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "Enter":
                    this.enter = true;
                    break;
                case "Escape":
                    this.esc = true;
                    break;
            }
        });
    }
}

class Board {
    constructor(x, y, width, controller = "KEYS") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = width * 17 / 12;
        this.squareWidth = width / 8;

        this.selectedIndex = 0;
        this.mode = "select";
        this.placeLoc = [0, 0];

        this.score = 0;

        this.boardValues = Array.from({ length: 8 }, () => new Array(8).fill(0));

        this.pieceSelector = new PieceSelector(x, y + width, width);
        this.controls = new Controls();
    }

    update() {
        var selectedPiece = this.pieceSelector.pieces[this.selectedIndex];
        var selectedPieceWidth = selectedPiece[5];
        var selectedPieceHeight = selectedPiece[6];
        this.#useControls(selectedPiece, selectedPieceWidth, selectedPieceHeight);
    }

    #useControls(selectedPiece, selectedPieceWidth, selectedPieceHeight) {
        if (this.controls.up) {
            if (this.mode == "place") {
                this.placeLoc[1] = (this.placeLoc[1] + 8 - selectedPieceHeight) % (9 - selectedPieceHeight);
            }
            this.controls.up = false;
        }
        if (this.controls.down) {
            if (this.mode == "place") {
                this.placeLoc[1] = (this.placeLoc[1] + 1) % (9 - selectedPieceHeight);
            }
            this.controls.down = false;
        }
        if (this.controls.left) {
            if (this.mode == "place") {
                this.placeLoc[0] = (this.placeLoc[0] + 8 - selectedPieceWidth) % (9 - selectedPieceWidth);
            } else {
                this.selectedIndex = (this.selectedIndex + 2) % 3;
                var counter = 0;
                while (!this.pieceSelector.filledInds[this.selectedIndex]) {
                    this.selectedIndex = (this.selectedIndex + 2) % 3;
                    counter++;
                }
            }
            this.controls.left = false;
        }
        if (this.controls.right) {
            if (this.mode == "place") {
                this.placeLoc[0] = (this.placeLoc[0] + 1) % (9 - selectedPieceWidth);
            } else {
                this.selectedIndex = (this.selectedIndex + 1) % 3;
                var counter = 0;
                while (!this.pieceSelector.filledInds[this.selectedIndex] && counter < 3) {
                    this.selectedIndex = (this.selectedIndex + 1) % 3;
                    counter++;
                }
            }
            this.controls.right = false;
        }
        if (this.controls.enter) {
            if (this.mode == "select") {
                this.mode = "place";
            } else {
                if (!this.#checkCollision(selectedPiece, this.placeLoc[0], this.placeLoc[1], selectedPieceWidth, selectedPieceHeight)) {
                    this.#placePiece(selectedPiece, this.placeLoc[0], this.placeLoc[1], selectedPieceWidth, selectedPieceHeight);
                }
            }
            this.controls.enter = false;
        }
        if (this.controls.esc) {
            this.mode = "select";
            this.controls.esc = false;
            this.placeLoc = [0, 0]
        }
    }

    #clearLines() {
        try {
            var markedRows = new Array(8).fill(0);
            var markedCols = new Array(8).fill(0);

            var vals = this.boardValues;

            for (let i = 0; i < 8; i++) {
                if (vals[i][0] && vals[i][1] && vals[i][2] && vals[i][3] && vals[i][4] && vals[i][5] && vals[i][6] && vals[i][7]) {
                    markedRows[i] = 1;
                }
                if (vals[0][i] && vals[1][i] && vals[2][i] && vals[3][i] && vals[4][i] && vals[5][i] && vals[6][i] && vals[7][i]) {
                    markedCols[i] = 1;
                }
            }

            for (let i = 0; i < 8; i++) {
                if (markedRows[i]) {
                    this.score += 100;
                    this.boardValues[i] = new Array(8).fill(0);
                }
                if (markedCols[i]) {
                    this.score += 100;
                    for (let j = 0; j < 8; j++) {
                        this.boardValues[j][i] = 0;
                    }
                }
            }
        } catch (error) {
            document.title = error;
        }
    }

    #checkCollision(piece, x, y, w, h) {
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (this.boardValues[i + y][j + x] && piece[i][j]) {
                    return true;
                }
            }
        }
        return false;
    }

    #placePiece(piece, x, y, w, h) {
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (piece[i][j]) {
                    this.score += 1;
                    this.boardValues[i + y][j + x] = piece[i][j];
                }
            }
        }
        this.pieceSelector.pieces[this.selectedIndex] = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            0,
            0
        ];

        this.pieceSelector.filledInds[this.selectedIndex] = 0;
        if (!this.#checkPieces()) {
            this.pieceSelector.pieces = this.pieceSelector.generatePieces();
            this.pieceSelector.filledInds = [1, 1, 1]
        }
        var counter = 0;
        while (!this.pieceSelector.filledInds[this.selectedIndex]) {
            this.selectedIndex = (this.selectedIndex + 1) % 3;
            counter++;
        }
        this.#clearLines();
        this.mode = "select";
        this.placeLoc = [0, 0];
    }

    resetBoard() {
        this.boardValues = Array.from({ length: 8 }, () => new Array(8).fill(0));
        this.pieceSelector.pieces = this.pieceSelector.generatePieces();
    }

    #checkPieces() {
        var filledInds = this.pieceSelector.filledInds;
        for (let i = 0; i < 3; i++) {
            if (filledInds[i]) {
                return true
            }
        }
        return false;
    }

    draw(boardCtx, x = this.x, y = this.y, width = this.width) {
        boardCtx.fillStyle = "blue";
        var height = this.width * 17 / 12;
        var squareWidth = width / 8
        boardCtx.fillRect(x, y, width, height);
        boardCtx.fillStyle = "lightBlue";
        for (let i = 0; i < this.boardValues.length; i++) {
            for (let j = 0; j < this.boardValues[i].length; j++) {
                if (this.boardValues[i][j]) {
                    switch (this.boardValues[i][j]) {
                        case 1:
                            boardCtx.fillStyle = "lightBlue";
                            break;
                        case 2:
                            boardCtx.fillStyle = "lightGreen";
                            break;
                        case 3:
                            boardCtx.fillStyle = "red";
                            break;
                        case 4:
                            boardCtx.fillStyle = "purple";
                            break;
                        case 5:
                            boardCtx.fillStyle = "yellow";
                            break;
                        case 6:
                            boardCtx.fillStyle = "orange";
                    }
                    boardCtx.fillRect(x + j * squareWidth, y + i * squareWidth, squareWidth, squareWidth);
                }
            }
        }
        var selectedPiece = this.pieceSelector.pieces[this.selectedIndex];
        var selectedPieceWidth = selectedPiece[5];
        var selectedPieceHeight = selectedPiece[6];
        var isObstructed = this.#checkCollision(selectedPiece, this.placeLoc[0], this.placeLoc[1], selectedPieceWidth, selectedPieceHeight);
        this.pieceSelector.draw(boardCtx, this.selectedIndex, this.mode, this.placeLoc, isObstructed, x, y + width, width);
        boardCtx.fillStyle = "lightBlue"
        boardCtx.font = "40px Anta"
        boardCtx.fillText(this.score.toString(), this.x + this.width / 2, this.width * 17 / 12);
    }
}

const blockCanvas = document.getElementById("blockCanvas");
blockCanvas.width = 800;
blockCanvas.height = window.innerHeight;

const blockCtx = blockCanvas.getContext("2d");
const boardWidth = 425;

var board = new Board((blockCanvas.width - boardWidth)/2, (blockCanvas.height - boardWidth * 17 / 12) / 2, boardWidth, "KEYS")

function animate() {
  blockCtx.clearRect(0, 0, blockCanvas.width, blockCanvas.height);

  board.update();
  board.draw(blockCtx);

  requestAnimationFrame(animate);
}

animate();