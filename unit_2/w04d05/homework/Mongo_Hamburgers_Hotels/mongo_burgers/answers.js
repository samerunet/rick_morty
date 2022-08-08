// create 5 burgers (at least 3 should be beef)

// db.burger.insert({meat: "beef", cheese: true, toppings: ["ketchup", "onions"]})

//  db.burger.insert({ meat: "chicken", cheese: false, toppings: ["mushroom", "onions", "tomato"] })

//  db.burger.insert({meat: "beef", cheese: true, toppings: ["pickles", "onions", "butter", "tomato"]})

//  db.burger.insert({meat: "lamb", cheese: true, toppings: ["tomato", "onions", "bell pepper", "tzatziki"]})

//  db.burger.insert({meat: "beef", cheese: false, toppings: ["mayo", "pickles", "onions"]})

// find all the burgers
// > db.burger.find()
// { "_id" : ObjectId("62f094499d7c7814543c10dc"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("62f095129d7c7814543c10dd"), "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("62f096889d7c7814543c10de"), "meat" : "beef", "cheese" : true, "toppings" : [ "ketchup", "onions" ] }
// { "_id" : ObjectId("62f096909d7c7814543c10df"), "meat" : "chicken", "cheese" : false, "toppings" : [ "mushroom", "onions", "tomato" ] }
// { "_id" : ObjectId("62f096979d7c7814543c10e0"), "meat" : "beef", "cheese" : true, "toppings" : [ "pickles", "onions", "butter", "tomato" ] }
// { "_id" : ObjectId("62f0969d9d7c7814543c10e1"), "meat" : "lamb", "cheese" : true, "toppings" : [ "tomato", "onions", "bell pepper", "tzatziki" ] }
// { "_id" : ObjectId("62f096a69d7c7814543c10e2"), "meat" : "beef", "cheese" : false, "toppings" : [ "mayo", "pickles", "onions" ] }
// >
// show just the meat of each burger
// db.burger.find({}, {"meat":1})
// { "_id" : ObjectId("62f094499d7c7814543c10dc"), "meat" : "beef" }
// { "_id" : ObjectId("62f095129d7c7814543c10dd"), "meat" : "beef" }
// { "_id" : ObjectId("62f096889d7c7814543c10de"), "meat" : "beef" }
// { "_id" : ObjectId("62f096909d7c7814543c10df"), "meat" : "chicken" }
// { "_id" : ObjectId("62f096979d7c7814543c10e0"), "meat" : "beef" }
// { "_id" : ObjectId("62f0969d9d7c7814543c10e1"), "meat" : "lamb" }
// { "_id" : ObjectId("62f096a69d7c7814543c10e2"), "meat" : "beef" }
// >
// show just the toppings of each burger
// db.burger.find({}, {"toppings": 1})
// db.burger.find({}, {"toppings": 1})
// { "_id" : ObjectId("62f094499d7c7814543c10dc"), "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("62f095129d7c7814543c10dd"), "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "_id" : ObjectId("62f096889d7c7814543c10de"), "toppings" : [ "ketchup", "onions" ] }
// { "_id" : ObjectId("62f096909d7c7814543c10df"), "toppings" : [ "mushroom", "onions", "tomato" ] }
// { "_id" : ObjectId("62f096979d7c7814543c10e0"), "toppings" : [ "pickles", "onions", "butter", "tomato" ] }
// { "_id" : ObjectId("62f0969d9d7c7814543c10e1"), "toppings" : [ "tomato", "onions", "bell pepper", "tzatziki" ] }
// { "_id" : ObjectId("62f096a69d7c7814543c10e2"), "toppings" : [ "mayo", "pickles", "onions" ] }
// >
// show everything but the cheese
// > db.burger.find({}, {"toppings": 1, "meat":1}).pretty()
// {
//         "_id" : ObjectId("62f094499d7c7814543c10dc"),
//         "meat" : "beef",
//         "toppings" : [
//                 "ketchup",
//                 "onions",
//                 "pickles"
//         ]
// }
// {
//         "_id" : ObjectId("62f095129d7c7814543c10dd"),
//         "meat" : "beef",
//         "toppings" : [
//                 "ketchup",
//                 "onions",
//                 "pickles"
//         ]
// }
// {
//         "_id" : ObjectId("62f096889d7c7814543c10de"),
//         "meat" : "beef",
//         "toppings" : [
//                 "ketchup",
//                 "onions"
//         ]
// }
// {
//         "_id" : ObjectId("62f096909d7c7814543c10df"),
//         "meat" : "chicken",
//         "toppings" : [
//                 "mushroom",
//                 "onions",
//                 "tomato"
//         ]
// }
// {
//         "_id" : ObjectId("62f096979d7c7814543c10e0"),
//         "meat" : "beef",
//         "toppings" : [
//                 "pickles",
//                 "onions",
//                 "butter",
//                 "tomato"
//         ]
// }
// {
//         "_id" : ObjectId("62f0969d9d7c7814543c10e1"),
//         "meat" : "lamb",
//         "toppings" : [
//                 "tomato",
//                 "onions",
//                 "bell pepper",
//                 "tzatziki"
//         ]
// }
// {
//         "_id" : ObjectId("62f096a69d7c7814543c10e2"),
//         "meat" : "beef",
//         "toppings" : [
//                 "mayo",
//                 "pickles",
//                 "onions"
//         ]
// }
// find all the burgers with beef
// db.burger.find({meat: "beef"}).pretty()
// {
//         "_id" : ObjectId("62f094499d7c7814543c10dc"),
//         "meat" : "beef",
//         "cheese" : false,
//         "toppings" : [
//                 "ketchup",
//                 "onions",
//                 "pickles"
//         ]
// }
// {
//         "_id" : ObjectId("62f095129d7c7814543c10dd"),
//         "meat" : "beef",
//         "cheese" : false,
//         "toppings" : [
//                 "ketchup",
//                 "onions",
//                 "pickles"
//         ]
// }
// {
//         "_id" : ObjectId("62f096889d7c7814543c10de"),
//         "meat" : "beef",
//         "cheese" : true,
//         "toppings" : [
//                 "ketchup",
//                 "onions"
//         ]
// }
// {
//         "_id" : ObjectId("62f096979d7c7814543c10e0"),
//         "meat" : "beef",
//         "cheese" : true,
//         "toppings" : [
//                 "pickles",
//                 "onions",
//                 "butter",
//                 "tomato"
//         ]
// }
// {
//         "_id" : ObjectId("62f096a69d7c7814543c10e2"),
//         "meat" : "beef",
//         "cheese" : false,
//         "toppings" : [
//                 "mayo",
//                 "pickles",
//                 "onions"
//         ]
// }
// // find all the burgers that are not beef
// db.burger.find({meat: {$ne : "beef"}}).pretty()
// {
//         "_id" : ObjectId("62f096909d7c7814543c10df"),
//         "meat" : "chicken",
//         "cheese" : false,
//         "toppings" : [
//                 "mushroom",
//                 "onions",
//                 "tomato"
//         ]
// }
// {
//         "_id" : ObjectId("62f0969d9d7c7814543c10e1"),
//         "meat" : "lamb",
//         "cheese" : true,
//         "toppings" : [
//                 "tomato",
//                 "onions",
//                 "bell pepper",
//                 "tzatziki"
//         ]
// }

