/*
  Global Variables
*/

const newGame = new Game();
const phrase = new Phrase();
const keyboard = [...document.querySelectorAll('#qwerty .key')]; //Array of keyboard keys
const startButton = document.querySelector('#btn__reset');

/*
  Event Handlers
*/

keyboard.map(key =>
  key.addEventListener('click', e => {
    // clicking on onscreen buton results to the handleInteraction() method
    newGame.handleInteraction(e.target);
  })
);

startButton.addEventListener('click', () => {
  newGame.startGame(); //Start the Game
});
