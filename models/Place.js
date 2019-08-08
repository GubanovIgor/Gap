const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  title: String,
  coord: [{ type: Number }],
  metro: [{ type: String }],
  height: Number,
  age: Number,
  hair: String,
  address: String,
})

const Place = mongoose.model('Place', placeSchema);

module.exports = { Place };