class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

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

  checkLetter(letter) {
    const phrase = newGame.activePhrase.phrase.toLowerCase().split('');
    return phrase.includes(letter); //Check if letter is in Phrase
  }
  //Reveal letters that match player selection on a delay for each letter will also call the checkForWin through a callback function to see if the game is over
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
