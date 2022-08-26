import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";
import { Schema, SchemaTypes } from "mongoose";

function App() {
	const [newName, setNewName] = useState("");
	const [newBreed, setNewBreed] = useState("");
	const [newImage, setNewImage] = useState("");
	const [newAdopted, setNewAdopted] = useState(false);
	const [animal, setAnimal] = useState([]);

	const [updateName, setUpdateName] = useState("");
	const [updateBreed, setUpdateBreed] = useState("");
	const [updateImage, setUpdateImage] = useState("");
	const [updateAdopted, setUpdateAdopted] = useState(false);


  
	const handleNewNameChange = (event) => {
		setNewName(event.target.value);
	};
	const handleUpdateNameChange = (event) => {
		setUpdateName(event.target.value);
	};
	const handleNewBreedChange = (event) => {
		setNewBreed(event.target.value);
	};
	const handleUpdateBreedChange = (event) => {
		setUpdateBreed(event.target.value);
	};

	const handleNewImageChange = (event) => {
		setNewImage(event.target.value);
	};
	const handleUpdateImageChange = (event) => {
		setUpdateImage(event.target.value);
	};
	const handleNewAdoptedChange = (event) => {
		setNewAdopted(event.target.checked);
	};

	const handleUpdateAdoptedChange = (event) => {
		setUpdateAdopted(event.target.checked);
	};

	const handleNewAnimalFormSubmit = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:3000/animal", {
				name: newName,
				breed: newBreed,
				image: newImage,
				adopted: newAdopted,
			})
			.then(() => {
				axios.get("http://localhost:3000/animal").then((response) => {
					setAnimal(response.data);
				});
			});
	};

	useEffect(() => {
		axios.get("http://localhost:3000/animal").then((response) => {
			setAnimal(response.data);
		});
	}, []);

	const handleDelete = (dogDelete) => {
		axios.delete(`http://localhost:3000/animal/${dogDelete._id}`).then(() => {
			axios.get("http://localhost:3000/animal").then((response) => {
				setAnimal(response.data);
			});
		});
	};

	const handleUpdateDescription = (animalData) => {
		axios
			.put(`http://localhost:3000/animal/${animalData._id}`, {
				name: updateName,
				breed: updateBreed,
				image: updateImage,
				adopted: updateAdopted,
			})
			.then(() => {
				axios.get("http://localhost:3000/animal").then((response) => {
					setAnimal(response.data);
				});
			});
	};

	return (
		<div>
			<div className='container'>
				<button>Show Available for adoption</button>
				<button>Edit Available for adoption</button>
			</div>
			<section>
				<h1>Add animal to the shelter</h1>
				<form onSubmit={handleNewAnimalFormSubmit}>
					name: <input type='text' onChange={handleNewNameChange} />
					<br />
					breed: <input type='text' onChange={handleNewBreedChange} />
					<br />
					image: <input type='text' onChange={handleNewImageChange} />
					<br />
					adopted: <input type='checkbox' onChange={handleNewAdoptedChange} />
					<br />
					<input type='submit' value='Add new animal' />
				</form>
			</section>
			<div className='dogContainer'>
				<ul>
					{animal.map((dog) => {
						return (
							<div div className='dogItem'>
								<li key={dog._id}>
									<a href='{dog._id}'>{dog.name}</a>
									<br />
									{dog.breed}
									<br />
									<img src={dog.image} />
									<br />
									{dog.adopted}
									<br />
									<button
										onClick={(event) => {
											handleDelete(dog);
										}}
									>
										Delete
									</button>

									<form
										onSubmit={() => {
											handleUpdateDescription(dog);
										}}
									>
										name:
										<input type='text' onChange={handleUpdateNameChange} />
										<br />
										breed:
										<input type='text' onChange={handleUpdateBreedChange} />
										<br />
										image:
										<input type='text' onChange={handleUpdateImageChange} />
										<br />
										adopted:
										<input
											type='checkbox'
											onChange={handleUpdateAdoptedChange}
										/>
										<br />
										<input type='submit' value='Edit animal' />
									</form>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
