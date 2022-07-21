const setup = {
    desk: {
        shape: "l-desk",
        standing: true,
        color: "black",
        brand: "eureka ergonomics"
    },
    screens: 2,
    mouse: {
        brand: "logitech",
        type: "bluetooth",
        rgb: true
    }
}

setup.screens = 3

setup.desk.clutter = ['smoothie', 'headphones', 'misc pens', 'chapstick', 'coffee mug']

// setup.desk.clutter.forEach((item, i) => {
//     console.log(item)
// })

setup.myComputer = {
    brand: "apple",
    year: "2019",
    refurbished: true,
    screenSize: 13,
    os: "i can't remember"
}

//console.log(setup)

// console.log(setup.desk.clutter[1])


const books = [
    {
        title: 'Pragmatic Programmer',
        author: 'David Thomas + Andrew Hunt'
    },
    {
        title: 'Clean Code',
        author: 'Robert Martin'
    },
    {
        title: 'You Don\'t Know JS',
        author: 'Kyle Simpson'
    }
]

// for (let i = 0; i < books.length; i++) {
//     console.log(`${books[i].title} by ${books[i].author}`) 
// }

// books.forEach((item, i) => {
//     console.log(`${books[i].title} by ${books[i].author}`)
// })

const hero = {
    name: "Jesse",
    hitPoints: 50,
    attack: 10,
    attackEnemy: (enemy) => {
        enemy.hitPoints -= hero.attack
        console.log(`${enemy.name} has bit attacked, they now have ${enemy.hitPoints} health left`)
    }
}

const goblin = {
    name: "Bad Goblin Guy",
    hitPoints: 20,
    attack: 5,
    attackEnemy: (enemy) => {
        enemy.hitPoints -= goblin.attack
        console.log(`${enemy.name} has bit attacked, they now have ${enemy.hitPoints} health left`)
    }
}



const battle = (p1, p2) => {
    let turn = 1
    while (p1.hitPoints > 0 && p2.hitPoints > 0) {
        if ( turn % 2 === 1) {
            p1.attackEnemy(p2)
        } else if (turn % 2 === 0) {
            p2.attackEnemy(p1)
        }
        turn += 1
    }
}

battle(hero, goblin)