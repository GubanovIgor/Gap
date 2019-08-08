const express = require('express');
const router = express.Router();
const { Place } = require('../models/Place');

router.get('/', (req, res) => {
  res.render('index');
})

router.post('/places', async (req, res) => {
  // console.log(req.body);
  const height = req.body.heightSelect.split('-')
  console.log(height);
  const places = await Place.find({
    hair: req.body.hairSelect,
    height: { $gte: height[0], $lte: height[1] },
    // age: req.body.ageSelect,
  });
  console.log(places);
  res.json(places);
})

module.exports = router;
