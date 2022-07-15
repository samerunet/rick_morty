const prompt = require("prompt-sync")();
console.log("    ");
const username = prompt("What is your name? ");

const wait = () => {
	console.log("    ");
	console.log("Have a nice day!");
	console.log("    ");
	console.log(` ${username} Wait where are you going?`);
	console.log("    ");
	console.log("I will miss you");
	console.log("    ");

	let secondChance = prompt(`${username} Was the game boring for you ?`);

	secondChance = secondChance.toUpperCase();

	if (secondChance == "YES") {
		let secondChanceAnswer = prompt(
			"I am so sorry to hear that, do you want to give me second chance?"
		);

		secondChanceAnswer = secondChanceAnswer.toUpperCase();

		if (secondChanceAnswer == "YES") {
			return newGame();
		}
	} else {
		let secondChanceAnswer = prompt(
			"Were you happy with the first game you played?     "
		);
		console.log("    ");
		secondChanceAnswer = secondChanceAnswer.toUpperCase();

		if (secondChanceAnswer == "YES") {
			let rating = prompt(" Will you rate this game 1 - 5 ? ");
			console.log("    ");
			if (rating >= 4) {
				const Rank = Math.floor(Math.random() * 1000);
				console.log(`
                Your Rank is ${Rank} out of 1000 people played and thank you for your feedback`);
				console.log("    ");
			} else if (rating <= 3) {
				console.log("I appreciate your honesty");
				console.log("    ");
			} else {
				console.log("Okay then have a nice day.");
				console.log("    ");
			}
		}
	}
};
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
			return wait();
		}
	};
	repeat();
};

newGame();
