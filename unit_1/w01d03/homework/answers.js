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
// const favMovies = [
// 	"Jaws",
// 	"The Fellowship of the Ring",
// 	"Howl's Moving Castle",
// 	"Django Unchained",
// 	"Cloud Atlas",
// 	"The Usual Suspects",
// 	"Toy Story",
// 	"Conan the Barbarian",
// 	"Titanic",
// 	"Harry Potter",
// 	"Fried Green Tomatoes",
// 	"Volver",
// 	"Oculus",
// 	"Seven",
// 	"Black Panther",
// 	"Harry Potter",
// 	"Imitation of Life",
// 	"Snatch",
// 	"Fast and Furious",
// ];

// console.log(favMovies.indexOf("Titanic"));

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

// console.log(favMovies)

//////////////////////////////
// Where is Waldo//
////////////////////////////////
// const whereIsWaldo = [
// 	["Timmy", "Frank"],
// 	"Eggbert",
// 	["Lucinda", "Jacc", "Neff", "Snoop"],
// 	["Petunia", ["Baked Goods", "Waldo"]],
// ];

// whereIsWaldo.splice(1, 1);

// console.log(whereIsWaldo);

// whereIsWaldo[1][2] = "No One"

// console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
// ////////////////////////////////

// for (let i = 0; i < 20; i++) {
// 	console.log("Love me, pet me! HSSSSSS!")
// }

// let kittenTalk = [
// 	"...human...why you taking pictures of me?...",
// 	"...the catnip made me do it...",
// 	"...why does the red dot always get away...",
// ];
// for (let i = 1; i <= 20; i++) {
// 	if (i % 2 == 0) {
// 		console.log(kittenTalk[Math.floor(Math.random()* 3)])

// 	}
// }

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [
	14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
	17, 12, 71, 18, 15, 12,
];

nums.sort((a, b) => {
	return a - b;
}); //  sort array by increment number
const half = Math.floor(nums.length / 2); // index number of median
const median = nums[half]; // median number
console.log(median); // logs 15 as expected

////////////////////////////////////////////////////////////////

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
