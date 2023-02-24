let playerScore = 0
let pcScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() * (4 - 1) + 1);
    if(choice == 3){
        return "Rock"
    }
    else if(choice == 2){
        return "Paper"
    }
    else if(choice == 1){
        return "Scissors"
    }
}

function game(){

    for(let round = 0; round < 5;) {

        let playerPrompt = prompt("Rock, paper, scissors?")
        let playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase().trim()

        let computerSelection = getComputerChoice()
    
        if(playerSelection == "Rock" || playerSelection == "Scissors" || playerSelection == "Paper"){
            playRound(playerSelection, computerSelection)
            round++
        }
        else
        {
            alert("Invalid choice. Try again.")
        }
    }
    if (playerScore > pcScore) {
        console.log("Player is the game winner!")
    }
    else {
        console.log("PC is the game winner!")
    }
}

function playRound(playerSelection, computerSelection){
    console.log(`Player chose ${playerSelection}.`)
    console.log(`PC chose ${computerSelection}.`)

    if (playerSelection === computerSelection)
    {
        console.log("Round draw!")
        return
    }
    switch(playerSelection) {
        case "Paper":
            if(computerSelection === "Scissors"){
                pcScore++
                console.log("PC won this round!")
            }
            else {
                playerScore++
                console.log("Player won this round!")
            }
            break
        case "Rock":
            if(computerSelection === "Paper"){
                pcScore++
                console.log("PC won this round!")
            }
            else {
                playerScore++
                console.log("Player won this round!")
            }
            break
        case "Scissors":
            if(computerSelection === "Rock"){
                pcScore++
                console.log("PC won this round!")
            }
            else {
                playerScore++
                console.log("Player won this round!")
            }

    }
}