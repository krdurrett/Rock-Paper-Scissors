//QUERY SELECTORS
var gameChoiceView = document.querySelector("#chooseGameButtons");
var chooseFighterClassic = document.querySelector("#chooseFighterClassicView");
var chooseFighterDifficult = document.querySelector("#chooseFighterDifficultView");
var changeGameButtonView = document.querySelector("#changeButtonView");
var changeGameButton = document.querySelector("#changeGameButton");
var clearWinsButton = document.querySelector("#clearWinsButton");
var changingTextView = document.querySelector("#changingText");
var fighterButton = document.querySelectorAll(".image");
var resultsView = document.querySelector("#resultsView");
var humanChoiceImage = document.querySelector("#humanChoiceImage");
var computerChoiceImage = document.querySelector("#computerChoiceImage");
var humanWinDisplay = document.querySelector("#humanWins");
var computerWinDisplay = document.querySelector("#computerWins");
var rockEmojiClassic = document.querySelector("#classicChoiceRock");
var paperEmojiClassic = document.querySelector("#classicChoicePaper");
var scissorsEmojiClassic = document.querySelector("#classicChoiceScissors");
var rockEmojiDifficult = document.querySelector("#difficultChoiceRock");
var paperEmojiDifficult = document.querySelector("#difficultChoicePaper");
var scissorsEmojiDifficult = document.querySelector("#difficultChoiceScissors");
var lizardEmojiDifficult = document.querySelector("#difficultChoiceLizard");
var spockEmojiDifficult = document.querySelector("#difficultChoiceSpock");

//GLOBAL VARIABLES
var currentGame;

