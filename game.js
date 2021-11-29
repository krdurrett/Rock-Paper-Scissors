class Game {
  constructor(human, computer) {
    this.player1 = human;
    this.player2 = computer;
    this.gameType = "";
    this.winner = "";
    this.draw = false;
  }
  checkWinConditions(player1, player2) {
    switch(true){
      case player1.choice === "rock" && (player2.choice === "paper" || player2.choice === "spock"):
      case player1.choice === "paper" && (player2.choice === "scissors" || player2.choice === "lizard"):
      case player1.choice === "scissors" && (player2.choice === "rock" || player2.choice === "spock"):
      case player1.choice === "lizard" && (player2.choice === "scissors" || player2.choice === "rock"):
      case player1.choice === "spock" && (player2.choice === "paper" || player2.choice === "lizard"):
        this.winner = "computer";
        player2.wins += 1;
        break;
      case player1.choice === "rock" && (player2.choice === "scissors" || player2.choice === "lizard"):
      case player1.choice === "paper" && (player2.choice === "rock" || player2.choice === "spock"):
      case player1.choice === "scissors" && (player2.choice === "paper" || player2.choice === "lizard"):
      case player1.choice === "lizard" && (player2.choice === "spock" || player2.choice === "paper"):
      case player1.choice === "spock" && (player2.choice === "scissors" || player2.choice === "rock"):
        this.winner = "human";
        player1.wins += 1;
    }
    switch(true){
      case this.draw === false && this.winner === "human":
        player1.saveWinsToStorage();
        break;
      case this.draw === false && this.winner === "computer":
        player2.saveWinsToStorage();
    }
  }
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
