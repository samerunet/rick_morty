// declare initial sum variable

// write a loop that goes from 0 to 10
  //check if the number at the currenrt loop iteration is even or odd
  // if its even add to sum variable
  // if its odd do nothing with it


//log the final sum

let evenSum = 0

for (let i = 1; i <= 10; i++){
  if (i % 2 === 0) {
    // console.log('num is even: ', i)
    evenSum += i
  }
}

console.log(evenSum)
