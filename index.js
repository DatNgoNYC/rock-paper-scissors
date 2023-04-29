/* Game Logic */
let requiredWins = 5;
let playerWins = 0;
let computerWins = 0;

// Return the results of one round given the playerSign and computerSign as inputs
function playRound(playerSign, computerSign) {
	if (
		(playerSign === "rock" && computerSign === "scissors") ||
		(playerSign === "paper" && computerSign === "rock") ||
		(playerSign === "scissors" && computerSign === "paper")
	) {
		return "win";
	} else if (playerSign === computerSign) {
		return "tie";
	} else {
		return "lose";
	}
}

function updateGame(playerResult) {
	switch (playerResult) {
		case 'win':
			playerWins++;
			console.log(playerWins, computerWins);
			break;
	
		case 'lose':
			computerWins++;
			console.log(playerWins, computerWins);
			break;

		default:
			console.log("tie", playerWins, computerWins);
			break;
	}
}

// Return a random hand-sign for rock paper scissors
function getComputerChoice() {
	const possibleSigns = ["rock", "paper", "scissors"];
	return possibleSigns[Math.floor(Math.random() * 3)];
}

/* // Play a game with the given number of required wins
function game(requiredWins) {
	let playerWins = 0;
	let computerWins = 0;

	while (playerWins < requiredWins || computerWins < requiredWins) {
		let roundResults = playRound();
		return ;
	}
	return;
} */

/* Create HTML element references */
// Scoreboard
const playerScore = document.querySelector('#player-score span');
const computerScore = document.querySelector('#computer-score span');

const allSigns = document.querySelectorAll('.selection button')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const roundOutcome = document.querySelector('.class p');

/* Event Handlers */
// add an event listener to each of the button. When pressed, we will use that button as the selection to start a round. Accordingly, we will also start a game and update the game logic at the top of this file.
allSigns.forEach(function (button) {
	button.addEventListener('click', function () {
		const result = playRound(button.id, getComputerChoice());
		updateGame(result);
	})
});
