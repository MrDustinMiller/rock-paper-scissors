let playerScore = 0;
let computerScore = 0;

//driver functions that start the game
let rock = document
  .querySelector("#rock")
  .addEventListener("click", function () {
    displayPlayerChoice("rock");
  });

let paper = document
  .querySelector("#paper")
  .addEventListener("click", function () {
    displayPlayerChoice("paper");
  });

let scissors = document
  .querySelector("#scissors")
  .addEventListener("click", function () {
    displayPlayerChoice("scissors");
  });

let playAgain = document.querySelector(".play-again").addEventListener("click", function () {
  clearBoard();
});

//increment functions for our user and computers score
const incrementPlayerClick = function () {
  playerScoreTracker(++playerScore);
};

const incrementComputerClick = function () {
  playerScoreTracker(++computerScore);
};

//score tracking function for both user and player
const playerScoreTracker = function () {
  let playerPointDisplay = document.querySelector("#player-points-label");
  let computerPointDisplay = document.querySelector("#computer-points-label");
  let winningMessage = document.querySelector("#winner-message");
  let modal = document.querySelector(".modal")
  let close = document.querySelector(".close");
  let coverUpDisplay = document.querySelector("#cover");

  playerPointDisplay.innerHTML = playerScore;
  computerPointDisplay.innerHTML = computerScore;

  if (playerScore === 5) {
    winningMessage.innerHTML = "You win!";
    modal.style.visibility = "visible";
    coverUpDisplay.style.visibility = "visible";
    close.addEventListener("click", () => modal.style.visibility = "hidden");
  } else if (computerScore === 5) {
    winningMessage.innerHTML = "Computer wins!";
    modal.style.visibility = "visible";
    coverUpDisplay.style.visibility = "visible";
    close.addEventListener("click", () => modal.style.visibility = "hidden");
  }
};

//if user clicks play again clear our board for a new game
const clearBoard = function() {
  let computerPointDisplay = document.querySelector("#computer-points-label");
  let playerChoiceMessage = document.querySelector("#player-choice");
  let computerChoiceMessage = document.querySelector("#computer-choice");
  let winningMessage = document.querySelector("#winner-message");
  let playerPointDisplay = document.querySelector("#player-points-label");
  let modal = document.querySelector(".modal")
  let coverUpDisplay = document.querySelector("#cover");

  coverUpDisplay.style.visibility = "hidden";
  modal.style.visibility = "hidden";
  computerChoiceMessage.innerHTML = " ";
  computerPointDisplay.innerHTML = " ";
  playerChoiceMessage.innerHTML = " ";
  winningMessage.innerHTML = " ";
  playerPointDisplay.innerHTML = " ";
  playerScore = 0;
  computerScore = 0;
}

const displayPlayerChoice = function (playerChoice) {
  let playerChoiceMessage = document.querySelector("#player-choice");

  if (playerChoice !== "rock" && playerChoice !== "paper") { //would have to be scissors
    playerChoiceMessage.innerHTML = " " + "✂️";
  } else if (playerChoice !== "paper" && playerChoice !== "scissors") { //would have to be rock
    playerChoiceMessage.innerHTML = " " + "🗿";
  } else if (playerChoice !== "scissors" && playerChoice !== "rock") { //would have to be paper
    playerChoiceMessage.innerHTML = " " + "🧾";
  }

  getComputerChoice(playerChoice);
};

const displayComputerChoice = function (playerChoice, compChoice) {
  let computerChoiceMessage = document.querySelector("#computer-choice");
  computerChoiceMessage.innerHTML = " " + compChoice;

  if (compChoice !== "rock" && compChoice !== "paper") { //would have to be scissors
    computerChoiceMessage.innerHTML = " " + "✂️";
  } else if (compChoice !== "paper" && compChoice !== "scissors") { //would have to be rock
    computerChoiceMessage.innerHTML = " " + "🗿";
  } else if (compChoice !== "scissors" && compChoice !== "rock") { //would have to be paper
    computerChoiceMessage.innerHTML = " " + "🧾";
  }
  
  determineWinner(playerChoice, compChoice);
};

const getComputerChoice = function (playerChoice) {
  let compChoices = ["rock", "paper", "scissors"];
  let compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
  displayComputerChoice(playerChoice, compChoice);
};

const determineWinner = function (playerChoice, compChoice) {
  let winningMessage = document.querySelector("#winner-message");

  if (playerChoice === compChoice) {
    winningMessage.innerHTML = "It was a tie, keep going for a win!";
    
  } else if (playerChoice !== "rock" && compChoice !== "rock") {
    winningMessage.innerHTML = "Scissors won that round!"; //has to be paper & scissors
    if (playerChoice === "scissors") {
      incrementPlayerClick(playerScore); //scissors beats paper
    } else {
      incrementComputerClick(computerScore);
    }
  } else if (playerChoice !== "paper" && compChoice !== "paper") {
    winningMessage.innerHTML = "Rock won that round!"; //has to be rock and scissors
    if (playerChoice === "rock") {
      incrementPlayerClick(playerScore);//rock beats scissors
    } else {
      incrementComputerClick(computerScore);
    }
  } else if (playerChoice !== "scissors" && compChoice !== "scissors") {
    winningMessage.innerHTML = "Paper won that round!"; //has to be paper and rock
    if (playerChoice === "paper") {
      incrementPlayerClick(playerScore); //paper beats rock
    } else {
      incrementComputerClick(computerScore);
    }
  }
};