//FUNCTIONS
let getRandomIndex = array => {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let addHidden = elements => {
  elements.forEach(item => {
    item.classList.add("hidden");
  })
}

let removeHidden = elements => {
  elements.forEach(item => {
    item.classList.remove("hidden");
  })
}

let initiateGamePlay = () => {
  humanPlayer = new Player("human", "👩‍🎤");
  computerPlayer = new Player("computer", "💻,");
  currentGame = new Game(humanPlayer, computerPlayer);
  switch(true) {
    case event.target.id === "classicGame":
    case event.target.id === "classicGameTitle":
    case event.target.id === "classicGameRules":
      currentGame.gameType = "classic";
      displayClassicGame();
      break;
    case event.target.id === "difficultGame":
    case event.target.id === "difficultGameTitle":
    case event.target.id === "difficultGameRules":
      currentGame.gameType = "difficult";
      displayDifficultGame();
  }
  humanPlayer.retrieveWinsFromStorage();
  computerPlayer.retrieveWinsFromStorage();
}

let displayClassicGame = () => {
  addHidden([gameChoiceView, resultsView, rockEmojiClassic, paperEmojiClassic, scissorsEmojiClassic]);
  removeHidden([chooseFighterClassic, changeGameButtonView]);
  changingTextView.innerText = "Choose your fighter!";
}

let displayDifficultGame = () => {
  addHidden([gameChoiceView, resultsView, lizardEmojiDifficult, spockEmojiDifficult, rockEmojiDifficult, paperEmojiDifficult, scissorsEmojiDifficult]);
  removeHidden([chooseFighterDifficult, changeGameButtonView]);
  changingTextView.innerText = "Choose your fighter!";
}

let returnToGameChoice = () => {
  removeHidden([gameChoiceView]);
  addHidden([chooseFighterClassic, chooseFighterDifficult, changeGameButtonView, resultsView]);
  changingTextView.innerText = "Choose your game!";
}

let clearLocalStorage = () => {
  localStorage.clear();
  humanPlayer.resetWins();
  computerPlayer.resetWins();
  displayWins();
}

let playGame = () => {
  humanPlayer.takeTurn();
  computerPlayer.takeTurn();
  displayHumanChoiceEmoji();
  currentGame.checkForDraw(humanPlayer, computerPlayer);
  currentGame.checkWinConditions(humanPlayer, computerPlayer);
  setTimeout(() => {
    showGameResults(humanPlayer, computerPlayer, currentGame)
  }, 300);
  setTimeout(gameRefresh, 1500);
}

let displayHumanChoiceEmoji = () => {
  switch(true) {
    case currentGame.gameType === "classic":
      switch(true) {
        case humanPlayer.choice === "rock":
          removeHidden([rockEmojiClassic]);
          break;
        case humanPlayer.choice === "paper":
          removeHidden([paperEmojiClassic]);
          break;
        case humanPlayer.choice === "scissors":
          removeHidden([scissorsEmojiClassic]);
          break;
      }
      break;
    case currentGame.gameType === "difficult":
      switch(true) {
        case humanPlayer.choice === "rock":
          removeHidden([rockEmojiDifficult]);
          break;
        case humanPlayer.choice === "paper":
          removeHidden([paperEmojiDifficult]);
          break;
        case humanPlayer.choice === "scissors":
          removeHidden([scissorsEmojiDifficult]);
          break;
        case humanPlayer.choice === "lizard":
          removeHidden([lizardEmojiDifficult]);
          break;
        case humanPlayer.choice === "spock":
          removeHidden([spockEmojiDifficult]);
          break;
      }
  }
}

let gameRefresh = () => {
  currentGame.resetGame();
  removeHidden([changeGameButton, clearWinsButton]);
  if (currentGame.winner === "" && currentGame.gameType === "classic") {
    displayClassicGame();
  } else if (currentGame.winner === "" && currentGame.gameType === "difficult") {
    displayDifficultGame();
  }
}

let showGameResults = (player1, player2, game) => {
  addHidden([changeGameButton, clearWinsButton]);
  displayHumanChoice(player1.choice);
  displayComputerChoice(player2.choice);
  displayWinner(game.winner);
  displayWins();
}

let displayHumanChoice = humanChoice => {
  humanChoiceImage.innerHTML = ``;
  displayResultsView();
  switch(true) {
    case humanChoice === "paper":
      humanChoiceImage.innerHTML = `<img src="./Assets/happy-paper.png" alt="paper" class="image" id="paperButton">`;
      break;
    case humanChoice === "rock":
      humanChoiceImage.innerHTML = `<img src="./Assets/rock.png" alt="rock" class="image" id="rockButton">`;
      break;
    case humanChoice === "scissors":
      humanChoiceImage.innerHTML = `<img src="./Assets/happy-scissors.png" alt="scissors" class="image" id="scissorsButton">`;
      break;
    case humanChoice === "lizard":
      humanChoiceImage.innerHTML = `<img src="./Assets/flat-lizard.png" alt="lizard" class="image" id="lizardButton">`;
      break;
    case humanChoice === "spock":
      humanChoiceImage.innerHTML = `<img src="./Assets/spock-icon.png" alt="spock" class="image" id="spockButton">`;
  }
}

let displayComputerChoice = computerChoice => {
  computerChoiceImage.innerHTML = ``;
  displayResultsView();
  switch(true) {
    case computerChoice === "paper":
      computerChoiceImage.innerHTML = `<img src="./Assets/happy-paper.png" alt="paper" class="image" id="paperButton">`;
      break;
    case computerChoice === "rock":
      computerChoiceImage.innerHTML = `<img src="./Assets/rock.png" alt="rock" class="image" id="rockButton">`;
      break;
    case computerChoice === "scissors":
      computerChoiceImage.innerHTML = `<img src="./Assets/happy-scissors.png" alt="scissors" class="image" id="scissorsButton">`;
      break;
    case computerChoice === "lizard":
      computerChoiceImage.innerHTML = `<img src="./Assets/flat-lizard.png" alt="lizard" class="image" id="lizardButton">`;
      break;
    case computerChoice === "spock":
      computerChoiceImage.innerHTML = `<img src="./Assets/spock-icon.png" alt="spock" class="image" id="spockButton">`;
  }
}

let displayWinner = winner => {
  switch(true) {
    case winner === "human":
      changingTextView.innerText = "👩‍🎤Human won this round!👩‍🎤";
      break;
    case winner === "computer":
      changingTextView.innerText = "💻Computer won this round!💻";
      break;
    default:
      changingTextView.innerText = "😭It's a draw!😭";
  }
}

let displayWins = () => {
  if (JSON.parse(localStorage.getItem("human")) === null) {
    humanWinDisplay.innerText = `WINS: 0`;
  } else {
    humanWinDisplay.innerText = `WINS: ${JSON.parse(localStorage.getItem("human"))}`;
  }
  if (JSON.parse(localStorage.getItem("computer")) === null) {
    computerWinDisplay.innerText = `WINS: 0`;
  } else {
    computerWinDisplay.innerText = `WINS: ${JSON.parse(localStorage.getItem("computer"))}`;
  }
}

let displayResultsView = () => {
  removeHidden([resultsView]);
  addHidden([chooseFighterClassic, chooseFighterDifficult]);
}

//EVENT LISTENERS
gameChoiceView.addEventListener("click", initiateGamePlay);
changeGameButton.addEventListener("click", returnToGameChoice);
clearWinsButton.addEventListener("click", clearLocalStorage);
fighterButton.forEach(choice => {
  choice.addEventListener("click", playGame);
});
window.addEventListener("load", displayWins);
