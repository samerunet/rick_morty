//______PALINDROME____// 

 // 1. The split() method takes a pattern and divides a String into an ordered list of substrings by 
 // searching for the pattern, puts these substrings into an array, and returns the array.
// We need split() to turn our string into an array to be able to reverse it (reverse ())
// 2. The join() method creates and returns a new string by concatenating all
// of the elements in an array (or an array-like object), separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator.

// we need join() to turn our reversed array back to string

const checkPalindrome =(str) => {
    let isPalindrome = true
    let strReverse = str.split('').reverse().join('')
    console.log(strReverse)
  
    if(strReverse.toLowerCase() == str.toLowerCase()){
      
      console.log(isPalindrome)
      return isPalindrome
    }else{
      isPalindrome = false
      console.log(isPalindrome)
      return isPalindrome
    }
  }
  
   console.log(checkPalindrome('Radar'))
   console.log(checkPalindrome("Borscht"))
  
  
  //______SUM Array_____//
  //
  let sum = 0
  
  const sumArray = (arr) => {
      for( let i = 0; i < arr.length; i++){
          sum += arr[i]
      }
      console.log(sum)
    }
  sumArray([1, 2, 3, 4, 5, 6])
  
  
  //_____PRIME NUMBERS____//
  
   // A prime number is a whole number greater than 1 whose only factors are 1 and itself.
   // A factor is a whole number that can be divided evenly into another number.
   // The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. 
  
  //STEP 1:
  const prime =(num)=>{
  
    // start with 2  and iterate over a square root of given number
  
   for(let i = 2; i <=Math.sqrt(num); i++) {
     if (num % i === 0) {
       return false
    }else{
      return true
    }
   }
  }
  console.log(prime(5))
  
  //STEP 2:
  
  const printPrimes = (num) =>{
  
    for (let i = 2; i<=num; i++)
    if(prime(i)){
      console.log(i)
    }
  } 
  printPrimes(97)
  
  //_____ROCK & PAPER & SCISSORS_____//
  
  // One of many ways to execute this game
  
  let choices = ['rock', 'paper', 'scissors']
  const randomMove = () =>{
   return randomChoice = choices[Math.floor(Math.random() * choices.length)]
  
  }
  
  const RockPaperScissors = (compMove, usersMove) =>{
  
      if (compMove === usersMove){
        console.log( `Computer chose - ${compMove} and User chose - ${usersMove}. It's a tie!`)
      }else if (compMove === choices[0] && usersMove === choices[1]){
        console.log(`Computer chose - ${compMove} and User chose - ${usersMove}. Paper beats rock!`)
      }else if(compMove === choices[1] && usersMove === choices[2]){
        console.log(`Computer chose - ${compMove} and User chose - ${usersMove}. Scissors beat Paper - User wins`)
      }else if(compMove === choices[2] && usersMove === choices[1]){
        console.log(`Computer chose - ${compMove} and User chose - ${usersMove}. Scissors beat Paper - computer wins`)
      }else if(compMove === choices[2] && usersMove === choices[0]){
        console.log(`Computer chose - ${compMove} and User chose - ${usersMove}.  Paper beats rock!`)
      }
    }
  
  let compMove = randomMove()
  let usersMove = randomMove()
  
  RockPaperScissors(compMove, usersMove)