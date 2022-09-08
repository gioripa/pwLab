var map;
var marker;

document.addEventListener('DOMContentLoaded', async () => {
  navigator.geolocation.getCurrentPosition(async position => {
    const { latitude, longitude } = position.coords;

    await initMap(latitude, longitude);
    await showData(latitude, longitude);
  }, async () => {
    latitude = 45.464211;
    longitude = 9.191383;

    await initMap(latitude, longitude);
    await showData(latitude, longitude);
  });
});

async function showData(latitude, longitude) {
    var x = await getWeatherInfo(latitude, longitude);
    console.log(x);
}


function posizioneCorrente() {
  navigator.geolocation.getCurrentPosition(async position => {
    const { latitude, longitude } = position.coords;

    map.setView([latitude, longitude], 13);
    marker.setLatLng([latitude, longitude]);


    await showData(latitude, longitude);

  }, () => {
    alert("Posizione Attuale non disponibile");
  });
}

async function initMap(latitude, longitude) {

  map = L.map('map').setView([latitude, longitude], 13);

  var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  marker = L.marker([latitude, longitude]).addTo(map);

  map.on('click', async (ev) => {
    marker.setLatLng(ev.latlng);
    await showData(ev.latlng.lat, ev.latlng.lng);
  });
}