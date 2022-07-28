class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  //FISHER YATES ALGORITHM
  shuffleCards() {
    const cardsArray = this.cards;
    if (this.cards){
      for (let i = cardsArray.length - 1; i > 0; i--){ //Loop through the array starting at the end
        let randomIndex = Math.floor(Math.random() * (i + 1)); //Generating a random number (max = array length)
        let oldElement = cardsArray[i]; //old element = element that the loop is sitting on
        cardsArray[i] = cardsArray[randomIndex]; //swapping old element with the element whose index is randomIndex
        cardsArray[randomIndex] = oldElement; 
      }
      return cardsArray;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++; 
    if (card1 === card2){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return this.pairsGuessed === (this.cards.length / 2) ? true : false;
  }
}
