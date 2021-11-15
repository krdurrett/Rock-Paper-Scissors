class Game {
  constructor(human, computer) {
    this.player1 = human;
    this.player2 = computer;
    this.gameType = "";
    this.winner = "";
    this.draw = false;
  }
  checkWinConditions(player1, player2) {
    if (player1.choice === "rock" && (player2.choice === "paper" || player2.choice === "spock")) {
      this.winner = "computer";
      player2.wins += 1;
    }else if (player1.choice === "rock" && (player2.choice === "scissors" || player2.choice === "lizard")) {
      this.winner = "human";
      player1.wins += 1;
    }else if (player1.choice === "paper" && (player2.choice === "scissors" || player2.choice === "lizard")) {
      this.winner = "computer";
      player2.wins += 1;
    } else if (player1.choice === "paper" && (player2.choice === "rock" || player2.choice === "spock")) {
      this.winner = "human";
      player1.wins += 1;
    } else if (player1.choice === "scissors" && (player2.choice === "rock" || player2.choice === "spock")) {
      this.winner = "computer";
      player2.wins += 1;
    } else if (player1.choice === "scissors" && (player2.choice === "paper" || player2.choice === "lizard")) {
      this.winner = "human";
      player1.wins += 1;
    } else if (player1.choice === "lizard" && (player2.choice === "scissors" || player2.choice === "rock")) {
      this.winner = "computer";
      player2.wins += 1;
    } else if (player1.choice === "lizard" && (player2.choice === "spock" || player2.choice === "paper")) {
      this.winner = "human";
      player1.wins += 1;
    } else if (player1.choice === "spock" && (player2.choice === "paper" || player2.choice === "lizard")) {
      this.winner = "computer";
      player2.wins += 1;
    } else if (player1.choice === "spock" && (player2.choice === "scissors" || player2.choice === "rock")) {
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
  };
};
