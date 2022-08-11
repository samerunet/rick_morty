const express = require("express"); // import
const app = express();

const mongoose = require("mongoose");
const methodOverride = require("method-override");

const model = require("./models/model.js"); // import data
const dailyExpense = require("./models/modelSchema.js"); // import Schema
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/cost", (req, res) => {
	dailyExpense.find({}, (err, data) => {
		res.render("index.ejs", { costs: data });
	});
});

app.get("/cost/new", (req, res) => {
	res.render("new.ejs");
});

app.get("/cost/:id/edit", (req, res) => {
	dailyExpense.findById(req.params.id, (err, foundExpense) => {
		res.render("edit.ejs", {
			costs: foundExpense,
		});
	});
});

app.get("/cost/:id", (req, res) => {
	dailyExpense.findById(req.params.id, (err, expenseItem) => {
		res.render("show.ejs", { cucumber: expenseItem });
	});
});

app.post("/cost", (req, res) => {
	dailyExpense.create(req.body, (error, createdItem) => {
		res.redirect("/cost");
	});
});
app.put("/cost/:id", (req, res) => {
	dailyExpense.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedModel) => {
			res.redirect("/cost");
		}
	);
});

app.delete("/cost/:id", (req, res) => {
	dailyExpense.findByIdAndRemove(req.params.id, (err, data) => {
		res.redirect("/cost");
	});
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

mongoose.connect("mongodb://127.0.0.1/model", () => {
	console.log("connecting to MongoDB.......");
});
