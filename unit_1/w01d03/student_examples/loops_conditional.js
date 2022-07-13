// for (let i = 0; i <= 10; i+=2) {
// 	console.log(i=i);
// }

// declare sum
// create for loop
// increment sum by 2 from 0
// log sum after every loop
// log sum + sum
let evenSum = 0;
for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		evenSum += i;
	}
}

console.log(evenSum);
