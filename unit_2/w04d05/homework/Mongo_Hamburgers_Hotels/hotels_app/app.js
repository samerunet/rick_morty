// *******************************************//
// Everything provided to students in markdown start
// *******************************************//

// Dependencies
const mongoose = require("mongoose");
const db = mongoose.connection;

// Config
const mongoURI = "mongodb://localhost:27017/hotel";

// Models
const Hotel = require("./models/hotel.js");
const hotelSeed = require("./models/seed.js");

// Connect to Mongo
mongoose.connect(
	mongoURI,
	{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
	() => {
		console.log("The connection with mongod is established");
	}
);

// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })

// *******************************************//
// Everything provided to students end
// *******************************************//
