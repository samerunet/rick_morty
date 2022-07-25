// const prompt = require("prompt-sync")();

/* 
 Create functions for all tools 
 Set a loop to change condition depending on income 
 Add a reset function
 if the condition is met we can prompt with question to sell tool or use all tools  
 A user can have a limit of 2 tools at given time 
*/

// if you want the player to win and you have limited time please update user.wallet value

// restart game available

// added option that user will spend money every day on random restaurant

// added options to purchase different tools

//

// const initializeGame = () => {

// const $username = $("<form>");
// const $usernameButton = $("<button>");

// $username.append("<input>");

// $(".maingame").append($username);
// ("Please enter your username");
// console.log($username);

const user = {
	username: "",
	wallet: 1005,
	daysPlayed: 0,
	tools: 0,
};
$("#daysplayed h3").text(`You have played ${user.daysPlayed} days`);
// user.wallet = user.wallet.toFixed(2);
const restaurant = [
	{ name: "KFC", amount: 0.5 },
	{ name: "Taco Bell", amount: 0.8 },
	{ name: "Subway", amount: 0.7 },
	{ name: "Fancy restaurant", amount: 2 },
];

let tool = [
	{ name: "Teeth", price: 1, earn: 1, owned: 1 },

	{ name: "Rusty Scissors", price: 5, earn: 5, owned: 1 },

	{ name: "Old-timey Push Lawnmower", price: 25, earn: 50, owned: 0 },
	{
		name: "Fancy Battery-powered Lawnmower",
		price: 250,
		earn: 100,
		owned: 0,
	},
	{
		name: "Hiring Team of Starving Students",
		price: 500,
		earn: 250,
		owned: 1,
	},
];
const $toolRender = () => {
	for (let i = 0; i < tool.length; i++) {
		if (tool[i].owned === 1) {
			const $toolsowned = $("<div>").addClass("toolsowned");
			const $toolsownedh3 = $("<h3>").text(tool[i].name.toUpperCase());
			$toolsowned.append($toolsownedh3);
			$(".tools").append($toolsowned);
		}
	}
};
$toolRender();
const clearDiv = () => {
	$(".maingame ").addClass("hide");
	const $maingame = $("<div>").addClass("maingame").appendTo(".game");
};
// const purchaseScissors = () => {
// 	if (tool[1].owned === 1) {
// 		console.log("You already have this tool");
// 	} else {
// 		user.wallet = (user.wallet - tool[1].price).toFixed(2);
// 		tool[1].owned = 1;
// 		console.log(
// 			` Congratulations you have successfully purchased ${tool[1].name} your wallet now has ${user.wallet}`
// 		);
// 	}
// };

// const purchaseLawnmower = () => {
// 	if (tool[2].owned === 1) {
// 		console.log("You already have this tool");
// 	} else {
// 		user.wallet = (user.wallet - tool[2].price).toFixed(2);
// 		tool[2].owned = 1;
// 		console.log(
// 			` Congratulations you have successfully purchased ${tool[2].name} your wallet now has ${user.wallet}`
// 		);
// 	}
// };

// const purchasePoweredLawnmower = () => {
// 	if (tool[3].owned === 1) {
// 		console.log("You already have this tool");
// 	} else {
// 		user.wallet -= tool[3].price;
// 		tool[3].owned = 1;
// 		console.log(
// 			` Congratulations you have successfully purchased ${tool[3].name} your wallet now has ${user.wallet}`
// 		);
// 	}
// };

// const hireStudents = () => {
// 	if (tool[4].owned === 1) {
// 		console.log("You already have this tool");
// 	} else {
// 		user.wallet -= tool[4].price;
// 		tool[4].owned = 1;
// 		console.log(
// 			` Congratulations you have successfully  ${tool[4].name} your wallet now has ${user.wallet}`
// 		);
// 	}
// };

