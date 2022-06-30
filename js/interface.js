'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('click', handleClick);
  });
});
//quando a pagina carregar por completo

function handleClick(event) {
  console.log(event.target);

  let square = event.target;
  let position = square.id;

  handleMove(position);
  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    let position = square.id;
    let symbol = board[position];
    if (symbol != '') {
      if (symbol == 'x') {
        square.classList.remove('player2');
        square.classList.add('player1');
      } else if (symbol == 'o') {
        square.classList.remove('player1');
        square.classList.add('player2');
      }
    }
  });
}
