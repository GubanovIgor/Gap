const express = require('express');
const router = express.Router();
const { Club } = require('../models/Club');

router.get('/', (req, res) => {
  res.render('index');
})

router.post('/clubs', async (req, res) => {
  const rate = req.body.rateSelect.split('-')
  const price = req.body.priceSelect.split('-')
  const clubs = await Club.find({
    equipment: req.body.equipmentSelect,
    price: { $gte: price[0], $lte: price[1] },
    rate: { $gte: rate[0], $lte: rate[1] },
  });
  res.json(clubs);
})

module.exports = router;
