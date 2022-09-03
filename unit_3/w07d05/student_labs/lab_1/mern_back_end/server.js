const express = require("express");
const mongoose = require("mongoose");
const schema = require("./models/schema.js");
const cors = require("cors");
const app = express();

app.use(express.json()); //use .json(), not .urlencoded()
app.use(cors());

app.post("/dealership", (req, res) => {
	schema.create(req.body, (err, createdCar) => {
		res.json(createdCar); //.json() will send proper headers in response so client knows it's json coming back
	});
});

app.get("/dealership", (req, res) => {
	schema.find({}, (err, foundCars) => {
		res.json(foundCars);
	});
});

app.get("/dealership/:id", (req, res) => {
	schema.findById(req.params.id, (err, findCars) => {
		res.json(findCars);
	});
});

app.delete("/dealership/:id", (req, res) => {
	schema.findByIdAndRemove(req.params.id, (err, deletedCar) => {
		res.json(deletedCar);
	});
});

app.put("/dealership/:id", (req, res) => {
	schema.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedCar) => {
			res.json(updatedCar);
		}
	);
});

mongoose.connect("mongodb://127.0.0.1/carDealership");
mongoose.connection.once("open", () => {
	console.log("connected to mongod...");
});
app.listen(3000, () => {
	console.log("listening...");
});
