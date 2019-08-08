const express = require('express');
const router = express.Router();
const { Place } = require('../models/Place');

router.get('/', (req, res) => {
  res.render('index');
})

router.post('/places', async (req, res) => {
  // const places = await Place.find({});
  res.end();
})

module.exports = router;
