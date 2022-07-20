const prompt = require("prompt-sync")();

const generalGame = () => {
	const battleShip = {
		name: "USS Schwarzenegger",
		hull: 20,
		firepower: 5,
		accuracy: 0.7,
	};

	const alien = [
		{
			name: "Alien1",
			hull: 3,
			firepower: 2,
			accuracy: 0.6,
		},
		{
			name: "Alien2",
			hull: 3,
			firepower: 4,
			accuracy: 0.7,
		},
		{
			name: "Alien3",
			hull: 5,
			firepower: 3,
			accuracy: 0.8,
		},
		{
			name: "Alien4",
			hull: 4,
			firepower: 3,
			accuracy: 0.7,
		},
		{
			name: "Alien5",
			hull: 5,
			firepower: 3.5,
			accuracy: 0.7,
		},
		{
			name: "Alien6",
			hull: 6,
			firepower: 4,
			accuracy: 0.8,
		},
	];

	console.log(alien);

	const repeatGame = () => {
		if (alien.length === 0) {
			console.log(`${battleShip.name} has defeated all aliens`);
			let playAgain = prompt(`${battleShip.name} do you want to play again?`);
			playAgain = playAgain.toUpperCase();
			if (playAgain === "YES") {
				return generalGame();
			} else {
				console.log(`Have a nice day`);
			}
		} else {
			battle();
		}
	};

	// enemy will randomly select alien ship

	const battle = () => {
		const enemyRandom = () => {
			return alien[Math.floor(Math.random() * alien.length)];
		};



        
		let enemy = enemyRandom();

		const enemyAttack = () => {
			battleShip.hull -= enemy.firepower;
			console.log(
				`The Battle Ship has been damaged and the hull is ${battleShip.hull}`
			);
			let battleShipDecission = prompt("Do you want to heal or attack?");

			battleShipDecission = battleShipDecission.toUpperCase();

			if (battleShipDecission === "ATTACK") {
				repeatGame();
			} else if (battleShipDecission === "HEAL") {
				battleShip.hull = battleShip.hull + 2;
				repeatGame();
			} else {
				battleShipDecission = prompt("Sorry, i didn't understand your input");
			}
		};

		console.log(enemy.name);
		if (battleShip.hull > 1) {
			console.log(`${battleShip.name} is aiming to hit ${enemy.name}`);

			if (Math.random() < enemy.accuracy) {
				enemy.hull -= battleShip.firepower;
				console.log(
					`${enemy.name} has been damaged by ${battleShip.name} and hull ${enemy.hull}`
				);
				if (enemy.hull <= 0) {
					for (let a = 0; a < alien.length; a++) {
						if (alien[a] === enemy) {
							alien.splice(a, 1);

							console.log(alien);
						}
					}
					repeatGame();
				} else {
					enemyAttack();
				}
			} else {
				console.log(`${battleShip.name} has missed`);
				enemyAttack();
			}
		} else {
			console.log(`${battleShip.name} has been defeated by  ${enemy.name}`);
		}
	};

	battle();
};

generalGame();
/* 


1 : to create battleShip            completed 

2: to create alienShip with object (select alienShip using math.random) completed

3: make the game of a battle (battleShip hits the alienShip or vice versa)  completed

4: check hull of alienShip and battleShip completed 

a) if the battleShip has no remaining then game is over and battleShip dead completed

 b) if alienShip has remaining alienShips left then give option to attack or retreat  completed

 c) if alienShip has no remaining then game ended ( give option to start again ) completed

  


5:give option to retreat

    a) if battleShip wants to retreat hill the hull by 2 points 

    b) ask battle ship if wants to attack again 

*/
