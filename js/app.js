/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//clicking "Start Gane" creates new Game object

// clicking on onscreen buton results to the handleInteraction() method

// clicking on spaces between and around the onscreen
// keyboard does not result in handleInteraction() being called

// After game is complete the gameboard reset so that clicking "Start" clears board and starts new game
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
  const newGame = new Game();

  newGame.startGame();
  newGame.getRandomPhrase();
});
