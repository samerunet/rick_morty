// verbal qs
//
// 1. What is the difference between a **parameter** and an **argument**?
// 2. Within a function, what is the difference between **return** and **console.log**?

// 1 parameter is defined in the function as a name inside ()
// argument is defined as the actual value and assigned to parameter

// 2.  in the function, return is assigned to return value,  when the console.log
// only prints the outcome and does not store it

// palindrome

// create function
// assign parameter
// uppercase parameter
// split parameter
// reverse parameter
// compare within if statement if every letter of the word matches
// return true or false
// console.log result

// const checkPalindrome = (word) => {
// 	word = word.toUpperCase();
// 	let wordMutate = word.toUpperCase().split("").reverse().join("");

// 	// return word === wordMutate ? true : false; // another way of using the if statement
// 	if (word === wordMutate) {
// 		return true;
// 	} else if (word !== wordMutate) {
// 		return false;
// 	}
// };

// console.log(checkPalindrome("potato"));
// console.log(checkPalindrome("RaceCar"));

// sum array

// const sumArray = (numbers) => {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//         console.log(i)
//     }
//     return sum
// }

//  console.log(sumArray([1, 2, 3, 4, 5, 6]))

// console.log(sum);

//prime numbers

// const primeNumber = 0;

// const checkPrime = (num) => {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) return false;
// 	}
// 	return num > 1;
// };

// console.log(checkPrime(primeNumber));

// printPrime(primeNumber);

// const printPrime = (num) => {
// 	let a = [];
// 	for (let i = 2; i <= num; i ++) {
// 		if (checkPrime(i)) {
// 			a.push(i);
// 		}
// 	}
// 	console.log(a);
// };

// rock paper scissors
// let move = ["Rock", "Paper", "Scissors"];
// const randomMove = () => {
// 	let random = Math.floor(Math.random() * move.length);
// 	return random;
// };

// let computersMove = randomMove();
// let usersMove = randomMove();
// console.log(`Computer picked ${move[computersMove]}`);
// console.log(`User picked ${move[usersMove]}`);

// const rockPaperScissors = () => {
// 	if (computersMove === usersMove) {
// 		return "It's a tie";
// 	} else if (computersMove === 0 && usersMove === 1) {
// 		return "User wins";
// 	} else if (computersMove === 0 && usersMove === 2) {
// 		return "Computer wins";
// 	} else if (computersMove === 1 && usersMove === 2) {
// 		return "User wins";
// 	} else if (computersMove === 2 && usersMove === 0) {
// 		return "User wins";
// 	} else if (computersMove === 1 && usersMove === 0) {
// 		return "Computer wins";
// 	} else if (computersMove === 2 && usersMove === 1) {
// 		return "Computer wins";
// 	}
// };

// console.log(rockPaperScissors());
// => computer chose rock
// => user chose paper
// => paper beats rock, user wins!
