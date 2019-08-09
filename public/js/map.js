ymaps.ready(init);
let myMap

function init() {
  myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 9,
  });
}

document.addEventListener('change', async (e) => {
  e.preventDefault();
  myMap.geoObjects.removeAll();
  // const test = document.getElementById('test')
  // test.classList.add('test');

  const rateSelect = document.getElementById('rate-select').value
  const equipmentSelect = document.getElementById('equipment-select').value
  const priceSelect = document.getElementById('price-select').value

  const formData = {
    rateSelect,
    equipmentSelect,
    priceSelect,
  }

  console.log(formData);

  const resp = await fetch('/clubs', {
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
      balloonContent: `<p>Адрес: ${data[i].address}</p>` +
        `<p>Стоимость: ${data[i].price} р/30мин</p>` +
        `<img src=${data[i].img}>`,
    });

    myMap.geoObjects.add(newPlacemark);
  }

  console.log(myMap.geoObjects);
})
