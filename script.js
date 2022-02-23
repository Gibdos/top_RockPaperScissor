const computerChoice = ['Rock', 'Paper', 'Scissors']
let playerSelectionQuestion;
let computerScore = 0;
let playerScore = 0;
const paraPcChoice = document.querySelector('.pcScore');
const paraNpcChoice = document.querySelector('.npcScore');
const paraRound = document.querySelector('.round');
const h1Finish = document.querySelector('.finish');
let round = 0;

function playRound(playerSelection, computerSelection) {
    paraRound.style.color = "white"
    if (computerSelection === 'ROCK') {
        if (playerSelection === 'SCISSORS') {
            console.log(`Rock beats Scissors. The computer wins.`)
            computerScore++;
        }
        else if (playerSelection === 'ROCK') {
            console.log(`You both chose Rock. It's a tie`)
        }
        else {
            console.log(`Paper beats Rock. You win!`)
            playerScore++
        }
    }
    if (computerSelection === 'SCISSORS') {
        if (playerSelection === 'PAPER') {
            console.log(`Scissors beats Paper. The computer wins.`)
            computerScore++;
        }
        else if (playerSelection === 'SCISSORS') {
            console.log(`You both chose Scissors. It's a tie`)
        }
        else {
            console.log(`Rock beats Scissors. You win!`)
            playerScore++
        }
    }
    if (computerSelection === 'PAPER') {
        if (playerSelection === 'ROCK') {
            console.log(`Paper beats Rock. The computer wins.`)
            computerScore++;
        }
        else if (playerSelection === 'PAPER') {
            console.log(`You both chose Paper. It's a tie`)
        }
        else {
            console.log(`Scissors beats Rock. You win!`)
            playerScore++
        }
    }
  }

function game(playerChoice) {
        let computerPlay = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        let computerSelection = computerPlay.toUpperCase();
        let playerSelection = playerChoice.toUpperCase();
        playRound(playerSelection, computerSelection);
        console.log(`The score is:`);
        console.log('Computer: ' + computerScore)
        console.log('Player: ' + playerScore)
        paraPcChoice.innerHTML = playerScore
        paraNpcChoice.innerHTML = computerScore
        round++
        paraRound.innerHTML = 'Round ' + round + ' / 5'
    if (round === 5) {
        finishGame()
    }
}

function chooserock() {
    playerSelectionQuestion = 'Rock'
    game('Rock');
}

function choosepaper() {
    playerSelectionQuestion = 'Paper'
    game('Paper');
}

function choosescissors() {
    playerSelectionQuestion = 'Scissors'
    game('Scissors');
}

function finishGame() {
    if (playerScore > computerScore) {
        console.log('*** CONGRATULATIONS! YOU WON! ***')
        computerScore = 0;
        playerScore = 0;
        round = 0;
        paraRound.style.color = "green"
        paraRound.innerHTML = 'YOU WIN'
    } 
    else if (playerScore < computerScore) {
        console.log('*** SORRY BUT THE COMPUTER HAS WON ***')
        computerScore = 0;
        playerScore = 0;
        round = 0;
        paraRound.style.color = "red"
        paraRound.innerHTML = 'YOU LOOSE'
    } else {
        console.log(`*** IT'S A TIE! ***`)
        computerScore = 0;
        playerScore = 0;
        round = 0;
        paraRound.style.color = "white"
        paraRound.innerHTML = `IT'S A TIE!`

    }

}