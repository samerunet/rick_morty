const express = require("express");
const mongoose = require("mongoose");
const schema = require("./models/Schema.js");
const cors = require("cors");
const app = express();

app.use(express.json()); //use .json(), not .urlencoded()
app.use(cors());

app.post("/animal", (req, res) => {
	schema.create(req.body, (err, createdAnimal) => {
		res.json(createdAnimal); //.json() will send proper headers in response so client knows it's json coming back
	});
});

app.get("/animal", (req, res) => {
	schema.find({}, (err, foundAnimals) => {
		res.json(foundAnimals);
	});
});

app.get("/animal/:id", (req, res) => {
	schema.findById(req.params.id, (err, findAnimals) => {
		res.json(findAnimals);
	});
});

app.delete("/animal/:id", (req, res) => {
	schema.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
		res.json(deletedAnimal);
	});
});

app.put("/animal/:id", (req, res) => {
	schema.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedAnimal) => {
			res.json(updatedAnimal);
		}
	);
});

mongoose.connect("mongodb://127.0.0.1/animalcrud");
mongoose.connection.once("open", () => {
	console.log("connected to mongod...");
});
app.listen(3000, () => {
	console.log("listening...");
});
