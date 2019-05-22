class Game {
  constructor() {
    this.missed = 0;
    this.activePhrase = null;
    this.phrases = [
      { phrase: 'The Best Of Both Worlds' },
      { phrase: 'Speak Of The Devil' },
      { phrase: 'See Eye To Eye' },
      { phrase: 'Once In A Blue Moon' },
      { phrase: 'When Pigs Fly' }
    ];
  }
  //Start Game & immediately resets it from previous game
  startGame() {
    this.resetGame();
    document.querySelector('#overlay').style.animation = 'fadeOut 1.0s'; //hides Screen Overlay
    setTimeout(() => {
      document.querySelector('#overlay').style.display = 'none';
    }, 1000);

    this.activePhrase = this.getRandomPhrase(); // sets activePhrase Prop to random phrase
    const newPhrase = new Phrase(this.activePhrase.phrase.toLowerCase());
    newPhrase.addPhraseToDisplay(); // calls Add PhrasetoDisplay() on active phrase
  }

  getRandomPhrase() {
    const randPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randPhrase]; //retrieve one phrase from phrase array
  }

  handleInteraction(button) {
    const letter = button.textContent;
    button.setAttribute('disabled', true); //disable selected letters onscreen

    if (phrase.checkLetter(letter)) {
      // if phrase does contain letter adds ".chosen" to selected letter & checkForWin() & GameOver() if the game is won
      button.classList.add('chosen');
      phrase.showMatchedLetter(letter);
      this.checkForWin();
    } else {
      // if phrase does not contain letter adds ".wrong" to selected letter & calls removeLife()
      button.classList.add('wrong');
      this.removeLife();
    }
  }

  checkForWin() {
    //check if all letters have been revealed
    const letters = [...document.querySelectorAll('#phrase .letter')];
    setTimeout(() => {
      const show = [...document.querySelectorAll('#phrase .letter.show')];
      letters.length === show.length && this.gameOver('win');
    }, 750);
    // const show = [...document.querySelectorAll('#phrase .letter.show')];
    // letters.length === show.length && this.gameOver('win');
  }

  removeLife() {
    const tries = [...document.querySelectorAll('#scoreboard .tries img')];
    // remove a life from scoreboard
    tries[4 - this.missed].src = '/images/lostHeart.png'; //liveHeart is replace with lostHeart
    this.missed += 1; //increments missed property
    this.missed === 5 && this.gameOver('lost');

    //if player has lost all lives then gameOver() called
  }

  gameOver(status) {
    const gameOverMessage = document.querySelector('#game-over-message');
    const overlay = document.querySelector('#overlay');
    if (status == 'lost') {
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
  resetGame() {
    this.missed = 0;
    const keyboard = [...document.querySelectorAll('#qwerty .key')];
    const imgs = [...document.querySelectorAll('#scoreboard .tries img')];
    const overlay = document.querySelector('#overlay');
    imgs.map(img => (img.src = '/images/liveHeart.png'));
    keyboard
      .filter(key => key.hasAttribute('disabled'))
      .map(k => {
        k.classList.remove('wrong', 'chosen');
        k.disabled = false;
      });
    if (!overlay.classList.contains('start')) {
      overlay.classList.remove('win', 'lose');
      overlay.classList.add('start');
    }
  }
}
