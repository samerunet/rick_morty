const express = require("express");
const app = express();
const mongoose = require("mongoose");
const budget = require("./models/budget.js"); // import data
const budgetr = require("./models/budjetSchema.js"); // import schema
const methodOverride = require("method-override");

app.use(methodOverride("_m"));

app.use(express.urlencoded({ extended: true }));
// initialize the database

// budgetr.create(budget, (err, data) => {
// 	if (err) console.log(err.message);
// 	console.log("added data");
// });

app.get("/budget", (req, res) => {
	budgetr.find({}, (err, data) => {
		res.render("index.ejs", { budgets: data });
	});
});

app.get("/budget/new", (req, res) => {
	res.render("new.ejs");
});

app.get("/budget/:id/edit", (req, res) => {
	budgetr.findById(req.params.id, (err, foundBudget) => {
		res.render("edit.ejs", {
			fruit: foundBudget,
		});
	});
});

app.get("/budget/:id", (req, res) => {
	budgetr.findById(req.params.id, (err, budgetItem) => {
		res.render("show.ejs", { budgets: budgetItem });
	});
});

app.post("/budget", (req, res) => {
	budgetr.create(req.body, (error, createdItem) => {
		res.redirect("/budget");
	});
});
app.put("/budget/:id", (req, res) => {
	budgetr.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedModel) => {
			res.redirect("/budget");
		}
	);
});

app.delete("/budget/:id", (req, res) => {
	budgetr.findByIdAndRemove(req.params.id, (err, data) => {
		res.redirect("/budget");
	});
});

app.listen(3000, () => {
	console.log("listening on port 3000...");
});

mongoose.connect("mongodb://127.0.0.1/budget", () => {
	console.log("connecting to MongoDB...");
});
