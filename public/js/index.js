document.addEventListener('DOMContentLoaded', async () => {
    navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;
        var x = await getWeatherInfo(latitude, longitude);
        var name = x.name;
        document.getElementById("pos").innerText += " " + name;
        document.getElementById("current-icon").src = 'http://openweathermap.org/img/wn/' + x.weather[0].icon + '@2x.png';
        document.getElementById("current-temp").innerText = x.main.temp + "°C";
        document.getElementById("windSpeed").innerText = x.wind.speed + " km/h";
        document.getElementById("humidity").innerText = x.main.humidity + "%";
        x = await forecast(latitude, longitude);
        await forecastDisplay(x);
    })
    var response = await getCityInfo('Roma');
    document.getElementById(`Roma-temp`).innerText = Math.floor(response.main.temp) + "°C";
    document.getElementById(`Roma-icon`).src = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '@2x.png';

    response = await getCityInfo('Torino');
    document.getElementById(`Torino-temp`).innerText = Math.floor(response.main.temp) + "°C";
    document.getElementById(`Torino-icon`).src = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '@2x.png';

    response = await getCityInfo('Milano');
    document.getElementById(`Milano-temp`).innerText = Math.floor(response.main.temp) + "°C";
    document.getElementById(`Milano-icon`).src = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '@2x.png';
});

const forecastDisplay = async (data) => {
    var d = document.getElementById("forecast");
    var dim = data.cnt;
    var l = data.list;
    for (let i = 0; i < dim; i++) {
        var f = l[i];
        var w = f.weather[0];
        var date = new Date(f.dt_txt);
        d.innerHTML += `<div class="tempday col">
        <div>${date.getHours()}:00 </div>
        <div>${date.toLocaleString('it-it', { weekday: 'long' })}</div>
        <div>
            <img src="https://openweathermap.org/img/wn/${w.icon}.png" class = "weather-icon">
            <p>${Math.floor(f.main.temp)}°C</p>
        </div>
      </div>`
    }
};