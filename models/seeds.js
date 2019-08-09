const mongoose = require('mongoose');
const { Club } = require('./Club');

mongoose.connect('mongodb://localhost:27017/gap', { useNewUrlParser: true, useCreateIndex: true });

async function mainFunction() {
    const club = new Club({
      title: 'SuperVR',
      address: 'улица Вавилова, 8',
      coord: [55.706166, 37.585698],
      metro: ['Площадь Гагарина', 'Ленинский проспект'],
      equipment: ['HTC', 'PS', 'Fullbody', 'Oculus', 'any'],
      price: 400,
      rate: 82,
      img: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj765PP1fXjAhWqwqYKHU8UAxwQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tripadvisor.ie%2FShowUserReviews-g293934-d13394275-r561572744-Phobia_VR-Baku_Absheron_Region.html&psig=AOvVaw2ufTnaD6z46186P5Y5PTVA&ust=1565435979439847',
    });
    await club.save();

    const club1 = new Club({
      title: 'Ruby',
      address: 'проспект Вернадского, 6Вс7',
      coord: [55.692220, 37.533022],
      metro: ['Университет'],
      equipment: ['HTC', 'PS', 'Fullbody', 'Oculus', 'any'],
      price: 600,
      rate: 21,
      img: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj765PP1fXjAhWqwqYKHU8UAxwQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tripadvisor.ie%2FShowUserReviews-g293934-d13394275-r561572744-Phobia_VR-Baku_Absheron_Region.html&psig=AOvVaw2ufTnaD6z46186P5Y5PTVA&ust=1565435979439847',
    });
    await club1.save();

    const club2 = new Club({
      title: 'Ruby',
      address: 'Профсоюзная улица, 82к1',
      coord: [55.656612, 37.538581],
      metro: ['Калужская'],
      equipment: ['HTC', 'PS', 'Fullbody', 'Oculus', 'any'],
      price: 1200,
      rate: 38,
      img: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj765PP1fXjAhWqwqYKHU8UAxwQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tripadvisor.ie%2FShowUserReviews-g293934-d13394275-r561572744-Phobia_VR-Baku_Absheron_Region.html&psig=AOvVaw2ufTnaD6z46186P5Y5PTVA&ust=1565435979439847',
    });
    await club2.save();
}

mainFunction();
