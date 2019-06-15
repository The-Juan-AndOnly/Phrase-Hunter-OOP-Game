/*
  Global Variables
*/

const newGame = new Game();
const phrase = new Phrase();
const keyboard = [...document.querySelectorAll('.key')]; //Array of keyboard keys
const startButton = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
let keysPressed = []; //used for the keyboard buttons to ensure no repeats

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

// Add keyboard functionality to the game
document.addEventListener('keyup', e => {
  // if the overlay is displayed then hitting the start button will start the game
  // and rest keysPressed
  if (overlay.style.display !== 'none' && e.keyCode === 13) {
    newGame.startGame();
    keysPressed = [];
  }
  // Overlay is hidden lets listen for key presses
  if (overlay.style.display === 'none') {
    // checking to make sure only keys [a-z] are being pressed
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      // make sure that we don't have repeat of keys being pressed
      if (keysPressed.indexOf(e.key) === -1) {
        // add the curent key pressed to the keysPressed array
        keysPressed.push(e.key);
        // call handleInteraction and pass it the letter and the on-screen equivalent button
        newGame.handleInteraction(
          e.key,
          keyboard.filter(key => key.textContent === e.key)[0]
        );
      } else {
        return;
      }
    } else {
    }
  }
});
