import "./App.css";
import React, { useState } from "react";

const user = {
	username: "",
	wallet: 0,
	tools: "no bake pudding",
};

const tool = [
	{ name: "no bake pudding", price: 0, earn: 1 },
	{ name: "easy bake oven", price: 5, earn: 5 },
	{ name: "old toaster oven", price: 25, earn: 50 },
	{ name: "convection oven", price: 250, earn: 100 },
	{ name: "a factory", price: 500, earn: 250 },
];
const App = () => {
	const [wallet, setWallet] = useState(user.wallet);
	let updateWallet = () => {
		if (user.wallet >= 1000) {
			alert("Wallet is $1000 and you won the game");
		} else {
			switch (user.tools) {
				case "no bake pudding":
					setWallet((user.wallet += tool[0].earn));
					break;
				case "easy bake oven":
					setWallet((user.wallet += tool[1].earn));
					break;
				case "old toaster oven":
					setWallet((user.wallet += tool[2].earn));
					break;
				case "convection oven":
					setWallet((user.wallet += tool[3].earn));
					break;
				case "a factory":
					setWallet((user.wallet += tool[4].earn));
					break;
				default:
					setWallet(user.wallet);
			}
		}
	};
	return (
		<div className='container'>
			<div className='gamelogo'>
				<img
					src='https://i.pinimg.com/originals/b0/48/59/b04859125fdee63f786535ff4749b3b1.jpg'
					alt='Logo'
				/>
			</div>
			<div className='gameinfo'>
				<div id='checkwallet' className='button'>
					<h3>PURCHASE BAKING TOOLS</h3>

					<Tools />
				</div>
				<div id='daysplayed' className='button'>
					<h3>You Played {user.daysPlayed} days</h3>
				</div>
				<div id='wallet' className='button'>
					<h3>YOUR WALLET HAS ${user.wallet}</h3>
				</div>
			</div>

			<div className='game'>
				<div className='tools'>
					<h1 className='toolsTitle'>
						YOU OWE THIS TOOLS:
						<h3>{user.tools}</h3>
					</h1>
				</div>
				<div className='maingame'>
					<div className='welcome'>
						<h4>
							Using your {user.tools}, you can spend the day baking and make{" "}
							{user.tools}. You can do this as much as you want.
						</h4>
						<button className='button' onClick={updateWallet}>
							Bake
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
const Tools = () => {
	const [upgrade, setTool] = useState(user.tools);
	let updateTool = () => {
		if (user.wallet >= 500) {
			setTool((user.wallet -= tool[4].price), (user.tools = tool[4].name));
		} else if (user.wallet >= 250) {
			setTool((user.wallet -= tool[3].price), (user.tools = tool[3].name));
		} else if (user.wallet >= 25) {
			setTool((user.wallet -= tool[2].price), (user.tools = tool[2].name));
		} else if (user.wallet >= 5) {
			setTool((user.wallet -= tool[1].price), (user.tools = tool[1].name));
		}
	};
	return (
		<div>
			<button onClick={updateTool}>Upgrade Tool</button>
		</div>
	);
};

export default App;
