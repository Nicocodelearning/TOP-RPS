function getComputerChoice() {
    let proba = Math.random()
    if (proba < 0.333) { return "Rock" }
    else if (proba >= 0.333 && proba < 0.666) { return "Paper" }
    else { return "Scissors" }
}

function capitalize(str) {
    str = str.trim()
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function getHumanChoice() {
    return capitalize(prompt("Your choice? (Rock, Paper, Scissors)"))
}

let humanScore = 0
let computerScore = 0

function playRound(computerChoice, humanChoice) {
    if (computerChoice == "Rock" && humanChoice == "Paper" || computerChoice == "Paper" && humanChoice == "Scissors"
        || computerChoice == "Scissors" && humanChoice == "Rock") {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
        humanScore++
    }
    else if (computerChoice == "Rock" && humanChoice == "Scissors" || computerChoice == "Paper" && humanChoice == "Rock"
        || computerChoice == "Scissors" && humanChoice == "Paper") {
        console.log("You loose! " + humanChoice + " get beaten by " + computerChoice)
        computerScore++
    }
    else if (computerChoice == humanChoice) {
        console.log("Ex-aequo!")
        return null
    }
    else {
        console.log("Invalid choice")
        return null
    }
}

function playGame(nbrRound) {
    humanScore = 0
    computerScore = 0
    for (let i = 1; i <= 5; i++) {
        playRound(getComputerChoice(), getHumanChoice())
    }
    console.log(`=== Final Scores ===
        Player: ` + humanScore + `
        Computer: ` + computerScore)
    if (computerScore > humanScore) { console.log("You lost!") }
    else if (computerScore < humanScore) { console.log("Congrats! You won!") }
    else { console.log("Ex-aequo!") }
}
playGame()