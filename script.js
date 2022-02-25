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
// const currentScore1 = document.getElementById('current-1');
// const currentScore2 = document.getElementById('current-2');
let playerScore = [0, 0];
let currentScore = 0;
let activePlayer = 1;

let player1Score = 0;
let player2Score = 0;

// switch to next player when dice roll becomes one or hold button is pressed.

function diceRollFunc() {
  const dice = random();
  diceImg.src = `images/dice-${dice}.png`;
  diceImg.classList.remove('hidden');

  if (dice === 1) {
    currentScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
  } else {
    currentScore += dice;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
  }
}

rollDiceBtn.addEventListener('click', diceRollFunc);

holdBtn.addEventListener('click', function () {
  if (activePlayer === 1) {
    playerScore[0] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      playerScore[0];
    currentScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
    player1Score += playerScore[0];
  } else {
    playerScore[1] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      playerScore[1];
    currentScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
    player2Score += playerScore[1];
  }

  if (playerScore[`${activePlayer}` - 1] >= 100) {
    document.querySelector(`.player-${activePlayer}`).style.backgroundColor =
      'red';
    diceImg.classList.add('hidden');
    rollDiceBtn.removeEventListener('click', diceRollFunc);

    TODO; // SET TEXT COLOR AND OTHERS WHEN SCORE IS GREATER THAN OR EQUAL TO 100
  } else {
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
  }
});

newGameBtn.addEventListener('click', function () {
  playerScore = [0, 0];
  currentScore = 0;
  document.getElementById('score-1').textContent = playerScore[0];
  document.getElementById('score-2').textContent = playerScore[1];
  document.getElementById('current-1').textContent = currentScore;
  document.getElementById('current-2').textContent = currentScore;
  diceImg.classList.add('hidden');
  player1.classList.add('player-active');
  player2.classList.remove('player-active');
  document.querySelector(`.player-${activePlayer}`).style.backgroundColor = '';
  activePlayer = 1;
  rollDiceBtn.addEventListener('click', diceRollFunc);
});
