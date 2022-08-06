const express = require("express");
const app = express();
app.use(express.static("public"));
// const staff = require("./models/staff.js");

app.get("/Home/", (request, response) => {
	response.render("index.ejs");
});
// { staff: staff }

//tells express to try to match requests with files in the directory called 'public'

app.get("/history/", (request, response) => {
	response.render("history.ejs");
});

app.get("/pastwork/", (request, response) => {
	response.render("pastwork.ejs");
});

// app.get("/StaffPage/", (request, response) => {
// 	response.send("Staff Work");
// });

// app.get("/ContactPage/", (request, response) => {
// 	response.send("Contact Page");
// });

// app.get("/Links/", (request, response) => {
// 	response.send("Links Page");
// });

const port = 3000;

app.listen(port, () => {
	console.log("listening...", port);
});
