'use strict';

let player1name = document.getElementById('name_player1');
let player2name = document.getElementById('name_player2');
const button_game = document.getElementById('btn_game');

document.addEventListener('DOMContentLoaded', () => {
  button_game.addEventListener('click', iniciarGame);
});
//quando a pagina carregar por completo

function handleClick(event) {
  let squares = event.target;
  let position = squares.id;

  handleMove(position)
    .then(() => {
      let square = document.getElementById(position.toString());
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
    })
    .then(atualizaJogadorCampo)
    .then(verificaVencedor)
    .catch(error => {
      console.log(error.msg);
    });
  // updateSquares();
  // atualizaJogadorCampo();
}

function resetSquares() {
  return new Promise(function (resolve, reject) {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
      square.classList.remove('player1');
      square.classList.remove('player2');
    });
    resolve();
  }).then(resetGame);
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
      alert(`Jogador ${player1name.value} ganhou`);
    } else if (p2.ativo) {
      alert('Jogador O ganhou');
    }
  }
}

function iniciarGame() {
  return new Promise(function (resolve, reject) {
    if (player1name.value == '') {
      player1name.value = 'Player 1';
    }
    if (player2name.value == '') {
      player2name.value = 'Player 2';
    }
    resolve();
  })
    .then(carregarSquares)
    .then(atualizaJogadorCampo);
  // atualizaJogadorCampo();
  // carregarSquares();
}

async function carregarSquares() {
  let squares = document.querySelectorAll('.square');
  await squares.forEach(square => {
    square.addEventListener('click', handleClick);
  });
}
