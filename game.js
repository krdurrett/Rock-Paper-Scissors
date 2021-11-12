class Game {
  constructor(human, computer) {
    this.player1 = human;
    this.player2 = computer;
    this.gameType = "classic";
    this.won = "";
    this.draw = false;
  }
  determineCurrentGameType() {
    if (event.target.id === "classicGame") {
      this.gameType = "classic";
      displayClassicGame();
    } else if (event.target.id === "difficultGame") {
      this.gameType = "difficult";
      displayDifficultGame();
    }
  }
  checkWinConditions() {

  }
  checkForDraw() {

  }
  resetGame() {

  }
}