// const purchaseTool = () => {
// 	console.log(" ");
// 	let purchaseChoice = prompt(
// 		`Would you like to purchase  Scissors, Lawnmower, Powered Lawnmower, or hire Students?`
// 	);
// 	purchaseChoice = purchaseChoice.toUpperCase();
// 	if (purchaseChoice === "SCISSORS") {
// 		purchaseScissors();
// 	}
// 	if (purchaseChoice === "LAWNMOWER") {
// 		purchaseLawnmower();
// 	}
// 	if (purchaseChoice === "POWERED LAWNMOWER") {
// 		purchasePoweredLawnmower();
// 	}
// 	if (purchaseChoice === "HIRE STUDENTS") {
// 		hireStudents();
// 	}
// 	dailyChoice();
// };

const checkWallet = () => {
	clearDiv();
	if (user.wallet >= 1000 && tool[4].owned === 1) {
		const $userWin = $("<div>").addClass("welcome").appendTo(".maingame");
	// } else if (user.wallet < 0) {
	// 	console.log("You are dead from starving");
	// 	let userSecondChance = prompt(
	// 		`After being homeless for 5 years you have collected enough plastic to start your landscaper business again, would you like to try again ?`
	// 	);
	// 	userSecondChance = userSecondChance.toUpperCase();
	// 	if (userSecondChance === "YES") {
	// 		initializeGame();
	// 	}
	// } else if (user.wallet >= 5) {
	// 	let toolPurchase = prompt(`Would you like to purchase another tool?   `);

	// 	toolPurchase = toolPurchase.toUpperCase();

	// 	if (toolPurchase === "YES") {
	// 		purchaseTool();
	// 	} else {
	// 		dailyChoice();
	// 	}
	} else {
		dailyChoice();
	}
};
// const dailyChoice = () => {
// 	let dailyChoice = prompt(
// 		"Do you want to go sleep and work tomorrow or do you want to quit?"
// 	);
// 	dailyChoice = dailyChoice.toUpperCase();

// 	if (dailyChoice === "SLEEP" || dailyChoice === "YES") {
// 		console.log("");
// 		console.log(`We hope you have a good night of rest`);
// 		console.log("");

// 		let dinner = restaurant[Math.floor(Math.random() * restaurant.length)];

// 		console.log(dinner);

// 		user.wallet = user.wallet - dinner.amount;
// 		console.log(
// 			`You were hungry and had to spend ${dinner.amount} at ${dinner.name} and your wallet has $${user.wallet}`
// 		);
// 		landscaper();
// 	}
// };

const dailyEarning = () => {
	clearDiv();
	for (let a = 0; a < tool.length; a++) {
		if (tool[a].owned === 1) {
			user.wallet += tool[a].earn;
			const $earned = $("<div>")
				.addClass("welcome")
				.text(
					`Using just your ${tool[a].name}, you can spend the day cutting lawns and make $ ${tool[a].earn}. You can do this as much as you want. `
				)
				.appendTo(".maingame");
		}
	}
	$("#wallet h3").text(`Your wallet  has $${user.wallet}`.toUpperCase());

	$("#daysplayed h3").text(`You have played ${user.daysPlayed} days`);
};
const startGame = () => {
	user.daysPlayed += 1;
	dailyEarning();
};

const dontStartGame = () => {
	alert("Please stay");
};

// Creating the startGame div with the YES/No prompt
const landscaper = () => {
	const $welcome = $("<div>").addClass("welcome");
	const $welcomeText = $("<h2>").text("Welcome to Landscaper".toUpperCase());
	$welcomeText.appendTo($welcome);

	$(".maingame").append($welcome);

	const $startGame = $("<h3>")
		.text("Start Game".toUpperCase())
		.appendTo(".maingame");
	const $prompt = $("<div>").addClass("questions").appendTo(".maingame");

	const $yes = $("<h3>")
		.attr("id", "yes")
		.addClass("prompt")
		.text("Yes".toUpperCase())
		.appendTo($prompt);

	const $no = $("<h3>")
		.attr("id", "no")
		.addClass("prompt")
		.text("no".toUpperCase())
		.appendTo($prompt);
};
// loading game after page is loaded
$(() => {
	landscaper();
	$("#yes").on("click", startGame);

	$("#no").on("click", dontStartGame);

	$("#checkwallet").on("click", checkWallet);
});
