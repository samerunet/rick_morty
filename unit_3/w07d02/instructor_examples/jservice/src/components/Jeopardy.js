import React, {useState} from 'react';

const Jeopardy =(props)=>{
    const [score, setScore] = useState(0)
   
    const increaseValue =()=>{
        setScore(score + props.jeopardy.value)
    }

    const decreaseValue =()=>{
        setScore(score - props.jeopardy.value)
    }
    

    return(
        <>
        <h2>Score: {score} </h2>
        <button className ="score1" onClick = {increaseValue}>Increase</button>
        <button className ="score2" onClick = {decreaseValue}>Decrease</button>
        <button className ="score3" onClick = {() => setScore(0)}>Reset</button>
        <h2>Category is : {props.jeopardy.category.title}</h2>
        <h3 className = "score">Points: {props.jeopardy.value} </h3>
        <h3>Question : {props.jeopardy.question}</h3>
        <button className ="get-question" onClick={()=>props.setAnswer(true)}>Show Answer</button>
        { props.answer ?
        <h3>Answer : {props.jeopardy.answer}</h3> : ""
        }
        </>
    )
}

export default Jeopardy