const choices = ["Rock", "Paper", "Scissors"]
const rules = { Rock: "Scissors", Paper: "Rock", Scissors: "Paper" }

function getComputerChoice() {
    let proba = Math.random()
    if (proba < 0.333) { return choices[0] }
    else if (proba < 0.666) { return choices[1] }
    else { return choices[2] }
}

function imgChoice(choice) {
    if (choice === choices[0]) return "./img/rock.jpg"
    if (choice === choices[1]) return "./img/paper.jpg"
    if (choice === choices[2]) return "./img/scissors.jpg"
}

function getWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) return ["draw", "Ex-aequo!"]
    else if (rules[playerChoice] === computerChoice) return ["player", "You won!"]
    else return ["computer", "You loose!"]
}

function isGameEnded(computerScore, playerScore) {
    if (playerScore === 5) alert("Congrats, you won 5 rounds !")
    if (computerScore === 5) alert("Too bad, you lost the game!")
    if (computerScore === 5 || playerScore === 5) {
        choiceButtons.forEach((btn) => {
            btn.disabled = true
            btn.id = "disabledBtn"
        });
    }
}



let playerScore = 0
let computerScore = 0


let playerChoice = null
let computerChoice = null
let roundWinner = null

const choiceButtons = document.querySelectorAll(".choices button")
const playerChoiceTxt = document.querySelector(".playerChoiceTxt")
const playerChoiceImg = document.querySelector(".playerChoiceImg")
const computerChoiceTxt = document.querySelector(".computerChoiceTxt")
const computerChoiceImg = document.querySelector(".computerChoiceImg")
const roundResult = document.querySelector(".roundResult")
const playerScoreDisplay = document.querySelector(".playerScore")
const computerScoreDisplay = document.querySelector(".computerScore")
const restartBtn = document.querySelector(".restart")

restartBtn.addEventListener("click", () => {
    choiceButtons.forEach((btn) => {
        btn.disabled = false
        btn.id = ""
    })
    playerScore = 0
    computerScore = 0
    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore
})


choiceButtons.forEach((button) => button.addEventListener("click", () => {
    playerChoice = button.textContent;
    playerChoiceTxt.textContent = playerChoice
    playerChoiceImg.src = imgChoice(playerChoice)
    computerChoice = getComputerChoice()
    computerChoiceTxt.textContent = computerChoice
    computerChoiceImg.src = imgChoice(computerChoice)
    roundWinner = getWinner(computerChoice, playerChoice)
    roundResult.textContent = roundWinner[1]
    if (roundWinner[0] === "player") playerScore++
    if (roundWinner[0] === "computer") computerScore++
    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore
    isGameEnded(computerScore, playerScore)


}))


