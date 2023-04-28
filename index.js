// Return a random hand-sign for rock paper scissors
function getComputerChoice() {
	let possibleSigns = ["rock", "paper", "scissors"];
	return possibleSigns[Math.floor(Math.random() * 3)];
}

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

// Play a game with the given number of required wins
function game(requiredWins) {
	let playerWins = 0;
	let computerWins = 0;

	while (playerWins < requiredWins || computerWins < requiredWins) {
		let roundResults = playRound();
		return ;
	}
	return;
}
