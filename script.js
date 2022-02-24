'use strict';

function random() {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

const newGameBtn = document.querySelector('.btn-new');
const diceImg = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const currentScore1 = document.getElementById('current-1');
const currentScore2 = document.getElementById('current-2');
let playerScore = 0;
let currentScore = 0;
let activePlayer = 1;

// switch to next player when dice roll becomes one or hold button is pressed.
rollDiceBtn.addEventListener('click', function () {
  const dice = random();
  diceImg.src = `images/dice-${dice}.png`;
  diceImg.classList.remove('hidden');

  if (dice === 1) {
    currentScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer ? 2 : 1;
    console.log(activePlayer);

    //currentScore1.textContent = currentScore;

    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
  } else {
    currentScore += dice;

    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
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
