const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
	name: String,
	breed: String,
	image: String,
	adopted: Boolean,
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
