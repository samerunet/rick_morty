////////////////////////////////
// Easy Going
////////////////////////////////
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////
// for (let i = 1; i <= 200; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (let i = 1; i <= 100; i++) {
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		console.log("FizzBuzz");
// 	} else if (i % 3 == 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 == 0) {
// 		console.log("Buzz");
// 	}
// }
////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// plantee[2] += 1;
// wolfy[3] = "Gotham City ";
// dart.push("Hawkins");
// wolfy[0] = "Gameboy";

// console.log(wolfy);
// console.log(plantee);
// console.log(dart);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (const element in ninja) {
// 	console.log(element.toUpperCase());
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
	"Jaws",
	"The Fellowship of the Ring",
	"Howl's Moving Castle",
	"Django Unchained",
	"Cloud Atlas",
	"The Usual Suspects",
	"Toy Story",
	"Conan the Barbarian",
	"Titanic",
	"Harry Potter",
	"Fried Green Tomatoes",
	"Volver",
	"Oculus",
	"Seven",
	"Black Panther",
	"Harry Potter",
	"Imitation of Life",
	"Snatch",
	"Fast and Furious",
];

console.log(favMovies.indexOf("Titanic"));

// favMovies.sort(); // alphabetically sorted

// favMovies.pop();

// favMovies.push("Guardians of the Galaxy");

// favMovies.reverse();

// favMovies.shift();

// favMovies.unshift("Guardians of the Galaxy");

// console.log(favMovies.indexOf("Django Unchained"));
// // adds array element to index 0

// favMovies.splice(15, 1, "Avatar");

// const half = favMovies.slice(Math.floor(favMovies.length / 2)); 

// // doesn't change original arr

// console.log(half);


//////////////////////////////
// Where is Waldo//
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////

// const newArray = [
// 	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
// 	23, 24,
// ];
// function shuffle(array) {
// 	let currentIndex = array.length,
// 		randomIndex;

// 	// While there remain elements to shuffle.
// 	while (currentIndex != 0) {
// 		// Pick a remaining element.
// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex--;

// 		// And swap it with the current element.
// 		[array[currentIndex], array[randomIndex]] = [
// 			array[randomIndex],
// 			array[currentIndex],
// 		];
// 	}

// 	return array;
// }

// shuffle(newArray);

// console.log(newArray);

// const modArray = newArray.sort((a, b) => {
// 	return a - b;
// });
// console.log(modArray); //
