const array = ['Rock', 'Scissor', 'Paper'];

function getComputerChoice() {
    const randomIndex = array[Math.floor(Math.random() * array.length)];
    console.log(`Computer Choice: ${randomIndex}`);
    return randomIndex
}

function getHumanChoice() {
    let userChoice = prompt('Choice Rock, Scissor or Paper:');
    while (!userChoice || userChoice.trim() === "") {
        userChoice = prompt('Invalid Input! Please choice Rock, Paper or Scissor:')
    }
    console.log(`your Choice: ${userChoice}`)
    return userChoice
}

let computerScore = 0;
let humanScore = 0;

function playRound() {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (
        (humanChoice === "Scissor" && computerChoice === "Paper") ||
        (humanChoice === "Rock"&& computerChoice === "Scissor")  ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {humanScore++
        console.log("You win this Round!");
    }
    else if(humanChoice === computerChoice) {
        console.log("this Round is a Tie!");
    }
    else {computerScore++
        console.log("Computer win this Round!");
    }
}

function playGame() {
    for (let i = 0; i < 3; i++) {
        playRound();
    }
    console.log('--- Final Result ---');
    if (computerScore > humanScore) {
        console.log(`Computer Win! Score:${computerScore}`)
    } else if (computerScore === humanScore) {
        console.log(`it's a tie! Computer Score:${computerScore}, Your score:${humanScore}`);
    } else {
        console.log(`You Win! your Score:${humanScore}`);
    }

}
playGame();