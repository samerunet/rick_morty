const express = require("express");
const app = express();

const PORT = 3000;

// app.get("/calc/:num1/:num2", (request, response) => {
// 	let num1 = parseInt(request.params.num1);

// 	let num2 = parseInt(request.params.num2);
// 	let sum = num1 + num2;
// 	response.send(`The sum is ${sum}`);
// });

// app.get("/someroute", (req, res) => {
// 	console.log("req.query: ", req.query);
// 	res.send("someroute accessed");
// });

// app.get("/calcquery/:num1/:num2", (req, res) => {
// 	let num1 = parseInt(req.params.num1);

// 	let num2 = parseInt(req.params.num2);
// 	let sum = "";

// 	let operation = req.query["operation"];
// 	let noOp = res.send(`No operation was entered`);
// 	console.log(operation);

// 	// if (operation == "add") {
// 	// 	res.send(`the sum is ${sum}`);
// 	// }
// 	// if (operation == "") {
// 	switch (operation) {
// 		case "add":
// 			sum = +num1 + +num2;
// 			break;
// 		case "subtract":
// 			sum = -num1 - num2;
// 			break;
// 		case "multiply":
// 			sum = num1 * num2;
// 			break;
// 		case "divide":
// 			sum = num1 / num2;
// 			break;
// 		default:
// 			noOp;
// 	}

// 	res.send(`the sum is ${sum}`);
// });

app.listen(PORT, () => {
	console.log("app is running on port: ", PORT);
});
