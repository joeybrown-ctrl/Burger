const express = require("express");

//Sets up port and Express
const PORT = process.env.PORT || 8080;
const app = express();

//Serves static content for the app "public" directory in the app directory
app.use(express.static("public"));

//Parses app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Pulls in routes and gives server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Starts server so that it can listen to client requests
app.listen(PORT, function () {
    //Logs message when server has started
    console.log("Server listening on: http://localhost:" + PORT);
});