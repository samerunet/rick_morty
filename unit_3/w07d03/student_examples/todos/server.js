const express = require("express");
const mongoose = require("mongoose");
const Todos = require("./models/todos.js");
const cors = require("cors");
const app = express();

app.use(express.json()); //use .json(), not .urlencoded()
app.use(cors());
app.post("/todos", (req, res) => {
	Todos.create(req.body, (err, createdTodo) => {
		res.json(createdTodo); //.json() will send proper headers in response so client knows it's json coming back
	});
});
app.get("/todos", (req, res) => {
	Todos.find({}, (err, foundTodos) => {
		res.json(foundTodos);
	});
});

app.delete("/todos/:id", (req, res) => {
	Todos.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
		res.json(deletedTodo);
	});
});
app.put("/todos/:id", (req, res) => {
	Todos.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedTodo) => {
			res.json(updatedTodo);
		}
	);
});

mongoose.connect("mongodb://127.0.0.1/merncrud");
mongoose.connection.once("open", () => {
	console.log("connected to mongod...");
});
app.listen(3000, () => {
	console.log("listening...");
});
