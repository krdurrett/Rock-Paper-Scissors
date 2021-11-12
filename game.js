class Game {
  constructor(human, computer) {
    this.player1 = human;
    this.player2 = computer;
    this.gameType = "";
    // this.won = "";
    this.draw = false;
  }
  checkWinConditions() {

  }
  checkForDraw() {

  }
  showGameResults(player1, player2) {
    displayHumanChoice(player1.choice);
    displayComputerChoice(player2.choice);
  }
  // resetGame() {
  //   console.log(this.gameType);
  //   if (this.gameType === "classic") {
  //     displayClassicGame();
  //   } else if (this.gameType === "difficult") {
  //     displayDifficultGame();
  //   }
  // }
}
