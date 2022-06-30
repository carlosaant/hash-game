'use strict';

let board = ['', '', '', '', '', '', '', '', ''];

let p1 = {
  ativo: true,
  symbol: 'x'
};
let p2 = {
  ativo: false,
  symbol: 'o'
};

function handleMove(position) {
  if (board[position] == '') {
    if (p1.ativo) {
      board[position] = p1.symbol;
      p1.ativo = false;
      p2.ativo = true;
    } else if (p2.ativo) {
      board[position] = p2.symbol;
      p2.ativo = false;
      p1.ativo = true;
    }
  }
}
