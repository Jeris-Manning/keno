let master = [];
let board = {};
let gameState = {};

for (let i = 1; i <= 80; i++) {
    let j = i.toString();
    board[j] = { key: j, clicked: false, drawn: false };
}



gameState.picks = 0;
gameState.drawing = false;
gameState.credit = 0;
gameState.wager = 1;
gameState.hits = 0;

master[0] = { ...board };
master[1] = { ...gameState };

export default master;
