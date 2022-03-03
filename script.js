'use strict';

const newGameBtn = document.querySelector('.btn-new');
const diceImg = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
let playerScore = [0, 0];
let currentScore = 0;
let activePlayer = 1;

// Set active player current score
const setCurrentScore = currScore => {
  document.getElementById(`current-${activePlayer}`).textContent = currScore;
};

// Set active player main score
const setPlayerScore = mainScore => {
  document.getElementById(`score-${activePlayer}`).textContent = mainScore;
};

//Change background color
const setBackgroundColor = bgColor => {
  document.querySelector(`.player-${activePlayer}`).style.backgroundColor =
    bgColor;
};
//Set text Color
const setTextColor = color => {
  document.getElementById(`name-${activePlayer}`).style.color = color;
};

//When dice is rolled, generate random number and display image
function rollDice() {
  const dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  diceImg.src = `images/dice-${dice}.png`;
  diceImg.classList.remove('hidden');

  // switch to next player when dice is one. Keep adding dice value to current score if dice is not 1
  if (dice === 1) {
    currentScore = 0;
    setCurrentScore(currentScore);
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
  } else {
    currentScore += dice;
    setCurrentScore(currentScore);
  }
}

//dice is rolled when button is clicked
rollDiceBtn.addEventListener('click', rollDice);

// switch to next player turn when hold button is pressed
holdBtn.addEventListener('click', function () {
  playerScore[`${activePlayer}` - 1] += currentScore;
  setPlayerScore(playerScore[`${activePlayer}` - 1]);
  currentScore = 0;
  setCurrentScore(currentScore);

  // First player to score 100 wins and game ends
  if (playerScore[`${activePlayer}` - 1] >= 100) {
    diceImg.classList.add('hidden');
    rollDiceBtn.removeEventListener('click', rollDice);
    setBackgroundColor('#383838');
    setTextColor('rgb(207, 45, 107)');
  } else {
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
  }
});

// Refresh game when the button is pressed. All values is reset to default
newGameBtn.addEventListener('click', function () {
  playerScore = [0, 0];
  currentScore = 0;
  activePlayer = 1;
  document.getElementById('score-1').textContent = playerScore[0];
  document.getElementById('score-2').textContent = playerScore[1];
  setCurrentScore(currentScore);
  diceImg.classList.add('hidden');
  player1.classList.add('player-active');
  player2.classList.remove('player-active');
  setBackgroundColor('');
  setTextColor('');
  rollDiceBtn.addEventListener('click', rollDice);
});
