<<<<<<< HEAD:unit_2/w04d05/homework/Mongo_Hamburgers_Hotels/hotels_app/models/hotel.js
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const hotelSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    location: String,
    rating: {type: Number, max: 5},
    vacancies: Boolean,
    tags: [String],
    rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ]

}, {timestamps: true})

const Hotel = mongoose.model("Hotels", hotelSchema)
module.exports = Hotel
=======
// DEPENDENCIES =============================================
const mongoose = require('mongoose');

// SCHEMA ===================================================
const hotelSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String },
  rating: { type: Number, max: 5 },
  vacancies: { type: Boolean },
  tags: [ { type: String } ],
  rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ]
}, { timestamps: true });

// EXPORTS ===================================================
module.exports = mongoose.model('Hotel', hotelSchema);
>>>>>>> 5a0fb543ed104858c33f87b3fc827c2151926501:unit_2/w04d05/hw_review/Mongo_Hamburgers_Hotels/hotels_app/models/hotel.js
