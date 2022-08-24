import './App.css';
import axios from "axios"
import {useState, useEffect} from 'react'
import Jeopardy from './components/Jeopardy'

function App() {
  //====HOOKS====//
  const [jeopardy, setJeopardy] = useState([])
      //___state to toggle the answer___//
  const[answer, setAnswer] = useState(false)

  //====FETCH THE DATA====//
  const getJeopardyData =()=>{
  axios.get('http://jservice.io/api/random').then((res)=>{
    setJeopardy(res.data)
    setAnswer(false)
  })
  
  }

useEffect(()=>{
  getJeopardyData()
}, [])

  return (
  <>
  <h1>Welcome to Jeopardy!</h1>
  <h2>Let's Play!</h2>
  <button className="start" onClick={getJeopardyData}>Get Question</button>
    {jeopardy.map((jeopardy)=>{
      return(
        <>
        < Jeopardy jeopardy={jeopardy} answer={answer} setAnswer={setAnswer}/>
        </>
      )
    })}

  </>
  );
}

export default App;
