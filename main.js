//QUERY SELECTORS
var gameChoiceView = document.querySelector("#chooseGameButtons");
var classicGameButton = document.querySelector("#classicGame");
var difficultGameButton = document.querySelector("#difficultGame");
var chooseFighterClassic = document.querySelector("#chooseFighterClassicView");
var chooseFighterDifficult = document.querySelector("#chooseFighterDifficultView");
var changeGameButtonView = document.querySelector("#changeButtonView");
var changeGameButton = document.querySelector("#changeGameButton");
var clearWinsButtonView = document.querySelector("#clearWinsView");
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

//EVENT LISTENERS
gameChoiceView.addEventListener("click", initiateGamePlay);
changeGameButton.addEventListener("click", returnToGameChoice);
clearWinsButton.addEventListener("click", clearLocalStorage);
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
  addHidden([gameChoiceView, resultsView, rockEmojiClassic, paperEmojiClassic, scissorsEmojiClassic]);
  removeHidden([chooseFighterClassic, changeGameButtonView]);
  changingTextView.innerText = "Choose your fighter!";
};

function displayDifficultGame() {
  addHidden([gameChoiceView, resultsView, lizardEmojiDifficult, spockEmojiDifficult, rockEmojiDifficult, paperEmojiDifficult, scissorsEmojiDifficult]);
  removeHidden([chooseFighterDifficult, changeGameButtonView]);
  changingTextView.innerText = "Choose your fighter!";
};

function returnToGameChoice() {
  removeHidden([gameChoiceView]);
  addHidden([chooseFighterClassic, chooseFighterDifficult, changeGameButtonView, resultsView]);
  changingTextView.innerText = "Choose your game!";
};

function clearLocalStorage() {
  localStorage.clear();
  humanPlayer.resetWins();
  computerPlayer.resetWins();
  displayWins();
};

function playGame() {
  humanPlayer.takeTurn();
  computerPlayer.takeTurn();
  displayHumanChoiceEmoji();
  currentGame.checkForDraw(humanPlayer, computerPlayer);
  currentGame.checkWinConditions(humanPlayer, computerPlayer);
  setTimeout(function(){showGameResults(humanPlayer, computerPlayer, currentGame)}, 300);
  setTimeout(gameRefresh, 1500);
};

function displayHumanChoiceEmoji() {
  if (currentGame.gameType === "classic") {
    if (humanPlayer.choice === "rock") {
      removeHidden([rockEmojiClassic]);
    } else if (humanPlayer.choice === "paper") {
      removeHidden([paperEmojiClassic]);
    } else if (humanPlayer.choice === "scissors") {
      removeHidden([scissorsEmojiClassic]);
    };
  } else if (currentGame.gameType === "difficult") {
    if (humanPlayer.choice === "lizard") {
      removeHidden([lizardEmojiDifficult]);
    } else if (humanPlayer.choice === "spock") {
      removeHidden([spockEmojiDifficult]);
    } else if (humanPlayer.choice === "rock") {
      removeHidden([rockEmojiDifficult]);
    } else if (humanPlayer.choice === "paper") {
      removeHidden([paperEmojiDifficult]);
    } else if (humanPlayer.choice === "scissors") {
      removeHidden([scissorsEmojiDifficult]);
    };
  };
};

function gameRefresh() {
  currentGame.resetGame();
  removeHidden([changeGameButton, clearWinsButton]);
  if (currentGame.winner === "" && currentGame.gameType === "classic") {
    displayClassicGame();
  } else if (currentGame.winner === "" && currentGame.gameType === "difficult") {
    displayDifficultGame();
  };
};

function showGameResults(player1, player2, game) {
  addHidden([changeGameButton, clearWinsButton]);
  displayHumanChoice(player1.choice);
  displayComputerChoice(player2.choice);
  displayWinner(game.winner);
  displayWins();
};

function displayHumanChoice(humanChoice) {
  humanChoiceImage.innerHTML = ``;
  displayResultsView();
  if (humanChoice === "paper") {
    humanChoiceImage.innerHTML = `<img src="./Assets/happy-paper.png" alt="paper" class="image" id="paperButton">`;
  } else if (humanChoice === "rock") {
    humanChoiceImage.innerHTML = `<img src="./Assets/rock.png" alt="rock" class="image" id="rockButton">`;
  } else if (humanChoice === "scissors") {
    humanChoiceImage.innerHTML = `<img src="./Assets/happy-scissors.png" alt="scissors" class="image" id="scissorsButton">`;
  } else if (humanChoice === "lizard") {
    humanChoiceImage.innerHTML = `<img src="./Assets/flat-lizard.png" alt="lizard" class="image" id="lizardButton">`;
  } else if (humanChoice === "spock") {
    humanChoiceImage.innerHTML = `<img src="./Assets/spock-icon.png" alt="spock" class="image" id="spockButton">`
  };
};

function displayComputerChoice(computerChoice) {
  computerChoiceImage.innerHTML = ``;
  displayResultsView();
  if (computerChoice === "paper") {
    computerChoiceImage.innerHTML = `<img src="./Assets/happy-paper.png" alt="paper" class="image" id="paperButton">`;
  } else if (computerChoice === "rock") {
    computerChoiceImage.innerHTML = `<img src="./Assets/rock.png" alt="rock" class="image" id="rockButton">`;
  } else if (computerChoice === "scissors") {
    computerChoiceImage.innerHTML = `<img src="./Assets/happy-scissors.png" alt="scissors" class="image" id="scissorsButton">`;
  } else if (computerChoice === "lizard") {
    computerChoiceImage.innerHTML = `<img src="./Assets/flat-lizard.png" alt="lizard" class="image" id="lizardButton">`;
  } else if (computerChoice === "spock") {
    computerChoiceImage.innerHTML = `<img src="./Assets/spock-icon.png" alt="spock" class="image" id="spockButton">`;
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
  };
  if (JSON.parse(localStorage.getItem("computer")) === null) {
    computerWinDisplay.innerText = `WINS: 0`;
  } else {
    computerWinDisplay.innerText = `WINS: ${JSON.parse(localStorage.getItem("computer"))}`;
  };
};

function displayResultsView() {
  removeHidden([resultsView]);
  addHidden([chooseFighterClassic, chooseFighterDifficult]);
};
