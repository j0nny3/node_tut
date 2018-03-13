var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BestellungenSchema = new Schema({
  gericht: String,
  name: String,
  preis: Number
});

var Bestellungen = mongoose.model("Bestellungen", BestellungenSchema);

module.exports = Bestellungen;
