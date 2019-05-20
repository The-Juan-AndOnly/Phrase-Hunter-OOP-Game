/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.activePhrase = null;
    this.phrases = [
      { quote: 'May the Force be with you' },
      { quote: 'I am going to make him an offer he can not refuse' },
      { quote: 'Toto, I have got a feeling were not in Kansas anymore' },
      { quote: 'Show me the money' },
      {
        quote:
          'Life is like a box of chocolates You never know what you are gonna get'
      }
    ];
  }
  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    console.log(this.activePhrase);
    //hides Screen Overlay
    // sets activePhrase Prop to random phrase
    // calls Add PhrasetoDisplay() on active phrase
    const newPhrase = new Phrase();
    newPhrase.addPhraseToDisplay(this.activePhrase);
  }

  getRandomPhrase() {
    const randPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randPhrase];
    //retrieve one phrase from phrase array
  }

  handleInteraction() {
    //disable selected letters onscreen
    // if phrase does not contain letter adds ".wrong" to selected letter & calls removeLife()
    // if phrase does contain letter adds ".chosen" to selected letter & checkForWin() & GameOver() if the game is won
  }

  checkForWin() {
    //check if all letters have been revealed
  }

  removeLife() {
    // remove a life from scoreboard
    //liveHeart is replace with lostHeart
    //increments missed property
    //if player has lost all lives then gameOver() called
  }

  gameOver() {
    //displays Win or Loss message by showing original start screen overlay with ".win" or ".lose" CSS
  }
}
