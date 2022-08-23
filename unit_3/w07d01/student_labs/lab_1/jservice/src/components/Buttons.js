import { useState, useEffect } from "react";

const Buttons = (props) => {
	const [score, setScore] = useState(0);
	const [answer, setAnswers] = useState(false);
	const decreaseValue = () => {
		setScore(score - props.jeopardy.value);
	};

	return (
		<div className='buttons'>
			<h2>Score: {props.score}</h2>
			<button
				type='button'
				onClick={() => setScore(score + props.jeopardy.value)}
			>
				Increase
			</button>
			<button type='button' onClick={decreaseValue}>
				Decrease
			</button>
			<button type='button'>Reset</button>
			<h3> Poinst: {props.jeopardy.value}</h3>
			<h3> Questions: {props.jeopardy.question}</h3>
			<h3> Answer: {props.jeopardy.answer}</h3>
			<button onClick={() => setAnswers((s) => !s)}>Show Answer</button>
			{answer ? <h3>Answer : {props.jeopardy.answer}</h3> : ""}
		</div>
	);
};

export default Buttons;
