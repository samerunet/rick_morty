const express = require("express");
const skills = require("./models/skills.js");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
	response.send("welcome to the home page");
});

app.get("/skills", (request, response) => {
	//	response.send(`${skills[0]}, ${skills[1]}, ${skills[2]}`);
	response.render("skills.ejs");
});

app.get("/skills/:indexOfSkillsArray", (request, response) => {
	response.send(
		`skill description: ${skills[request.params.indexOfSkillsArray]}`
	);
});

app.listen(3000, () => {
	console.log("listening on port 3000...");
});
