const user = {
	username: "",
	wallet: 5,
	daysPlayed: 0,
	tools: 0,
};
$("#daysplayed h3").text(`You have played ${user.daysPlayed} days`);

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
const $toolRender = () => {
	$(".tools").addClass("hide");
	const $maingame = $("<div>").addClass("tools").appendTo(".game");

	const $h1 = $("<h1>")
		.text("YOU OWE THIS TOOLS:")
		.appendTo(".tools")
		.addClass("toolsTitle");
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

const purchaseScissors = () => {
	clearDiv();
	if (tool[1].owned === 1) {
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(`You already have ${tool[1].name}`)
			.appendTo(".maingame");
		const $prompt = $("<div>").addClass("questions").appendTo(".maingame");
		const $no = $("<h3>")
			.attr("id", "return")
			.addClass("prompt")
			.text("return back to game".toUpperCase())
			.appendTo($prompt)
			.on("click", dailyEarning);
	} else {
		user.wallet = (user.wallet - tool[1].price).toFixed(2);
		tool[1].owned = 1;

		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(
				` Congratulations you have successfully purchased ${tool[1].name} your wallet now has ${user.wallet}`
			)
			.appendTo(".maingame");
		const $prompt = $("<div>").addClass("questions").appendTo(".maingame");
		const $no = $("<h3>")
			.attr("id", "return")
			.addClass("prompt")
			.text("return back to game".toUpperCase())
			.appendTo($prompt)
			.on("click", dailyEarning);
	}
};

const purchaseLawnmower = () => {
	clearDiv();
	if (tool[2].owned === 1) {
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(`You already have ${tool[1].name}`)
			.appendTo(".maingame");
		const $prompt = $("<div>").addClass("questions").appendTo(".maingame");
		const $no = $("<h3>")
			.attr("id", "return")
			.addClass("prompt")
			.text("return back to game".toUpperCase())
			.appendTo($prompt)
			.on("click", dailyEarning);
	} else {
		user.wallet = (user.wallet - tool[2].price).toFixed(2);
		tool[2].owned = 1;
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(
				` Congratulations you have successfully purchased ${tool[1].name} your wallet now has ${user.wallet}`
			)
			.appendTo(".maingame");
		const $prompt = $("<div>").addClass("questions").appendTo(".maingame");
		const $no = $("<h3>")
			.attr("id", "return")
			.addClass("prompt")
			.text("return back to game".toUpperCase())
			.appendTo($prompt)
			.on("click", dailyEarning);
	}
};

const purchasePoweredLawnmower = () => {
	clearDiv();
	if (tool[3].owned === 1) {
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(`You already have ${tool[1].name}`)
			.appendTo(".maingame");
		const $prompt = $("<div>").addClass("questions").appendTo(".maingame");
		const $no = $("<h3>")
			.attr("id", "return")
			.addClass("prompt")
			.text("return back to game".toUpperCase())
			.appendTo($prompt)
			.on("click", dailyEarning);
	} else {
		user.wallet -= tool[3].price;
		tool[3].owned = 1;
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(
				` Congratulations you have successfully purchased ${tool[1].name} your wallet now has ${user.wallet}`
			)
			.appendTo(".maingame");
		const $prompt = $("<div>").addClass("questions").appendTo(".maingame");
		const $no = $("<h3>")
			.attr("id", "return")
			.addClass("prompt")
			.text("return back to game".toUpperCase())
			.appendTo($prompt)
			.on("click", dailyEarning);
	}
};

const hireStudents = () => {
	clearDiv();
	if (tool[4].owned === 1) {
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(`You already have ${tool[1].name}`)
			.appendTo(".maingame");
		const $prompt = $("<div>").addClass("questions").appendTo(".maingame");
		const $no = $("<h3>")
			.attr("id", "return")
			.addClass("prompt")
			.text("return back to game".toUpperCase())
			.appendTo($prompt)
			.on("click", dailyEarning);
	} else {
		user.wallet -= tool[4].price;
		tool[4].owned = 1;
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(
				` Congratulations you have successfully purchased ${tool[1].name} your wallet now has ${user.wallet}`
			)
			.appendTo(".maingame");
		const $prompt = $("<div>").addClass("questions").appendTo(".maingame");
		const $no = $("<h3>")
			.attr("id", "return")
			.addClass("prompt")
			.text("return back to game".toUpperCase())
			.appendTo($prompt)
			.on("click", dailyEarning);
	}
};

const checkWallet = () => {
	clearDiv();

	//	const buyScissors = $("<>");

	if (user.wallet >= 1000 && tool[4].owned === 1) {
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(`You won the game`)
			.appendTo(".maingame");
	} else if (user.wallet < 0) {
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(
				`After being homeless for 5 years you have collected enough plastic to start your landscaper business again, would you like to try again ?`
			)
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
		// create on click for yes/no
		// 		initializeGame();
	} else if (user.wallet >= 5) {
		const $userProgress = $("<div>")
			.addClass("welcome")
			.text(`Would you like to purchase tools?`)
			.appendTo(".maingame");

		const $prompt = $("<div>").addClass("tooloption").appendTo(".maingame");
		const $scissors = $("<h3>")
			.attr("id", "scissors")
			.addClass("prompt")
			.text("       RUSTY SCISSORS     ".toUpperCase())
			.appendTo($prompt)
			.on("click", purchaseScissors);

		const $purchaseLawnmower = $("<h3>")
			.attr("id", "lawnmower")
			.addClass("prompt")
			.text("Old-timey Push Lawnmower".toUpperCase())
			.appendTo($prompt)
			.on("click", purchaseLawnmower);

		const $purchasePoweredLawnmower = $("<h3>")
			.attr("id", "poweredlawnmower")
			.addClass("prompt")
			.text("Fancy Battery-powered Lawnmower".toUpperCase())
			.appendTo($prompt)
			.on("click", purchasePoweredLawnmower);

		const $students = $("<h3>")
			.attr("id", "students")
			.addClass("prompt")
			.text("Hiring Team of Starving Students".toUpperCase())
			.appendTo($prompt)
			.on("click", hireStudents);
	}
};

const dailyChoice = () => {
	clearDiv();
	let dinner = restaurant[Math.floor(Math.random() * restaurant.length)];
	user.wallet = user.wallet - dinner.amount;
	const $night = $("<div>")
		.addClass("welcome")
		.text(
			`You were hungry and had to spend ${dinner.amount} at ${dinner.name} and your wallet has $${user.wallet}`
		)
		.appendTo(".maingame");
	const $prompt = $("<div>").addClass("questions").appendTo(".maingame");

	const $yes = $("<h3>")
		.attr("id", "WakeUp")
		.addClass("prompt")
		.text("WakeUP".toUpperCase())
		.appendTo($prompt)
		.on("click", dailyEarning);
	$("#daysplayed h3").text(`You have played ${user.daysPlayed} days`);
	// landscaper();
};

const dailyEarning = () => {
	clearDiv();
	$toolRender();
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
	const $userProgress = $("<div>")
		.addClass("welcome")
		.text("Do you want to go sleep and work tomorrow or do you want to quit?")
		.appendTo(".maingame");
	const $prompt = $("<div>").addClass("questions").appendTo(".maingame");

	const $yes = $("<h3>")
		.attr("id", "sleep")
		.addClass("prompt")
		.text("sleep".toUpperCase())
		.appendTo($prompt)
		.on("click", dailyChoice);

	const $no = $("<h3>")
		.attr("id", "quit")
		.addClass("prompt")
		.text("quit".toUpperCase())
		.appendTo($prompt)
		.on("click", startOver);
	user.wallet = user.wallet.toFixed(2);
	user.daysPlayed += 1;
	$("#wallet h3").text(`Your wallet  has $${user.wallet}`.toUpperCase());

	$("#daysplayed h3").text(`You have played ${user.daysPlayed} days`);
	$("#sleep").on("click", dailyChoice);
};
const startOver = () => {
	clearDiv();
	landscaper();
};
const startGame = () => {
	dailyEarning();
};
const buyScissors = () => {
	purchaseScissors();
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
	//	$("#yes").on("click", purchaseLawnmower);
	$("#yes").on("click", startGame);

	$("#no").on("click", dontStartGame);

	$("#checkwallet").on("click", checkWallet);

	$("#scissors").on("click", purchaseScissors);
	//$("#lawnmower").on("click");
	//	$("#poweredlawnmower").on("click");
	//$("#students").on("click");
});
