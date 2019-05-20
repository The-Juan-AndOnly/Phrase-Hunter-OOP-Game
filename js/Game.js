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
}
