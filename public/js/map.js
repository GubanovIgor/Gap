ymaps.ready(init);
let myMap

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 1,
  });
}

document.addEventListener('change', async (e) => {
  e.preventDefault();
  myMap.geoObjects.removeAll();
  // const test = document.getElementById('test')
  // test.classList.add('test');

  const hairSelect = document.getElementById('hair-select').value
  const heightSelect = document.getElementById('height-select').value
  const ageSelect = document.getElementById('age-select').value

  const formData = {
    hairSelect,
    heightSelect,
    ageSelect,
  }

  const resp = await fetch('/places', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await resp.json();
  console.log(data);

  for (let i = 0; i < data.length; i += 1) {
    newPlacemark = new ymaps.Placemark(data[i].coord, {
      content: 'Москва!',
      balloonContent: 'Столица России',
    });
    myMap.geoObjects.add(newPlacemark);
  }

  console.log(myMap.geoObjects);

  // myPlacemark = new ymaps.Placemark([55.75, 37.64], {
  //   content: 'Москва!',
  //   balloonContent: 'Столица России',
  // });
  // myPlacemark1 = new ymaps.Placemark([55.70, 37.64], {
  //   content: 'Москва!',
  //   balloonContent: 'Столица России',
  // });
  // myPlacemark2 = new ymaps.Placemark([55.710394, 37.593774], {
  //   content: 'Москва!',
  //   balloonContent: 'место: Столица России',
  // });

  // myMap.geoObjects.add(myPlacemark);
  // myMap.geoObjects.add(myPlacemark1);
  // myMap.geoObjects.add(myPlacemark2);
})
