<<<<<<< HEAD:unit_2/w04d05/homework/Mongo_Hamburgers_Hotels/hotels_app/app.js
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
=======
// DEPENDENCIES ==================================
const mongoose = require('mongoose');

// CONFIGURATION ==================================
const mongoURI = 'mongodb://localhost:27017/hotel';
const db = mongoose.connection;

mongoose.Promise = global.Promise;
mongoose.connect ( mongoURI ,
  () => console.log( 'Mongo running at' , mongoURI )
);

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// MODELS =======================================
const Hotel = require('./models/hotel.js');
const hotelSeed = require('./models/seed.js');

// SEED =========================================
// Hotel.create( hotelSeed, ( err , data ) => {
//     if ( err ) console.log ( err.message )
//       console.log( "added provided hotel data" )
//     }
// );

// if seeded too many times
// Hotel.collection.drop();

// check hotel count
Hotel.count({} , (err , data)=> {
   if ( err ) console.log( err.message );
    console.log ( `There are ${data} hotels in this database` );
});

// CRUD OPERATIONS ================================
// Hotel.create({
//   name: 'The Tipton Hotel',
//   location: 'Boston',
//   rating: 5,
//   vacancies: false,
//   tags: ['no running in the lobby'],
//   rooms: [ {
//     roomNumber: 613,
//     size: "King",
//     price: 100,
//     booked: true
//   } ]
// }, (err, data) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// -- Find all hotels
// Hotel.find({}, (err, data) => {
//   console.log(data);
// })

// -- Find all hotels, display only the name
// Hotel.find({}, 'name', (err, data) => {
//   console.log(data);
// })

// -- Find our hotel
// Hotel.find({ name: 'The Tipton Hotel'}, (err, data) => {
//   console.log(data);
// })

// -- Find hotels with vacancies, exclude ratings
// Hotel.find({ vacancies: true }, { rating: 0 }, (err, data) => {
//   console.log(data);
// })

// - Delete Hotelicopter
// Hotel.deleteOne( {name: 'Hotelicopter'}, (err, data) => {
//   console.log(data);
// })

// -- Hilbert's Hotel
// Hotel.remove( {name: "Hilbert's Hotel"}, (err, data) => {
//   console.log();
// });

// -- Delete hotel in Colorado Rockies
// Hotel.findOneAndRemove( {location: "Colorado Rockies"}, (err, data) => {
//   console.log(data);
// })

// -- Update The Great Northern's rating to 5
// Hotel.update( {name: 'The Great Northern'},
// { $set: { rating: 5} },
// (err, data) => {
//   console.log(data);
// });

// Hotel.find({name: 'The Great Northern'}, (err, data) => {
//   console.log(data);
// })

// -- Update Motel Bambi's vacancies to false
Hotel.findOneAndUpdate({ name: 'Motel Bambi'},
  { $set: {vacancies: false} },
  (err, data) => {
    console.log(data);
  }
)
>>>>>>> 5a0fb543ed104858c33f87b3fc827c2151926501:unit_2/w04d05/hw_review/Mongo_Hamburgers_Hotels/hotels_app/app.js
