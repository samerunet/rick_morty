// SECTION 1
    // Don't Repeat Yourself
    // Important to avoid repition & to keep our code readable, maintainable, and manageable
    // DRY code tools: loops

    // const - when a variable doesn't change
    // let - when we want the variable to potentially change
    // var - outdated, don't use but you may see it
    
// SECTION 2
// const a = 4
// const b = 53
// const c = 57
// const d = 16
// const e = 'Kelvin'
// const f = false

// console.log(c > d)
// let Name = "Name"
// console.log('Name' === Name)
// console.log(48 == "48")
// = is the assignment operator
// == is the loose comparison operator
// === is the strict comparison operator
    // also checks for data type in addition to the value



// SECTION 3



let letters = ''
let i = 0

while (i < 10) {
    if (i % 2 !== 0) {
        letters += 'a'
    } else {
        letters += 'A'
    }
    console.log(letters)
    i++
}


// console.log(letters)







// SECTION 4

// for (let i = 0; i < 1000; i++) {
//     console.log(i)
// }

// for (let i = 999; i >= -50; i--) {
//     console.log(i)
// }


// The 