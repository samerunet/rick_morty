import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Jeopardy from './Components/Jeopardy'
function App() {
  const [jeopardy, setJeopardy] = useState([])
 
  const getJeopardy =()=>{
  
  axios.get('http://jservice.io/api/random').then((response)=>{
   
    setJeopardy(response.data)
  })
}
useEffect(()=>{
  getJeopardy()
}, [])
  return (
  <>
  <h1>Jeopardy</h1>
  <button onClick={getJeopardy}> Get Question</button>


      <div key={jeopardy.id}>
         
      <Jeopardy jeopardy = {jeopardy}/>
      </div>
    
  </>
    
  );
}

export default App;