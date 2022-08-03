const express = require("express");
const app = express();

app.get("/", (request, response) => {
	response.send("welcome to the home page");
});

const skills = ["html", "css", "js"];
app.get("/skills", (request, response) => {
	response.send(`${skills[0]}, ${skills[1]}, ${skills[2]}`);
});

app.get("/skills/:indexOfSkillsArray", (request, response) => {
	response.send(
		`skill description: ${skills[request.params.indexOfSkillsArray]}`
	);
});

app.listen(3000, () => {
	console.log("listening on port 3000...");
});
