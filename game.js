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
    }
    player1.saveWinsToStorage();
    player2.saveWinsToStorage();
  }
  checkForDraw(player1, player2) {
    if (player1.choice === player2.choice) {
      this.winner = "";
      this.draw = true;
    } else {
      this.draw = false;
    }
  }
  showGameResults(player1, player2) {
    displayHumanChoice(player1.choice);
    displayComputerChoice(player2.choice);
    displayWinner(this.winner);
    displayWins(player1.retrieveWinsFromStorage(), player2.retrieveWinsFromStorage());
  }
}
