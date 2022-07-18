// An object can be created with figure brackets {… } with an optional list of properties.

// A property is a “key: value” pair, where key is a string(also called a “property name”), and value can be anything.

// const me = {
// 	firstName: "Sami",
// 	lastName: "Sipahi",
// 	age: 29,
// 	email: "samerunet@gmail.com",
// };
// console.log(me);

// const fancyGreeting = (a) => {
// 	console.log(`Greetings, ${a.firstName} ${a.lastName}`);
// };

// console.log(fancyGreeting(me));

// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasm or ghost or something"
//  }

// console.log(monster.name)

// monster.type = "creature"
// monster.age = 6

// console.log(monster.type + "  " + monster.age)

// const adventurer = {
// 	name: "Link",
// 	hitpoints: 40,
// 	damage: 5,
// };

// const ogre = {
// 	name: "Ganon",
// 	hitpoints: 50,
// 	damage: 5,
// };

// let monsterPick = prompt("Do you want to be Adventurer or Ogre?");
// monsterPick = monsterPick.toUpperCase();

// const game = () => {
// 	if (monsterPick === "ADVENTURER") {
// 		return (ogre.hitpoints -= adventurer.damage);
// 		console.log(`${monsterPick} has caused damage to ${ogre.hitpoints}`);
// 	} else if (monsterPick === "OGRE") {
// 		return (adventurer.hitpoints -=  ogre.damage);
// 		console.log(`${monsterPick} caused damage to ${adventurer.hitpoints}`);
// 	}
// };

// game();

// const cat1 = {
// 	name: "Mama cat",
// 	breed: "tiger",
// 	age: 35,
// };

// console.log(cat1.age);
// console.log(cat1.breed);

// const cat2 = {
// 	name: "Papa Cat",
// 	breed: "tiger",
// 	age: 40,
// };

// const combineCats = (mama, papa) => {
// 	return {
// 		name: mama.name + papa.name,
// 		age: 1,
// 		breed: mama.breed + papa.breed,
// 	};
// };

// console.log(combineCats(cat1, cat2));

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// console.log(
// 	combineCats(
// 		combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
// 		combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
// 	)
// );
