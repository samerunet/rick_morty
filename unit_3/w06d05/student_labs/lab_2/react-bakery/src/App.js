import {useState} from 'react'
import './App.css'

const App = () => {
  
  const ovens = [
    {
      name: 'No Bake',
      revenue: 1,
      nextOven: 'EZ Bake',
      upgradeCost: 5
    },
    {
      name: 'EZ Bake',
      revenue: 5,
      nextOven: 'Toaster',
      upgradeCost: 25
    },
    {
      name: 'Toaster',
      revenue: 50,
      nextOven: 'Convection',
      upgradeCost: 250
    },
    {
      name: 'Convection',
      revenue: 100,
      nextOven: 'Factory',
      upgradeCost: 500
    },
    {
      name: 'Factory',
      revenue: 250,
      nextOven: 'Earn $1000 to win the game!',
      upgradeCost: null
    },
  ]






// BAKERY GAME

// ACTORS
  // The 5 ovens

// ACTIONS
  // One day's worth of baking
  // Upgrade to new oven
  // Did I win?
  // See those changes in the browser


  
  const [money, setMoney] = useState(0)
  const [oven, setOven] = useState(ovens[0])
  const [currentOvenIndex, setCurrentOvenIndex] = useState(0)
  const [turns, setTurns] = useState(1)
  
  const checkWin = () => {
    if (money + oven.revenue >= 1000 && oven.name === 'Factory') {
      alert(`You win! Click the "start game / reset game" button to play again!`)
    }
  }

  const bake = () => {
    setMoney(money + oven.revenue)
    setTurns(turns + 1)
  }

  const statusUpdate = () => {
    if (oven.name === 'Factory') {
      alert(`You earned $${oven.revenue} using your ${oven.name} oven today. You now have $${money + oven.revenue}. Earn $1000 to win the game!`)
    } else {
      alert(`You earned $${oven.revenue} using your ${oven.name} oven today. You now have $${money + oven.revenue}. Upgrade available at $${oven.upgradeCost}.`)
    }
    if(oven.name !== 'Factory' && money + oven.revenue >= oven.upgradeCost) {
      alert(`You have earned enough to upgrade to the ${oven.nextOven} oven! Click the upgrade button to buy it!`)
    }
    checkWin()
  }

  const gameTurn = () => {
    alert(`It is turn #${turns}. You currently have $${money} and are using the ${oven.name} oven.`)
    bake()
    statusUpdate()
  }

  const upgrade = () => {
    if (oven.name === 'Factory') {
      alert(`You cannot upgrade at this time.`)
    } else if (money >= oven.upgradeCost && oven !== ovens[4]) {
      alert(`You upgraded to the ${oven.nextOven} oven! You will now earn $${ovens[currentOvenIndex + 1].revenue} per turn. You now have $${money - oven.upgradeCost}.`)
      setMoney(money - oven.upgradeCost)
      setOven(ovens[currentOvenIndex + 1])
      setCurrentOvenIndex(currentOvenIndex + 1)
    } else {
      alert(`You cannot upgrade at this time.`)
    }
  }

  let startGame = () => {
    alert('Welcome to React Bakery! You begin with $0, and the only product you can make is no bake pudding, which you sell for $1 per turn. Earn enough to upgrade to an oven and earn more money. The game ends when you have earned $1000 and own a Factory oven.')
    setMoney(0)
    setOven(ovens[0])
    setCurrentOvenIndex(0)
    setTurns(1)

  }

  return (
    <div className='full-app'>
      <header>
        <h1>React Bakery!</h1>
        <button onClick={startGame}>Start Game / Reset Game</button>
      </header>
      <article>
        <h2>Game Status Will Go Here</h2>
        <ul>
          <li>Money: ${money}</li>
          <li>Current Oven Type: {oven.name}</li>
          <li>Current Revenue Per Turn: {oven.revenue}</li>
          <li>Next Oven Type: {oven.nextOven}</li>
          <li>Upgrade Cost: ${oven.upgradeCost}</li>
          <li>Number of Turns Elapsed: {turns - 1}</li>
        </ul>
      </article>

      <div className="buttons">
        <button onClick={gameTurn}>Bake</button>
        <button onClick={upgrade}>Upgrade?</button>
      </div>
    </div>


  )
}

export default App;