//QUERY SELECTORS
var gameChoiceView = document.querySelector("#chooseGameButtons");
var classicGameButton = document.querySelector("#classicGame");
var difficultGameButton = document.querySelector("#difficultGame");
var chooseFighterClassic = document.querySelector("#chooseFighterClassicView");
var chooseFighterDifficult = document.querySelector("#chooseFighterDifficultView");
var changeGameButtonView = document.querySelector("#changeButtonView");
var changeGameButton = document.querySelector("#changeGameButton");
var changingTextView = document.querySelector("#changingText");
var fighterButton = document.querySelectorAll(".fighter-button");
var resultsView = document.querySelector("#resultsView");
var humanChoiceImage = document.querySelector("#humanChoiceImage");
var computerChoiceImage = document.querySelector("#computerChoiceImage");
var humanWinDisplay = document.querySelector("#humanWins");
var computerWinDisplay = document.querySelector("#computerWins");

//GLOBAL VARIABLES
var currentGame;

//EVENT LISTENERS
gameChoiceView.addEventListener("click", initiateGamePlay);
changeGameButton.addEventListener("click", returnToGameChoice);
for (var i = 0; i < fighterButton.length; i++) {
  fighterButton[i].addEventListener("click", playGame);
};
window.addEventListener("load", displayWins);

//FUNCTIONS
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function addHidden(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("hidden");
  };
};

function removeHidden(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("hidden");
  };
};

function initiateGamePlay() {
  humanPlayer = new Player("human", "👩‍🎤");
  computerPlayer = new Player("computer", "💻,");
  currentGame = new Game(humanPlayer, computerPlayer);
  if (event.target.id === "classicGame" || event.target.id === "classicGameTitle" || event.target.id === "classicGameRules") {
    currentGame.gameType = "classic";
    displayClassicGame();
  } else if (event.target.id === "difficultGame" || event.target.id === "difficultGameTitle" || event.target.id === "difficultGameRules") {
    currentGame.gameType = "difficult";
    displayDifficultGame();
  };
  humanPlayer.retrieveWinsFromStorage();
  computerPlayer.retrieveWinsFromStorage();
};

function displayClassicGame() {
  addHidden([gameChoiceView, resultsView]);
  removeHidden([chooseFighterClassic, changeGameButtonView]);
  changingTextView.innerText = "Choose your fighter!";
};

function displayDifficultGame() {
  addHidden([gameChoiceView, resultsView]);
  removeHidden([chooseFighterDifficult, changeGameButtonView]);
  changingTextView.innerText = "Choose your fighter!";
};

function returnToGameChoice() {
  removeHidden([gameChoiceView]);
  addHidden([chooseFighterClassic, chooseFighterDifficult, changeGameButtonView, resultsView]);
  changingTextView.innerText = "Choose your game!";
};

function playGame() {
  humanPlayer.takeTurn();
  computerPlayer.takeTurn();
  currentGame.checkForDraw(humanPlayer, computerPlayer);
  currentGame.checkWinConditions(humanPlayer, computerPlayer);
  currentGame.showGameResults(humanPlayer, computerPlayer);
  setTimeout(resetGame, 1500);
};

function resetGame() {
  if (currentGame.gameType === "classic") {
    displayClassicGame();
  } else if (currentGame.gameType === "difficult") {
    displayDifficultGame();
  };
};

function displayHumanChoice(humanChoice) {
  humanChoiceImage.innerHTML = ``;
  displayResultsView();
  if (humanChoice === "paperButton") {
    humanChoiceImage.innerHTML = `<img src="assets/happy-paper.png" alt="paper" class="image" id="paperButton">`;
  } else if (humanChoice === "rockButton") {
    humanChoiceImage.innerHTML = `<img src="assets/rock.png" alt="rock" class="image" id="rockButton">`;
  } else if (humanChoice === "scissorsButton") {
    humanChoiceImage.innerHTML = `<img src="assets/happy-scissors.png" alt="scissors" class="image" id="scissorsButton">`;
  } else if (humanChoice === "lizardButton") {
    humanChoiceImage.innerHTML = `<img src="assets/flat-lizard.png" alt="lizard" class="image" id="lizardButton">`;
  } else if (humanChoice === "spockButton") {
    humanChoiceImage.innerHTML = `<img src="assets/spock-icon.png" alt="spock" class="image" id="spockButton">`
  };
};

function displayComputerChoice(computerChoice) {
  computerChoiceImage.innerHTML = ``;
  displayResultsView();
  if (computerChoice === "paperButton") {
    computerChoiceImage.innerHTML = `<img src="assets/happy-paper.png" alt="paper" class="image" id="paperButton">`;
  } else if (computerChoice === "rockButton") {
    computerChoiceImage.innerHTML = `<img src="assets/rock.png" alt="rock" class="image" id="rockButton">`;
  } else if (computerChoice === "scissorsButton") {
    computerChoiceImage.innerHTML = `<img src="assets/happy-scissors.png" alt="scissors" class="image" id="scissorsButton">`;
  } else if (computerChoice === "lizardButton") {
    computerChoiceImage.innerHTML = `<img src="assets/flat-lizard.png" alt="lizard" class="image" id="lizardButton">`;
  } else if (computerChoice === "spockButton") {
    computerChoiceImage.innerHTML = `<img src="assets/spock-icon.png" alt="spock" class="image" id="spockButton">`
  };
};

function displayWinner(winner) {
  if (winner === "human") {
    changingTextView.innerText = "👩‍🎤Human won this round!👩‍🎤";
  } else if (winner === "computer") {
    changingTextView.innerText = "💻Computer won this round!💻";
  } else if (winner === "") {
    changingTextView.innerText = "😭It's a draw!😭";
  };
};

function displayWins() {
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
};

function displayResultsView() {
  removeHidden([resultsView]);
  addHidden([chooseFighterClassic, chooseFighterDifficult]);
};
