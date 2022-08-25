import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";

const App = () => {
	const [newDescription, setNewDescription] = useState("");
	const [newComplete, setNewComplete] = useState(false);
	const [todos, setTodos] = useState([]);

	const handleNewDescriptionChange = (event) => {
		setNewDescription(event.target.value);
	};
	const handleNewCompleteChange = (event) => {
		setNewComplete(event.target.checked);
	};
	const handleNewTodoFormSubmit = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:3000/todos", {
				description: newDescription,
				complete: newComplete,
			})
			.then(() => {
				axios.get("http://localhost:3000/todos").then((response) => {
					setTodos(response.data);
				});
			});
	};

	useEffect(() => {
		axios.get("http://localhost:3000/todos").then((response) => {
			setTodos(response.data);
		});
	}, []);

	const handleDelete = (todoData) => {
		axios.delete(`http://localhost:3000/todos/${todoData._id}`).then(() => {
			axios.get("http://localhost:3000/todos").then((response) => {
				setTodos(response.data);
			});
		});
	};
	const handleToggleComplete = (todoData) => {
		axios
			.put(`http://localhost:3000/todos/${todoData._id}`, {
				description: todoData.description,
				complete: !todoData.complete,
			})
			.then(() => {
				axios.get("http://localhost:3000/todos").then((response) => {
					setTodos(response.data);
				});
			});
	};

	return (
		<main>
			<h1>Todos List</h1>
			<section>
				<h2>Create a Todo</h2>
				<form onSubmit={handleNewTodoFormSubmit}>
					Description:{" "}
					<input type='text' onChange={handleNewDescriptionChange} />
					<br />
					Is Complete:{" "}
					<input type='checkbox' onChange={handleNewCompleteChange} />
					<br />
					<br />
					<input type='submit' value='Create To Do' />
				</form>
			</section>
			<section>
				<h2>Todos</h2>
				<ul>
					{todos.map((todo) => {
						return (
							<li
								key={todo._id}
								onClick={(event) => {
									handleToggleComplete(todo);
								}}
							>
								{todo.complete ? (
									<strike>{todo.description}</strike>
								) : (
									todo.description
								)}
								<button
									onClick={(event) => {
										handleDelete(todo);
									}}
								>
									Delete
								</button>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
};

export default App;
