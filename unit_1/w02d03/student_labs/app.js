const prompt = require("prompt-sync")();
const username = prompt("What is your name? ");

/* 
 Create functions for all tools 
 Set a loop to change condition depending on income 
 Add a reset function
 if the condition is met we can prompt with question to sell tool or use all tools  
 A user can have a limit of 2 tools at given time 
*/

const initializeGame = () => {
	const user = {
		username: "",
		wallet: 4,
		daysPlayed: 0,
		tools: 0,
	};

	const restaurant = [
		{ name: "KFC", amount: 0.5 },
		{ name: "Taco Bell", amount: 0.8 },
		{ name: "Subway", amount: 0.7 },
		{ name: "Fancy restaurant", amount: 2 },
	];

	let tool = [
		{ name: "Teeth", price: 1, earn: 1, owned: 1 },

		{ name: "Rusty Scissors", price: 5, earn: 5, owned: 0 },

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
			owned: 0,
		},
	];

	const purchaseScissors = () => {
		user.wallet -= tool[1].price;
		tool[1].owned = 1;
		console.log(
			` Congratulations you have successfully purchased ${tool[1].name}`
		);
	};

	const purchaseLawnmower = () => {
		user.wallet -= tool[2].price;
		tool[2].owned = 1;
		console.log(
			` Congratulations you have successfully purchased ${tool[2].name}`
		);
	};

	const purchasePoweredLawnmower = () => {
		user.wallet -= tool[3].price;
		tool[3].owned = 1;
		console.log(
			` Congratulations you have successfully purchased ${tool[3].name}`
		);
	};

	const hireStudents = () => {
		user.wallet -= tool[4].price;
		tool[4].owned = 1;
		console.log(` Congratulations you have successfully  ${tool[4].name}`);
	};

	const purchaseTool = () => {
		console.log("PurchaseTool");
		let purchaseChoice = prompt(
			`Would you like to purchase  Scissors, Lawnmower, Powered Lawnmower, or hire Students?`
		);
		purchaseChoice = purchaseChoice.toUpperCase();
		if (purchaseChoice === "SCISSORS") {
			purchaseScissors();
		}
		if (purchaseChoice === "LAWNMOWER") {
			purchaseLawnmower();
		}
		if (purchaseChoice === "POWERED LAWNMOWER") {
			purchasePoweredLawnmower();
		}
		if (purchaseChoice === "HIRE STUDENTS") {
			hireStudents();
		}
		dailyChoice();
	};

	const checkWallet = () => {
		// // }
		if (user.wallet < 0) {
			console.log("You are dead from starving");
			console.log("");
			console.log("");
			console.log("");
			console.log("");
			let userSecondChance = prompt(
				`After being homeless for 5 years you have collected enough plastic to start your landscaper business again, would you like to try again ?`
			);
			if (userSecondChance === "YES") {
				initializeGame();
			}
			if (user.wallet >= 5) {
				let toolPurchase = prompt(`Would you like to purchase another tool`);
				toolPurchase = toolPurchase.toUpperCase();

				if (toolPurchase === "YES") {
					purchaseTool();
				} else {
					dailyChoice();
				}
			}
			dailyChoice();
		}
	};
	const dailyChoice = () => {
		let dailyChoice = prompt(
			"Do you want to go sleep and work tomorrow or do you want to quit?"
		);
		dailyChoice = dailyChoice.toUpperCase();
		if (dailyChoice === "SLEEP" || dailyChoice === "YES") {
			console.log(`We hope you have a good night of rest`);
			console.log("");

			let dinner = restaurant[Math.floor(Math.random() * restaurant.length)];

			console.log(dinner);

			user.wallet = (user.wallet - dinner.amount).toFixed(1);
			console.log(
				`You were hungry and had to spend ${dinner.amount} at ${dinner.name} and your wallet has $${user.wallet}`
			);
			landscaper();
		}
	};

	const dailyEarning = () => {
		for (let a = 0; a < tool.length; a++) {
			if (tool[a].owned === 1) {
				user.wallet += tool[a].earn;
				console.log(
					`Using just your ${tool[a].name}, you can spend the day cutting lawns and make $ ${tool[a].earn}. You can do this as much as you want. `
				);

				console.log("");
				console.log(
					`Your wallet now has: ${user.wallet} which you earned using ${tool[a].name}`
				);
			}
		}
	};

	const landscaper = () => {
		console.log(`Welcome to Landscaper day ${user.daysPlayed} ${username}`);
		console.log("");

		console.log("");
		let userPicked = prompt(`Do you want to start?`);
		userPicked = userPicked.toUpperCase();
		if (userPicked === "YES") {
			user.daysPlayed += 1;
			dailyEarning();
			checkWallet();
		} else if (userPicked === "NO") {
		}
	};

	landscaper();
};

initializeGame();
