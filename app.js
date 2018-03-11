var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


// View Engine, res.render("view name ohne dateiendung")
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Set Static Path, res.send "html-file-name ohne endung"
app.use(express.static(path.join(__dirname, 'public')));

var users = [{
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@gmail.com",
  },
  {
    id: 2,
    first_name: "Bob",
    last_name: "Smith",
    email: "bobsmith@gmail.com",
  }, {
    id: 3,
    first_name: "Jill",
    last_name: "Jackson",
    email: "jjackson@gmail.com",
  }
]


app.get("/", function(req, res) {
  res.render("index", {
    title: "Customers",
    users: users
  });
});

app.listen(3000, () => console.log("Server auf Port 3000 gestartet"));