const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
	date: { type: String, required: true },
	miles: { type: String, required: true },
	gasPriceTotal: { type: String, required: true },
	gasGallons: { type: Number, required: true },
});

const dailyExpense = mongoose.model("DailyCost", modelSchema);

module.exports = dailyExpense;
