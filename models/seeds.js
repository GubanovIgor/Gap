const mongoose = require('mongoose');
const { Place } = require('./Place');

mongoose.connect('mongodb://localhost:27017/gap', { useNewUrlParser: true, useCreateIndex: true });

async function mainFunction() {
    const place = new Place({
      title: 'Ruby',
      coord: [55.706166, 37.585698],
      metro: ['Площадь Гагарина', 'Ленинский проспект'],
      height: 180,
      age: 21,
      hair: 'Blond',
      address: 'улица Вавилова, 8'
    });
    await place.save();

    const place1 = new Place({
      title: 'Ruby',
      coord: [55.692220, 37.533022],
      metro: ['Университет'],
      height: 180,
      age: 21,
      hair: 'Blond',
      address: 'проспект Вернадского, 6Вс7',
    });
    await place1.save();

    const place2 = new Place({
      title: 'Ruby',
      coord: [55.656612, 37.538581],
      metro: ['Калужская'],
      height: 180,
      age: 21,
      hair: 'Blond',
      address: 'Профсоюзная улица, 82к1',
    });
    await place2.save();
}

mainFunction();
