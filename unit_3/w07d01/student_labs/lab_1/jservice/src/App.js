import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Buttons from "./components/Buttons";

function App() {
	const [score, setScore] = useState(0);
	let [jeopardy, setCharacters] = useState([]);
	let [answers, setAnswers] = useState([]);

	let gameUp = () => {
		setScore(score + 1);
	};
	let gameDown = () => {
		setScore(score + 1);
	};
	const getCharacters = () => {
		axios.get("http://jservice.io/api/random").then((response) => {
			setCharacters(response.data[0]);
			// console.log(response.data[0]);
		});
	};
	useEffect(() => {
		getCharacters();
	}, []);
	return (
		<div className='container'>
			<h1>WELCOME TO JEOPARDY!</h1>
			<div className='score'>
				<h1>Score</h1>
				<Buttons />
			</div>
			<h1>Let's Play</h1>
			<button className='button' onClick={getCharacters}>
				Get Question
			</button>
			{jeopardy.map((jeopardy) => {
				return <Buttons jeopardy={jeopardy} />;
			})}
			<div>Category: </div>
			<div>
				<h1>Points: </h1>
			</div>
			<div>
				<h1>Answer: </h1>
			</div>
			<div></div>
		</div>
	);
}

export default App;
