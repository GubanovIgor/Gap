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

  const rateSelect = document.getElementById('rate-select').value
  const equipmentSelect = document.getElementById('equipment-select').value
  const priceSelect = document.getElementById('price-select').value

  const formData = {
    rateSelect,
    equipmentSelect,
    priceSelect,
  }

  const resp = await fetch('/clubs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await resp.json();

  for (let i = 0; i < data.length; i += 1) {
    console.log(data[i].site);

    newPlacemark = new ymaps.Placemark(data[i].coord, {
      content: 'Москва!',
      balloonContent: `<p><strong>Название:</strong> ${data[i].title}</p>
      <p><strong>Адрес:</strong> ${data[i].address}</p>
      <p><strong>Стоимость:</strong> ${data[i].price} ₽/30мин</p>
      <a href="${data[i].site}" alt="">веб-сайт</a>
      <div><img class="baloon-img" src=${data[i].img}></div>`,
    });

    myMap.geoObjects.add(newPlacemark);
  }
})

const popup = document.getElementById('pop-up');
const innerPopup = document.getElementById('inner-pop-up');

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('hidden');
  innerPopup.classList.remove('hidden');
})

popup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('hidden');
  innerPopup.classList.add('hidden');
})
