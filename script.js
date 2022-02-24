let playerSelectionQuestion;
let computerScore = 0;
let playerScore = 0;
const computerChoice = ['Rock', 'Paper', 'Scissors']
const paraPcChoice = document.querySelector('.pcScore');
const paraNpcChoice = document.querySelector('.npcScore');
const paraRound = document.querySelector('.round');
const paraWinOrLoose = document.querySelector('.WinOrLoose');
const paraGameOver = document.querySelector('.gameOver');
const windowOverlay = document.querySelector('.overlay');
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
            paraWinOrLoose.style.color = '#ef3038';
            paraWinOrLoose.innerHTML = "Rock beats Scissors. Robot wins this round."
            computerScore++;
        }
        else if (playerSelection === 'ROCK') {
            paraWinOrLoose.style.color = '#008080';
            paraWinOrLoose.innerHTML = "Rock against Rock. No winner."
        }
        else {
            paraWinOrLoose.style.color = '#bdb76b';
            paraWinOrLoose.innerHTML = "Paper beats Rock. You win this round!"
            playerScore++
        }
    }
    if (computerSelection === 'SCISSORS') {
        roboScissors.style.backgroundColor = 'rebeccapurple';
        if (playerSelection === 'PAPER') {
            paraWinOrLoose.style.color = '#ef3038';
            paraWinOrLoose.innerHTML = "Scissors beats Paper. Robot wins this round."
            computerScore++;
        }
        else if (playerSelection === 'SCISSORS') {
            paraWinOrLoose.style.color = '#008080';
            paraWinOrLoose.innerHTML = "Scissors against Scissors. No winner."
        }
        else {
            paraWinOrLoose.style.color = '#bdb76b';
            paraWinOrLoose.innerHTML = "Rock beats Scissors. You win this round!"
            playerScore++
        }
    }
    if (computerSelection === 'PAPER') {
        roboPaper.style.backgroundColor = 'rebeccapurple';
        if (playerSelection === 'ROCK') {
            paraWinOrLoose.style.color = '#ef3038';
            paraWinOrLoose.innerHTML = "Paper beats Rock. Robot wins this round."
            computerScore++;
        }
        else if (playerSelection === 'PAPER') {
            paraWinOrLoose.style.color = '#008080';
            paraWinOrLoose.innerHTML = "Paper against Paper. No winner."
        }
        else {
            paraWinOrLoose.style.color = '#bdb76b';
            paraWinOrLoose.innerHTML = "Scissors beats Paper. You win this round!"
            playerScore++
        }
    }
    setTimeout(function() {
        roboRock.style.backgroundColor = '#555';
        roboScissors.style.backgroundColor = '#555';
        roboPaper.style.backgroundColor = '#555';
        playerRock.style.backgroundColor = '#555'
        playerRock.blur();
        playerPaper.style.backgroundColor = '#555'
        playerPaper.blur();
        playerScissors.style.backgroundColor = '#555'
        playerScissors.blur();
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
        paraGameOver.style.color = "#bdb76b"
        paraGameOver.innerHTML += '🏆 You won! 🏆'
    } 
    else if (playerScore < computerScore) {
        computerScore = 0;
        playerScore = 0;
        paraGameOver.style.color = "#ef3038"
        paraGameOver.innerHTML += '❌ Robot won! ❌'
    } else {
        computerScore = 0;
        playerScore = 0;
        paraGameOver.style.color = "#008080"
        paraGameOver.innerHTML += `🎲 It's a tie! 🎲`
    }
    document.body.style.overflow = 'hidden';
    windowOverlay.classList.remove('hidden');
    paraGameOver.classList.remove('hidden')
    btnReset.classList.remove('hidden');
    window.setTimeout(function() {
        windowOverlay.style.opacity = '1';
      }, 250); 
}

function restartGame() {
    paraPcChoice.innerHTML = '0';
    paraNpcChoice.innerHTML = '0';
    round = 0;
    paraRound.innerHTML = 'Round ' + round + ' / 5'
    paraRound.style.color = "white";
    paraWinOrLoose.style.color = "white";
    paraWinOrLoose.innerHTML = `Ready to Play`;
    btnReset.classList.add('hidden')
    paraGameOver.classList.add('hidden')
    paraGameOver.innerHTML = 'Game Over<br />'
    windowOverlay.style.opacity = '0';
    window.setTimeout(function() {
        windowOverlay.classList.add('hidden')
    }, 250); 
    document.body.style.overflow = 'auto'
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