let playerSelectionQuestion;
let computerScore = 0;
let playerScore = 0;
const computerChoice = ['Rock', 'Paper', 'Scissors']
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
const btnReset = document.querySelector('.reset');
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
        if (round < 5) {
        btnEnable();
        } else {
            btnDisable();
        }
    }, 500);
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
    btnDisable();
    game('Rock');
}

function choosepaper() {
    playerSelectionQuestion = 'Paper'
    playerPaper.style.backgroundColor = 'rebeccapurple'
    btnDisable();
    game('Paper');
}

function choosescissors() {
    playerSelectionQuestion = 'Scissors'
    playerScissors.style.backgroundColor = 'rebeccapurple'
    btnDisable();
    game('Scissors');
}

function finishGame() {
    btnDisable();
    if (playerScore > computerScore) {
        computerScore = 0;
        playerScore = 0;
        paraRound.style.color = "#bdb76b"
        paraRound.innerHTML = 'YOU WIN'
    } 
    else if (playerScore < computerScore) {
        computerScore = 0;
        playerScore = 0;
        paraRound.style.color = "#ef3038"
        paraRound.innerHTML = 'YOU LOOSE'
    } else {
        computerScore = 0;
        playerScore = 0;
        paraRound.style.color = "#008080"
        paraRound.innerHTML = `IT'S A TIE!`
    }
    btnReset.classList.remove('hidden');
}

function restartGame() {
    paraPcChoice.innerHTML = '';
    paraNpcChoice.innerHTML = '';
    round = 0;
    paraRound.innerHTML = 'Round ' + round + ' / 5'
    paraRound.style.color = "white";
    btnReset.classList.add('hidden')
    playerRock.disabled = false;
    playerPaper.disabled = false;
    playerScissors.disabled = false;
}

function btnDisable() {
    playerRock.disabled = true;
    playerPaper.disabled = true;
    playerScissors.disabled = true;
}

function btnEnable() {
    playerRock.disabled = false;
    playerPaper.disabled = false;
    playerScissors.disabled = false;
}