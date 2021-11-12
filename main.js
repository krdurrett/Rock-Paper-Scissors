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
var fighterButton = document.querySelectorAll(".fighter-button");
var resultsView = document.querySelector(".results-view");
var humanChoiceImage = document.querySelector(".human-choice-image");
var computerChoiceImage = document.querySelector(".computer-choice-image");
// var rockButton = document.querySelector("#rockButton");
// var paperButton = document.querySelector("#paperButton");
// var scissorsButton = document.querySelector("#scissorsButton");
// var lizardButton = document.querySelector("#lizardButton");
// var spockButton = document.querySelector("#spockButton");

//GLOBAL VARIABLES
var currentGame;
var humanPlayer;
var computerPlayer;
var classicFighterOptions = ["rockButton", "paperButton", "scissorsButton"];
var difficultFighterOptions =["rockButton", "paperButton", "scissorsButton", "lizardButton", "spockButton"];


//EVENT LISTENERS
gameChoiceView.addEventListener("click", initiateGamePlay);
changeGameButton.addEventListener("click", returnToGameChoice);
for (var i = 0; i < fighterButton.length; i++) {
  fighterButton[i].addEventListener("click", chooseFighter);
};



//FUNCTIONS
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function addHidden(element) {
  element.classList.add("hidden");
};

function removeHidden(element) {
  element.classList.remove("hidden");
};

function initiateGamePlay() {
  humanPlayer = new Player("human", "👩‍🎤", 0);
  computerPlayer = new Player("computer", "💻,", 0);
  currentGame = new Game(humanPlayer, computerPlayer);
  if (event.target.id === "classicGame") {
    currentGame.gameType = "classic";
    displayClassicGame();
  } else if (event.target.id === "difficultGame") {
    currentGame.gameType = "difficult";
    displayDifficultGame();
  }
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
  addHidden(resultsView);
  changingTextView.innerText = "Choose your game!";
}

function chooseFighter() {
  humanPlayer.takeTurn();
  computerPlayer.takeTurn();
}

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
  }
}

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
  }
}

function displayResultsView() {
  removeHidden(resultsView);
  addHidden(chooseFighterClassic);
  addHidden(chooseFighterDifficult);
  changingTextView.innerText = "💻Computer won this round!💻";
}
