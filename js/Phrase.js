/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay(phrase) {
    //Add Phrase to gameboard
    const gameboard = document.querySelector('#phrase').firstElementChild;
    const phraseArray = phrase.quote.toLowerCase().split('');
    console.log(phraseArray);
    const gamePhrase = phraseArray
      .map(ltr =>
        ltr.includes(' ')
          ? `<li class="space">${ltr}</li>`
          : `<li class="letter">${ltr}</li>`
      )
      .join('');
    gameboard.innerHTML = gamePhrase;
  }

  checkLetter() {
    //Check if letter is in Phrase
  }

  showMatchedLetter() {
    //Reveal letters that match player selection
  }
}
