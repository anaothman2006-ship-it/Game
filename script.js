const buttons = document.querySelectorAll(".btn");

let computerScore = 0;
let humanScore = 0;

const userChoice = document.querySelector(".human-choice");
const buttonStart = document.querySelector("#button-start");
function myHandler(e) {
    const currentBtn = e.target.textContent;
    playRound(currentBtn);
    userChoice.textContent = currentBtn;
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (humanScore < 3 && computerScore < 3) {
            myHandler(e);
        }
    });
});
function resetGame() {
    humanScore = 0;
    humanScoreDisplay.textContent = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = 0;
    endedGame.textContent = "Final Result!";
    displayResult.textContent = "Result!"

}

buttonStart.addEventListener("click", startGame);

const displayResult = document.querySelector(".display");

const displayComputerChoice = document.querySelector(".computer-choice");

const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = array[Math.floor(Math.random() * array.length)]; 
    displayComputerChoice.textContent = randomIndex;
    return randomIndex;
}


const computerScoreDisplay = document.querySelector(".computer-score");
const humanScoreDisplay = document.querySelector(".human-score");

const endedGame = document.querySelector(".game-over");

function playRound(humanChoice) { 
    const computerChoice = getComputerChoice();

    if (
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore++
        humanScoreDisplay.textContent = humanScore
        displayResult.textContent = "You win this Round!";
    }
    else if (humanChoice === computerChoice) {
        displayResult.textContent = "Tie in this Round!";
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        displayResult.textContent = "Computer win this Round!";
    }

    if (humanScore === 3) {
        endedGame.textContent = "Game Over. You Win!"
    }
    if (computerScore === 3) {
        endedGame.textContent = "Game Over. Computer Win!"
    }
}
