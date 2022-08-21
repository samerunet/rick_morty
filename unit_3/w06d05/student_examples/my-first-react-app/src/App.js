import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const App = () => {
	const [name, setName] = useState("Brendan");
	const changeName = () => {
		setName("Matt");
	};

	return (
		<div>
			<h1>My First React App</h1>
			<h3>{name}</h3>
			<button onClick={changeName}>Click Me!</button>
		</div>
	);
};

export default App;
