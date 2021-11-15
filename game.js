class Game {
  constructor(human, computer) {
    this.player1 = human;
    this.player2 = computer;
    this.gameType = "";
    this.winner = "";
    this.draw = false;
  }
  checkWinConditions(player1, player2) {
    if (player1.choice === "rockButton" && (player2.choice === "paperButton" || player2.choice === "spockButton")) {
      this.winner = "computer";
      player2.wins += 1;
    }else if (player1.choice === "rockButton" && (player2.choice === "scissorsButton" || player2.choice === "lizardButton")) {
      this.winner = "human";
      player1.wins += 1;
    }else if (player1.choice === "paperButton" && (player2.choice === "scissorsButton" || player2.choice === "lizardButton")) {
      this.winner = "computer";
      player2.wins += 1;
    } else if (player1.choice === "paperButton" && (player2.choice === "rockButton" || player2.choice === "spockButton")) {
      this.winner = "human";
      player1.wins += 1;
    } else if (player1.choice === "scissorsButton" && (player2.choice === "rockButton" || player2.choice === "spockButton")) {
      this.winner = "computer";
      player2.wins += 1;
    } else if (player1.choice === "scissorsButton" && (player2.choice === "paperButton" || player2.choice === "lizardButton")) {
      this.winner = "human";
      player1.wins += 1;
    } else if (player1.choice === "lizardButton" && (player2.choice === "scissorsButton" || player2.choice === "rockButton")) {
      this.winner = "computer";
      player2.wins += 1;
    } else if (player1.choice === "lizardButton" && (player2.choice === "spockButton" || player2.choice === "paperButton")) {
      this.winner = "human";
      player1.wins += 1;
    } else if (player1.choice === "spockButton" && (player2.choice === "paperButton" || player2.choice === "lizardButton")) {
      this.winner = "computer";
      player2.wins += 1;
    } else if (player1.choice === "spockButton" && (player2.choice === "scissorsButton" || player2.choice === "rockButton")) {
      this.winner = "human";
      player1.wins += 1;
    };
    if (this.draw === false && this.winner === "human") {
      player1.saveWinsToStorage();
    } else if (this.draw === false && this.winner === "computer") {
      player2.saveWinsToStorage();
    };
  };
  checkForDraw(player1, player2) {
    if (player1.choice === player2.choice) {
      this.winner = "";
      this.draw = true;
    } else {
      this.draw = false;
    };
  };
  resetGame() {
    this.winner = "";
    this.draw = false;
  };
};
