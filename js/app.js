/*
  Global Variables
*/

const newGame = new Game();
const phrase = new Phrase();
const keyboard = [...document.querySelectorAll('.key')]; //Array of keyboard keys
const startButton = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');

/*
  Event Handlers
*/

// Map through the onscreen keys and add an eventListener for each key
keyboard.map(key =>
  key.addEventListener('click', e => {
    // clicking on onscreen buton results to the handleInteraction() method
    newGame.handleInteraction(e.target.textContent, e.target);
  })
);

// Function that calls startGame when the start button is clicked
startButton.addEventListener('click', () => {
  newGame.startGame(); //Start the Game
});
