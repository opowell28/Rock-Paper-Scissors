//return rock paper or scissors randomly
function computerPlay() {
    let playArray = [
        'rock',
        'paper',
        'scissors'
    ];
    let randomNum = Math.floor(Math.random()*playArray.length);
    return playArray[randomNum];
}

function playRound(playerSelection, computerSelection) {

    let winner;

    if (playerSelection === computerSelection) {
        alert(`It's a tie. ${playerSelection} vs ${computerSelection}`);
        winner = 'Tie';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            alert(`Computer wins. ${computerSelection} beats ${playerSelection}`);
            winner = 'Computer';
        }
        else if (computerSelection === 'scissors') {
            alert(`You win. ${playerSelection} beats ${computerSelection}`);
            winner = 'Player'
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            alert(`Computer wins. ${computerSelection} beats ${playerSelection}`);
            winner = 'Computer';
        }
        else if (computerSelection === 'rock') {
            alert(`You win. ${playerSelection} beats ${computerSelection}`);
            winner = 'Player';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            alert(`Computer wins. ${computerSelection} beats ${playerSelection}`);
            winner = 'Computer';
        }
        else if (computerSelection === 'paper') {
            alert(`You win. ${playerSelection} beats ${computerSelection}`);
            winner = 'Player';
        }
    }
    return winner;
}

function game() {
    let goalScore = Number(prompt('How many rounds do you want to play?'));
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore !== goalScore && computerScore !== goalScore) {
        let playerSelection = prompt('Enter "rock" "paper" or "scissors".').toLowerCase()
        let computerSelection = computerPlay().toLowerCase();

        let result = playRound(playerSelection, computerSelection);

        if (result === 'Player') {
            playerScore++;
        }
        else if (result === 'Computer') {
            computerScore++;
        }

        if (playerScore === goalScore) {
            alert(`You win ${playerScore} to ${computerScore}`);
            return;
        }
        else if (computerScore === goalScore) {
            alert(`Computer wins ${computerScore} to ${playerScore}`);
            return;
        }
    }
}