// find the first burger with cheese
// db.burger.findOne({cheese: true})
// {
//     "_id" : ObjectId("62f096889d7c7814543c10de"),
//     "meat" : "beef",
//     "cheese" : true,
//     "toppings" : [
//             "ketchup",
//             "onions"
//     ]
// }
// find one and update the first burger with cheese to have a property of 'double cheese'
// db.burger.findOneAndUpdate({cheese: true},{$set: {doub db.burger.findOneAndUpdate({cheese: true},{$set: {doubleCheese: true}},{upsert: true})
// {
//         "_id" : ObjectId("62f096889d7c7814543c10de"),
//         "meat" : "beef",
//         "cheese" : true,
//         "toppings" : [
//                 "ketchup",
//                 "onions"
//         ]
// }
// find the burger you updated to have double cheese
// db.burger.findOne({cheese: true})
// {
//         "_id" : ObjectId("62f096889d7c7814543c10de"),
//         "meat" : "beef",
//         "cheese" : true,
//         "toppings" : [
//                 "ketchup",
//                 "onions"
//         ],
//         "doubleCheese" : true
// }
// find and update all the beef burgers to be 'veggie'
// db.burger.updateMany({"meat": "beef"}, {$set:{"meat": "veggie"}})
// { "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 5 }
// >
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
// db.burger.deleteOne({"meat": "veggie"})
// { "acknowledged" : true, "deletedCount" : 1 }
// drop the collection
//Expected Output
//true
// db.burger.drop()
// drop the database


//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
// > db.dropDatabase()
// { "ok" : 1 }
// > 
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

//
// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
