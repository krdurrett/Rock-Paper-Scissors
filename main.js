//.changing-text innerText options
//Choose your fighter!
//💻Computer won this round!💻
//😭It's a draw!😭
//👩‍🎤Human won this round!👩‍🎤

//QUERY SELECTORS
var gameChoiceView = document.querySelector(".choose-game-buttons");
var classicGameButton = document.querySelector(".classic-game");
var difficultGameButton = document.querySelector(".difficult-game");
var chooseFighterClassic = document.querySelector(".choose-fighter-classic-view");
var chooseFighterDifficult = document.querySelector(".choose-fighter-difficult-view");
var changeGameButtonView = document.querySelector(".change-button-view");
var changeGameButton = document.querySelector(".change-game-button");
var changingTextView = document.querySelector(".changing-text");


//GLOBAL VARIABLES
var currentGame;
var humanPlayer;
var computerPlayer;


//EVENT LISTENERS
gameChoiceView.addEventListener("click", initiateGamePlay);
changeGameButton.addEventListener("click", returnToGameChoice);


//FUNCTIONS
function addHidden(element) {
  element.classList.add("hidden");
};

function removeHidden(element) {
  element.classList.remove("hidden");
};

function initiateGamePlay() {
  var humanPlayer = new Player("human", "👩‍🎤", 0);
  var computerPlayer = new Player("computer", "💻,", 0);
  var currentGame = new Game(humanPlayer, computerPlayer);
  currentGame.determineCurrentGameType();
}

function displayClassicGame() {
  addHidden(gameChoiceView);
  removeHidden(chooseFighterClassic);
  removeHidden(changeGameButtonView);
  changingTextView.innerText = "Choose your fighter!";
};

function displayDifficultGame() {
  addHidden(gameChoiceView);
  removeHidden(chooseFighterDifficult);
  removeHidden(changeGameButtonView);
  changingTextView.innerText = "Choose your fighter!";
}

function returnToGameChoice() {
  removeHidden(gameChoiceView);
  addHidden(chooseFighterClassic);
  addHidden(chooseFighterDifficult);
  addHidden(changeGameButtonView);
  changingTextView.innerText = "Choose your game!";
}
