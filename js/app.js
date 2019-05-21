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
  // Clicking on "Start Game" will make sure that the onscreen keyboard is reset and not disabled
  keyboard
    .filter(key => key.hasAttribute('disabled'))
    .map(k => {
      k.classList.remove('wrong', 'chosen');
      k.disabled = false;
    });

  // newGame.resetGame();
  newGame.startGame();
});
