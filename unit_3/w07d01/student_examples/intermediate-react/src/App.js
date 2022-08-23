import { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
	let [characters, setCharacters] = useState([]);

	const getCharacters = () => {
		axios.get("https://api.disneyapi.dev/characters").then((response) => {
			setCharacters(response.data.data);
		});
	};

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<div>
			{characters.map((character) => {
				return (
					<div>
						<Character character={character} />
					</div>
				);
			})}
		</div>
	);
};

export default App;
