var expressValidator = require("express-validator");
const {
  body,
  check,
  validationResult
} = require('express-validator/check');
const {
  matchedData,
  sanitize
} = require('express-validator/filter');
var express = require('express');
var path = require('path');
var mongoose = require("mongoose");
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var mongoDB = "mongodb://127.0.0.1:27017/Beispiel"
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
app.db = db;
module.exports =
  app;
var index = require('./routes/index');




db.on("error", console.error.bind(console, "MongoDB connection Error"));









// var users = [{
//     id: 1,
//     first_name: "John",
//     last_name: "Doe",
//     email: "johndoe@gmail.com",
//   },
//   {
//     id: 2,
//     first_name: "Bob",
//     last_name: "Smith",
//     email: "bobsmith@gmail.com",
//   }, {
//     id: 3,
//     first_name: "Jill",
//     last_name: "Jackson",
//     email: "jjackson@gmail.com",
//   }
// ]
//
// app.set("userList", users);
// app.locals.userlist = users;



// View Engine, res.render("view name ohne dateiendung")
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// BodyParser Middleware
app.use(bodyParser.json());
//bodyParser, z.B. bei req.body."name aus ejs / z.Bsp. first_name"
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', index);

// Set Static Path, res.send "html-file-name ohne endung"
app.use(express.static(path.join(__dirname, 'public')));
