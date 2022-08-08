const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Fruit = require("./models/fruits.js");

app.use(express.urlencoded({ extended: true }));
app.get("/fruits");
app.get("/fruits/new", (req, res) => {
	res.render("new.ejs");
});

app.post("/fruits", (req, res) => {
	if (req.body.readyToEat === "on") {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}
	Fruit.create(req.body, (error, createdFruit) => {
		res.redirect("/fruits");
	});
});

app.get("/fruits", (req, res) => {
	Fruit.find({}, (error, allFruits) => {
		res.render("index.ejs", {
			fruits: allFruits,
		});
	});
});

app.get("/fruits/:id", (req, res) => {
	Fruit.findById(req.params.id, (err, foundFruit) => {
		res.render("show.ejs", {
			fruit: foundFruit,
		});
	});
});

app.listen(3000, () => {
	console.log("listening on port 3000...");
});

mongoose.connect("mongodb://127.0.0.1/basiccrud", () => {
	console.log("connecting to MongoDB...");
});
