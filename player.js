class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.choice = "";
    this.id = Date.now();
  }
  saveWinsToStorage() {
    if (this.name === "human") {
      let existingWins = JSON.parse(localStorage.getItem("human")) || 0;
      existingWins += 1;
      var stringifiedHumanWins = JSON.stringify(existingWins);
      localStorage.setItem("human", stringifiedHumanWins);
    } else if (this.name === "computer") {
      let existingWins = JSON.parse(localStorage.getItem("computer")) || 0;
      existingWins += 1;
      var stringifiedComputerWins = JSON.stringify(existingWins);
      localStorage.setItem("computer", stringifiedComputerWins);
    }
    // console.log(stringifiedHumanWins);
    // console.log(stringifiedComputerWins);
  }
  retrieveWinsFromStorage() {
    if (this.name === "human") {
      var parsedHumanWins = JSON.parse(localStorage.getItem("human"));
      return parsedHumanWins;
    } else if (this.name === "computer") {
      var parsedComputerWins = JSON.parse(localStorage.getItem("computer"));
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
