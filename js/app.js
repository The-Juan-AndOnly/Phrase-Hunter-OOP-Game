/*
  Global Variables
*/

const newGame = new Game();
const phrase = new Phrase();
const keyboard = [...document.querySelectorAll('#qwerty .key')]; //Array of keyboard keys
const startButton = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');

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
const pressedKeys = [];

// window.addEventListener('keydown', e => {
//   if (overlay.style.display !== 'none') {
//     pressedKeys.push(e.keyCode);
//     e.keyCode === 13 && newGame.startGame();
//   } else if (!pressedKeys.includes(e.keyCode)) {
//     console.log(`You Pressed ${e.keyCode}`);
//     pressedKeys.push(e.keyCode);
//     const buttonPressed = (document.querySelector('#qwerty .key').textContent =
//       e.key);
//     console.log(buttonPressed);

//     newGame.handleInteraction(buttonPressed);
//   } else {
//     return;
//   }
// });
