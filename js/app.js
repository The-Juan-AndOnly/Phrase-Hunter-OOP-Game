/*
  Global Variables
*/
let q = 'q';
const newGame = new Game();
const phrase = new Phrase();
const keyboard = [...document.querySelectorAll('.key')]; //Array of keyboard keys
const keys = keyboard;
const startButton = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');

/*
  Event Handlers
*/

keyboard.map(key =>
  key.addEventListener('click', e => {
    // clicking on onscreen buton results to the handleInteraction() method
    newGame.handleInteraction(e.target.textContent, e.target);
  })
);

startButton.addEventListener('click', () => {
  newGame.startGame(); //Start the Game
});
const pressedKeys = [];
