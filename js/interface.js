'use strict';

let player1name = document.getElementById('name_player1');
let player2name = document.getElementById('name_player2');
const button_game = document.getElementById('btn_game');
const placarp1 = document.getElementById('p1placar');
const placarp2 = document.getElementById('p2placar');
const win_div_message = document.getElementById('winMessage');
const win_text_message = document.getElementById('winMessageText');
// ------------------

document.addEventListener('DOMContentLoaded', () => {
  button_game.addEventListener('click', iniciarGame);
});
//quando a pagina carregar por completo

function handleClick(event) {
  let squares = event.target;
  let position = squares.id;

  handleMove(position)
    .then((empate)=>{
      console.log(empate)
      if(empate && gameOver){
        win_text_message.innerText = `Nenhum Vencedor!`;
        win_div_message.classList.add('show');
      }else if (gameOver) {
        if (p1.ativo) {
          placarPlayers();
          // alert(`Jogador ${player1name.value} ganhou`);
          win_text_message.innerText = `Jogador ${player1name.value} Venceu!`;
          win_div_message.classList.add('show');
        } else if (p2.ativo) {
          placarPlayers();
          win_text_message.innerText = `Jogador ${player2name.value} Venceu!`;
          win_div_message.classList.add('show');
        }
      }
    })
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

// function verificaVencedor() {
//   if (gameOver) {
//     if (p1.ativo) {
//       alert(`Jogador ${player1name.value} ganhou`);
//     } else if (p2.ativo) {
//       alert('Jogador O ganhou');
//     }
//   }
// }

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
    .then(atualizaJogadorCampo)
    .then(() => {
      document.getElementById('p1name').textContent = player1name.value;
      document.getElementById('p2name').textContent = player2name.value;
    })
    .then(placarPlayers);
  // atualizaJogadorCampo();
  // carregarSquares();
}

async function carregarSquares() {
  let squares = document.querySelectorAll('.square');
  await squares.forEach(square => {
    square.addEventListener('click', handleClick);
  });
}

function placarPlayers() {
  placarp1.textContent = p1.win;
  placarp2.textContent = p2.win;
}
