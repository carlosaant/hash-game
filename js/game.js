'use strict';

let board = ['', '', '', '', '', '', '', '', ''];

const winState = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let p1 = {
  ativo: true,
  symbol: 'x',
  win: 0
};
let p2 = {
  ativo: false,
  symbol: 'o',
  win: 0
};

let gameOver = false;

// ---------------------------------

function handleMove(position) {
  let promise = new Promise(function (resolve, reject) {
    if (gameOver) {
      // return;
      reject({
        msg: 'Fim de jogo'
      });
    }else{

      if(!board.includes('')){
        gameOver = true;
        let empate = true;
        resolve(empate);
      }
      else{
        if (board[position] == '') {
          if (p1.ativo) {
            board[position] = p1.symbol;
            gameOver = isWin();
            if (!gameOver) {
              p1.ativo = false;
              p2.ativo = true;
            } else {
              p1.win++;
            }
          } else if (p2.ativo) {
            board[position] = p2.symbol;
            gameOver = isWin();
            if (!gameOver) {
              p2.ativo = false;
              p1.ativo = true;
            } else {
              p2.win++;
            }
          }
    
          resolve();
        } else {
          resolve();
        }
      }
    }

  });

  return promise;
}

function isWin() {
  for (let index = 0; index < winState.length; index++) {
    const sequencia_elements = winState[index];
    const pos1 = sequencia_elements[0];
    const pos2 = sequencia_elements[1];
    const pos3 = sequencia_elements[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ''
    ) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
}
