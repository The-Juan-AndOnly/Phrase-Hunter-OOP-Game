class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  // Function that takes the phrase turns it into an array then maps/loops over the phrase.
  // Then adds the appropriate classes depending if the item is a "space" or "letter"
  addPhraseToDisplay() {
    const gameboard = document.querySelector('#phrase ul');
    const phraseArray = this.phrase.split('');

    const gamePhrase = phraseArray
      .map(ltr =>
        ltr.includes(' ')
          ? `<li class="space">${ltr}</li>`
          : `<li class="letter hide ${ltr}">${ltr}</li>`
      )
      .join('');
    gameboard.innerHTML = gamePhrase; //Add Phrase to gameboard
  }

  // Function that checks if the letter passed as an argument is in the activePhrase
  checkLetter(letter) {
    const phrase = newGame.activePhrase.phrase.toLowerCase().split('');
    return phrase.includes(letter); //Check if letter is in Phrase
  }

  // RReveal letters that match player selection on a delay for each letter.
  // Will also call the checkForWin through a callback function to see if the game is over
  showMatchedLetter(letter, callback) {
    const matchedLetter = [...document.querySelectorAll(`.letter.${letter}`)];
    let delay = 0;
    matchedLetter.map(ltr => {
      setTimeout(() => {
        ltr.classList.remove('hide');
        ltr.classList.add('show');
        callback();
      }, 500 + delay);
      delay += 500;
    });
  }
}
