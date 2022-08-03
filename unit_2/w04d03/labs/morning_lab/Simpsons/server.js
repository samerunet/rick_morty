const express = require("express");
const app = express();

app.listen(3000, () => {
	console.log("listening on port 3000...");
});

app.get("/Homer/", (request, response) => {
	response.send(`<html>
    <body
    ><h1>This page is Homer</h1>
   <li>
    <a href="/Marge/">marge page
    </a>
   </li> 
   <li>
   <a href="/Bart/">Bart page
   </a>
  </li> 
  <li>
  <a href="/Lisa/">Lisa page
  </a>
 </li> 
 <li>
 <a href="/Maggie/"> page
 </a>
</li> 
    </body>
    </html>`);
});

app.get("/Marge/", (request, response) => {
	response.send("Marge");
});

app.get("/Bart/", (request, response) => {
	response.send("Bart");
});

app.get("/Lisa/", (request, response) => {
	response.send("Lisa");
});

app.get("/Maggie/", (request, response) => {
	response.send("Maggie");
});

app.get("/Snowball_II/", (request, response) => {
	response.send("Snowball  II");
});

app.get("/Santas_Little_Helper/", (request, response) => {
	response.send("Santa's Little Helper");
});
