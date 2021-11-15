class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.choice = "";
  };
  saveWinsToStorage() {
    if (this.name === "human") {
      var stringifiedHumanWins = JSON.stringify(this.wins);
      localStorage.setItem("human", stringifiedHumanWins);
    } else if (this.name === "computer") {
      var stringifiedComputerWins = JSON.stringify(this.wins);
      localStorage.setItem("computer", stringifiedComputerWins);
    };
  };
  retrieveWinsFromStorage() {
    if (this.name === "human") {
      if (JSON.parse(localStorage.getItem("human")) === null) {
        this.wins = 0;
      } else {
        var parsedHumanWins = JSON.parse(localStorage.getItem("human"));
        this.wins = parsedHumanWins;
      };
    } else if (this.name === "computer") {
      if (JSON.parse(localStorage.getItem("computer")) === null) {
        this.wins = 0;
      } else {
        var parsedComputerWins = JSON.parse(localStorage.getItem("computer"));
        this.wins = parsedComputerWins;
      };
    };
  };
  takeTurn() {
    var classicFighterOptions = ["rockButton", "paperButton", "scissorsButton"];
    var difficultFighterOptions =["rockButton", "paperButton", "scissorsButton", "lizardButton", "spockButton"];
    if (this.name === "human") {
      this.choice = event.target.id;
    };
    if (this.name === "computer" && currentGame.gameType === "classic") {
      this.choice = getRandomIndex(classicFighterOptions);
    } else if (this.name === "computer" && currentGame.gameType === "difficult") {
      this.choice = getRandomIndex(difficultFighterOptions);
    };
  };
};
