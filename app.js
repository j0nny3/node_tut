var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
/*
var logger = function(req, res, next) {
    console.log("Logging...");
    next();
}
app.use(logger);
*/
// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

var people = [{
    name: 'Jeff',
    age: 30
}]


app.get("/", (req, res) => res.send("Hello World "))

app.listen(80, () => console.log("Server auf Port 80 gestartet"));