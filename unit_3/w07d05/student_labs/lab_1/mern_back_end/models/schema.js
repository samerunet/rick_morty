const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
	picture: String,
	year: String,
	make: String,
	model: String,
	miles: String,
	price: String,
	color: String,
	available: Boolean,
});

const Cars = mongoose.model("Cars", carSchema);

module.exports = Cars;
