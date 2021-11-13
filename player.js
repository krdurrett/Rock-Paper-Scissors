class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.choice = "";
  }
  saveWinsToStorage() {
    if (this.name === "human") {
      var stringifiedHumanWins = JSON.stringify(this.wins);
      localStorage.setItem('humanWins', stringifiedHumanWins);
    } else if (this.name === "computer") {
      var stringifiedComputerWins = JSON.stringify(this.wins);
      localStorage.setItem('computerWins', stringifiedComputerWins);
    }
    console.log(stringifiedHumanWins);
    console.log(stringifiedComputerWins);
  }
  retrieveWinsFromStorage() {
    if (this.name === "human") {
      var parsedHumanWins = JSON.parse(localStorage.getItem('humanWins'));
      return parsedHumanWins;
    } else if (this.name === "computer") {
      var parsedComputerWins = JSON.parse(localStorage.getItem('computerWins'));
      return parsedComputerWins;
    }
    // this.wins += parsedWins;
  }
  takeTurn() {
    var classicFighterOptions = ["rockButton", "paperButton", "scissorsButton"];
    var difficultFighterOptions =["rockButton", "paperButton", "scissorsButton", "lizardButton", "spockButton"];
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
