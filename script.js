const computerChoice = ['Rock', 'Paper', 'Scissors']
let playerSelectionQuestion;
let computerScore = 0;
let playerScore = 0;
const paraPcChoice = document.querySelector('.pcScore');
const paraNpcChoice = document.querySelector('.npcScore');
const paraRound = document.querySelector('.round');
const h1Finish = document.querySelector('.finish');
const roboRock = document.querySelector('.roboRock');
const roboPaper = document.querySelector('.roboPaper');
const roboScissors = document.querySelector('.roboScissors');
const playerRock = document.querySelector('.rock');
const playerPaper = document.querySelector('.paper');
const playerScissors = document.querySelector('.scissors');
let round = 0;

function playRound(playerSelection, computerSelection) {
    paraRound.style.color = "white"
    if (computerSelection === 'ROCK') {
        roboRock.style.backgroundColor = 'rebeccapurple';
        if (playerSelection === 'SCISSORS') {
            computerScore++;
        }
        else if (playerSelection === 'ROCK') {
        }
        else {
            playerScore++
        }
    }
    if (computerSelection === 'SCISSORS') {
        roboScissors.style.backgroundColor = 'rebeccapurple';
        if (playerSelection === 'PAPER') {
            computerScore++;
        }
        else if (playerSelection === 'SCISSORS') {
        }
        else {
            playerScore++
        }
    }
    if (computerSelection === 'PAPER') {
        roboPaper.style.backgroundColor = 'rebeccapurple';
        if (playerSelection === 'ROCK') {
            computerScore++;
        }
        else if (playerSelection === 'PAPER') {
        }
        else {
            playerScore++
        }
    }
    setTimeout(function() {
        roboRock.style.backgroundColor = '#555';
        roboScissors.style.backgroundColor = '#555';
        roboPaper.style.backgroundColor = '#555';
        playerRock.style.backgroundColor = '#555'
        playerPaper.style.backgroundColor = '#555'
        playerScissors.style.backgroundColor = '#555'
    }, 800);
  }

function game(playerChoice) {
        let computerPlay = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        let computerSelection = computerPlay.toUpperCase();
        let playerSelection = playerChoice.toUpperCase();
        playRound(playerSelection, computerSelection);
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
    playerRock.style.backgroundColor = 'rebeccapurple'
    game('Rock');
}

function choosepaper() {
    playerSelectionQuestion = 'Paper'
    playerPaper.style.backgroundColor = 'rebeccapurple'
    game('Paper');
}

function choosescissors() {
    playerSelectionQuestion = 'Scissors'
    playerScissors.style.backgroundColor = 'rebeccapurple'
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

// const playerRock = document.querySelector('.rock');
// const playerPaper = document.querySelector('.paper');
// const playerScissors = document.querySelector('.scissors');