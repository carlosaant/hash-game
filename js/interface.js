'use strict';

let player1name = document.getElementById('name_player1');
let player2name = document.getElementById('name_player2');

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

  handleMove(position)
    .then(updateSquares)
    .then(atualizaJogadorCampo)
    .then(verificaVencedor)
    .catch(error => {
      console.log(error.msg);
    });
  // updateSquares();
  // atualizaJogadorCampo();
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

function atualizaJogadorCampo() {
  if (p1.ativo) {
    document.getElementById('playermove').textContent = player1name.value;
  } else if (p2.ativo) {
    document.getElementById('playermove').textContent = player2name.value;
  }
}

function verificaVencedor() {
  if (gameOver) {
    if (p1.ativo) {
      alert('Jogador X ganhou');
    } else if (p2.ativo) {
      alert('Jogador O ganhou');
    }
  }
}
