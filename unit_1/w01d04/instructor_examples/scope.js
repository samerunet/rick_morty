// const exampleFunction = () => {
//   // num is locally scoped to the exampleFunction
//   const num = 100
//   console.log(num * num)
// }
// // globally scoped to the whole file
// const num = 100
//
// console.log(num)

// const item = 'spicy meatball'
//
// const exampleFunction = () => {
//   console.log(`${item} within the function`)
// }
//
// exampleFunction()

// const setItem = () => {
//   const item = 'spicy meatball'
//   return item
// }
//
// const getItem = () => {
//   return item
// }
//
// console.log(getItem())

// const returnName = () => {
//   return 'Brendan'
// }
//
// const returnGreeting = () => {
//   return `oh hai ${returnName()}`
// }
//
// console.log(returnGreeting())

// // GOOD SCOPING
// {
//   let item = 'spicy meatball'
// }
//
// console.log(item)
//
// // BAD SCOPING
// {
//   var item = 'spicy meatball'
// }
//
// console.log(item)




// for (let i = 0; i < 100; i++) {
//   console.log(`Inside the block: ${i}`)
// }
//
// console.log(`Outside the block: ${i}`)

// let age = 21
// let message = ''
//
// if (age < 21) {
//   message = 'You cannot buy the beer'
// } else {
//   message = 'You can buy the beer'
//   age = 22
// }
//
// console.log(message)
// console.log(age)

const words = 'thats a...'

{

  {

    const item = 'spicy meatball'
    const start = 'mama mia!'
    {
      {
        {
          console.log(words)
          console.log(item)
          {
            console.log(start)
          }
        }
      }
    }
  }
}
