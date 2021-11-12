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
  chooseFighter() {
    if (this.name === "human") {
      this.choice = event.target.id;
    }
    if (this.name === "computer" && currentGame.gameType === "classic") {
      this.choice = getRandomIndex(classicFighterOptions);
    } else if (this.name === "computer" && currentGame.gameType === "difficult") {
      this.choice = getRandomIndex(difficultFighterOptions);
    }
  }
}
