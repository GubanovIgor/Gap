const mongoose = require('mongoose');
const { Club } = require('./Club');

mongoose.connect('mongodb://localhost:27017/gap', { useNewUrlParser: true, useCreateIndex: true });

async function mainFunction() {
    const club = new Club({
      title: 'Unreal Place',
      address: 'Сусальный переулок 5с5А',
      coord: [55.759613, 37.664177],
      metro: ['Курская'],
      equipment: ['HTC', 'PS', 'Oculus', 'any'],
      price: 400,
      rate: 82,
      img: '/img/unreal.jpeg',
      site: 'https://www.unreal.place/?',
    });
    await club.save();

    const club1 = new Club({
      title: 'VR-US',
      address: 'проспект Вернадского, 6Вс7',
      coord: [55.692220, 37.533022],
      metro: ['Университет'],
      equipment: ['Fullbody', 'any'],
      price: 1000,
      rate: 79,
      img: '/img/vr-us.jpeg',
      site: 'https://vr-us.ru/',
    });
    await club1.save();

    const club2 = new Club({
      title: 'Another World',
      address: 'ул. Складочная 1, стр. 1',
      coord: [55.800448, 37.594584],
      metro: ['Савёловская'],
      equipment: ['Fullbody', 'any'],
      price: 1500,
      rate: 75,
      img: '/img/another.jpg',
      site: 'https://ru.another-world.com',
    });
    await club2.save();

    const club3 = new Club({
      title: 'Anvio',
      address: 'Рочдельская ул., 15, стр. 29',
      coord: [55.756123, 37.563655],
      metro: [''],
      equipment: ['Fullbody', 'any'],
      price: 1500,
      rate: 75,
      img: '/img/anvio.jpg',
      site: 'https://anvio.com',
    });
    await club3.save();

    const club4 = new Club({
      title: 'VR Imperia',
      address: '3-я улица Ямского Поля, 2к12',
      coord: [55.781398, 37.583499],
      metro: [''],
      equipment: ['HTC', 'PS', 'Oculus', 'any'],
      price: 1500,
      rate: 75,
      img: '/img/another.jpg',
      site: 'https://vr-imperia.ru',
    });
    await club4.save();

    const club5 = new Club({
      title: 'VR Port',
      address: 'переулок Сивцев Вражек, д.19',
      coord: [55.747297, 37.593731],
      metro: ['Савёловская'],
      equipment: ['HTC', 'PS', 'any'],
      price: 500,
      rate: 45,
      img: '/img/port.jpg',
      site: 'https://www.vrport.ru',
    });
    await club5.save();
}

mainFunction();
