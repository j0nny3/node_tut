var express = require('express');
var router = express.Router();
var app = require("../app.js");
var mongoose = require("mongoose");
require("../models/bestellungen.js");
var Bestellungen = mongoose.model("Bestellungen");
var liste;
/* GET home page. */
router.get('/', function(req, res, next) {
  Bestellungen.find({}, "gericht name preis", function(err, bestellungen) {
    if (err) return handleError(err);
    liste = bestellungen;
    console.log(bestellungen);
    res.render('index', {
      title: 'Express',
      liste: liste,
    });
  });
});
router.post("/users/add", function(req, res) {
  var instance = new Bestellungen({
    gericht: req.body.first_name,
    name: req.body.last_name,
    preis: req.body.email,
  });

  instance.save(function(err) {
    if (err) return handleError(err);
  });

});


module.exports = router;
