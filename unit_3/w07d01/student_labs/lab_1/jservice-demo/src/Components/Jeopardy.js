import React, { useState } from 'react'

const Jeopardy = (props) => {
   const [answer, setQuestion] = useState(false)
   const [score, setScore] = useState(0)



    return (
<div>
        
        <button className ="score1" onClick = {() => setScore(score + props.jeopardy.value)}>Increase</button>
        <button className ="score2" onClick = {() => setScore(score - props.jeopardy.value)}>Decrease</button>
        <button className ="score3" onClick = {() => setScore(0)}>Reset</button>
        <h1 className ="score">Score: {score}</h1>
        <h2>Category is : {props.jeopardy.category.title}</h2>
        <h2>Question:</h2>
        <h2>{props.jeopardy.question}</h2>
        <h3 className = "score">Points:{props.jeopardy.value} </h3>
    
        <button className ="get-question" onClick={()=>setQuestion(s => !s)} >Reveal the Question</button>
       
        {answer ? <h2>{props.jeopardy.answer}</h2>  : ""}
        
    


</div>

    )
}

export default Jeopardy