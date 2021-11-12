class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
    this.choice = "";
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
  takeTurn() {
    var currentGame = new Game();
    if (this.name === "human") {
      this.choice = event.target.id;
      displayHumanChoice(this.choice);
    }
    if (this.name === "computer" && currentGame.gameType === "classic") {
      this.choice = getRandomIndex(classicFighterOptions);
      displayComputerChoice(this.choice);
    } else if (this.name === "computer" && currentGame.gameType === "difficult") {
      this.choice = getRandomIndex(difficultFighterOptions);
      displayComputerChoice(this.choice);
    }
  }
}
