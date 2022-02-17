'use strict';

function random() {
  return Math.floor(Math.random() * 6) + 1;
}

const newGameBtn = document.querySelector('.btn-new');
const diceImg = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
let playerScore = 0;
let currentScore = 0;

// switch to next player when dice roll becomes one or hold button is pressed.
rollDiceBtn.addEventListener('click', function () {
  const randomNumber = random();
  diceImg.src = 'images/dice-' + randomNumber + '.png';
  diceImg.classList.remove('hidden');
  currentScore += randomNumber;
  document.querySelector('.current-score').textContent = currentScore;

  if (randomNumber === 1) {
    currentScore = 0;
    document.querySelector('.current-score').textContent = currentScore;
    player1.classList.remove('player-active');
    player2.classList.add('player-active');
  }
});

holdBtn.addEventListener('click', function () {
  playerScore += currentScore;
  document.querySelector('.player-score').textContent = playerScore;
  currentScore = 0;
  document.querySelector('.current-score').textContent = currentScore;
  player1.classList.remove('player-active');
  player2.classList.add('player-active');
});

newGameBtn.addEventListener('click', function () {
  playerScore = 0;
  currentScore = 0;
  document.querySelector('.player-score').textContent = playerScore;
  document.querySelector('.current-score').textContent = currentScore;
  diceImg.classList.add('hidden');
  player1.classList.add('player-active');
  player2.classList.remove('player-active');
});
