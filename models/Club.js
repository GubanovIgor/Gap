const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  title: String,
  address: String,
  coord: [{ type: Number }],
  metro: [{ type: String }],
  equipment: [{ type: String }],
  rate: Number,
  price: Number,
  img: String,
  site: String,
})

const Club = mongoose.model('Club', clubSchema);

module.exports = { Club };