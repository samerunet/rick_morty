const prompt = require("prompt-sync")();
console.log("    ");
const username = prompt("What is your name? ");

// console.log(`Your name is ${username}`);

console.log("    ");
console.log("    ");

console.log(`Welcome ${username} to the Rock Paper Scissors Game `);

const newGame = () => {
	console.log("    ");
	console.log("    ");

	console.log("Pick one of the following:");

	console.log("    ");
	console.log("    ");

	let usersMove = prompt("Rock, Paper, Scissors     ");

	const wordConvert = () => {
		usersMove = usersMove.toUpperCase();
		return usersMove;
	};

	const randomMove = () => {
		let random = Math.floor(Math.random() * move.length);
		return random;
	};

	wordConvert();
	// 	          0        1         2
	let move = ["ROCK", "PAPER", "SCISSORS"];

	//                   012 we need a string
	let computersMove = move[randomMove()];
	console.log("    ");
	console.log(`Computer picked ${computersMove}`);
	console.log("    ");
	console.log(`User picked ${usersMove}`);

	const rockPaperScissors = () => {
		if (computersMove === usersMove) {
			return "It's a tie";
		} else if (computersMove == "ROCK" && usersMove == "PAPER") {
			return "User wins";
		} else if (computersMove == "ROCK" && usersMove == "SCISSORS") {
			return "Computer wins";
		} else if (computersMove == "PAPER" && usersMove == "SCISSORS") {
			return "User wins";
		} else if (computersMove == "SCISSORS" && usersMove == "ROCK") {
			return "User wins";
		} else if (computersMove == "PAPER" && usersMove == "ROCK") {
			return "Computer wins";
		} else if (computersMove == "SCISSORS" && usersMove == "PAPER") {
			return "Computer wins";
		}
	};

	console.log("    ");
	console.log(rockPaperScissors());

	const repeat = () => {
		console.log("    ");
		let playAgain = prompt("Do you want to play again?     ");

		const Convert = () => {
			playAgain = playAgain.toUpperCase();
			return playAgain;
		};

		Convert();

		if (playAgain == "YES") {
			return newGame();
		} else {
			return;
			console.log("    ");
			console.log("Have a nice day!");
		}
	};
	repeat();
};

newGame();

// => computer chose rock
// => user chose paper
// => paper beats rock, user wins!

// clg welcome to game
// please pick
// give  options rock
//paper scissors
// from existing code change the input value  of usersMove
// print the outcome
