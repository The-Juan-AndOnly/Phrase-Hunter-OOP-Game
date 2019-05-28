class Game {
  constructor() {
    this.missed = 0;
    this.activePhrase = null;
    this.phrases = [
      { phrase: 'The Best Of Both Worlds' },
      { phrase: 'Speak Of The Devil' },
      { phrase: 'See Eye To Eye' },
      { phrase: 'Once In A Blue Moon' },
      { phrase: 'When Pigs Fly' },
      { phrase: 'You Can Lead a Horse To Water But You Cant Make It Drink' },
      { phrase: 'Going Down The Rabbit Hole' },
      { phrase: 'Beauty Is In The Eye Of The Beholder' },
      { phrase: 'Barking Up The Wrong Tree' }
    ];
  }

  // Start Game & immediately resets it from previous game
  // FadeOut and remove the overlay
  // calls getRandomPhrase and assigns returned phrase to activePhrase
  // calls addPhraseToDisplay
  startGame() {
    this.resetGame();
    document.querySelector('#overlay').style.animation =
      'fadeOut 1.0s forwards'; //hides Screen Overlay
    setTimeout(() => {
      document.querySelector('#overlay').style.display = 'none';
    }, 1000);
    this.activePhrase = this.getRandomPhrase(); // sets activePhrase Prop to random phrase
    const newPhrase = new Phrase(this.activePhrase.phrase.toLowerCase());
    newPhrase.addPhraseToDisplay(); // calls Add PhrasetoDisplay() on active phrase
  }

  // Function that will rnadomly select a phrase and return the phrase
  getRandomPhrase() {
    const randPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randPhrase]; //retrieve one phrase from phrase array
  }

  // Function that is called when a letter on the onscreen keyboard is called.
  handleInteraction(letter, button) {
    button.setAttribute('disabled', true);
    //disable selected letters onscreen

    if (phrase.checkLetter(letter)) {
      // if phrase does contain letter adds ".chosen" to selected letter
      // checkForWin() & GameOver() if the game is won
      button.classList.add('chosen');
      // phrase.showMatchedLetter(letter)
      phrase.showMatchedLetter(letter, this.checkForWin);
    } else {
      // if phrase does not contain letter adds ".wrong" to selected letter & calls removeLife()
      button.classList.add('wrong');
      this.removeLife();
    }
  }

  // checkForWin will check to see if any letters still have the .hide class
  // if not then will call the gameOver function
  checkForWin() {
    const hiddenLetters = [
      ...document.querySelectorAll('#phrase .letter.hide')
    ];
    hiddenLetters.length === 0 && newGame.gameOver('win');
  }

  // removelife will remove by replacing the heart img and increment the missed counter. if missed = 5 then gameOver function will be called
  removeLife() {
    const tries = [...document.querySelectorAll('#scoreboard .tries img')];
    // remove a life from scoreboard
    tries[4 - this.missed].src = 'images/lostHeart.png'; //liveHeart is replace with lostHeart
    this.missed += 1; //increments missed property
    this.missed === 5 && this.gameOver('lost'); //if player has lost all lives then gameOver() called
  }

  // Check for gameOver
  // If the param that was passed is 'lost' then will show the lose overlay as well as the correct phrase.
  // else will show a win overlay
  gameOver(status) {
    const gameOverMessage = document.querySelector('#game-over-message');
    const overlay = document.querySelector('#overlay');
    if (status === 'lost') {
      overlay.classList.remove('start');
      overlay.classList.add('lose');
      gameOverMessage.textContent = `Sorry the Correct Phrase was "${
        this.activePhrase.phrase
      }"`;
    } else {
      overlay.classList.remove('start');
      overlay.classList.add('win');
      gameOverMessage.innerHTML = `Congrats!! You WON!`;
    }
    //displays Win or Loss message by showing original start screen overlay with ".win" or ".lose" CSS
    overlay.style.animation = 'fadeIn .5s'; //shows Screen Overlay
    setTimeout(() => {
      overlay.style.display = 'flex';
    }, 500);
  }

  // Function that resets missed to 0,
  // loops through and chages the images back to 'liveHeart.png'
  // removes the disabled from keyboard and the wrong and chosen class
  // Resets the overlay so on the 2nd+ time through the correct overlay will display
  resetGame() {
    this.missed = 0; //missed back to 0
    const keyboard = [...document.querySelectorAll('#qwerty .key')];
    const imgs = [...document.querySelectorAll('#scoreboard .tries img')];
    const overlay = document.querySelector('#overlay');
    imgs.map(img => (img.src = 'images/liveHeart.png')); //reset images
    keyboard
      .filter(key => key.hasAttribute('disabled'))
      .map(k => {
        k.classList.remove('wrong', 'chosen');
        k.disabled = false;
      }); //reset onscreen keyboard
    if (!overlay.classList.contains('start')) {
      overlay.classList.remove('win', 'lose');
      overlay.classList.add('start');
    } //reset overlay
  }
}
