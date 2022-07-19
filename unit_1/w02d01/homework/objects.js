const prompt = require("prompt-sync")();

// const setup = {
// 	mouse: "MambaBlack",
// 	screens: 3,
// 	laptopSize: 14,
// 	type: "MacBook Pro",
// 	year: 2022,
// 	notebook: 3,
// 	mousePad: "corsair",
// 	pencil: 1,
// 	keyboard: "Corsair",
// };

// setup.screens = 4;

// setup.clutter = ["AirPods", "Water", "Pillow", "Charging cables", "Fan"];

// console.log(setup.clutter);

// setup.computer = {
// 	screenSize: 14,
// 	OS: "MacOS Monterey",
// };

// console.log(setup.computer);

// setup.computer.files = ["Dev", "homework", "objects.js"];

// console.log(setup);

// console.log(setup.computer.files);

// const books = [
// 	{ title: "Pragmatic Programmer", author: "David Thomas + Andrew Hunt" },
// 	{ title: "Clean Code", author: "Robert Martin" },
// 	{ title: "You Don't Know JS", author: "Kyle Simpson" },
// ];
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[2]);
// for (i = 0; i < books.length; i++) {
// 	console.log(books[i].title);
// 	console.log(books[i].author);
// }

const hero = {
	name: "Soultaker",
	hitPoints: 50,
	attack: 10,
	enemyAttack: (enemy) => {
		enemy.hitPoints -= hero.attack;
	},
	heal: () => {
		hero.hitPoints++;
	},
};

const goblin = {
	name: "Destroyer",
	hitPoints: 20,
	attack: 5,
	enemyAttack1: (enemy) => {
		enemy.hitPoints -= goblin.attack;
	},
	heal: () => {
		goblin.hitPoints++;
	},
};
hero.hitPoints -= goblin.attack;

console.log(`Hero hitPoints = ${hero.hitPoints}`);

goblin.hitPoints -= hero.attack;

console.log(`Goblins hitPoints = ${goblin.hitPoints}`);

goblin.hitPoints = 10;

let player = prompt("Choose a player Soultaker or Destroyer   ");
player = player.toLowerCase();
console.log(player);

if (player === "soultaker") {
	return console.log(`Your choice of hero Soultaker`), game(hero, goblin);
} else {
	return console.log(`Your choice of hero Destroyer`), game(goblin, hero);
}

const game = (player, enemy) => {
	let attackChoice = prompt("Do you want to attack or heal?");

	attackChoice = attackChoice.toUpperCase();

	console.log(`Your choice was ${attackChoice}`);
	// while (hero.hitPoints > 0 && goblin.hitPoints > 0) {
	// 	hero.enemyAttack(goblin);
	// 	goblin.enemyAttack1(hero);
	// }
	if (attackChoice === "ATTACK") {
		return (
			player.enemyAttack(enemy),
			console.log(`${enemy} hitPoints = ${enemy.hitPoints}`)
		);
	} else {
		return (
			player.heal(), console.log(`${player}hitPoints = ${player.hitPoints}`)
		);
	}

	if (enemy.hitPoints > 0) {
		console.log(enemy.hitPoints);
	} else {
		console.log(`${enemy} hitPoints ${enemy.hitPoints} , ${enemy} is dead`);
	}
};
